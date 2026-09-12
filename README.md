<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />

# എടാ വിജയാ.. എന്താടാ ദാസാ... 🎯

## Basic Details
### Team Name: AlphaBeta

### Team Members
- Team Lead: Anna Rose Dolphy - College of Engineering Kidangoor
- Member 2: Emil Elsa Biji - College of Engineering Kidangoor

### Project Description
A daydreaming chatbot inspired by the friendship and dream-escalation energy of *Nadodikkattu*. You (Dasan) type in a small wish, and Vijayan — your enthusiastic, slightly unhinged AI best friend — never lets it stay small, escalating it into something gloriously ridiculous instead.

### The Problem (that doesn't exist)
Nobody has ever complained that their dreams are too realistic, too practical, or too achievable. This remains a crisis unaddressed by modern technology.

### The Solution (that nobody asked for)
An AI friend who refuses to be reasonable. Tell Vijayan you want a bicycle, and by the end of the conversation you own a 50-bicycle army with its own 12-floor headquarters and a rooftop swimming pool. He remembers what you said earlier in the chat and keeps building on it, so the fantasy only ever grows.

## Technical Details
### Technologies/Components Used
For Software:
- JavaScript (Node.js), HTML, CSS
- Express.js
- OpenAI Chat Completions API (gpt-4o / gpt-4o-mini)
- dotenv, cors
- Deployed on Vercel

### Implementation
For Software:

# Installation
```
git clone <your-repo-url>
cd Daasanum.Vijayanum-main
npm install
cp .env.example .env
# then edit .env and add your OPENAI_API_KEY
```

# Run (local)
```
npm start
```
Then open http://localhost:3000 in your browser.

# Deployment (Vercel)
```
npm install -g vercel
vercel login
vercel
```
- Add `OPENAI_API_KEY` as an Environment Variable in the Vercel project dashboard 
  (Settings → Environment Variables) — never commit it to the repo.
- Once deployed, Vercel provides a live URL where the project can be accessed directly.

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Landing page*

![Screenshot2](Add screenshot 2 here with proper name)
*Chat mid-conversation, showing escalation across turns*

![Screenshot3](Add screenshot 3 here with proper name)
*Mobile view of the chat window*

# Diagrams
![Workflow](Add your workflow/architecture diagram here)
*Browser (chat.html) -> POST /chat on the Express server -> server prepends the Vijayan persona prompt and full conversation history -> OpenAI Chat Completions API -> reply streamed back to the browser*

### Project Demo
# Video
[Add your demo video link here]
*A short conversation showing a small wish escalating across 3-4 turns into something absurd.*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- Anna Rose Dolphy: [Specific contributions]
- Emil Elsa Biji: [Specific contributions]

---
Made with ❤️ at TinkerHub Useless Projects

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
