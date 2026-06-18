import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CopyButton } from '@/components/copy-button'
import { PromptMarkdown } from '@/components/prompt-markdown'
import { getAllPrompts, getPromptBySlug } from '@/lib/prompts'
import { siteConfig } from '@/lib/config'
import { titleCase } from '@/lib/utils'

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export function generateStaticParams() {
  return getAllPrompts().map((prompt) => ({ slug: prompt.slug.split('/') }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const prompt = getPromptBySlug(slug.join('/'))
  if (!prompt) return {}
  return {
    title: prompt.title,
    description: prompt.description,
    openGraph: { title: prompt.title, description: prompt.description }
  }
}

export default async function PromptPage({ params }: PageProps) {
  const { slug } = await params
  const prompt = getPromptBySlug(slug.join('/'))
  if (!prompt) notFound()

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <Button asChild variant="ghost" className="mb-6 -ml-3">
        <Link href="/prompts"><ArrowLeft className="mr-2 h-4 w-4" /> Back to prompts</Link>
      </Button>
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article className="min-w-0">
          <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>{titleCase(prompt.category)}</Badge>
              {prompt.subcategory ? <Badge variant="secondary">{titleCase(prompt.subcategory)}</Badge> : null}
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{prompt.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{prompt.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {prompt.models.map((model) => <Badge key={model} variant="outline">{model}</Badge>)}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
            <PromptMarkdown markdown={prompt.markdown} />
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border bg-card p-5 shadow-sm">
            <h2 className="font-semibold">Actions</h2>
            <div className="mt-4 grid gap-3">
              <CopyButton text={prompt.prompt} />
              <Button asChild variant="outline" className="justify-start">
                <Link href={`${siteConfig.githubUrl}/blob/main/${prompt.githubPath}`}><Github className="mr-2 h-4 w-4" /> View on GitHub</Link>
              </Button>
            </div>
            <div className="mt-6 border-t pt-5">
              <h3 className="text-sm font-medium">Use cases</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {prompt.useCases.map((useCase) => <li key={useCase}>• {useCase}</li>)}
              </ul>
            </div>
            <div className="mt-6 border-t pt-5">
              <h3 className="text-sm font-medium">Tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {prompt.tags.slice(0, 12).map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
