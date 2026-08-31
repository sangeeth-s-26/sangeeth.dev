import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, Eye } from 'lucide-react';
import { personalDetails, skillsData, experienceData, educationData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'details'

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171717]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white border border-[#E5E5E5] rounded-2xl p-4 sm:p-6 z-10 my-6 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5E5E5] shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FAFAF9] text-[#2563EB] border border-[#E5E5E5]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717]">Curriculum Vitae</h3>
                <span className="text-xs text-[#737373] font-mono">SANGEETH • Python Full Stack Developer</span>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              {/* Tab Selector */}
              <div className="flex items-center bg-[#FAFAF9] p-1 rounded-lg border border-[#E5E5E5]">
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    viewMode === 'pdf'
                      ? 'bg-white text-[#2563EB] shadow-sm'
                      : 'text-[#737373] hover:text-[#171717]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" /> PDF View
                </button>
                <button
                  onClick={() => setViewMode('details')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    viewMode === 'details'
                      ? 'bg-white text-[#2563EB] shadow-sm'
                      : 'text-[#737373] hover:text-[#171717]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" /> Overview
                </button>
              </div>

              {/* Direct Open PDF in New Tab */}
              <a
                href="/sangeeth_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E5E5] bg-white text-[#171717] font-semibold text-xs hover:border-[#171717] transition-colors"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open PDF</span>
              </a>

              {/* Download PDF Button */}
              <a
                href="/sangeeth_resume.pdf"
                download="Sangeeth_Python_FullStack_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563EB] text-white font-semibold text-xs hover:bg-[#1d4ed8] transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-[#FAFAF9] border border-[#E5E5E5] text-[#737373] hover:text-[#171717] ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-hidden pt-4">
            {viewMode === 'pdf' ? (
              <div className="w-full h-full min-h-[60vh] bg-[#FAFAF9] rounded-xl overflow-hidden border border-[#E5E5E5] relative">
                <iframe
                  src="/sangeeth_resume.pdf#toolbar=1"
                  title="Sangeeth Resume PDF"
                  className="w-full h-full min-h-[60vh] border-0"
                />
              </div>
            ) : (
              /* Overview Text Sheet View */
              <div className="bg-[#FAFAF9] rounded-xl p-6 border border-[#E5E5E5] space-y-6 text-[#737373] font-sans text-xs max-h-[65vh] overflow-y-auto">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-[#E5E5E5] gap-4">
                  <div>
                    <h1 className="text-2xl font-extrabold text-[#171717]">{personalDetails.name}</h1>
                    <p className="text-[#2563EB] font-semibold text-sm">{personalDetails.title}</p>
                  </div>
                  <div className="space-y-1 text-xs text-[#737373]">
                    <div>{personalDetails.email}</div>
                    <div>{personalDetails.location}</div>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Summary</h2>
                  <p className="leading-relaxed">{personalDetails.bio}</p>
                </div>

                {/* Tech Skills Matrix */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Technical Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {skillsData.map((s) => (
                      <div key={s.category}>
                        <strong className="text-[#171717]">{s.category}:</strong> {s.items.map(i => i.name).join(', ')}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Work Experience</h2>
                  {experienceData.map((exp, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[#171717]">{exp.role} – <span className="text-[#2563EB]">{exp.company}</span></h3>
                        <span className="text-xs text-[#737373]">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-[#737373] pl-2">
                        {exp.responsibilities.map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Education</h2>
                  {educationData.map((edu, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-[#171717]">{edu.degree}</h3>
                        <p className="text-xs text-[#737373]">{edu.university}</p>
                      </div>
                      <span className="text-xs text-[#2563EB] font-semibold">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

