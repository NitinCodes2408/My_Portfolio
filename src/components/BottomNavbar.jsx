import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const BottomNavbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none px-4 max-w-full">
      <nav 
        className="pointer-events-auto relative inline-flex items-center h-10 rounded-xl text-white px-1.5 bg-neutral-900 border border-neutral-700/60 shadow-2xl select-none"
        aria-label="Bottom Navigation Bar"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative z-20 flex h-full cursor-pointer flex-col items-center justify-center px-3 sm:px-4 transition-all"
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Text */}
              <span
                className={`text-xs font-medium tracking-wide transition-opacity duration-150 ${
                  isActive
                    ? 'opacity-100 font-semibold text-white'
                    : 'opacity-40 hover:opacity-80 text-white'
                }`}
              >
                {item.label}
              </span>

              {/* Active Top Light Bar with Spotlight gradient beam matching reference */}
              {isActive && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute top-0 w-8 h-[2px] rounded-full bg-white/90"
                >
                  <div className="absolute left-[-20%] top-[2px] w-[140%] h-6 [clip-path:polygon(10%_100%,25%_0,75%_0,90%_100%)] bg-gradient-to-b from-white/15 to-transparent pointer-events-none"></div>
                </motion.div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
