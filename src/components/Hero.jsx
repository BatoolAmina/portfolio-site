import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Hello, I'm Batool Amina
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
          A Passionate Web Developer
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          I specialize in building dynamic and responsive web applications with a focus on user experience and performance.
        </motion.p>
        <motion.a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-block" whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(34, 211, 238, 0.5)" }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
          Get In Touch
        </motion.a>
      </div>
    </div>
  </section>
);
export default Hero;