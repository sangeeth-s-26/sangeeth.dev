import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171717]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#E5E5E5] rounded-2xl shadow-xl overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-white border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between z-20">
            <div>
              <span className="text-[10px] font-bold font-mono tracking-widest text-[#2563EB] uppercase">
                PROJECT {project.number}
              </span>
              <h3 className="text-xl font-bold text-[#171717]">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#737373] hover:text-[#171717] hover:bg-[#FAFAF9] rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 overflow-y-auto space-y-8">
            
            {/* Image Preview */}
            <div className="relative rounded-xl border border-[#E5E5E5] overflow-hidden bg-[#FAFAF9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-80 object-cover object-top"
              />
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-2">
                OVERVIEW
              </h4>
              <p className="text-base text-[#171717] leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#FAFAF9] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#FAFAF9] border border-[#E5E5E5]">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  The Problem
                </h5>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAFAF9] border border-[#E5E5E5]">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  The Solution
                </h5>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-3">
                KEY FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#171717] leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Links */}
          <div className="bg-[#FAFAF9] border-t border-[#E5E5E5] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white text-xs font-semibold rounded-md hover:bg-[#1d4ed8] transition-colors"
              >
                Live Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#171717] border border-[#E5E5E5] text-xs font-semibold rounded-md hover:border-[#171717] transition-colors"
              >
                GitHub <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-medium text-[#737373] hover:text-[#171717]"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
