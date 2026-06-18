'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <Button variant="ghost" size="sm" aria-label="Theme"><Monitor className="h-4 w-4" /></Button>
  const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
  return (
    <Button variant="ghost" size="sm" aria-label={`Switch to ${next} theme`} onClick={() => setTheme(next)} title={`Theme: ${theme}`}>
      {theme === 'light' ? <Sun className="h-4 w-4" /> : theme === 'dark' ? <Moon className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
    </Button>
  )
}
