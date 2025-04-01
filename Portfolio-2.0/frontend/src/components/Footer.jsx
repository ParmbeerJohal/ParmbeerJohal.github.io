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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative">      
      {/* Main Footer Content */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 pt-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-0 md:p-8">
            {/* Left Column - Social Links */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-6 text-white">Connect With Me</h4>
              
              <p className="text-blue-100 mb-6 max-w-md mx-auto md:mx-0">
                Passionate about creating elegant solutions to complex problems through software development.
              </p>
              
              <div className="flex space-x-6 justify-center md:justify-start">
                {/* GitHub Link */}
                <a 
                  href="https://github.com/ParmbeerJohal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors transform hover:scale-110"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
                
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/parm-johal-7144a1184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors transform hover:scale-110"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
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