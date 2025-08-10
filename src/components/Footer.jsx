import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={28} />, href: "https://github.com/batoolamina", name: "GitHub" },
    { icon: <Linkedin size={28} />, href: "https://linkedin.com/in/batool-amina", name: "LinkedIn" },
    { icon: <Mail size={28} />, href: "mailto:batool.amina.110@gmail.com", name: "Email" },
  ];

  return (
    <footer className="bg-gray-900/70 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400 select-none">
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-gray-100 transition-colors duration-300 rounded-full p-2"
              whileHover={{ scale: 1.2, y: -3, boxShadow: "0 4px 12px rgba(156,163,175,0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-400 tracking-wide">
          &copy; {new Date().getFullYear()} Batool Amina. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
