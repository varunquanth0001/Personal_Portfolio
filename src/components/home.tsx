import React from "react";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsBar from "./SkillsBar";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] font-['Inter']">
      <NavigationBar />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsBar />
      <PortfolioSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#111111] py-8 px-6 md:px-16 lg:px-24 border-t border-[#ff6b5b]/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Varun Quanth. All rights reserved. Designed with ❤️ and
            creativity.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
