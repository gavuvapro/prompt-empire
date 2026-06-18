import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
  href?: string
}

export function Button({ className, variant = 'default', size = 'default', asChild, children, ...props }: ButtonProps) {
  const classes = cn(
    'focus-ring inline-flex items-center justify-center rounded-xl font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
    variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
    variant === 'outline' && 'border bg-background hover:bg-muted',
    variant === 'ghost' && 'hover:bg-muted',
    size === 'sm' && 'h-9 px-3 text-sm',
    size === 'default' && 'h-10 px-4 py-2',
    size === 'lg' && 'h-12 px-6 text-base',
    className
  )
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>
    return React.cloneElement(child, { className: cn(classes, child.props.className) })
  }
  if (props.href) {
    return <Link href={props.href} className={classes}>{children}</Link>
  }
  return <button className={classes} {...props}>{children}</button>
}
