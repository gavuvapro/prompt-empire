import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

const nav = [
  { href: '/prompts', label: 'Prompts' },
  { href: '/docs', label: 'Docs' },
  { href: '/contribute', label: 'Contribute' }
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg">
          <Image src="/logo.svg" alt="Prompt Empir" width={32} height={32} priority />
          <span className="font-semibold">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => <Link key={item.href} href={item.href} className="focus-ring rounded-lg text-sm text-muted-foreground hover:text-foreground">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href={siteConfig.githubUrl}><Github className="mr-2 h-4 w-4" /> GitHub</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
