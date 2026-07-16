const ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.2V12H8v2.5h2V21h2.5v-6.5H15l.5-2.5h-3v-1.8c0-.7.6-1.2 1-1.2Z" />
  ),
  instagram: (
    <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM16.8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 3.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8Z" />
  ),
  linkedin: (
    <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.5A1.72 1.72 0 1 0 5.5 7a1.72 1.72 0 0 0-.03-3.5ZM20 13.1c0-3-1.6-4.4-3.75-4.4a3.23 3.23 0 0 0-2.94 1.62V8.5H10.4c.04.85 0 9.5 0 9.5h2.94v-5.3a2 2 0 0 1 .1-.72 1.63 1.63 0 0 1 1.53-1.09c1.08 0 1.51.82 1.51 2.03V20H20v-6.9Z" />
  ),
}

export function SocialLinks({ social, className }: { social?: { facebook?: string; instagram?: string; linkedin?: string }; className?: string }) {
  if (!social) return null
  const links = Object.entries(social).filter(([, url]) => url)
  if (!links.length) return null

  return (
    <div className={className}>
      {links.map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={key}
          className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 text-white/50 hover:text-accent hover:border-accent/40 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            {ICONS[key]}
          </svg>
        </a>
      ))}
    </div>
  )
}
