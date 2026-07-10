export const MODEL = 'claude-haiku-4-5-20251001'

export interface ORMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function complete(messages: ORMessage[], maxTokens = 600): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return null
  const system = messages.find(m => m.role === 'system')?.content
  const rest = messages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content }))
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, system, messages: rest }),
    })
    if (!res.ok) {
      console.error('Anthropic error:', res.status)
      return null
    }
    const data = await res.json()
    const reply = data?.content?.[0]?.text
    return typeof reply === 'string' && reply.trim() ? reply : null
  } catch (err) {
    console.error('Anthropic route error:', err)
    return null
  }
}
