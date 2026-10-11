import Image from 'next/image';
import { getCityGallery } from '@/utilis/imageUtils';

// Captions identify the destination only: a city photograph is not evidence
// that a particular monument, terminal or pickup point is pictured.
export default function DestinationPhotos({ city, images, title }) {
  const photos = [...new Set(images || getCityGallery(city))].slice(0, 4);
  if (!city || photos.length < 2) return null;
  return <section className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="mb-5 text-2xl font-bold">{title || `What does ${city} look like?`}</h2>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{photos.map((src, i) => <figure key={src}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={src} alt={`${city} destination photograph ${i + 1}`} fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" /></div>
      <figcaption className="mt-2 text-sm">{city}</figcaption>
    </figure>)}</div>
  </section>;
}
