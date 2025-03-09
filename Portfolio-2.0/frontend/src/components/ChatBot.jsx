// src/components/Chatbot.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! Ask me anything about my projects." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate a delay for the bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: "bot",
        text: "I appreciate your question! Let me think about that...",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000); // 1-second delay
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="mb-4 h-64 overflow-y-scroll">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2"
          >
            <p
              className={
                message.sender === "bot" ? "text-blue-600" : "text-green-600"
              }
            >
              {message.text}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded p-2 ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
