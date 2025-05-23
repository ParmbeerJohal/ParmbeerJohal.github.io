import { useState } from "react";
import { hover } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { experiences } from "../mock/experiences";
import { text } from "@fortawesome/fontawesome-svg-core";

function WorkExperience() {
  const [activeJob, setActiveJob] = useState(null);

  // Function to handle clicking on a job node
  const handleJobClick = (id) => {
    setActiveJob(activeJob === id ? null : id);
  };

  const getColorClasses = (colorName) => {
    switch(colorName) {
      case 'cyan':
        return {
          bg: 'bg-cyan-500',
          bgLight: 'bg-cyan-100',
          hoverBg: 'hover:bg-cyan-600',
          text: 'text-cyan-600',
          textLight: 'text-cyan-200',
          hoverText: 'hover:text-cyan-600',
          border: 'border-cyan-600',
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-700',
          bgLight: 'bg-indigo-100',
          hoverBg: 'hover:bg-indigo-800',
          text: 'text-indigo-600',
          textLight: 'text-indigo-200',
          hoverText: 'hover:text-indigo-600',
          border: 'border-indigo-600',
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500',
          bgLight: 'bg-yellow-100',
          hoverBg: 'hover:bg-yellow-600',
          text: 'text-yellow-600',
          textLight: 'text-yellow-200',
          hoverText: 'hover:text-yellow-600',
          border: 'border-yellow-600',
        };
      default:
        return {
          bg: 'bg-gray-500',
          bgLight: 'bg-gray-100',
          hoverBg: 'hover:bg-gray-600',
          text: 'text-gray-600',
          textLight: 'text-gray-200',
          hoverText: 'hover:text-gray-600',
          border: 'border-gray-500',
        };
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">My Journey</h2>

      {/* Journey Path */}
      <div className="relative">
        {/* The path line */}
        <div className="absolute left-1/8 md:left-1/2 transform -translate-x-1/8 md:-translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

        {/* Journey Nodes */}
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`mb-16 pr-5 ${
                index % 2 === 0 || window.innerWidth < 640 ? "text-left" : "text-right"
              }`}
            >
              {/* Timeline node */}
              <div 
                className={`absolute left-1/8 md:left-1/2 transform -translate-x-4/9 md:-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full cursor-pointer
                  border-4 border-white shadow-lg transition-all duration-300 animate-bounce md:animate-none
                  ${getColorClasses(exp.color).bg} ${getColorClasses(exp.color).hoverBg} ${activeJob === exp.id ? 'scale-125' : ''}`}
                onClick={() => handleJobClick(exp.id)}
              />
              
              {/* Content Card */}
              <div 
                className={`${
                  index % 2 === 0 
                  ? "ml-0 pl-0 lg:ml-12 lg:pl-12" 
                  : "ml-0 pl-0 lg:mr-12 lg:pr-12 md:pl-0 md:text-right flex flex-col md:items-end"
                }`}
              >
                {/* Job Ball */}
                <div className={`
                  ${index % 2 === 0 ? "ml-auto md:ml-8 mr-5" : "ml-auto mr-5"}
                  w-16 h-16 rounded-full shadow-lg mb-4 overflow-hidden
                  bg-white p-2 border-2 ${getColorClasses(exp.color).border}
                  ${activeJob === exp.id ? 'animate-pulse' : ''}
                `}>
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150?text=Logo";
                    }}
                  />
                </div>
                
                {/* Job Title and Period */}
                <div className={`mb-2 ml-auto pl-16 mr-5 ${index % 2 === 0 ? 'md:pl-8 text-right md:text-left' : ' md:w-75 xl:w-100 text-right'}`}>
                  <h3 className={`text-xl font-bold ${getColorClasses(exp.color).text}`}>{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">{exp.company}</h4>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
                
                {/* Extended content that shows on click */}
                <div 
                  className={`
                    bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-left w-full
                    ${index % 2 === 0 ? 'border-r-4 md:border-r-0 md:border-l-4' : 'border-r-4'} ${getColorClasses(exp.color).border}
                    transition-all duration-500 ease-in-out
                    ${activeJob === exp.id ? 'opacity-100 mt-4 mb-6' : 'opacity-0 h-0 py-0 overflow-hidden pointer-events-none'}
                  `}
                >
                  <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements:</h5>
                  <ul className={`list-disc text-gray-700 dark:text-white mb-4 ${index % 2 === 1 ? 'list-inside' : 'pl-5'}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="mb-2">{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-3">
                    <h5 className="font-semibold text-gray-800 mb-2">Skills Used:</h5>
                    <div className="flex flex-wrap gap-2 justify-start">
                      {exp.skills.map(skill => (
                        <span 
                          key={skill}
                          className={`${getColorClasses(exp.color).bgLight} ${getColorClasses(exp.color).text} px-2 py-1 rounded-full text-xs sm:text-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Interactive Prompt when not expanded */}
                {activeJob !== exp.id && (
                  <button 
                    onClick={() => handleJobClick(exp.id)}
                    className={`
                      hidden md:flex mt-2 text-sm dark:text-white ${getColorClasses(exp.color).hoverText} 
                      dark:${getColorClasses(exp.color).hoverTextLight} font-medium items-center cursor-pointer 
                      ${index % 2 === 0 ? 'ml-8' : 'mr-8'}
                    `}>
                    {index % 2 === 1 && (
                      <FontAwesomeIcon icon={faCaretDown} className="mr-1" />
                    )}
                    <span>View details</span>
                    {index % 2 === 0 && (
                      <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Journey Starting Point */}
      <div className="flex justify-center">
        <div className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-bold">
          Beginning of Career Journey
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;