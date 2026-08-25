// /force-urbania/[route] — Force Urbania city + route landing pages.
// Sourced from the Triveni Cabs SEO Expansion Proposal (15 cities × Force
// Urbania keyword cluster + Delhi-to-X and all origin→destination routes).
// Built by the shared vehicleCityRoutePage factory — no 1070-line duplication.

import { makeVehicleRoutePage } from '@/lib/seo/vehicleCityRoutePage';

export const revalidate = 3600;
export const dynamicParams = false;

const { generateStaticParams, generateMetadata, default: Page } = makeVehicleRoutePage('force-urbania');

export { generateStaticParams, generateMetadata, Page as default };