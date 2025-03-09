// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import ProjectGallery from './components/ProjectGallery';
import SkillVisualization from './components/SkillVisualization';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {/* AI Chatbot Section */}
        <section className="mb-8">
          <Chatbot />
        </section>
        {/* Project Gallery Section */}
        <section className="mb-8">
          <ProjectGallery />
        </section>
        {/* Skill Visualization Section */}
        <section className="mb-8">
          <SkillVisualization />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
