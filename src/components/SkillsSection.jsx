import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode2,
  Layout,
  Palette,
  Grid,
  Terminal,
  Server,
  Cpu,
  Database,
  GitBranch,
  Send,
  Laptop,
} from 'lucide-react';
import { Github } from './Icons';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode2,
  Layout,
  Palette,
  Grid,
  Terminal,
  Server,
  Cpu,
  Database,
  GitBranch,
  Github,
  Send,
  Laptop,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-[#E5E5E5] bg-[#FAFAF9]">
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
            02 / SKILLS & TECH STACK
          </span>
          <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight mt-2">
            Technologies & Tools I Work With.
          </h2>
        </motion.div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xs font-bold tracking-wider text-[#737373] uppercase border-b border-[#E5E5E5] pb-3 mb-4">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.items.map((item) => {
                  const IconComponent = iconMap[item.icon] || Code2;
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="group flex flex-col items-center justify-center p-4 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9] hover:bg-white hover:border-[#2563EB]/40 hover:shadow-sm text-center transition-all cursor-default"
                    >
                      <IconComponent className="w-5 h-5 text-[#171717] group-hover:text-[#2563EB] transition-colors mb-2" />
                      <span className="text-xs font-semibold text-[#171717] group-hover:text-[#2563EB] transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
