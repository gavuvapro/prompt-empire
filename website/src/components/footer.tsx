import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-semibold">{siteConfig.name}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.description}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Project</h3>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link href="/prompts">Browse Prompts</Link>
            <Link href="/docs">Documentation</Link>
            <Link href="/contribute">Contribute</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Support Prompt Empir</h3>
          <p className="mt-2 text-sm text-muted-foreground">If this repository helps you, consider supporting its development.</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href={siteConfig.donation.githubSponsors}>Sponsors</Link>
            <Link href={siteConfig.donation.buyMeACoffee}>Buy Me a Coffee</Link>
            <Link href={siteConfig.donation.kofi}>Ko-fi</Link>
            <Link href={siteConfig.donation.paypal}>PayPal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
