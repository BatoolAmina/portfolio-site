import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Download } from "lucide-react";
import img from "../assets/Me.png";

const About = () => {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/1ZweCNw-N7qVtCY_G11TkVRyW8i0-htav/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <AnimatedSection>
      <section
        id="about"
        className="container mx-auto px-6 bg-gray-800/50 rounded-xl py-16"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={img}
              alt="Batool Amina"
              className="rounded-full shadow-lg mx-auto border-4 border-cyan-500"
            />
          </motion.div>

          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a Computer Science and Engineering student with a passion for
              web development and problem-solving. I have hands-on experience
              with the MERN stack and enjoy creating responsive, user-friendly
              applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to leverage my skills to build high-quality software
              that makes a difference. When I'm not coding, I enjoy exploring
              new technologies and contributing to open-source projects.
            </p>

            <div className="mt-8">
              <motion.button
                onClick={handleOpenResume}
                className="bg-transparent border border-gray-500 text-gray-300 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 hover:bg-gray-700/50 hover:border-gray-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Open Resume <Download size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
