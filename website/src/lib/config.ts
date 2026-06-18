export const siteConfig = {
  name: 'Prompt Empir',
  title: 'Professional AI Prompt Library',
  description: 'Curated prompts for developers, designers, creators, businesses, and AI enthusiasts.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prompt-empir.vercel.app',
  githubUrl: 'https://github.com/gavuvapro/prompt-empire',
  supportLinks: [
    { label: 'GitHub Repository', href: 'https://github.com/gavuvapro/prompt-empire' },
    { label: 'Issues', href: 'https://github.com/gavuvapro/prompt-empire/issues' },
    { label: 'Pull Requests', href: 'https://github.com/gavuvapro/prompt-empire/pulls' }
  ],
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
} as const
