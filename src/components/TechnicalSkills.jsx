import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const TechnicalSkills = () => {
  const { skills } = portfolioData;

  const skillGroups = [
    { label: "Languages", skills: skills.languages },
    { label: "Frontend", skills: skills.frontend },
    { label: "Backend", skills: skills.backend },
    { label: "Databases", skills: skills.databases },
    { label: "Development", skills: skills.development },
    { label: "Tools & Platforms", skills: skills.tools },
    { label: "Concepts & Fundamentals", skills: skills.concepts },
    { label: "Machine Learning & Data Analysis", skills: skills.machineLearning }
  ];

  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      {/* Section Header with masked reveal & extending divider */}
      <SectionHeader icon={Cpu} title="Technical Skills" />

      {/* Skills Groups matching reference layout */}
      <div className="space-y-6">
        {skillGroups.map((group, idx) => (
          <motion.div 
            key={group.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5 font-sans">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[11px] px-3 py-1 bg-gray-50 text-gray-700 rounded-full border border-gray-200 font-medium hover:border-orange-300 hover:bg-orange-50/70 hover:text-orange-950 transition-all duration-150 transform hover:-translate-y-0.5 cursor-default select-none shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
