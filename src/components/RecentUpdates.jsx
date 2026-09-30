import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const RecentUpdates = () => {
  const { recentUpdates } = portfolioData;

  return (
    <motion.section 
      id="updates" 
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 border-b border-stone-200/70"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 pt-1">
        <Sparkles className="w-4 h-4 text-orange-500 flex-shrink-0" />
        <h2 className="text-xs font-bold text-stone-900 uppercase tracking-widest font-sans">
          Recent Updates
        </h2>
        <div className="flex-1 h-px bg-stone-200"></div>
      </div>

      {/* Timeline Stream with custom scroll */}
      <div className="overflow-y-auto max-h-[260px] scrollbar-thin-visible pr-2 space-y-0.5">
        {recentUpdates.map((item, index) => {
          const isLast = index === recentUpdates.length - 1;
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
              className="flex gap-3 group"
            >
              {/* Dot & Connecting Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.dotColor} ring-2 ring-white shadow-xs transition-transform duration-250 ease-out group-hover:scale-125`}
                />
                {!isLast && (
                  <div className="w-px flex-1 bg-stone-200 my-1.5 min-h-[1.75rem] transition-colors duration-200 group-hover:bg-stone-300" />
                )}
              </div>

              {/* Update Content */}
              <div className="min-w-0 pb-3.5">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className="text-[11px] text-stone-500 font-mono">
                    {item.date}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-px rounded border capitalize font-medium ${item.categoryColor} transition-colors duration-150`}
                  >
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-stone-800 font-medium leading-snug group-hover:text-stone-950 transition-colors duration-150">
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
