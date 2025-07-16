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
