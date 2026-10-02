import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <motion.section 
      id="certifications" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      {/* Section Header with masked reveal & extending divider */}
      <SectionHeader icon={Trophy} title="Training & Certifications" />

      {/* List matching reference structure */}
      <div className="space-y-5">
        {certifications.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 group"
          >
            {/* Amber accent line indicator */}
            <div className="flex-shrink-0 w-0.5 rounded-full bg-amber-300 self-stretch group-hover:bg-orange-500 transition-colors duration-250"></div>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-snug font-sans">
                {item.title}
              </p>
              <p className="text-xs text-orange-600 font-semibold mt-0.5 font-mono">
                {item.issuer} · {item.year}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-1 font-sans">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
