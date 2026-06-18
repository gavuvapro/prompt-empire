import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(process.cwd(), '..')
const promptsDir = path.join(root, 'prompts')
const outDir = path.join(process.cwd(), 'src', 'data')
const outFile = path.join(outDir, 'prompt-index.json')

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(full)
  }
  return files
}

function section(markdown, heading) {
  const lines = markdown.split('\n')
  const start = lines.findIndex((line) => line.trim() === `## ${heading}`)
  if (start === -1) return ''
  const body = []
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith('## ')) break
    body.push(line)
  }
  return body.join('\n').trim()
}

function listItems(value) {
  return value.split('\n').map((line) => line.trim()).filter((line) => line.startsWith('- ')).map((line) => line.slice(2).trim())
}

const files = await walk(promptsDir)
const prompts = []

for (const file of files) {
  const markdown = await readFile(file, 'utf8')
  const title = markdown.match(/^# (.+)$/m)?.[1]?.trim() ?? path.basename(file, '.md')
  const relative = path.relative(promptsDir, file).replaceAll(path.sep, '/')
  const parts = relative.split('/')
  const category = parts[0] ?? 'uncategorized'
  const subcategory = parts.length > 2 ? parts[1] : undefined
  const slug = relative.replace(/\.md$/, '')
  const promptBody = section(markdown, 'Prompt')
  const description = section(markdown, 'Description')
  const models = listItems(section(markdown, 'Best AI Models'))
  const useCases = listItems(section(markdown, 'Use Cases'))
  const tags = Array.from(new Set([
    category,
    subcategory,
    ...models.map(slugify),
    ...title.split(/\s+/).map(slugify).filter(Boolean).slice(0, 4)
  ].filter(Boolean)))

  prompts.push({
    id: slugify(slug),
    slug,
    title,
    description,
    category,
    subcategory,
    models,
    useCases,
    tags,
    prompt: promptBody,
    exampleOutput: section(markdown, 'Example Output'),
    markdown,
    githubPath: `prompts/${relative}`
  })
}

prompts.sort((a, b) => a.title.localeCompare(b.title))
const categories = Array.from(new Set(prompts.map((p) => p.category))).sort()
const models = Array.from(new Set(prompts.flatMap((p) => p.models))).sort()
const generatedAt = new Date().toISOString()

await mkdir(outDir, { recursive: true })
await writeFile(outFile, JSON.stringify({ generatedAt, prompts, categories, models }, null, 2) + '\n')
console.log(`Generated ${prompts.length} prompts at ${path.relative(process.cwd(), outFile)}`)
