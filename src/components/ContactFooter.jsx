import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Check, Copy, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const ContactFooter = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer 
      id="contact" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="pb-28 sm:pb-32"
    >
      {/* Section Header with masked reveal & extending divider */}
      <SectionHeader icon={Mail} title="Contact" />

      <div className="space-y-6">
        {/* Strong Editorial Finale Heading */}
        <div className="pt-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 font-sans uppercase">
            LET'S BUILD <span className="text-orange-600">SOMETHING.</span>
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-xl mt-2.5">
            I am actively seeking software engineering and full-stack development opportunities. If you have an exciting project, opening, or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Email Item */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/80 border border-gray-200 hover:border-gray-300 hover:bg-gray-100/70 transition-all duration-200 group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 border border-orange-200/60">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Email</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs font-semibold text-gray-900 hover:text-orange-600 transition-colors truncate block font-sans"
                >
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex-shrink-0 ml-2 cursor-pointer"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Item */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/80 border border-gray-200 hover:border-gray-300 hover:bg-gray-100/70 transition-all duration-200 group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 border border-orange-200/60">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Phone</div>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="text-xs font-semibold text-gray-900 hover:text-orange-600 transition-colors truncate block font-sans"
                >
                  {personal.phone}
                </a>
              </div>
            </div>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex-shrink-0 ml-2"
              title="Call"
              aria-label="Call"
            >
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </a>
          </div>

          {/* LinkedIn */}
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/80 border border-gray-200 hover:border-gray-300 hover:bg-gray-100/70 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gray-200/80 text-gray-700 group-hover:bg-orange-50 group-hover:text-orange-600 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 border border-gray-300/50 group-hover:border-orange-200/60">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">LinkedIn</div>
                <div className="text-xs font-semibold text-gray-900 group-hover:text-orange-600 transition-colors font-sans">
                  in/nitin-bhandare
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          {/* GitHub */}
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/80 border border-gray-200 hover:border-gray-300 hover:bg-gray-100/70 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gray-200/80 text-gray-700 group-hover:bg-orange-50 group-hover:text-orange-600 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 border border-gray-300/50 group-hover:border-orange-200/60">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">GitHub</div>
                <div className="text-xs font-semibold text-gray-900 group-hover:text-orange-600 transition-colors font-sans">
                  @{personal.githubUsername}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Footer Editorial Metadata */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-sans">
          <div>
            © {new Date().getFullYear()} Nitin Bhandare. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500">
            <span>Nagpur, Maharashtra</span>
            <span>·</span>
            <span>Open to Relocation</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
