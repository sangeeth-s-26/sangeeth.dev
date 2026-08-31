import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">
            04 / EXPERIENCE
          </span>
          <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight mt-2">
            Work & Industry Practice.
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#E5E5E5] ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2563EB]" />

              {/* Card Container */}
              <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E5E5] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#171717]">{exp.role}</h3>
                    <div className="text-sm font-semibold text-[#2563EB]">{exp.company}</div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#737373] font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2 text-sm text-[#737373]">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-[#FAFAF9] border border-[#E5E5E5] text-[#171717] text-[11px] font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
