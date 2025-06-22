import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = "" }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:varunquanth0001@gmail.com";
  };

  return (
    <section
      id="contact"
      className={`w-full bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24 ${className}`}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Inter']">
            Let's Work Together
          </h2>
          <div className="h-1 w-24 bg-[#ff6b5b] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Inter']">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#111111] border-[#ff6b5b]/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">
                  Send me a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ff6b5b]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b5b] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ff6b5b]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b5b] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ff6b5b]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b5b] transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#ff6b5b] hover:bg-[#ff6b5b]/90 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">
                Get in touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#ff6b5b]/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#ff6b5b]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">
                      varunquanth0001@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#ff6b5b]/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#ff6b5b]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 6006991985</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#ff6b5b]/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-[#ff6b5b]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">
                      Bengaluru,Karnataka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">
                Follow me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff6b5b]/10 p-3 rounded-full hover:bg-[#ff6b5b]/20 transition-colors group"
                >
                  <div className="w-5 h-5 text-[#ff6b5b] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.5 4.5h3c1.1 0 2 .9 2 2s-.9 2-2 2h-3v-4zm0 6h3.5c1.38 0 2.5 1.12 2.5 2.5S11.38 15.5 10 15.5H6.5V10.5zM4 2v20h8.5c2.76 0 5-2.24 5-5 0-1.89-1.05-3.54-2.6-4.4C16.07 11.46 17 10.28 17 8.5c0-2.76-2.24-5-5-5H4z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff6b5b]/10 p-3 rounded-full hover:bg-[#ff6b5b]/20 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-[#ff6b5b] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/varun-quanth-7097a32b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff6b5b]/10 p-3 rounded-full hover:bg-[#ff6b5b]/20 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-[#ff6b5b] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/varunquanth0001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff6b5b]/10 p-3 rounded-full hover:bg-[#ff6b5b]/20 transition-colors group"
                >
                  <Github className="w-5 h-5 text-[#ff6b5b] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-8">
              <Button
                onClick={handleEmailClick}
                className="bg-transparent border-2 border-[#ff6b5b] text-[#ff6b5b] hover:bg-[#ff6b5b] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Email me directly
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
