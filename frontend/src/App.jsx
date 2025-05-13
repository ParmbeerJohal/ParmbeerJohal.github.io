import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import ChatBot from "./components/ChatBot";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";

function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isChatOpenedFirstTime, setIsChatOpenedFirstTime] = useState(false);
  
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setIsChatOpenedFirstTime(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col relative dark:bg-gray-800 bg-white transition-all duration-300">
      <Header />
      
      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        {/* About Me Section */}
        <section id="about" className="mb-12 mt-20">
          <AboutMe />
        </section>
        
        {/* Work Experience Section */}
        <section id="experience" className="mb-12">
          <WorkExperience />
        </section>
        
        {/* Project Gallery Section */}
        <section id="projects" className="mb-12">
          <ProjectGallery />
        </section>
      </main>
      <Footer />
      
      {/* Chatbot */}
      <div className={`fixed bottom-26 right-10 z-20 transition-all duration-300 max-w-md
        ${showChatbot ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <ChatBot />
      </div>
      
      {/* Chatbot toggle button */}
      <button 
        onClick={toggleChatbot}
        className={`fixed bottom-10 right-10 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors z-30 cursor-pointer ${!isChatOpenedFirstTime && 'animate-bounce'}`}
        aria-label="Toggle chatbot"
      >
        <FontAwesomeIcon icon={faCommentDots} size="lg" />
      </button>
    </div>
  );
}

export default App;