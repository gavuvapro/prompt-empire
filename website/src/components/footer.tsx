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
          <h3 className="text-sm font-semibold">Repository</h3>
          <p className="mt-2 text-sm text-muted-foreground">Browse source code, report issues, and submit prompt contributions.</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {siteConfig.supportLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
