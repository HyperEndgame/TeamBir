'use client'
import { type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({ variant = 'primary', size = 'md', as = 'button', href, className, children, ...props }: Props) {
  const base = 'inline-flex items-center justify-center font-body tracking-[0.15em] font-semibold uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  const variants = {
    primary: 'bg-accent text-bg hover:bg-accent-h hover:shadow-[0_0_24px_rgba(196,164,74,0.35)]',
    outline: 'border border-accent/60 text-accent hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(196,164,74,0.15)]',
    ghost: 'text-muted hover:text-text',
  }
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const cls = clsx(base, variants[variant], sizes[size], className)

  if (as === 'a' && href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return <button className={cls} {...props}>{children}</button>
}
