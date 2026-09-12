require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { DASAN_SYSTEM_PROMPT } = require('./persona');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Warn if API key is not configured
if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
  console.warn('⚠️  Warning: OPENAI_API_KEY is not configured in .env');
}

// POST /chat
app.post('/chat', async (req, res) => {
  try {
    const { history } = req.body || {};

    if (!Array.isArray(history)) {
      return res.status(400).json({
        error: 'Invalid request: "history" must be an array of { role, content } messages.'
      });
    }

    // Prepend persona.js's DASAN_SYSTEM_PROMPT as a system role message
    const messages = [
      { role: 'system', content: DASAN_SYSTEM_PROMPT },
      ...history
    ];

    // Call OpenAI's /v1/chat/completions endpoint
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 1.0,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      // Log the real error server-side
      console.error(`OpenAI API error [${response.status}]:`, errorText);

      // Return a friendly error message
      return res.status(500).json({
        error: 'എന്താടാ വിജയാ, ചെറിയൊരു പ്രശ്നം പറ്റി! അല്പം കഴിഞ്ഞ് ഒന്നുകൂടി നോക്കാം. (Unable to get a response from Dasan. Please check your API key or try again later.)'
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || '';

    return res.json({ reply });
  } catch (error) {
    // Log the real error server-side
    console.error('Server error in POST /chat:', error);

    // Return a friendly error message
    return res.status(500).json({
      error: 'എന്താടാ വിജയാ, സെർവറിൽ ഒരു കുഴപ്പം സംഭവിച്ചു! (A server error occurred. Please try again later.)'
    });
  }
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`POST /chat endpoint ready`);
});
