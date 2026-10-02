import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const RecentUpdates = () => {
  const { recentUpdates } = portfolioData;

  return (
    <motion.section 
      id="updates" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      {/* Section Header with masked reveal & extending divider */}
      <SectionHeader icon={BookOpen} title="Recent Updates" />

      {/* Timeline Stream matching reference layout - with data-lenis-prevent for independent scrolling */}
      <div 
        className="overflow-y-auto max-h-[200px] scrollbar-thin-visible pr-2 overscroll-contain"
        data-lenis-prevent
      >
        {recentUpdates.map((item, index) => {
          const isLast = index === recentUpdates.length - 1;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3.5 group"
            >
              {/* Dot & Connecting Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.dotColor} group-hover:scale-125 transition-transform duration-200`} />
                {!isLast && (
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-px flex-1 bg-gray-200 my-1.5 min-h-[1.75rem] origin-top" 
                  />
                )}
              </div>

              {/* Update Content */}
              <div className={`min-w-0 ${isLast ? '' : 'pb-3.5'}`}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[11px] text-gray-400 font-mono tracking-tight">
                    {item.date}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded border capitalize font-medium ${item.categoryColor}`}>
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-800 font-medium leading-snug">
                  {item.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
