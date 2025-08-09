import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github />, href: 'https://github.com/batoolamina', name: 'GitHub' },
        { icon: <Linkedin />, href: 'https://linkedin.com/in/batool-amina', name: 'LinkedIn' },
        { icon: <Mail />, href: 'mailto:batool.amina.10@gmail.com', name: 'Email' },
    ];
    return (
        <footer className="bg-gray-800/50">
            <div className="container mx-auto px-6 py-8 text-center text-gray-400">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((link) => (
                        <motion.a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-white transition-colors duration-300" whileHover={{ scale: 1.2, y: -2 }}>
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Batool Amina. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;