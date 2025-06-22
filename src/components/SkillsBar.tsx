import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillsBarProps {
  skills?: Skill[];
  className?: string;
}

const SkillsBar = ({ skills = defaultSkills, className }: SkillsBarProps) => {
  return (
    <section
      className={cn("w-full bg-[#111111] py-16 px-4 md:px-8", className)}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 text-center hover:bg-[#ff6b5b]/10 hover:border-[#ff6b5b]/30 border border-transparent transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon && (
                <div className="text-[#ff6b5b] mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              )}
              <span className="text-white font-medium text-sm md:text-base group-hover:text-[#ff6b5b] transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default skills for graphic design
const defaultSkills: Skill[] = [
  {
    name: "HTML",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.85 8.42c0-.68-.04-1.2-.1-1.56h-.02c-.06.36-.1.88-.1 1.56v7.16c0 .68.04 1.2.1 1.56h.02c.06-.36.1-.88.1-1.56V8.42zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.15 14.5c0 .28-.23.5-.5.5s-.5-.22-.5-.5v-9c0-.28.23-.5.5-.5s.5.22.5.5v9zm5.65-4.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-2-6h4l-2 6zm0-8l-1.5-4.5h3L11 9z" />
      </svg>
    ),
  },
  {
    name: "JAVASCRIPT",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM6 9a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zM6 15a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0zM9 18a3 3 0 0 0 3-3v-3H9a3 3 0 0 0 0 6zM9 6a3 3 0 0 0 0 6h3V6H9z" />
      </svg>
    ),
  },
  {
    name: "REACT",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
      </svg>
    ),
  },
  {
    name: "MERN STACK",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15V7h2v10h-2zm4-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
      </svg>
    ),
  },
  {
    name: "DEVOPS",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-2-6h4l-2 6zm4-8h-2V7h2v2z" />
      </svg>
    ),
  },
];

export default SkillsBar;
