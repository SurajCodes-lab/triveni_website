// src/utilis/contact.js
//
// The two contact constants, on their own.
//
// These lived at the very bottom of utilis/data.js — a 100 KB module that opens
// with a block of icon imports and holds ~2,900 lines of page data. Twenty-two
// client components imported this file purely to read `phoneNumber`, a single
// string, and in doing so pulled the whole module into the browser bundle.
//
// Nothing else in data.js is exported, so the data itself can be tree-shaken —
// but the top-level icon imports are side-effectful and are retained regardless.
//
// Keeping the constants here means a component that needs a phone number gets a
// phone number.

export const phoneNumber = "7668570551";
export const emailAddress = "cabstriveni@gmail.com";
