import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

export function PromptMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert prose-pre:border prose-pre:bg-muted prose-code:text-blue-600 dark:prose-code:text-blue-300">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>{markdown}</ReactMarkdown>
    </div>
  )
}
