'use client';

// Gives every table on the page the labels its restacked form needs.
//
// Below 640px the stylesheet turns each table row into a card and prints each
// cell's column name from `data-label`. Components we own can set that attribute
// in their JSX, but 224 of this site's tables are written as HTML strings inside
// the blog and guide data files, and those were never going to acquire an
// attribute by hand.
//
// So the labels are derived at runtime from the thing that already states them:
// the table's own header row. A cell in column three gets the third header's
// text. Nothing is invented — if a table has no thead, or the header count does
// not match the row, the cell is left alone and simply restacks without a label,
// which is still better than a sideways scroll.
//
// This runs after paint and only touches attributes, so it cannot shift layout
// on desktop and cannot block rendering. It re-runs on navigation because the
// App Router swaps page content without remounting the layout.

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function labelTables(root) {
  const tables = root.querySelectorAll('table:not([data-rt-labelled])');

  for (const table of tables) {
    table.setAttribute('data-rt-labelled', '');

    // Prefer the last header row: a table with a grouped header ("Fares" over
    // "Sedan | SUV") states the real column names on the lower row.
    const headRows = table.tHead ? [...table.tHead.rows] : [];
    let headRow = headRows.length ? headRows[headRows.length - 1] : null;

    // A few tables — mostly hand-written ones in the guide data — put their
    // header in the first <tr> without wrapping it in <thead>. If that row is
    // made entirely of <th>, it is a header row in everything but name, so
    // treat it as one. Requiring all-<th> is what keeps this from mistaking an
    // ordinary first data row for a header.
    if (!headRow && table.rows.length > 1) {
      const first = table.rows[0];
      const cells = [...first.cells];
      if (cells.length > 1 && cells.every((c) => c.tagName === 'TH')) {
        headRow = first;
        // Mark it so the stylesheet can hide it the way it hides a real thead;
        // otherwise its labels would appear twice, once as a row and once per
        // cell.
        first.setAttribute('data-rt-headrow', '');
      }
    }
    if (!headRow) continue;

    const headings = [...headRow.cells].map((c) =>
      (c.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40),
    );
    if (!headings.some(Boolean)) continue;

    for (const body of table.tBodies.length ? [...table.tBodies] : [table]) {
      for (const row of body.rows) {
        if (row === headRow) continue;
        const cells = [...row.cells];
        // A row with a different cell count than the header is a spanning or
        // sub-heading row. Guessing which header each cell belongs to would put
        // the wrong label next to a number, so leave it untouched.
        if (cells.length !== headings.length) continue;

        cells.forEach((cell, i) => {
          if (cell.hasAttribute('data-label')) return;
          // The first cell becomes the card's title and carries no label.
          if (i === 0) return;
          const label = headings[i];
          if (label) cell.setAttribute('data-label', label);
        });
      }
    }
  }
}

// How long to keep watching for tables that mount after first paint, and the
// idle budget a re-scan is allowed to wait for. Blog bodies and a few fare
// panels do arrive late; nothing on this site adds a table ten seconds in.
const WATCH_MS = 10000;
const IDLE_TIMEOUT_MS = 500;

const onIdle =
  typeof window !== 'undefined' && window.requestIdleCallback
    ? (fn) => window.requestIdleCallback(fn, { timeout: IDLE_TIMEOUT_MS })
    : (fn) => window.setTimeout(fn, 1);
const cancelIdle =
  typeof window !== 'undefined' && window.cancelIdleCallback
    ? (id) => window.cancelIdleCallback(id)
    : (id) => window.clearTimeout(id);

export default function ResponsiveTables() {
  const pathname = usePathname();

  useEffect(() => {
    // -----------------------------------------------------------------------
    // WHY THIS IS SCHEDULED THE WAY IT IS
    // -----------------------------------------------------------------------
    // The first version ran the scan in requestAnimationFrame and kept a
    // subtree MutationObserver attached to document.body for the life of the
    // page, re-scheduling a full-document labelTables(document) on every
    // mutation batch that added a node.
    //
    // That put a whole-document querySelectorAll directly in the interaction
    // path. Any interaction that adds a node — opening an accordion, a "show
    // all routes" toggle, a tab, a lazy image — fired the observer, which
    // scheduled the scan in the very next animation frame, which is the frame
    // the browser needs to paint the response to that interaction.
    //
    // Google's field data for this property reports INP over 200 ms on 2,618
    // mobile URLs while LCP passes outright, and a lab measurement put total
    // blocking time between 1,320 and 3,057 ms on every page family. This
    // component is not the whole of that, but a full-document scan scheduled in
    // the response frame of every interaction is exactly the shape of thing INP
    // measures, and it is ours.
    //
    // Three changes. The scan runs on idle rather than before the next paint,
    // so it yields to anything the user is doing. Mutation batches are
    // coalesced into one pending scan instead of cancelling and re-queueing.
    // And the observer disconnects after WATCH_MS, because the late-mounting
    // tables it exists for arrive within a second or two and nothing justifies
    // watching the whole document indefinitely.
    let pending = null;
    let stopped = false;

    const schedule = () => {
      if (stopped || pending !== null) return; // coalesce, do not re-queue
      pending = onIdle(() => {
        pending = null;
        labelTables(document);
      });
    };

    schedule();

    const observer = new MutationObserver((records) => {
      if (records.some((r) => r.addedNodes.length)) schedule();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Stop watching once the page has settled. A final scan catches anything
    // that landed in the last moment before the observer went away.
    const stopWatching = window.setTimeout(() => {
      observer.disconnect();
      schedule();
    }, WATCH_MS);

    return () => {
      stopped = true;
      window.clearTimeout(stopWatching);
      if (pending !== null) cancelIdle(pending);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
