import React from 'react';
import { Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="pt-8 sm:pt-14 pb-10 border-b border-gray-100">
      <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 items-start">
        {/* Profile Portrait */}
        <div className="relative group flex-shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md ring-2 ring-orange-200/70 bg-stone-100 relative">
            <img
              src={personal.profilePhoto}
              alt={personal.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.48]"
              style={{
                transform: 'scale(1.38)',
                transformOrigin: '50% 16%'
              }}
              loading="eager"
            />
          </div>
          {/* Subtle online / available badge */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm" title="Available for opportunities"></span>
        </div>

        {/* Hero Details */}
        <div className="flex-1 space-y-3 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
                {personal.name}
              </h1>
              <p className="text-sm font-medium text-orange-600 tracking-wide mt-1 font-sans">
                {personal.tagline}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1 flex-shrink-0">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-stone-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-stone-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="p-2 text-stone-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                title={personal.email}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                aria-label="Phone Number"
                className="p-2 text-stone-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                title={personal.phone}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location / Status tag */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
            <span>{personal.location}</span>
          </div>

          {/* Bio text */}
          <div className="space-y-3 pt-2 text-sm text-stone-700 leading-relaxed font-sans">
            <p>
              I'm pursuing my Bachelor of Technology in <span className="font-semibold text-stone-900">Artificial Intelligence</span> at{' '}
              <span className="font-semibold text-stone-900">G. H. Raisoni College of Engineering & Management</span>, Nagpur (CGPA: 8.12, Expected 2027).
            </p>
            <p>
              My engineering focus centers on building responsive full-stack web applications, dependable backend systems, and clean user interfaces. I build with <span className="font-semibold text-stone-900">React, JavaScript, Node.js, Express, MySQL</span>, and <span className="font-semibold text-stone-900">Java / Python</span>, with a strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and CI/CD practices.
            </p>
            <p>
              Alongside core software development, I have practical familiarity with basic Machine Learning workflows and Data Analysis using Python, Pandas, NumPy, and Scikit-learn—applied toward high-utility platforms like campus recruitment automation and cultural heritage preservation.
            </p>
            <p>
              I'm passionate about writing maintainable code and solving real user problems. Feel free to explore my work below or reach out directly!
            </p>
          </div>

          {/* Editorial Quote matching reference */}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 italic">
            <span>
              {personal.quote} <span className="not-italic text-stone-500">— {personal.quoteAuthor}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
