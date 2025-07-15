export async function getQuoteRecommendation(): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY

  const response = await fetch('https://api.openai.com/v1/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({ prompt: 'quote recommendation' })
  })

  const data = await response.json()
  return data.recommendation as string
}
