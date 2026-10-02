import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const MagneticElement = ({ children, maxDistance = 4, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsInteractive(isFinePointer && !prefersReducedMotion);
  }, []);

  const handleMouseMove = (e) => {
    if (!isInteractive || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = (clientX - centerX) / (width / 2);
    const deltaY = (clientY - centerY) / (height / 2);
    
    // Subtle, restrained magnetic pull (max 3-4px)
    setPosition({
      x: Math.max(Math.min(deltaX * maxDistance, maxDistance), -maxDistance),
      y: Math.max(Math.min(deltaY * maxDistance, maxDistance), -maxDistance),
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!isInteractive) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
