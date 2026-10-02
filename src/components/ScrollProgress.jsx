import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
