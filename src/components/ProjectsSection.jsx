import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 border-t border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">
            03 / FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mt-2">
            Selected Full Stack Projects.
          </h2>
        </motion.div>

        {/* Editorial Project Cards List */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                <div>
                  {/* Number */}
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] block mb-3">
                    {project.number}
                  </span>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#737373] uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#737373] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
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

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E5E5E5]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#171717] group-hover:text-[#2563EB] uppercase tracking-wider transition-colors"
                  >
                    View Project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#737373] hover:text-[#171717] transition-colors"
                  >
                    GitHub <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Preview Image */}
              <div
                onClick={() => setSelectedProject(project)}
                className="lg:col-span-6 bg-[#FAFAF9] border-t lg:border-t-0 lg:border-l border-[#E5E5E5] relative overflow-hidden cursor-pointer flex items-center justify-center p-6 lg:p-8"
              >
                <div className="w-full rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm group-hover:shadow-lg transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
