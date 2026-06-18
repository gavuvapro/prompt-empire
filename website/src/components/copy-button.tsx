'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }
  return (
    <Button onClick={copy} className="justify-start">
      {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
      {copied ? 'Copied' : 'Copy prompt'}
    </Button>
  )
}
