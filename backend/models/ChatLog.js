import mongoose from "mongoose";

const chatLogSchema = new mongoose.Schema(
  {
    userId: String,
    conversation: [
      {
        role: { type: String, enum: ["user", "assistant"], require: true },
        message: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("ChatLog", chatLogSchema);
