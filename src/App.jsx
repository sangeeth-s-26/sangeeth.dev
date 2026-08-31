import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningScreen from './components/OpeningScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);

  // Active section observer
  useEffect(() => {
    if (showOpening) return;

    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [showOpening]);

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] text-[#171717] selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {/* 1. Opening Animation */}
      <AnimatePresence>
        {showOpening && (
          <OpeningScreen onComplete={() => setShowOpening(false)} />
        )}
      </AnimatePresence>

      {/* 2. Custom Desktop Cursor */}
      <CustomCursor />

      {/* 3. Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* 4. Main Portfolio Layout */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <StatsSection />
        <ContactSection />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
