import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ArrowUpRight, 
  X,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GymTrackMockup, CareerBridgeMockup, VarsaMockup } from './ProjectMockups';
import { MagneticElement } from './MagneticElement';
import { SectionHeader } from './SectionHeader';

export const FeaturedProjects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const renderProjectVisual = (previewType) => {
    switch (previewType) {
      case 'gym':
        return <GymTrackMockup />;
      case 'career':
        return <CareerBridgeMockup />;
      case 'varsa':
        return <VarsaMockup />;
      default:
        return <GymTrackMockup />;
    }
  };

  return (
    <section id="projects" className="mb-14">
      {/* Section Header with masked reveal & extending divider */}
      <SectionHeader icon={FolderGit2} title="Selected Projects" className="mb-2" />
      <p className="text-sm text-gray-500 mb-8 font-sans">
        Spanning AI-driven web platforms, automated recruitment workflows, and digital cultural archiving.
      </p>

      {/* Editorial Vertical Project Entries */}
      <div className="space-y-12">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;

          return (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Editorial Project Number & Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  {/* Subtle Low-Contrast Editorial Project Number */}
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-gray-300 select-none tracking-tight leading-none mb-1 group-hover:text-orange-400/80 transition-colors duration-300">
                    {project.number}
                  </div>
                  <h3 
                    className="text-lg sm:text-xl font-bold text-gray-950 leading-snug cursor-pointer hover:text-orange-600 transition-colors duration-200 font-sans"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600 tracking-wide mt-0.5 font-sans">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] font-mono text-gray-500 px-2.5 py-0.5 rounded bg-gray-100 border border-gray-200 hidden sm:inline-block">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Mobile Category Tag */}
              <div className="sm:hidden mb-2">
                <span className="text-[10px] font-mono text-gray-500 px-2 py-0.5 rounded bg-gray-100 border border-gray-200">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-sans mb-3.5">
                {project.description}
              </p>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2.5 py-0.5 rounded-full border font-medium bg-orange-50/70 text-orange-700 border-orange-200 hover:border-orange-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Large Project Visual Showcase with clip reveal & 1.02 hover zoom */}
              <motion.div 
                initial={{ opacity: 0, clipPath: "inset(3% 0% 3% 0% round 12px)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 12px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-gray-200 shadow-xs bg-gray-950 mb-4 relative transition-all duration-300 group-hover:border-gray-400/80 group-hover:shadow-md cursor-pointer select-none"
                onClick={() => setSelectedProject(project)}
                title="Click to view detailed case study"
              >
                <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  {renderProjectVisual(project.previewType)}
                </div>
                
                {/* Subtle Hover Overlay Hint */}
                <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
                  <span className="text-xs font-semibold text-white bg-gray-900/95 px-4 py-2 rounded-full border border-gray-700 shadow-xl flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-y-0 translate-y-1">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </span>
                </div>
              </motion.div>

              {/* Action Links Row (GitHub & Live with animated underline & arrow translation) */}
              <div className="flex items-center gap-4 pt-1">
                {project.githubUrl && (
                  <MagneticElement maxDistance={3}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-gray-950 transition-colors relative py-0.5 font-sans"
                    >
                      <Github className="w-3.5 h-3.5 text-gray-500 group-hover/link:text-gray-900 transition-colors" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover/link:text-gray-900 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover/link:w-full transition-all duration-200" />
                    </a>
                  </MagneticElement>
                )}

                {project.liveUrl && (
                  <MagneticElement maxDistance={3}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors relative py-0.5 font-sans"
                    >
                      <span>Live Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-orange-500 group-hover/link:text-orange-700 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-600 group-hover/link:w-full transition-all duration-200" />
                    </a>
                  </MagneticElement>
                )}
              </div>

              {/* Editorial Divider */}
              {!isLast && (
                <div className="pt-10">
                  <div className="h-px bg-gray-200"></div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl p-6 sm:p-8 relative space-y-6 overscroll-contain"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 font-medium">
                    Project {selectedProject.number} · {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-semibold text-orange-600 mt-1 font-sans">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Extended Overview */}
              <div className="space-y-2.5 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4 font-sans">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans">
                  Project Architecture & Overview
                </h4>
                <p>{selectedProject.extendedDescription || selectedProject.description}</p>
              </div>

              {/* Core Features */}
              {selectedProject.features && (
                <div className="space-y-2 border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans">
                    Key Features & Technical Implementation
                  </h4>
                  <ul className="space-y-2 font-sans">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans">
                  Technology Stack
                </h4>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 font-mono border border-gray-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-lg transition-colors shadow-xs"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-gray-500 hover:text-gray-800 px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
