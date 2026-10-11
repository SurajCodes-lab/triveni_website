// All canonical built pages, grouped by their actual page family.
import { machineDirectory } from '@/lib/seo/site-directory';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const body = `# Triveni Cabs™ — Full Index\n\nPublished pages grouped by purpose. Phone +91 7668570551.\n\n${machineDirectory()}\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
