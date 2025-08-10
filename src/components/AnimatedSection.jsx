import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotate: 3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      ease: [0.4, 0, 0.2, 1],
      duration: 0.8,
      type: "spring",
      stiffness: 90,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    rotate: 2,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const AnimatedSection = ({ children, delay = 0, duration = 0.8, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Wrap children with motion.div for stagger effect if multiple children
  const wrappedChildren =
    React.Children.count(children) > 1
      ? React.Children.map(children, (child, index) => (
          <motion.div
            variants={childVariants}
            initial="hidden"
            animate={controls}
            custom={index}
            key={index}
          >
            {child}
          </motion.div>
        ))
      : (
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate={controls}
        >
          {children}
        </motion.div>
      );

  return (
    <motion.section
      ref={ref}
      className={`py-20 ${className}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      exit="exit"
      transition={{ delay, duration }}
      style={{ transformOrigin: "center bottom" }}
      whileInView={{ y: [-10, 0] }} // subtle parallax-like effect on scroll
      viewport={{ once: true, amount: 0.3 }}
    >
      {wrappedChildren}
    </motion.section>
  );
};

export default AnimatedSection;
