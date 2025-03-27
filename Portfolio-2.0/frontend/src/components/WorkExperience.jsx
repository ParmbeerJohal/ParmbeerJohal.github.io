import { useState } from "react";
import frescheLogo from "../assets/fresche-logo.jpeg";
import dhlLogo from "../assets/dhl-logo.png";
import revStatusLogo from "../assets/rev-status-logo.jpg";

function WorkExperience() {
  const [activeJob, setActiveJob] = useState(null);
  
  const experiences = [
    {
      id: 1,
      company: "Fresche Solutions",
      role: "Web Application Developer",
      period: "November 2020 - Present",
      logo: frescheLogo,
      description: "Led development of innovative web applications using modern technologies.",
      achievements: [
        "Spearheaded a project that increased user engagement by 40%",
        "Mentored junior developers and led technical meetings",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      skills: ["React", "Node.js", "AWS"],
      color: "blue"
    },
    {
      id: 2,
      company: "Digital Health Lab, University of Victoria",
      role: "Full Stack Developer",
      period: "July 2020 - November 2020",
      logo: dhlLogo,
      description: "Developed and maintained multiple web applications for clients in various industries.",
      achievements: [
        "Built an e-commerce platform with 99.9% uptime",
        "Optimized database queries resulting in 50% faster load times",
        "Collaborated with UX designers to improve customer experience"
      ],
      skills: ["JavaScript", "Python", "Docker"],
      color: "green"
    },
    {
      id: 3,
      company: "Rev Status",
      role: "Web Developer",
      period: "2018 - 2020",
      logo: revStatusLogo,
      description: "Started my professional journey developing web applications and learning from experienced team members.",
      achievements: [
        "Contributed to a major feature that received positive client feedback",
        "Reduced bug count by 30% through improved testing procedures",
        "Recognized as 'Rising Star' employee in 2019"
      ],
      skills: ["HTML/CSS", "JavaScript", "Git"],
      color: "purple"
    }
  ];

  // Function to handle clicking on a job node
  const handleJobClick = (id) => {
    setActiveJob(activeJob === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">My Journey</h2>

      {/* Journey Path */}
      <div className="relative">
        {/* The path line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

        {/* Journey Nodes */}
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`mb-16 relative ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              {/* Timeline node */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full cursor-pointer
                  border-4 border-white shadow-lg transition-all duration-300
                  bg-${exp.color}-500 hover:bg-${exp.color}-600 ${activeJob === exp.id ? 'scale-125' : ''}`}
                onClick={() => handleJobClick(exp.id)}
              />
              
              {/* Content Card */}
              <div 
                className={`${
                  index % 2 === 0 
                  ? "ml-8 pl-8 sm:ml-12 sm:pl-12 pr-4 sm:pr-0" 
                  : "mr-8 pr-8 sm:mr-12 sm:pr-12 pl-4 sm:pl-0 flex flex-col items-end"
                }`}
              >
                {/* Job Ball */}
                <div className={`
                  relative ${index % 2 === 0 ? "left-0" : "right-0"}
                  w-16 h-16 rounded-full shadow-lg mb-4 overflow-hidden
                  bg-white p-2 border-2 border-${exp.color}-200
                  ${activeJob === exp.id ? 'animate-pulse' : ''}
                  ${index % 2 === 1 ? 'self-end' : 'self-start'}
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
                <div className={`mb-2 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-xl font-bold text-${exp.color}-600`}>{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-gray-700">{exp.company}</h4>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
                
                {/* Extended content that shows on click */}
                <div 
                  className={`
                    bg-white rounded-lg shadow-md p-6 border-l-4 border-${exp.color}-500
                    transition-all duration-300 overflow-hidden 
                    ${activeJob === exp.id ? 'max-h-96 opacity-100 mt-4 mb-6' : 'max-h-0 opacity-0 pointer-events-none'}
                  `}
                >
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-3">
                    <h5 className="font-semibold text-gray-800 mb-2">Skills Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span 
                          key={skill}
                          className={`bg-${exp.color}-100 text-${exp.color}-800 px-3 py-1 rounded-full text-sm`}
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
                    className={`mt-2 text-sm text-${exp.color}-600 hover:text-${exp.color}-800 font-medium flex items-center`}
                  >
                    <span>View details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
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