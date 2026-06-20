import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export function Card({ className, children, hover = false }: Props) {
  return (
    <div className={clsx(
      'bg-surface border border-border rounded-sm p-6',
      hover && 'transition-all duration-300 hover:border-accent hover:shadow-[0_0_24px_rgba(212,97,8,0.15)]',
      className
    )}>
      {children}
    </div>
  )
}
