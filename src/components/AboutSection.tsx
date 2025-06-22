import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className = "" }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className={`w-full bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24 ${className}`}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Inter']">
            About Me
          </h2>
          <div className="h-1 w-24 bg-[#ff6b5b] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          className="bg-[#111111] rounded-2xl p-8 md:p-12 border border-[#ff6b5b]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#ff6b5b]/10 p-3 rounded-full">
              <Rocket className="w-6 h-6 text-[#ff6b5b]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-['Inter'] leading-tight">
              🚀 Passionate about building scalable web applications &
              automating infrastructure
            </h3>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed font-['Inter']">
            I'm a Computer Science student currently in my 6th semester, with a
            growing passion for full-stack web development and DevOps practices.
            I enjoy working across the stack—from designing responsive front-end
            interfaces to implementing robust back-end services and deploying
            them using CI/CD pipelines and containerization tools.
          </p>

          <div className="mt-8 pt-8 border-t border-[#ff6b5b]/20">
            <p className="text-lg text-gray-300 leading-relaxed font-['Inter']"></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
