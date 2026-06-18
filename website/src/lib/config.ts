export const siteConfig = {
  name: 'Prompt Empir',
  title: 'Professional AI Prompt Library',
  description: 'Curated prompts for developers, designers, creators, businesses, and AI enthusiasts.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prompt-empir.vercel.app',
  githubUrl: 'https://github.com/your-org/prompt-empir',
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  donation: {
    githubSponsors: 'https://github.com/sponsors/your-username',
    buyMeACoffee: 'https://www.buymeacoffee.com/your-username',
    kofi: 'https://ko-fi.com/your-username',
    paypal: 'https://paypal.me/your-username'
  }
} as const
