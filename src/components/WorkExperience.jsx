import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const WorkExperience = () => {
  const { workExperience } = portfolioData;
  const [expandedItems, setExpandedItems] = useState({ 0: false, 1: false });

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>
      {/* Section Header with masked reveal */}
      <SectionHeader icon={Briefcase} title="Work Experience" />

      {/* Vertical Timeline - with data-lenis-prevent for independent scrolling */}
      <div 
        className="overflow-y-auto max-h-[420px] scrollbar-thin-visible pr-2 overscroll-contain"
        data-lenis-prevent
      >
        {workExperience.map((item, idx) => {
          const isExpanded = !!expandedItems[idx];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-5 border-l-2 border-orange-200/80 pb-7 last:pb-0 group"
            >
              {/* Marker */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-white ring-2 ring-orange-100 group-hover:scale-125 transition-transform duration-200" />

              {/* Period & Location */}
              <p className="text-[10px] font-semibold text-orange-600 uppercase tracking-widest mb-0.5 font-mono">
                {item.period} · {item.location}
              </p>

              {/* Role Title */}
              <h3 className="text-sm font-bold text-gray-900 leading-snug font-sans">
                {item.role}
              </h3>

              {/* Company */}
              <p className="text-xs text-gray-600 mt-0.5 mb-1.5 font-sans font-medium">
                {item.company}
              </p>

              {/* Summary */}
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {item.summary}
              </p>

              {/* Expandable Bullet Points with AnimatePresence */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 pt-3 border-t border-gray-100 space-y-2.5 text-xs text-gray-600">
                      <p className="font-semibold text-gray-800 text-[11px] uppercase tracking-wider font-sans">
                        Key Responsibilities & Contributions:
                      </p>
                      <ul className="space-y-1.5 pl-1">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed text-gray-700 font-sans">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stack pills */}
                      {item.technologies && (
                        <div className="flex items-center gap-1.5 flex-wrap pt-2">
                          <span className="text-[10px] text-gray-400 font-medium font-sans">Stack:</span>
                          {item.technologies.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-mono border border-gray-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle Button matching reference style */}
              <button
                onClick={() => toggleExpand(idx)}
                className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-800 mt-2 font-semibold transition-colors cursor-pointer group/btn font-sans"
                aria-label={isExpanded ? "Show less details" : "Show more details"}
              >
                <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-x-0.5'}`}>
                  {isExpanded ? '↑' : '→'}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
