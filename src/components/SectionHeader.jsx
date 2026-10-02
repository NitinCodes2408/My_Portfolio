import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ icon: Icon, title, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 mb-6 pt-2 ${className}`}>
      {Icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <Icon className="w-4 h-4 text-orange-500" />
        </motion.div>
      )}

      {/* Masked Upward Heading Reveal */}
      <div className="overflow-hidden">
        <motion.h2 
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold text-gray-900 uppercase tracking-widest font-sans select-none"
        >
          {title}
        </motion.h2>
      </div>

      {/* Extending Divider Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 h-px bg-gray-200 origin-left"
      />
    </div>
  );
};
