import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  profession?: string;
  imageUrl?: string;
}

const HeroSection = ({
  name = "Varun Quanth",
  profession = "FullStack Web Developer",
  imageUrl = "https://i.postimg.cc/bwrVyQj5/Whats-App-Image-2025-06-22-at-14-24-52-1c7c0b55.jpg",
}: HeroSectionProps) => {
  // Replace this with your actual resume PDF URL
  const resumeUrl = "https://i.postimg.cc/Z598CHs1/Varun-s-Resume-hackerresume-2.png";

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[#1a1a1a] opacity-10 text-[400px] font-bold">
          &lt;
        </div>
        <div className="absolute -right-20 bottom-0 text-[#1a1a1a] opacity-10 text-[400px] font-bold">
          &gt;
        </div>
      </div>

      {/* Left content */}
      <motion.div
        className="z-10 w-full md:w-1/2 text-white mb-12 md:mb-0 order-2 md:order-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-['Inter']">
          Hello<span className="text-[#ff6b5b]">.</span>
        </h1>
        <div className="h-1 w-32 bg-[#ff6b5b] mb-8"></div>
        <h2 className="text-2xl md:text-3xl font-medium mb-2 font-['Inter']">
          I'm {name}
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 font-['Inter']">
          {profession}
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#ff6b5b] hover:bg-[#ff6b5b]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
            Got a project?
          </Button>
          <Button
            onClick={() => window.open(resumeUrl, "_blank")}
            className="bg-[#ff6b5b] hover:bg-[#ff6b5b]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <FileText size={20} />
            My Resume
          </Button>
        </div>
      </motion.div>

      {/* Right content - Image with circular spotlight */}
      <motion.div
        className="z-10 relative w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          {/* Circular gradient background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6b5b] via-[#ff8f6b] to-[#ffb366] blur-[80px] opacity-60 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-[#ff6b5b]/30 to-transparent blur-[40px]"></div>

          {/* Profile image */}
          <div className="relative z-10 w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#ff6b5b]/20">
            <img
              src={imageUrl}
              alt="Varun Quanth - Graphic Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
