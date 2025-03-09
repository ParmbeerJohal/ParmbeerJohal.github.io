// src/components/ProjectGallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../mock/projects";

function ProjectGallery() {
  const [filter, setFilter] = useState("");

  // Filter projects by technology if filter text is provided
  const filteredProjects = filter
    ? projects.filter((project) =>
        project.tech.some((tech) =>
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      )
    : projects;

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by technology..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white shadow p-4 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <p className="mt-2 text-sm text-gray-600">
              Technologies: {project.tech.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
