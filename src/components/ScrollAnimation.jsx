import { motion } from 'framer-motion';

const ScrollAnimation = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-left': {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    },
    'fade-right': {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    },
    'zoom-in': {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
