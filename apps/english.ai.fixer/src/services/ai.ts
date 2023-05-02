const COHERE_API_KEY = import.meta.env.PUBLIC_COHERE_API_KEY
const COHERE_URL = import.meta.env.PUBLIC_COHERE_URL
export async function fixEnglish(input: string) {
  const data = {
    model: "command-xlarge-nightly",
    prompt: `This is a spell checker generator.
    --
    Incorrect sample: "I are good!"
    Correct sample: "I am good!"
    --
    Incorrect sample: "I have 22 years old!"
    Correct sample: "I am 22 years old!"
    --
    Incorrect sample: "I don't can know"
    Correct sample: "I don't know"
    --
    Incorrect sample: "I can no do it"
    Correct sample: "I can't do it"
    --
    Incorrect sample: "${input}"
    Correct sample: "`,
    max_tokens: 100,
    temperature: 0.3,
    frequency_penalty: 0,
    k: 0,
    p: 1,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  }

  const response = await fetch(COHERE_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${COHERE_API_KEY}`
    },
    body: JSON.stringify(data)
  }).then(r => r.json())

  const text = response.generations[0].text
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .substring(0, text.length - 1)
}