import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1c0yKSn_Pk09q0EzqYGQkB4hjwOZC58aG/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-sm shadow-md border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-gray-100 select-none"
          whileHover={{ scale: 1.05, color: "#d1d5db" }} // light gray hover
          transition={{ type: "spring", stiffness: 300 }}
        >
          Batool Amina
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-300 hover:text-gray-100 transition-colors duration-300 select-none"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={handleResumeDownload}
            className="bg-gray-700 text-gray-100 font-semibold px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-600 transition-colors shadow-sm select-none"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(209, 213, 219, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Resume <Download size={16} />
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            className="text-gray-100 focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
        className={`md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="block py-4 px-6 text-gray-300 hover:bg-gray-700 transition-colors text-base select-none"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={handleResumeDownload}
          className="w-full text-left py-4 px-6 text-gray-300 hover:bg-gray-700 transition-colors text-base select-none"
        >
          Download Resume
        </button>
      </motion.nav>
    </header>
  );
};

export default Header;
