import { useState, useEffect, useRef } from "react";
import profilePic from "../assets/profile-photo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

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
        setShowProfile(profileRect.top < 0);
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

  // Toggle mobile menu
  const toggleMobileMenu = (e) => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scroll to section and close mobile menu if open
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-1 py-2 transition-colors duration-300 cursor-pointer ${
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
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} size="lg" className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden absolute left-0 right-0 transition-all duration-300 overflow-hidden shadow-lg ${
          mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-white' : 'bg-blue-700'}`}
      >
        <div className="pt-2 pb-3 px-4">
          {[
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-2.5 px-4 rounded-md ${
                activeSection === item.id
                  ? scrolled ? 'bg-blue-50 text-blue-600 font-medium' : 'bg-blue-800 text-white font-medium'
                  : scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-blue-100 hover:bg-blue-800'
              } transition-colors mb-1`}
            >
              {item.label}
            </button>
          ))}
        </div>
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