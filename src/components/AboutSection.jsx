import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                01 / ABOUT ME
              </span>
              <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight mt-2">
                Engineering with clarity & precision.
              </h2>
            </div>

            {/* Profile Image Card */}
            <div className="relative group max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[#2563EB]/40">
                <img
                  src="/profile.png"
                  alt="Sangeeth - Python Full Stack Developer"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md border border-[#E5E5E5] rounded-xl shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#171717]">Sangeeth</div>
                  <div className="text-[10px] font-medium text-[#737373]">Python Full Stack Developer</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-[#737373] text-base leading-relaxed pt-2"
          >
            <p className="text-[#171717] font-medium text-lg leading-relaxed">
              Hello! I'm <span className="text-[#2563EB] font-semibold">Sangeeth</span>, a Python Full Stack Developer focused on building clean, efficient, and reliable web applications.
            </p>

            <p>
              My development philosophy centers on creating seamless integration between powerful backends and responsive frontend interfaces. I specialize in crafting robust backend architectures with <strong className="text-[#171717]">Python</strong>, <strong className="text-[#171717]">Django</strong>, and <strong className="text-[#171717]">Django REST Framework</strong>, alongside relational database management using <strong className="text-[#171717]">MySQL</strong>.
            </p>

            <p>
              On the frontend, I build dynamic, intuitive user interfaces with <strong className="text-[#171717]">React.js</strong> and modern <strong className="text-[#171717]">JavaScript</strong>. I pay close attention to clean component structure, state management, and reliable <strong className="text-[#171717]">REST APIs</strong> consumption.
            </p>

            {/* Currently focused on... */}
            <div className="p-6 rounded-xl bg-white border border-[#E5E5E5] mt-8 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Currently focused on
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                {personalDetails.currentlyFocusedOn}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
