import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Server, Wrench, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette className="text-gray-400" size={28} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      title: 'Backend',
      icon: <Server className="text-gray-400" size={28} />,
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'SQL'],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-gray-400" size={28} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Canva', 'Postman'],
    },
    {
      title: 'Professional Skills',
      icon: <Users className="text-gray-400" size={28} />,
      skills: ['Leadership', 'Communication', 'Time Management'],
    },
  ];

  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

  return (
    <AnimatedSection>
      <div id="skills" className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-14 select-none">Skills</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-gray-800/60 rounded-xl p-6 text-center group cursor-default
                transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 hover:shadow-lg border border-gray-700 hover:border-gray-500"
              variants={itemVariants}
            >
              <div
                className="inline-block bg-gray-900 p-4 rounded-full mb-5
                transition-transform duration-300 group-hover:scale-110"
              >
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-200 mb-5 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-1 rounded-full select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
