/**
 * Canonical Person entities for E-E-A-T author bylines.
 *
 * AEO/GEO standards (May 2026): every Article/BlogPosting must cite a Person
 * author with `@id`, `sameAs`, role, and `worksFor` graph link. AI engines
 * use author identity + credentials as a credibility proxy when ranking
 * citations. Princeton GEO study: expert quotes lift citation share +41%.
 *
 * Callers can pass either:
 *  - a string key from EDITORIAL_TEAM (e.g. 'founder', 'editorial')
 *  - a full Person object (for one-off named guest authors)
 *
 * The Person `@id` is graph-stable so it can be referenced from multiple
 * articles without duplication.
 */

import { BASE_URL, COMPANY_INFO } from './constants';

export const EDITORIAL_TEAM = {
  founder: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person-pankaj-singh-gaur`,
    name: 'Pankaj Singh Gaur',
    givenName: 'Pankaj',
    familyName: 'Singh Gaur',
    jobTitle: 'Founder & CEO, Triveni Cabs',
    worksFor: { '@id': `${BASE_URL}/#organization` },
    description:
      'Founded Triveni Cabs in 2015. 15+ years operating outstation taxi services and tour logistics across North India. Personally vets every guide and driver in the fleet. Based in Agra.',
    url: `${BASE_URL}/about`,
    knowsAbout: [
      'Outstation taxi operations',
      'Agra tourism',
      'Delhi NCR transport',
      'Wedding car logistics',
      'Char Dham Yatra logistics',
      'Tempo Traveller hire',
    ],
  },

  editorial: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person-editorial-team`,
    name: 'Triveni Cabs Editorial Team',
    jobTitle: 'Travel Editors',
    worksFor: { '@id': `${BASE_URL}/#organization` },
    description:
      'In-house team of travel writers and operations staff with 5–15 years of combined experience across North India travel logistics. All trip-cost data is verified against current fleet pricing weekly. All landmark, fare, and route claims cross-checked with our on-ground drivers.',
    url: `${BASE_URL}/about`,
  },

  operations: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person-operations-desk`,
    name: 'Triveni Cabs Operations Desk',
    jobTitle: 'Booking & Operations',
    worksFor: { '@id': `${BASE_URL}/#organization` },
    description:
      'Booking and dispatch team handling all live trip coordination. Author of contact, booking, and how-to-book content. 24×7 customer support since 2015.',
    url: `${BASE_URL}/contact`,
  },
};

export const DEFAULT_AUTHOR = EDITORIAL_TEAM.editorial;
export const FOUNDER_AUTHOR = EDITORIAL_TEAM.founder;
export const OPERATIONS_AUTHOR = EDITORIAL_TEAM.operations;

/**
 * Resolve a value into a Person object suitable for schema.org `author`.
 *
 * Accepts:
 *  - undefined / null → defaults to editorial team
 *  - string key ('founder' | 'editorial' | 'operations')
 *  - existing Person object → pass through
 *  - legacy string name → wrapped into a minimal Person shape so the schema
 *    is structurally valid even when the caller hasn't been migrated yet
 */
export function resolveAuthor(value) {
  if (!value) return DEFAULT_AUTHOR;
  if (typeof value === 'string') {
    if (EDITORIAL_TEAM[value]) return EDITORIAL_TEAM[value];
    return {
      '@type': 'Person',
      name: value,
      worksFor: { '@id': `${BASE_URL}/#organization` },
    };
  }
  if (typeof value === 'object' && value['@type']) return value;
  return DEFAULT_AUTHOR;
}

/**
 * Return the full editorial roster as a Person[] array — used by /about and
 * /trust pages to render an @graph of named team entities.
 */
export function getAllEditorialPersons() {
  return Object.values(EDITORIAL_TEAM);
}
