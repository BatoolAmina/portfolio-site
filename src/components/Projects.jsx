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
      img: 'https://placehold.co/600x400/1a202c/c4b5fd?text=Coming+Soon', 
      link: '#' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <AnimatedSection>
      <div id="projects" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">My Projects</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" variants={containerVariants} initial="hidden" animate="show">
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col" variants={itemVariants} whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} transition={{ type: 'spring', stiffness: 300 }}>
              <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center group mt-auto">
                  View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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