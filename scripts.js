// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function generateAIResponse() {
  const userInput = document.getElementById('user-input').value;
  const aiResponseElement = document.getElementById('ai-response');

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: userInput,
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0]?.text || 'No response from AI.';
    
    aiResponseElement.textContent = aiResponse;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    aiResponseElement.textContent = 'Error fetching AI response.';
  }
}
