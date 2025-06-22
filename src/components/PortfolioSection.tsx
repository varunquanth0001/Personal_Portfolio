import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  githubLink?: string;
}

interface PortfolioSectionProps {
  projects?: Project[];
  className?: string;
}

const PortfolioSection = ({
  projects = defaultProjects,
  className = "",
}: PortfolioSectionProps) => {
  return (
    <section
      id="projects"
      className={`w-full bg-[#111111] py-20 px-6 md:px-16 lg:px-24 ${className}`}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Inter']">
            My Projects
          </h2>
          <div className="h-1 w-24 bg-[#ff6b5b] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Inter']">
            Here's a showcase of my recent design work, featuring branding
            projects, digital media, and creative solutions.
          </p>
        </motion.div>

        <div
          className={`grid gap-8 ${
            projects.length === 1
              ? "grid-cols-1 justify-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#ff6b5b]/10 hover:border-[#ff6b5b]/30 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="bg-[#ff6b5b] p-3 rounded-full hover:bg-[#ff6b5b]/80 transition-colors">
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b5b] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-['Inter'] group-hover:text-[#ff6b5b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "Online Book Store",
    description: "Complete MERN stack based project.",
    image: "https://i.postimg.cc/BnjpWm7P/922679.webp",
    category: "Trending",
    githubLink: "https://github.com/varunquanth0001/pustakalya",
  },
];

export default PortfolioSection;
