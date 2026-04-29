# Portfolio AI Frontend

A modern personal portfolio built with **Next.js**, featuring an integrated **AI-powered chatbot** connected to a Flask machine learning backend.

## Features

- Responsive portfolio design
- Projects, skills, certificates, experience, services, and contact sections
- Floating Messenger-style AI chatbot
- Dark/light mode support
- Flask ML chatbot API integration
- Built with reusable React components

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Flask API backend
- Vercel deployment

## Project Structure

```txt
.
├── app/
├── components/
├── public/
├── next.config.ts
├── package.json
└── README.md
Environment Variables

Create a .env.local file:

NEXT_PUBLIC_CHATBOT_API_URL=https://your-render-backend-url.onrender.com

Example:

NEXT_PUBLIC_CHATBOT_API_URL=https://portfolio-ai-chatbot-backend-xxx9.onrender.com
Run Locally
git clone https://github.com/yourusername/portfolio-ai-frontend.git
cd portfolio-ai-frontend
npm install
npm run dev

Open:

http://localhost:3000
Deployment

This project is deployed on Vercel.

Build command:

npm run build

Start command:

npm start
Backend

The chatbot connects to a Flask ML backend:

https://github.com/ejluv143/portfolio-ai-chatbot-backend
Author

EJ Loudale Cañete

GitHub: https://github.com/ejluv143
