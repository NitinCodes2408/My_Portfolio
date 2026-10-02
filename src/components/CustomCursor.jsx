import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Fast, smooth spring physics
  const springConfig = { damping: 26, stiffness: 440, mass: 0.35 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse) and user has not requested reduced motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      const isProject = target.closest('#projects .cursor-pointer, .project-card-interactive');
      const isInteractive = target.closest('a, button, [role="button"], input, textarea');
      
      setIsProjectHovered(!!isProject);
      setIsHovered(!!isInteractive || !!isProject);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Tiny Minimal Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-orange-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Restrained Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-orange-500/40 bg-orange-500/[0.04] flex items-center justify-center text-[9px] font-mono font-bold text-orange-600 select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isProjectHovered ? 44 : isHovered ? 28 : 16,
          height: isProjectHovered ? 44 : isHovered ? 28 : 16,
          opacity: isProjectHovered ? 0.95 : isHovered ? 0.8 : 0.4,
          borderColor: isHovered ? 'rgba(249, 115, 22, 0.6)' : 'rgba(249, 115, 22, 0.3)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        {isProjectHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="tracking-tighter"
          >
            VIEW↗
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
