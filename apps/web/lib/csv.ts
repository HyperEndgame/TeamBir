function escapeField(v: string): string {
  if (/[",\n]/.test(v)) return `"${v.replace(/"/g, '""')}"`
  return v
}

export function toCsv(rows: Record<string, string | null>[]): string {
  if (rows.length === 0) return ''
  const headers = Object.keys(rows[0])
  const lines = [headers.join(',')]
  for (const row of rows) {
    lines.push(headers.map((h) => escapeField(row[h] ?? '')).join(','))
  }
  return lines.join('\n')
}
