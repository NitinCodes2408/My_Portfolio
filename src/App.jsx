import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/Hero';
import { RecentUpdates } from './components/RecentUpdates';
import { Education } from './components/Education';
import { WorkExperience } from './components/WorkExperience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Certifications } from './components/Certifications';
import { ContactFooter } from './components/ContactFooter';
import { BottomNavbar } from './components/BottomNavbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

export function App() {
  // Initialize Lenis smooth scroll for high-end scroll inertia, respecting reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900 relative">
      {/* 0. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Subtle Paper Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-grain opacity-100 z-[1]" aria-hidden="true" />

      {/* Desktop Refined Custom Cursor */}
      <CustomCursor />

      {/* Main Container matching reference layout: max-w-4xl mx-auto py-12 px-6 md:px-14 */}
      <main className="max-w-4xl mx-auto py-10 sm:py-12 px-5 sm:px-8 md:px-14 relative z-10">
        {/* 1. Hero / Introduction */}
        <Hero />

        {/* 2. Recent Updates */}
        <RecentUpdates />

        {/* 3. Education and Work Experience (2-Column Grid) */}
        <div id="work" className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          <Education />
          <WorkExperience />
        </div>

        {/* 4. Selected Projects (GymTrack AI, CareerBridge, Varsa) */}
        <FeaturedProjects />

        {/* 5. Technical Skills */}
        <TechnicalSkills />

        {/* 6. Training & Certifications */}
        <Certifications />

        {/* 7. Contact & Footer */}
        <ContactFooter />
      </main>

      {/* 8. Floating Bottom Pill Navbar */}
      <BottomNavbar />
    </div>
  );
}

export default App;
