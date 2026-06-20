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
  const base = 'inline-flex items-center justify-center font-display tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-h',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-muted hover:text-text',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const cls = clsx(base, variants[variant], sizes[size], className)

  if (as === 'a' && href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return <button className={cls} {...props}>{children}</button>
}
