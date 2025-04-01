import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCheck, faCopy, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Contact details
  const contactDetails = {
    email: "parmbeerjohal@gmail.com",
    phone: "+1 (250) 891-9223"
  };
  
  // Function to handle copying text to clipboard
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        if (type === 'email') {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2000);
        } else if (type === 'phone') {
          setCopiedPhone(true);
          setTimeout(() => setCopiedPhone(false), 2000);
        }
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  
  // Social media links
  const socialLinks = [
    { 
      name: "GitHub",
      href: "https://github.com/ParmbeerJohal",
      icon: <FontAwesomeIcon icon={faGithub} size="xl" />,
      action: null
    },
    { 
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/parm-johal-7144a1184/",
      icon: <FontAwesomeIcon icon={faLinkedin} size="xl" />,
      action: null
    },
    { 
      name: "Email",
      tooltipText: copiedEmail ? "Copied!" : "Click to copy email",
      icon: <FontAwesomeIcon icon={copiedEmail ? faCheck : faEnvelope} size="xl" />,
      action: () => copyToClipboard(contactDetails.email, 'email')
    },
    { 
      name: "Phone",
      tooltipText: copiedPhone ? "Copied!" : "Click to copy phone",
      icon: <FontAwesomeIcon icon={copiedPhone ? faCheck : faPhone} size="xl" />,
      action: () => copyToClipboard(contactDetails.phone, 'phone')
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative">      
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 pt-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white mr-4">
                  <img 
                    src="/path/to/your-profile-pic.jpg"
                    alt="Parm Johal"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/100?text=PJ';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Parm Johal</h3>
                  <p className="text-blue-200 text-sm">Software Developer</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 max-w-md mx-auto md:mx-0">
                Passionate about creating elegant solutions to complex problems through software development.
              </p>
              
              <div className="flex space-x-6 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-blue-200 hover:text-white transition-colors focus:outline-none transform hover:scale-110"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </button>
                    ) : (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-white transition-colors transform hover:scale-110"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    )}
                    
                    {/* Enhanced Tooltip */}
                    {link.tooltipText && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-800 text-xs text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                        {link.tooltipText}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
              
              <div className="bg-blue-900/50 backdrop-blur-sm rounded-lg p-5 shadow-lg max-w-md ml-auto mr-auto md:ml-auto md:mr-0">
                <div className="mb-4 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full bg-blue-700/50 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-200" />
                  </div>
                  <div className="flex-grow text-left">
                    <p className="text-sm text-blue-200 mb-1">Email</p>
                    <div className="flex items-center">
                      <span className="text-white">{contactDetails.email}</span>
                      <button 
                        onClick={() => copyToClipboard(contactDetails.email, 'email')}
                        className={`ml-2 p-1 rounded-md ${copiedEmail ? 'bg-green-500' : 'bg-blue-700/50 hover:bg-blue-600/50'} transition-colors`}
                        title="Copy to clipboard"
                        aria-label="Copy email to clipboard"
                      >
                        <FontAwesomeIcon icon={copiedEmail ? faCheck : faCopy} size="sm" className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full bg-blue-700/50 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-200" />
                  </div>
                  <div className="flex-grow text-left">
                    <p className="text-sm text-blue-200 mb-1">Phone</p>
                    <div className="flex items-center">
                      <span className="text-white">{contactDetails.phone}</span>
                      <button 
                        onClick={() => copyToClipboard(contactDetails.phone, 'phone')}
                        className={`ml-2 p-1 rounded-md ${copiedPhone ? 'bg-green-500' : 'bg-blue-700/50 hover:bg-blue-600/50'} transition-colors`}
                        title="Copy to clipboard"
                        aria-label="Copy phone to clipboard"
                      >
                        <FontAwesomeIcon icon={copiedPhone ? faCheck : faCopy} size="sm" className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright and Back to Top */}
          <div className="pt-8 mt-8 border-t border-blue-700/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 mb-4 md:mb-0">
              &copy; {currentYear} Parm Johal. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-2 bg-blue-700/30 hover:bg-blue-700/50 text-white px-4 py-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;