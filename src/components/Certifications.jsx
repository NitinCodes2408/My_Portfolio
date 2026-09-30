import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <motion.section 
      id="certifications" 
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 border-b border-stone-200/70"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 pt-1">
        <Trophy className="w-4 h-4 text-orange-500 flex-shrink-0" />
        <h2 className="text-xs font-bold text-stone-900 uppercase tracking-widest font-sans">
          Training & Certifications
        </h2>
        <div className="flex-1 h-px bg-stone-200"></div>
      </div>

      {/* List matching reference */}
      <div className="space-y-5">
        {certifications.map((item, idx) => (
          <div key={idx} className="flex gap-4 group">
            {/* Amber accent line indicator */}
            <div className="flex-shrink-0 w-0.5 rounded-full bg-amber-300 self-stretch group-hover:bg-orange-500 transition-colors duration-200"></div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-stone-900 leading-snug group-hover:text-stone-950 transition-colors duration-150">
                  {item.title}
                </p>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-orange-600 font-medium mt-0.5 font-mono">
                {item.issuer} · {item.year}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-1 font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
