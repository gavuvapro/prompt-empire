import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Documentation for using and contributing to Prompt Empir.'
}

const docs = [
  ['Getting started', 'Run the website locally or browse prompt Markdown files directly on GitHub.'],
  ['Prompt format', 'Every prompt uses consistent headings so it can be indexed and rendered.'],
  ['Security', 'Markdown is sanitized and contributions are reviewed through pull requests.'],
  ['Deployment', 'Deploy the website directory to Vercel with the included Next.js configuration.']
]

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
      <p className="mt-4 text-muted-foreground">Everything you need to use, run, deploy, and contribute to Prompt Empir.</p>
      <div className="mt-10 grid gap-4">
        {docs.map(([title, description]) => (
          <section key={title} className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
