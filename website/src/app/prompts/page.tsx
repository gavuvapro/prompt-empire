import type { Metadata } from 'next'
import { PromptExplorer } from '@/components/prompt-explorer'
import { getPromptIndex } from '@/lib/prompts'

export const metadata: Metadata = {
  title: 'Browse Prompts',
  description: 'Search and filter professional AI prompts by category and AI model.'
}

export default function PromptsPage() {
  const index = getPromptIndex()
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Browse prompts</h1>
        <p className="mt-3 text-muted-foreground">Full-text search with category and AI model filters.</p>
      </div>
      <PromptExplorer prompts={index.prompts} categories={index.categories} models={index.models} />
    </div>
  )
}
