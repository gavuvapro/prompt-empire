'use client'

import Fuse from 'fuse.js'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { PromptItem } from '@/lib/types'
import { titleCase } from '@/lib/utils'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

type Props = {
  prompts: PromptItem[]
  categories: string[]
  models: string[]
  showViewAll?: boolean
}

function categoryCount(prompts: PromptItem[], category: string) {
  return prompts.filter((prompt) => prompt.category === category).length
}

function subcategoriesFor(prompts: PromptItem[], category: string) {
  return Array.from(new Set(prompts.filter((prompt) => prompt.category === category).map((prompt) => prompt.subcategory).filter(Boolean) as string[])).sort()
}

export function PromptExplorer({ prompts, categories, models, showViewAll }: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [model, setModel] = useState('all')

  const fuse = useMemo(() => new Fuse(prompts, {
    keys: ['title', 'description', 'category', 'subcategory', 'models', 'tags', 'prompt'],
    threshold: 0.35,
    ignoreLocation: true
  }), [prompts])

  const results = useMemo(() => {
    const base = query.trim() ? fuse.search(query.trim()).map((result) => result.item) : prompts
    return base.filter((prompt) => {
      const categoryMatch = category === 'all' || prompt.category === category
      const modelMatch = model === 'all' || prompt.models.includes(model)
      return categoryMatch && modelMatch
    })
  }, [query, category, model, fuse, prompts])

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-3xl border bg-card p-4 lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-semibold">Filters</h2>
        <label className="mt-4 block text-sm font-medium" htmlFor="category">Category</label>
        <select id="category" className="focus-ring mt-2 w-full rounded-xl border bg-background px-3 py-2" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="all">All categories</option>
          {categories.map((item) => <option key={item} value={item}>{titleCase(item)}</option>)}
        </select>
        <label className="mt-4 block text-sm font-medium" htmlFor="model">AI model</label>
        <select id="model" className="focus-ring mt-2 w-full rounded-xl border bg-background px-3 py-2" value={model} onChange={(event) => setModel(event.target.value)}>
          <option value="all">All models</option>
          {models.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <div className="mt-5 text-sm text-muted-foreground">{results.length} result{results.length === 1 ? '' : 's'}</div>

        <div className="mt-6 border-t pt-4">
          <h3 className="text-sm font-semibold">Categories</h3>
          <div className="mt-3 space-y-2">
            {categories.map((item) => (
              <details key={item} className="group rounded-xl border bg-background/60 px-3 py-2" open={item === category}>
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-lg text-sm font-medium">
                  <button type="button" className="text-left hover:text-blue-600" onClick={() => setCategory(item)}>{titleCase(item)}</button>
                  <span className="text-xs text-muted-foreground">{categoryCount(prompts, item)}</span>
                </summary>
                <div className="mt-2 grid gap-1 pl-2 text-xs text-muted-foreground">
                  {subcategoriesFor(prompts, item).slice(0, 8).map((sub) => <span key={sub}>• {titleCase(sub)}</span>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <div className="relative mb-5">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            className="focus-ring h-12 w-full rounded-2xl border bg-background pl-12 pr-4 text-base shadow-sm"
            placeholder="Search prompts, categories, models, or tags..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((prompt) => (
            <Link key={prompt.id} href={`/prompts/${prompt.slug}`} className="focus-ring group rounded-3xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{titleCase(prompt.category)}</Badge>
                {prompt.subcategory ? <Badge variant="outline">{titleCase(prompt.subcategory)}</Badge> : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">{prompt.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{prompt.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {prompt.models.slice(0, 3).map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                {prompt.models.length > 3 ? <Badge variant="outline">+{prompt.models.length - 3}</Badge> : null}
              </div>
            </Link>
          ))}
        </div>
        {results.length === 0 ? <div className="rounded-3xl border border-dashed p-10 text-center text-muted-foreground">No prompts found. Try a different search or filter.</div> : null}
        {showViewAll ? <div className="mt-8 text-center"><Button asChild variant="outline"><Link href="/prompts">View all prompts</Link></Button></div> : null}
      </div>
    </div>
  )
}
