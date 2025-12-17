import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://roof.community';
  const pages = ['', '/about', '/rooftop', '/rooftop/feed', '/contact', '/join'];
  const lastModified = new Date();
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified
  }));
}
