import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

console.log("✅ Loaded OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
import mongoose from "mongoose";
import openai from "./config/openaiConfig.js"; // Your config using process.env

import chatRoutes from "./routes/chatRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/career-coach", chatRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
