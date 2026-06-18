export type PromptItem = {
  id: string
  slug: string
  title: string
  description: string
  category: string
  subcategory?: string
  models: string[]
  useCases: string[]
  tags: string[]
  prompt: string
  exampleOutput: string
  markdown: string
  githubPath: string
}

export type PromptIndex = {
  generatedAt: string
  prompts: PromptItem[]
  categories: string[]
  models: string[]
}
