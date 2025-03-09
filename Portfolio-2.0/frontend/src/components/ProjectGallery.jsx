// src/components/ProjectGallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../mock/projects';

function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map(project => (
        <motion.div 
          key={project.id}
          className="bg-white shadow p-4 rounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <p className="mt-2 text-sm text-gray-600">Technologies: {project.tech.join(', ')}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectGallery;
