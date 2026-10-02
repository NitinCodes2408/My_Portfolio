import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <div>
      {/* Section Header with masked reveal */}
      <SectionHeader icon={GraduationCap} title="Education" />

      {/* Vertical Timeline - with data-lenis-prevent for independent scrolling */}
      <div 
        className="overflow-y-auto max-h-[420px] scrollbar-thin-visible pr-2 overscroll-contain"
        data-lenis-prevent
      >
        {education.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-5 border-l-2 border-orange-200/80 pb-7 last:pb-0 group"
          >
            {/* Timeline Marker */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-white ring-2 ring-orange-100 group-hover:scale-125 transition-transform duration-200" />

            {/* Duration & Location */}
            <p className="text-[10px] font-semibold text-orange-600 uppercase tracking-widest mb-0.5 font-mono">
              {item.duration} · {item.location}
            </p>

            {/* Degree Title */}
            <h3 className="text-sm font-bold text-gray-900 leading-snug font-sans">
              {item.degree}
            </h3>

            {/* Institution */}
            <p className="text-xs text-gray-600 mt-0.5 font-sans">
              {item.institution}
            </p>

            {/* Score / Grade */}
            <p className="text-xs text-gray-400 mt-0.5 font-mono font-medium">
              {item.score}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
