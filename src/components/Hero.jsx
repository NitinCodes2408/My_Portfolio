import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MagneticElement } from './MagneticElement';

export const Hero = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: Linkedin, href: personal.linkedinUrl, label: "LinkedIn Profile", title: "LinkedIn", isExternal: true },
    { icon: Github, href: personal.githubUrl, label: "GitHub Profile", title: "GitHub", isExternal: true },
    { icon: Mail, href: `mailto:${personal.email}`, label: "Send Email", title: `Email: ${personal.email}`, isExternal: false },
    { icon: Phone, href: `tel:${personal.phone.replace(/\s+/g, '')}`, label: "Phone", title: `Call: ${personal.phone}`, isExternal: false },
  ];

  return (
    <section id="about" className="pt-6 sm:pt-12 pb-10 border-b border-gray-100">
      {/* 1. Profile Portrait with gentle entrance reveal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xs ring-1 ring-gray-200/90 bg-gray-100 relative mb-6 sm:mb-8 transition-shadow duration-300 hover:shadow-md group cursor-default"
      >
        <img
          src={personal.profilePhoto}
          alt={personal.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.78]"
          style={{
            transform: 'scale(1.72)',
            transformOrigin: '50% 16%'
          }}
          loading="eager"
        />
      </motion.div>

      {/* Hero Details */}
      <div className="w-full space-y-2">
        {/* 2. Name & Social Links Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 leading-tight tracking-tight font-sans"
            >
              {personal.name}
            </motion.h1>
          </div>

          {/* Social Links with Staggered Entrance and Micro-interactions */}
          <div className="flex items-center gap-2 sm:gap-3 pt-1 flex-shrink-0">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.38 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <MagneticElement maxDistance={3}>
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      className="text-gray-400 hover:text-orange-600 transition-colors p-1.5 rounded-lg hover:bg-orange-50/50 block"
                      title={item.title}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </MagneticElement>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Professional Tagline */}
        <div className="overflow-hidden pt-0.5">
          <motion.p 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-semibold text-orange-600 tracking-wide font-sans"
          >
            {personal.tagline}
          </motion.p>
        </div>

        {/* 4. Introduction Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 pt-3 text-sm sm:text-[14.5px] text-gray-700 leading-relaxed font-sans"
        >
          <p>
            I am a Software Engineer and Full-Stack Developer pursuing my Bachelor of Technology in <span className="font-semibold text-gray-900">Artificial Intelligence</span> at{' '}
            <span className="font-semibold text-gray-900">G. H. Raisoni College of Engineering & Management</span>, Nagpur (CGPA: 8.12, Expected Graduation: 2027).
          </p>
          <p>
            My core engineering focus centers on building responsive full-stack applications, reliable backend systems, and clean user interfaces. I work with <span className="font-semibold text-gray-900">React, JavaScript, Java, Node.js, Express, Android Development</span>, and <span className="font-semibold text-gray-900">MySQL / PostgreSQL</span>, grounded in Object-Oriented Programming, Data Structures & Algorithms, and Software Engineering practices.
          </p>
          <p>
            Alongside core software development, I have practical familiarity with foundational Machine Learning workflows and Data Analysis using Python, Pandas, NumPy, and Scikit-learn—applied toward high-utility platforms like automated campus recruitment systems and regional cultural heritage preservation.
          </p>
          <p>
            I'm always eager to connect and collaborate on challenging engineering problems, scalable web platforms, or technical initiatives. Feel free to reach out!
          </p>
        </motion.div>

      </div>
    </section>
  );
};
