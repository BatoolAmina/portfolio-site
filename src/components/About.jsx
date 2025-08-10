import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Download } from "lucide-react";
import img from "../assets/Me.png";

const About = () => {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/1c0yKSn_Pk09q0EzqYGQkB4hjwOZC58aG/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <AnimatedSection>
      <section
        id="about"
        className="container mx-auto px-6 py-24 rounded-3xl
          backdrop-blur-md shadow-lg
          font-poppins tracking-wide max-w-6xl"
      >
        <h2
          className="text-5xl font-extrabold text-center mb-16
            text-gray-300 select-none
            bg-clip-text text-transparent
            bg-gradient-to-r from-gray-400 to-gray-300"
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/3 flex justify-center relative"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={img}
              alt="Batool Amina"
              className="rounded-full border-4 border-gray-600 shadow-xl
                w-56 h-56 object-cover select-none
                transition-shadow duration-400 ease-in-out"
              draggable={false}
            />
          </motion.div>

          <div className="md:w-2/3 text-center md:text-left space-y-10 max-w-xl">
            <h3 className="text-3xl font-semibold text-gray-400 leading-snug tracking-wide">
              Who Am I?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
              I'm a Computer Science and Engineering student with a passion for
              web development and problem-solving. I have hands-on experience
              with the MERN stack and enjoy creating responsive, user-friendly
              applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
              My goal is to leverage my skills to build high-quality software
              that makes a difference. When I'm not coding, I enjoy exploring
              new technologies and contributing to open-source projects.
            </p>

            <motion.button
              onClick={handleOpenResume}
              className="mt-6 bg-gray-700 hover:bg-gray-600 active:bg-gray-800
                text-gray-200 font-semibold py-3 px-10 rounded-full shadow-md
                inline-flex items-center gap-4
                transition-colors duration-300 select-none
                focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-40"
              whileHover={{ scale: 1.08, boxShadow: "0 0 18px rgba(148, 163, 184, 0.6)" }}
              whileTap={{ scale: 0.95, boxShadow: "inset 0 2px 8px rgba(100, 116, 139, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              Open Resume{" "}
              <motion.span
                animate={{ rotate: [0, 15, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Download size={22} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
