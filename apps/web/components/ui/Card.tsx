import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
  hover?: boolean
  glass?: boolean
}

export function Card({ className, children, hover = false, glass = false }: Props) {
  return (
    <div className={clsx(
      'p-6 transition-all duration-300',
      glass
        ? 'glass-light'
        : 'bg-surface/60 border border-white/[0.06]',
      hover && [
        'cursor-pointer',
        'hover:border-accent/40',
        'hover:bg-white/[0.06]',
        'hover:shadow-[0_8px_40px_rgba(196,164,74,0.1)]',
        'hover:-translate-y-1',
      ],
      className
    )}>
      {children}
    </div>
  )
}
