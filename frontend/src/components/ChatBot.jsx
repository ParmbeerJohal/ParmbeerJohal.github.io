import { useState, useRef, useEffect } from "react";
import bitmojiTalking from "../assets/bitmoji-talk.gif";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages when they update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);

    // TODO: Replace with actual bot response logic
    // from backend or AI model
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `Thanks for your message: "${input}"`, sender: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Bitmoji character */}
        <div className="w-40 h-40 relative flex-shrink-0 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-500 shadow-lg">
          <img
            src={bitmojiTalking}
            alt="Chatbot Bitmoji"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Chat interface */}
        <div className="flex-grow w-full">
          <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-center py-10">
                Hey there! Ask me anything about Parm's projects or skills!
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-3 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-300 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Speech bubble input */}
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
