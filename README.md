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

## BACKEND SETUP:- (NodeJS + OpenAI + Mongodb)

COMMAND:-

# Step 1: Initialize backend

mkdir backend
cd backend
npm init -y

# Step 2: Install dependencies

npm install express cors dotenv openai mongoose sanitize-html express-rate-limit

# Step 3:

Add openAI secret key in .env file

# Step 4: Add project configuration

"scripts": {
"start": "nodemon server.js"
},
"type": "module"

# step 5: create .env file

PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-career-coach
OPENAI_API_KEY=your_openai_key
FRONTEND_URL=http://localhost:5173

# step 6: Run the Backend Server

npm start

# Server runs at: http://localhost:5000

8. FOLDER STRUCTURE :-
   backend/
   ├── config/
   │ └── openaiConfig.js
   ├── controllers/
   │ └── chatController.js
   ├── middlewares/
   │ └── rateLimiter.js
   └── sanitizeInput.js
   ├── models/
   │ └── ChatLog.js
   ├── routes/
   │ └── chatRoute.js
   ├── server.js
   ├── .env
   ├── Dockerfile
   ├── README.md

9. BACKEND API
   The AI Career Coach backend is powered by Node.js + Express, and connects to the OpenAI API to generate intelligent responses. It also stores user conversations in MongoDB for context retention and personalization.

This is the backend url for postman:-
http://localhost:5000/api/career-coach/chat

Request body type
| Field | Type | Description |
| --------- | ------ | -------------------------------- |
| `userId` | String | Unique user identifier |
| `message` | String | The user's current question/text |

Sample Payload:-
{
"userId": "user123",
"message": "How do I get a job in Data Science?"
}

Sample response:-
{
"response": "To get started in Data Science, begin with Python, then learn Pandas, NumPy, and Scikit-learn...",
"suggestions": [
"Can you guide me on free resources?",
"What are the top certifications in this field?"
]
}

## OPENAI secret key

---

## Sample request and response for hardcoded:

## REQUEST payload:

{
"userId": "user123",
"message": "Can you help me plan my career in data science?"
}

## RESPONSE

{
"response": "Sure! To plan your career, start by identifying your interests and learning in-demand skills. Would you like help with resume tips or finding free resources?",
"suggestions": [
"Can you guide me on free resources?",
"What are the top certifications in this field?",
"How do I build a resume?"
]
}

## Database response :-

{
"\_id": {
"$oid": "68780551e62e178ae0aeeb02"
  },
  "userId": "user123",
  "conversation": [
    {
      "role": "user",
      "message": "Can you help me plan my career in data science?",
      "_id": {
        "$oid": "68780551e62e178ae0aeeb03"
},
"timestamp": {
"$date": "2025-07-16T20:02:25.053Z"
      }
    },
    {
      "role": "assistant",
      "message": "Sure! To plan your career, start by identifying your interests and learning in-demand skills. Would you like help with resume tips or finding free resources?",
      "_id": {
        "$oid": "68780551e62e178ae0aeeb04"
},
"timestamp": {
"$date": "2025-07-16T20:02:25.056Z"
      }
    }
  ],
  "createdAt": {
    "$date": "2025-07-16T20:02:25.078Z"
},
"updatedAt": {
"$date": "2025-07-16T20:02:25.078Z"
},
"\_\_v": 0
}
