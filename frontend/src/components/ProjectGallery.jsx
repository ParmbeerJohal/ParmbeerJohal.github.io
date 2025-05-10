// src/components/ProjectGallery.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../mock/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function ProjectGallery() {
  const [filter, setFilter] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  // Filter projects by technology if filter text is provided
  const filteredProjects = filter
    ? projects.filter((project) =>
        project.tech.some((tech) =>
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      )
    : projects;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Projects</h2>
      
      <div className="mb-8">
        <div className="relative w-75">
          <input
            type="text"
            placeholder="Filter by technology..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {Array.from(new Set(projects.flatMap(project => project.tech))).map(tech => (
            <button 
              key={tech}
              onClick={() => setFilter(filter === tech ? "" : tech)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                filter === tech 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left side: Content */}
              <div className="md:w-1/2 p-5 flex flex-col justify-between dark:bg-gray-800 transition-colors duration-300">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                  <p className="text-gray-600 dark:text-white mb-3 line-clamp-6">{project.description}</p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={`${project.id}-${tech}`} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex gap-3 mt-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      <p className="pr-3">Live Demo (In Progress)</p> <FontAwesomeIcon icon={faExternalLinkAlt} size="xl" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="md:w-1/2 relative">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 z-10 flex items-end opacity-100 ${hoveredId === project.id ? 'xl:opacity-100' : 'xl:opacity-0'}`}>
                  <a 
                    href={project.github || project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="m-4 px-4 py-2 bg-white/90 text-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-200 backdrop-blur-sm"
                  >
                    {project.github ? 
                      <><FontAwesomeIcon icon={faGithub} size="xl" /> View on GitHub</> : 
                      'View Project'
                    }
                  </a>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-fit transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show message when no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No projects found with that technology.</p>
          <button 
            onClick={() => setFilter("")} 
            className="mt-2 text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;