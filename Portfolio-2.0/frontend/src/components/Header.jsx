import { useState, useEffect } from "react";
import profilePic from "../assets/profile-photo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll events for header styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Change header appearance on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check if we've scrolled past the profile picture in AboutMe
      const aboutMeProfilePic = document.querySelector('#about .rounded-full');
      if (aboutMeProfilePic) {
        const profileRect = aboutMeProfilePic.getBoundingClientRect();
        // Show the logo and name when the profile pic is fully out of view (top of pic is above viewport)
        setShowProfile(profileRect.bottom < 0);
      }
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // This formula calculates what percentage of the scrollable content has been scrolled
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercentage);
      
      // Determine which section is currently in view
      const sections = ["about", "experience", "projects"];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial states
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white text-gray-800 shadow-md py-2' 
          : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Name - conditionally rendered */}
        <div className={`flex items-center space-x-2 transition-opacity duration-300 ${showProfile ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${scrolled ? 'border-blue-500' : 'border-white'}`}>
            <img 
              src={profilePic}
              alt="Parm Johal"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Parm Johal</h1>
            <p className={`text-xs ${scrolled ? 'text-blue-600' : 'text-blue-100'}`}>Software Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`hidden md:flex ${showProfile ? '' : 'mx-auto'}`}>
          <ul className="flex space-x-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-1 py-2 transition-colors duration-300 ${
                    activeSection === item.id
                      ? scrolled ? 'text-blue-600 font-medium' : 'font-medium'
                      : scrolled ? 'text-gray-600 hover:text-blue-500' : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      scrolled ? 'bg-blue-500' : 'bg-white'
                    } transition-all duration-300`}></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-200">
        <div 
          className="h-full bg-blue-500 transition-all"
          style={{ 
            width: `${Math.min(scrollProgress, 100)}%` 
          }}
        ></div>
      </div>
    </header>
  );
}

export default Header;