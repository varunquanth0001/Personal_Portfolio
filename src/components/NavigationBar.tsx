import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationBarProps {
  className?: string;
}

const NavigationBar = ({ className = "" }: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300",
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
        className,
      )}
    >
      {/* Logo/Name */}
      <div className="flex items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl md:text-2xl font-bold text-white hover:text-[#ff6b5b] transition-colors font-['Inter']"
        >
          Varun Quanth
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-sm font-medium text-white hover:text-[#ff6b5b] transition-colors relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b5b] transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm font-medium text-white hover:text-[#ff6b5b] transition-colors relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b5b] transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-sm font-medium text-white hover:text-[#ff6b5b] transition-colors relative group"
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b5b] transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-sm font-medium text-white hover:text-[#ff6b5b] transition-colors relative group"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b5b] transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-md z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-medium text-white hover:text-[#ff6b5b] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-medium text-white hover:text-[#ff6b5b] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-2xl font-medium text-white hover:text-[#ff6b5b] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-2xl font-medium text-white hover:text-[#ff6b5b] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
