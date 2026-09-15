import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://azino777-6casino.vercel.app/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
