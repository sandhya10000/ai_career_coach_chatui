##### DESCRIPTION

## Project name:-

AI Career Coach (Chat UI)

FRONTEND SETUP:- (React + TailwindCSS)
COMMAND:-

# Step 1: Create the project

npm create vite@latest ai_coach_frontend --template react

# Step 2: Install dependencies

cd ai_coach_frontend
npm install

# Step 3: Install TailwindCSS

npm install -D tailwindcss@3 postcss autoprefixer

# Step 4: Initialize Tailwind

npx tailwindcss init -p
This creates:

a) tailwind.config.js
b) postcss.config.js

5. You can start your frontend server with command
   npm run dev

# Server runs at: http://localhost:5173

6. FOLDER STRUCTURE :-
   frontend/
   ├── components/
   │ └── ChatUI.jsx
   | └── Message.jsx
   ├── App.css
   │
   ├── App.jsx
   │
   ├── index.css
   │
   ├── main.jsx
   │
   ├── postcss.config.js
   ├── README.md
   ├── tailwind.config.js
   ├── vite.config.js

💬 CHAT UI OVERVIEW:-
The application features a responsive and interactive chat interface that mimics a smart career assistant. Key elements of the Chat UI include:

✅ Chat Window

Displays messages from both the user and the AI bot with proper alignment and styles.

Includes timestamps for every message.

Auto-scrolls as new messages are added.

✅ Input Field + Send Button

Allows the user to type questions and send them to the bot.

Pressing Enter or clicking Send triggers the chat logic.

✅ Default Placeholder Suggestions

Input box includes a helpful placeholder like:
“Ask about your career path…”
to guide the user.

✅ Suggested Prompt Buttons

Below the chat, buttons are shown with common queries:

“How do I get a job in Data Science?”

“What skills should I learn for Frontend?”

“How to crack interviews?”

Clicking a prompt automatically sends it to the bot, making it easier for users to get started.
