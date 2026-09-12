<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />

# എടാ വിജയാ.. എന്താടാ ദാസാ... 🎯

### 🔗 [Live Demo](https://daasanum-vijayanum.vercel.app/)

## Basic Details
### Team Name: AlphaBeta

### Team Members
- Team Lead: Anna Rose Dolfy - College of Engineering Kidangoor
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
<img width="1600" height="767" alt="image" src="https://github.com/user-attachments/assets/0194fb1e-f697-476f-957b-aa91e5358e40" />
*Landing page-about*
<img width="1600" height="768" alt="image" src="https://github.com/user-attachments/assets/7c8f6e12-ea8f-4315-a4e0-fdbd79eac551" />
*Landing page-hero"


<img width="1600" height="763" alt="image" src="https://github.com/user-attachments/assets/dd8b863a-4fe8-4c0e-aff8-dc9f369d7e5f" />
*Chat mid-conversation, showing escalation across turns*

<img width="702" height="1600" alt="image" src="https://github.com/user-attachments/assets/f8fb81fb-a051-4413-a138-c02336da7d01" />
*Mobile view of the chat window*

# Diagrams
Landing page ➔ User clicks Go to chatbot ➔ Chat page ➔ Types Eda Vijaya to start ➔ POST /chat request ➔ Express server (prepends Vijayan persona prompt) ➔ OpenAI API ➔ Response rendered as Vijayan bubble.

### Project Demo
# Video
[Demo Video Link](https://drive.google.com/file/d/1H0aAz_9TlkpstzUis98WP_wM9KMKxdyw/view?usp=drivesdk)

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- Anna Rose Dolfy: [Tink Her Hack 4.0 Top 50]
- Emil Elsa Biji: [Tink Her Hack 4.0 Top 50]

---
Made with ❤️ at TinkerHub Useless Projects

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
