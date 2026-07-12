'use client'
import { type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

export function Button({ variant = 'primary', size = 'md', as = 'button', href, target, rel, className, children, ...props }: Props) {
  const base = 'inline-flex items-center justify-center font-body font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  const variants = {
    primary: 'bg-accent text-bg hover:bg-accent-h hover:shadow-[0_0_28px_rgba(242,187,44,0.4)]',
    outline: 'border border-white/20 text-white/80 hover:border-accent/60 hover:text-white hover:bg-white/[0.03]',
    ghost: 'text-muted hover:text-text',
  }
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const cls = clsx(base, variants[variant], sizes[size], className)

  if (as === 'a' && href) {
    return <Link href={href} target={target} rel={rel} className={cls}>{children}</Link>
  }
  return <button className={cls} {...props}>{children}</button>
}
