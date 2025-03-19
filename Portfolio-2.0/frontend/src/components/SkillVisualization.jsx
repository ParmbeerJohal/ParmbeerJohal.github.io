// src/components/SkillVisualization.jsx
import { motion } from "framer-motion";
import { skills } from "../mock/skills";

function SkillVisualization() {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.id} className="mb-4">
          <p className="font-semibold">{skill.name}</p>
          <div className="w-full bg-gray-300 rounded h-4">
            <motion.div
              className="bg-green-500 h-4 rounded"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillVisualization;
