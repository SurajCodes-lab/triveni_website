// /maharaja-tempo-traveller/[route] — Maharaja Tempo Traveller city + route
// landing pages. Sourced from the Triveni Cabs SEO Expansion Proposal (15
// cities × Maharaja Tempo Traveller keyword cluster + Delhi-to-X and all
// origin→destination routes). Built by the shared vehicleCityRoutePage
// factory — no duplication with the force-urbania / tempo implementations.

import { makeVehicleRoutePage } from '@/lib/seo/vehicleCityRoutePage';

export const revalidate = 3600;
export const dynamicParams = false;

const { generateStaticParams, generateMetadata, default: Page } = makeVehicleRoutePage('maharaja-tempo-traveller');

export { generateStaticParams, generateMetadata, Page as default };