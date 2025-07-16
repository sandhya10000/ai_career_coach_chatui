import { useState } from "react";
import Message from "../components/Message";
const suggestions = [
  "How do I get a job in Data Science?",
  "What skills should I learn for Frontend?",
  "How to crack interviews?",
];

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async (msg) => {
    if (!msg.trim()) return;
    const userMessage = {
      sender: "user",
      text: msg,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    try {
      const res = await fetch("http://localhost:5000/api/career-coach/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "user123", message: msg }),
      });
      const data = await res.json();
      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry, something went wrong.",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-4 flex flex-col h-[80vh]">
      {/* Heading */}
      <div className="text-2xl font-semibold text-center text-blue-700 mb-4">
        AI Career Coach
      </div>
      <div className="flex-1 overflow-y-auto space-y-2 border-b">
        {messages.map((msg, idx) => (
          <Message
            key={idx}
            sender={msg.sender}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
      <div className="mt-2 space-y-2">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {suggestions.map((tip, i) => (
            <button
              key={i}
              onClick={() => handleSend(tip)}
              className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full  hover:bg-blue-200"
            >
              {tip}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Ask about your career path..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          />
          <button
            onClick={() => handleSend(input)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatUI;
