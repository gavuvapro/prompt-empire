import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { getAllPrompts } from '@/lib/prompts'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/prompts', '/docs', '/contribute'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }))

  const promptRoutes = getAllPrompts().map((prompt) => ({
    url: `${siteConfig.url}/prompts/${prompt.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  return [...staticRoutes, ...promptRoutes]
}
