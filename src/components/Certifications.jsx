import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Briefcase, Code, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Certifications = () => {
    const getIcon = (issuer) => {
        switch (issuer.toLowerCase()) {
            case 'postman': return <Star className="text-orange-400" size={24} />;
            case 'microsoft and linkedin': return <Briefcase className="text-blue-400" size={24} />;
            case 'forage': return <Briefcase className="text-sky-400" size={24} />;
            case 'girlscript summer of code': return <Code className="text-pink-400" size={24} />;
            default: return <Award className="text-cyan-400" size={24} />;
        }
    };

  const certifications = [
    { title: 'Skyscanner Travel Technology Virtual Experience', issuer: 'Forage', date: 'Issued Jun 2025', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_2Dj29SsGYMYnY26zy_1748719380273_completion_certificate.pdf' },
    { title: 'Accenture Virtual Experience Program', issuer: 'Forage', date: 'Issued May 2025', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_2Dj29SsGYMYnY26zy_1748624555387_completion_certificate.pdf' },
    { title: 'Deloitte Australia Virtual Experience Program', issuer: 'Forage', date: 'Issued May 2025', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_2Dj29SsGYMYnY26zy_1748629035611_completion_certificate.pdf' },
    { title: 'Postman API Fundamentals Student Expert', issuer: 'Postman', date: 'Issued Nov 2024', link: 'https://drive.google.com/file/d/1dW5i5LPyyRxTSgd-hVzeIessTUDZ9Mb2/view?usp=drive_link' },
    { title: 'GirlScript Summer of Code 2024 (Extended)', issuer: 'GirlScript Summer of Code', date: 'Issued Oct 2024', link: 'https://drive.google.com/file/d/1WcnFEsg-49jxaFpmd4oTLpiuuHX4MCrs/view?usp=drive_link' },
    { title: 'Career Essentials in Generative AI', issuer: 'Microsoft and LinkedIn', date: 'Issued 2024', link: 'https://media.licdn.com/dms/image/v2/D5622AQFNXGZ6_81wqg/feedshare-shrink_1280/B56ZQQmYKTG8As-/0/1735445283712?e=1757548800&v=beta&t=wQzBd5scTMilVniHFwY67Po3JfveSYdfD6barQDgXAk' },
  ];
  
  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

  return (
    <AnimatedSection>
      <div id="certifications" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Licenses & Certifications</h2>
        <motion.div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate="show">
          {certifications.map((cert) => (
            <motion.div key={cert.title} className="group relative bg-gray-800/50 rounded-lg p-6 flex items-start gap-6 transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1" variants={itemVariants}>
              <div className="absolute -inset-px bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-6">
                <div className="bg-gray-900 p-3 rounded-full">{getIcon(cert.issuer)}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <p className="text-gray-300">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-semibold inline-flex items-center group mt-2 transition-colors">
                      Show credential <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
export default Certifications;