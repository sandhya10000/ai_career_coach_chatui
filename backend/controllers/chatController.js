import ChatLog from "../models/ChatLog.js";
import openai from "../config/openaiConfig.js";
import sanitize from "sanitize-html";

export const handleChat = async (req, res) => {
  console.log("reqqq------", req.body);
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ error: "userId and message are required" });
  }
  const cleanMessage = sanitize(message);

  let chat = await ChatLog.findOne({ userId });
  if (!chat) {
    chat = new ChatLog({ userId, conversation: [] });
  }
  chat.conversation.push({ role: "user", message: cleanMessage });

  const recentMessages = chat.conversation.slice(-5).map((msg) => ({
    role: msg.role,
    content: msg.message,
  }));

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a career helping users with career planning, skill development, and interviews.",
        },
        ...recentMessages,
      ],
    });
    console.log(completion, "completion-----------");
    const aiResponse = completion.choices[0].message.content.trim();
    chat.conversation.push({ role: "assistant", message: aiResponse });
    console.log(aiResponse, "aiResponse----------");
    await chat.save();

    res.status(200).json({
      response: aiResponse,
      suggestions: [
        "Can you guide me on free resources?",
        "What are the top certifications in this field?",
        "How do I build a resume?",
      ],
    });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
