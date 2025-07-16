const Message = ({ sender, text, timestamp }) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 max-w-xs rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p className="text-sm">{text}</p>
        <p className="text-xs mt-1 text-right opacity-70">{timestamp}</p>
      </div>
    </div>
  );
};

export default Message;
