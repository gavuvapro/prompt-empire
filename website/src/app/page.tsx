import Link from 'next/link'
import { ArrowRight, Github, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PromptExplorer } from '@/components/prompt-explorer'
import { getPromptIndex, getStats } from '@/lib/prompts'
import { siteConfig } from '@/lib/config'

export default function HomePage() {
  const index = getPromptIndex()
  const stats = getStats()
  return (
    <div>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.14),transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="h-4 w-4 text-blue-500" /> Open-source prompt workflows for serious work
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">Professional AI Prompt Library</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Curated prompts for developers, designers, creators, businesses, and AI enthusiasts.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/prompts">Browse Prompts <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={siteConfig.githubUrl}><Github className="mr-2 h-4 w-4" /> Contribute on GitHub</Link>
              </Button>
            </div>
          </div>
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border bg-card p-6 shadow-sm"><dt className="text-sm text-muted-foreground">Total prompts</dt><dd className="mt-2 text-3xl font-bold">{stats.totalPrompts}</dd></div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm"><dt className="text-sm text-muted-foreground">Categories</dt><dd className="mt-2 text-3xl font-bold">{stats.categories}</dd></div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm"><dt className="text-sm text-muted-foreground">Contributors</dt><dd className="mt-2 text-3xl font-bold">{stats.contributors}+</dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Browse the library</h2>
            <p className="mt-2 text-muted-foreground">Search, filter by category, and filter by AI platform instantly.</p>
          </div>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Search className="h-4 w-4" /> Fuse.js search</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Sanitized Markdown</span>
          </div>
        </div>
        <PromptExplorer prompts={index.prompts.slice(0, 24)} categories={index.categories} models={index.models} showViewAll />
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">Contribute to Prompt Empir</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Use the live repository to review prompts, report issues, and submit pull requests.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteConfig.supportLinks.map((link) => (
              <Button key={link.href} asChild variant="outline"><Link href={link.href}>{link.label}</Link></Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
