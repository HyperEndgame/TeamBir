// Free OpenRouter models 429 constantly (shared upstream pool). Try them in
// order until one answers. ponytail: add paid model as last entry if free tier
// proves too flaky in production.
export const MODELS = [
  'openai/gpt-oss-20b:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'qwen/qwen3-next-80b-a3b-instruct:free',
  'openai/gpt-oss-120b:free',
  'google/gemma-4-31b-it:free',
]

export interface ORMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function complete(messages: ORMessage[], maxTokens = 600): Promise<string | null> {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) return null
  for (const model of MODELS) {
    const reply = await tryModel(apiKey, model, messages, maxTokens)
    if (reply) return reply
  }
  return null
}

async function tryModel(apiKey: string, model: string, messages: ORMessage[], maxTokens: number): Promise<string | null> {
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://teambir.com',
        'X-Title': 'Team BIR',
      },
      body: JSON.stringify({ model, messages, max_tokens: maxTokens, temperature: 0.4 }),
    })
    if (!res.ok) {
      console.error('OpenRouter error:', model, res.status)
      return null
    }
    const data = await res.json()
    const reply = data?.choices?.[0]?.message?.content
    return typeof reply === 'string' && reply.trim() ? reply : null
  } catch (err) {
    console.error('OpenRouter route error:', model, err)
    return null
  }
}
