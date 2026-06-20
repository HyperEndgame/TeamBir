import Link from 'next/link'

interface Props {
  href?: string
  className?: string
}

export function Logo({ href = '/', className }: Props) {
  return (
    <Link href={href} className={`flex items-center gap-3 group ${className ?? ''}`}>
      {/* Eagle wing mark */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 3 L29 13 L24 14.5 L28 24 L19 19.5 L16 29 L13 19.5 L4 24 L8 14.5 L3 13 Z"
          fill="none"
          stroke="#E8B020"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 3 L16 18"
          stroke="#E8B020"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="16" cy="16" r="2.5" fill="#E8B020" opacity="0.8" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className="font-display font-800 text-[1.35rem] tracking-[0.18em] text-white group-hover:text-accent transition-colors duration-300"
          style={{ fontWeight: 800, letterSpacing: '0.18em' }}
        >
          TEAM BIR
        </span>
        <span className="font-mono text-[0.55rem] tracking-[0.25em] text-accent/70 uppercase">
          Knoxville, TN
        </span>
      </div>
    </Link>
  )
}
