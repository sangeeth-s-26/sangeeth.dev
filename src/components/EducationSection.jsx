import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 border-t border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">
            05 / ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight mt-2">
            Education.
          </h2>
        </motion.div>

        {/* Minimal Layout */}
        <div className="space-y-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                  <h3 className="text-lg font-bold text-[#171717]">{edu.degree}</h3>
                </div>
                <p className="text-sm text-[#737373] font-medium pl-7">
                  {edu.university}
                </p>
                <p className="text-xs text-[#737373] pl-7 pt-1 max-w-2xl">
                  {edu.details}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#171717] bg-[#FAFAF9] px-3.5 py-2 rounded-lg border border-[#E5E5E5] self-start md:self-center shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
