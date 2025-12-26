import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        Skills & Tools
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 hover:bg-slate-800 transition shadow-lg"
            >
              <Icon className={`text-4xl mb-3 ${skill.color}`} />
              <p className="text-sm text-center text-slate-300">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
