import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contribute',
  description: 'Contribute prompts to Prompt Empir through GitHub pull requests.'
}

export default function ContributePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Contribute prompts</h1>
      <p className="mt-4 text-muted-foreground">Prompt Empir grows through reviewed community pull requests.</p>
      <ol className="mt-10 space-y-4">
        {['Fork the repository.', 'Create a branch.', 'Add prompts using the required Markdown format.', 'Run the website index generator.', 'Submit a pull request.'].map((step, index) => (
          <li key={step} className="rounded-2xl border bg-card p-5"><span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">{index + 1}</span>{step}</li>
        ))}
      </ol>
      <Button asChild size="lg" className="mt-8"><Link href={siteConfig.githubUrl}>Contribute on GitHub</Link></Button>
    </div>
  )
}
