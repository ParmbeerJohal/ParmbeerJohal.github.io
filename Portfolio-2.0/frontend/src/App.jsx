// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Chatbot from "./components/Chatbot";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";

function App() {
  const [showChatbot, setShowChatbot] = useState(true);
  
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  
  return (
    <div className="min-h-screen flex flex-col relative">
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
      
      {/* Repositioned Chatbot - Bottom Right Corner */}
      <div className={`fixed bottom-20 right-4 z-20 transition-all duration-300 max-w-md
        ${showChatbot ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <Chatbot />
      </div>
      
      {/* Chat toggle button */}
      <button 
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors z-30"
        aria-label="Toggle chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}

export default App;