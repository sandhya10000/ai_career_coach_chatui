import express from "express";

import { handleChat } from "../controllers/chatController.js";
import sanitizeInput from "../middlewares/sanitizeInput.js";

const router = express.Router();

//Api for chat
router.post("/chat", sanitizeInput, handleChat);

export default router;
