import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    { 
      title: 'Pet-Friendly City', 
      description: 'A web app to help pet owners find friendly places in their city.', 
      img: '/assets/pet-friendly.png', 
      link: 'https://batoolamina.github.io/Pet-Friendly-City/' 
    },
    { 
      title: 'CollegeTips.in Photo Gallery', 
      description: 'A resource website providing tips and advice for college students.', 
      img: '/assets/photo-gallery.png', 
      link: 'https://batoolamina.github.io/CollegeTips.in/' 
    },
    { 
      title: 'JavaScript Music Player', 
      description: 'A music player built with vanilla JavaScript and the Audio API.', 
      img: '/assets/music-player.png', 
      link: 'https://batoolamina.github.io/CodeAlpha_Music-player-using-JavaScript/' 
    },
    { 
      title: 'Image Gallery', 
      description: 'A responsive image gallery created with HTML and CSS.', 
      img: '/assets/gallery.png', 
      link: 'https://batoolamina.github.io/CodeAlpha_IMAGE-GALLERY/' 
    },
    { 
      title: 'Single Page Website', 
      description: 'A clean and modern single-page website layout.', 
      img: '/assets/spa.png', 
      link: 'https://batoolamina.github.io/SinglePageWebsite/' 
    },
    { 
      title: 'Coming Soon', 
      description: 'AI/ML based project', 
      img: 'https://placehold.co/600x400/1a202c/c4c4c4?text=Coming+Soon', 
      link: '#' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <AnimatedSection>
      <div id="projects" className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-16 select-none">
          My Projects
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants} 
          initial="hidden" 
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col
                border border-gray-700 hover:border-gray-500
                transition-all duration-300"
              variants={itemVariants} 
              whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-56 object-cover select-none" 
                draggable={false} 
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-gray-100 font-semibold inline-flex items-center gap-2 select-none"
                >
                  View Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
