// src/components/Chatbot.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! Ask me anything about my projects.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = { id: messages.length + 1, sender: 'user', text: input };
    // Simulate a bot response (in real integration, call your backend API here)
    const botResponse = { id: messages.length + 2, sender: 'bot', text: 'Thanks for your question! I will get back to you shortly.' };
    setMessages([...messages, newMessage, botResponse]);
    setInput('');
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="mb-4 h-64 overflow-y-scroll">
        {messages.map(message => (
          <motion.div key={message.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
            <p className={message.sender === 'bot' ? 'text-blue-600' : 'text-green-600'}>
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
        <button onClick={handleSend} className="bg-blue-500 text-white rounded p-2 ml-2">Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
