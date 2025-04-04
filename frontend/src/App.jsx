import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
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
      {/* <div className={`fixed bottom-20 right-4 z-20 transition-all duration-300 max-w-md
        ${showChatbot ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <Chatbot />
      </div> */}
      
      {/* Chat toggle button */}
      {/* <button 
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors z-30"
        aria-label="Toggle chatbot"
      >
        <FontAwesomeIcon icon={faCommentDots} size="lg" />
      </button> */}
    </div>
  );
}

export default App;