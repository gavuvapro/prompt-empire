import index from '@/data/prompt-index.json'
import type { PromptIndex, PromptItem } from './types'

const promptIndex = index as PromptIndex

export function getPromptIndex() {
  return promptIndex
}

export function getAllPrompts(): PromptItem[] {
  return promptIndex.prompts
}

export function getPromptBySlug(slug: string) {
  return promptIndex.prompts.find((prompt) => prompt.slug === slug)
}

export function getCategories() {
  return promptIndex.categories
}

export function getModels() {
  return promptIndex.models
}

export function getStats() {
  return {
    totalPrompts: promptIndex.prompts.length,
    categories: promptIndex.categories.length,
    contributors: 1
  }
}
