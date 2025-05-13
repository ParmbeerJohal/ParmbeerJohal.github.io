import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import avatarTalking from "../assets/avatar-talk.png";
import avatarIdle from "../assets/avatar-idle.png";
import avatarThink from "../assets/avatar-think.png";
import axios from "axios";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [fullResponse, setFullResponse] = useState("");
  const messagesEndRef = useRef(null);

  // Avatar image states
  const [avatarState, setAvatarState] = useState("talk");

  // Scroll to bottom of messages when they update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping || !fullResponse) return;

    // Start talking when typing begins
    setAvatarState("talk");
    
    const typingSpeed = 30;
    
    if (typingText.length < fullResponse.length) {
      // Continue typing
      const timeout = setTimeout(() => {
        setTypingText(fullResponse.slice(0, typingText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, add to messages
      setMessages(prev => [...prev, { text: fullResponse, sender: "bot" }]);
      setIsTyping(false);
      setFullResponse("");
      setTypingText("");

      // Switch to idle avatar after typing finishes (with delay)
      const idleTimeout = setTimeout(() => {
        setAvatarState("idle");
      }, 2000); // 2 seconds delay
      
      //return () => clearTimeout(idleTimeout);
    }
  }, [isTyping, typingText, fullResponse]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setIsLoading(true);
    setAvatarState("think");

    try {
      // Azure Functions call with Axios
      const response = await axios({
        method: 'post',
        url: import.meta.env.VITE_AZURE_QUERY_ENDPOINT,
        headers: { 'Content-Type': 'application/json' },
        data: { question: input },
        timeout: 10000, // 10 second timeout
      });
      
      const answers = response.data.answers;
      
      // Simulate a delay for the bot response
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Check if we have a valid answer
      const answerText = answers?.[0]?.answer;
      const answerId = answers?.[0]?.id;
      
      if (!answerText || answerId === -1) {
        // Initiate typing animation for error message
        const errorMessage = "I don't have an answer for that at this moment, but you're welcome to ask some more questions!";
        setFullResponse(errorMessage);
        setTypingText("");
        setIsTyping(true);
      } else {
        // Initiate typing animation for response
        setFullResponse(answerText);
        setTypingText("");
        setIsTyping(true);
      }
    } catch (error) {
      console.error("Error fetching from Azure Function:", error);
      
      // User-friendly error message
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I couldn't connect to my knowledge base. Please try again later.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
      setAvatarState("talk");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar character */}
        <div className="w-32 md:w-40 h-32 md:h-40 relative flex-shrink-0 rounded-full overflow-hidden bg-black border-2 border-blue-500 shadow-lg">
          <div className="relative w-full h-full">
            {/* Talking avatar */}
            <img
              src={avatarTalking}
              alt="Chatbot Avatar Talking"
              className={`absolute top-2 w-full h-full object-cover transition-opacity duration-500 ${
                avatarState === "talk" ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            {/* Idle avatar */}
            <img
              src={avatarIdle}
              alt="Chatbot Avatar Idle"
              className={`absolute top-2 w-full h-full object-cover transition-opacity duration-500 ${
                avatarState === "idle" ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Thinking avatar */}
            <img
              src={avatarThink}
              alt="Chatbot Avatar Thinking"
              className={`absolute top-2 w-full h-full object-cover transition-opacity duration-500 ${
                avatarState === "think" ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Chat interface */}
        <div className="flex-grow w-full">
          <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
          {messages.length === 0 && !isTyping ? (
            <div className="text-gray-500 text-center py-10">
              Hey there! Ask me anything about my projects, skills, and more!
            </div>
          ) : (
            <>
              {messages.map((msg, idx) => (
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
              ))}
              
              {/* Typing animation */}
              {isTyping && (
                <div className="mb-3 text-left">
                  <div className="inline-block p-3 rounded-lg bg-gray-300 text-gray-800 rounded-bl-none">
                    {typingText}
                    <span className="ml-1 inline-block w-2 h-4 bg-gray-500 animate-pulse"></span>
                  </div>
                </div>
              )}

              {isLoading && !isTyping && (
                <div className="text-center py-2">
                  <div className="inline-block p-3 rounded-lg bg-gray-200 animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
            </>
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
              className="w-full p-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
