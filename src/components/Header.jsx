import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1c0yKSn_Pk09q0EzqYGQkB4hjwOZC58aG/view?usp=drive_link',
      '_blank'
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05, color: '#e5e7eb' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Batool Amina
        </motion.a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={handleResumeDownload}
            className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2 -mr-4 hover:bg-gray-600"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 8px rgba(209, 213, 219, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Resume <Download size={16} />
          </motion.button>
        </nav>
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="block py-3 px-6 text-sm hover:bg-gray-700 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={handleResumeDownload}
          className="block py-3 px-6 text-sm text-gray-300 hover:bg-gray-700 transition-colors w-full text-left"
        >
          Download Resume
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
