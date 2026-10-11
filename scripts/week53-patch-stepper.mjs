/**
 * One-off: make the corridor page's route stepper use the hrefs resolved on the
 * server, instead of synthesising `/${stop}` and linking three waypoint towns
 * at pages that were never built.
 */
import { readFile, writeFile } from "node:fs/promises";

const FILE = "src/app/(routes)/[cityName]/RouteClientContent.js";
let s = await readFile(FILE, "utf8");

const marker = "{/* stop cards (links preserved) */}";
const start = s.indexOf(marker);
if (start === -1) {
  console.log("marker not found — already patched?");
  process.exit(0);
}

// The block runs from the marker to the close of the stops wrapper div.
const tail = s.slice(start);
const endRel = tail.indexOf("</div>", tail.indexOf("))}"));
const end = start + endRel + "</div>".length;

const replacement = `{/* Stop cards. Each href is resolved on the server and handed
                          down as stopLinks, because this is a client component
                          and the build manifest never reaches the browser. A
                          stop with no page of its own — the waypoint towns on
                          the Dehradun and Haridwar corridors — is still shown,
                          as a card rather than a link: the halt is useful
                          information about the route, and it was previously a
                          link to a 404. */}
                      <div className="space-y-3">
                        {(stopLinks?.length ? stopLinks : (route.popularStops || []).map((s) => ({ name: s, href: null }))).map(({ name, href }) => {
                          const card = "ml-4 flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm";
                          return (
                            <div key={name} className="relative flex items-center">
                              <span className="absolute -left-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-amber-400 bg-white" aria-hidden="true" />
                              {href ? (
                                <Link href={href} className={\`\${card} transition-all hover:border-amber-300 hover:text-amber-700 hover:shadow-md\`}>
                                  {name}
                                  <ArrowRight className="h-4 w-4 text-amber-500 shrink-0" />
                                </Link>
                              ) : (
                                <span className={card}>{name}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>`;

s = s.slice(0, start) + replacement + s.slice(end);
await writeFile(FILE, s, "utf8");
console.log("stepper patched");
