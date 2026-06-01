// Handles komunikasi ke OpenRouter API
import { buildSystemPrompt, buildUserPrompt } from '@/prompts'

const API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const MODEL = 'openai/gpt-4o-mini'

export async function generateRecipe(ingredients, cookTime) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: buildSystemPrompt() },
        { role: 'user', content: buildUserPrompt(ingredients, cookTime) }
      ]
    })
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()
  const content = data.choices?.[0]?.message?.content

  if (!content) throw new Error('Empty response from API')

  return JSON.parse(content)
}