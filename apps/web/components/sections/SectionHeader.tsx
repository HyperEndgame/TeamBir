import clsx from 'clsx'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, className }: Props) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-5xl md:text-7xl tracking-wider text-text leading-none mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl leading-relaxed">{centered ? subtitle : subtitle}</p>
      )}
    </div>
  )
}
