import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Briefcase, Code, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Certifications = () => {
  const getIcon = (issuer) => {
    // All icons in uniform grey color
    return <Award className="text-gray-400" size={24} />;
  };

  const certifications = [
    {
      title: "Skyscanner Travel Technology Virtual Experience",
      issuer: "Forage",
      date: "Issued Jun 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_2Dj29SsGYMYnY26zy_1748719380273_completion_certificate.pdf",
    },
    {
      title: "Accenture Virtual Experience Program",
      issuer: "Forage",
      date: "Issued May 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_2Dj29SsGYMYnY26zy_1748624555387_completion_certificate.pdf",
    },
    {
      title: "Deloitte Australia Virtual Experience Program",
      issuer: "Forage",
      date: "Issued May 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_2Dj29SsGYMYnY26zy_1748629035611_completion_certificate.pdf",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Issued Nov 2024",
      link: "https://drive.google.com/file/d/1dW5i5LPyyRxTSgd-hVzeIessTUDZ9Mb2/view?usp=drive_link",
    },
    {
      title: "GirlScript Summer of Code 2024 (Extended)",
      issuer: "GirlScript Summer of Code",
      date: "Issued Oct 2024",
      link: "https://drive.google.com/file/d/1WcnFEsg-49jxaFpmd4oTLpiuuHX4MCrs/view?usp=drive_link",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "Issued 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQFNXGZ6_81wqg/feedshare-shrink_1280/B56ZQQmYKTG8As-/0/1735445283712?e=1757548800&v=beta&t=wQzBd5scTMilVniHFwY67Po3JfveSYdfD6barQDgXAk",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatedSection>
      <div id="certifications" className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-14 tracking-tight select-none">
          Licenses & Certifications
        </h2>
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              className="relative group rounded-xl p-6 bg-gray-800/60 border border-gray-700 shadow-md
                flex items-start gap-5 cursor-pointer
                transition-transform duration-300
                hover:bg-gray-700 hover:scale-[1.03] hover:shadow-lg
                focus-within:ring-2 focus-within:ring-gray-400
                outline-none"
              variants={itemVariants}
              tabIndex={0}
              role="button"
              onClick={() => window.open(cert.link, "_blank", "noopener,noreferrer")}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  window.open(cert.link, "_blank", "noopener,noreferrer");
              }}
              aria-label={`View certificate: ${cert.title}`}
            >
              <div className="flex-shrink-0 bg-gray-900 p-3 rounded-full shadow-sm">
                {getIcon(cert.issuer)}
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-100 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mt-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 inline-flex items-center text-gray-400 hover:text-gray-200 font-semibold
                    transition-colors duration-200"
                >
                  Show credential
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
