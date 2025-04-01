import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';

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
      action: null // No special action, just a link
    },
    { 
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/parm-johal-7144a1184/",
      icon: <FontAwesomeIcon icon={faLinkedin} size="xl" />,
      action: null // No special action, just a link
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

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-2 md:mb-0">
            <p className="text-blue-200 mb-4">
              Creating elegant solutions to complex problems through software development.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <div key={index} className="relative group">
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-blue-200 hover:text-white transition-colors focus:outline-none"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  )}
                  
                  {/* Tooltip for copyable items */}
                  {link.tooltipText && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {link.tooltipText}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter / Contact */}
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="text-blue-200 mb-4">
              <div className="mb-2 flex items-center justify-end">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>{contactDetails.email}</span>
                <button 
                  onClick={() => copyToClipboard(contactDetails.email, 'email')}
                  className="ml-2 text-blue-300 hover:text-white"
                  title="Copy to clipboard"
                >
                  <FontAwesomeIcon icon={copiedEmail ? faCheck : faCopy} size="lg" />
                </button>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>{contactDetails.phone}</span>
                <button 
                  onClick={() => copyToClipboard(contactDetails.phone, 'phone')}
                  className="ml-2 text-blue-300 hover:text-white"
                  title="Copy to clipboard"
                >
                  <FontAwesomeIcon icon={copiedPhone ? faCheck : faCopy} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright and Back to Top */}
        <div className="pt-4 border-t border-blue-700 flex flex-col md:flex-row justify-center items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Parm Johal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;