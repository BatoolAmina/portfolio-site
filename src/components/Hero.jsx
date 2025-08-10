import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
    >
      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-200 leading-tight tracking-wide mb-6 select-none"
          >
            Hello, I'm{" "}
            <span className="relative inline-block text-gray-300">
              Batool Amina
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gray-500 rounded-full opacity-40 blur-sm"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-semibold text-gray-400 mb-10 tracking-wide"
          >
            Passionate Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide"
          >
            I specialize in building dynamic and responsive web applications
            with a focus on user experience and performance.
          </motion.p>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-200 font-bold text-lg px-10 py-4 rounded-full shadow-md
            hover:from-gray-600 hover:via-gray-700 hover:to-gray-800
            focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50
            transition-all"
            whileHover={{ scale: 1.07, boxShadow: "0 0 15px rgba(156, 163, 175, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
