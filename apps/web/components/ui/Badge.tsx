import clsx from 'clsx'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx('inline-block text-xs font-mono tracking-widest uppercase text-accent border border-accent/40 px-2 py-0.5', className)}>
      {children}
    </span>
  )
}
