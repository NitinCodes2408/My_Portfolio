import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  X,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GymTrackMockup, CareerBridgeMockup, VarsaMockup } from './ProjectMockups';

export const FeaturedProjects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="py-10 border-b border-stone-200/70">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 pt-1">
        <FolderGit2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
        <h2 className="text-xs font-bold text-stone-900 uppercase tracking-widest font-sans">
          Featured Projects
        </h2>
        <div className="flex-1 h-px bg-stone-200"></div>
      </div>

      {/* Editorial Vertical Project Entries */}
      <div className="space-y-12">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;

          return (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Project Showcase Area with 1.5% subtle zoom & border/shadow transition */}
              <div 
                className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-stone-200/90 shadow-xs bg-stone-900 mb-5 relative transition-all duration-300 group-hover:border-stone-400/80 group-hover:shadow-md cursor-pointer"
                onClick={() => setSelectedProject(project)}
                title="Click to view detailed case study"
              >
                <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                  {renderProjectVisual(project.previewType)}
                </div>
                
                {/* Subtle Hover Overlay Hint */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
                  <span className="text-xs font-medium text-white bg-stone-900/95 px-3.5 py-1.5 rounded-full border border-stone-700/80 shadow-lg flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-y-0 translate-y-1">
                    <span>View Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                  </span>
                </div>
              </div>

              {/* Project Title & Links Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 
                      className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug cursor-pointer hover:text-orange-600 transition-colors duration-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-stone-600 px-2 py-0.5 rounded bg-stone-100 border border-stone-200 hidden sm:inline-block">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-orange-600 tracking-wide mt-0.5 font-serif">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project External / GitHub Links */}
                <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-stone-950 bg-stone-100 hover:bg-stone-200/80 px-2.5 py-1 rounded-md transition-all duration-150 hover:-translate-y-0.5 font-medium border border-stone-200/70"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100/90 px-2.5 py-1 rounded-md transition-all duration-150 hover:-translate-y-0.5 font-medium border border-orange-200/80"
                      title="View Live Platform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Mobile Category tag */}
              <div className="sm:hidden mb-2">
                <span className="text-[10px] font-mono text-stone-600 px-2 py-0.5 rounded bg-stone-100 border border-stone-200">
                  {project.category}
                </span>
              </div>

              {/* Short Professional Description */}
              <p className="text-sm text-stone-600 leading-relaxed font-sans mb-4">
                {project.description}
              </p>

              {/* Technology Pills */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-full bg-stone-100/90 text-stone-700 font-sans border border-stone-200/80 hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 transition-all duration-150 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider between editorial projects */}
              {!isLast && (
                <div className="pt-10">
                  <div className="h-px bg-stone-200/80"></div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Project Case Study Deep Dive Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8 relative space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-medium text-stone-500 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Extended Overview */}
              <div className="space-y-3 text-sm text-stone-700 leading-relaxed border-t border-stone-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-sans">
                  Project Overview & Architecture
                </h4>
                <p>{selectedProject.extendedDescription || selectedProject.description}</p>
              </div>

              {/* Core Features */}
              {selectedProject.features && (
                <div className="space-y-2.5 border-t border-stone-100 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-sans">
                    Key Technical Features & Engineering
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2 border-t border-stone-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-sans">
                  Technologies & Architecture Stack
                </h4>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 font-mono border border-stone-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-stone-100 pt-5">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 px-4 py-2 rounded-lg transition-colors shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-lg transition-colors shadow-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Live Website</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-stone-500 hover:text-stone-800 px-3 py-2 rounded-lg font-medium transition-colors"
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
