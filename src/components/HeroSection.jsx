import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Terminal, Cpu, Database, ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5E5E5]/50 border border-[#E5E5E5] text-xs font-medium text-[#171717]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.1]"
          >
            Building digital experiences with <span className="text-[#2563EB]">Python</span> & <span className="text-[#2563EB]">React</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-[#737373] max-w-xl leading-relaxed font-normal"
          >
            Python Full Stack Developer focused on building modern, scalable and user-friendly web applications.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#2563EB] transition-colors shadow-sm"
            >
              VIEW MY WORK <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#171717] border border-[#E5E5E5] text-xs font-semibold uppercase tracking-wider rounded-md hover:border-[#171717] transition-colors"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>

        {/* Right Side Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="w-full max-w-md bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm space-y-5 relative">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-mono text-[#737373]">developer.py</span>
            </div>

            {/* Code Snippet Card */}
            <div className="font-mono text-xs text-[#171717] bg-[#FAFAF9] p-4 rounded-lg border border-[#E5E5E5] space-y-2 leading-relaxed">
              <p className="text-[#737373]"># Developer Profile</p>
              <p><span className="text-[#2563EB] font-semibold">class</span> Developer:</p>
              <p className="pl-4">name = <span className="text-emerald-600">"Sangeeth"</span></p>
              <p className="pl-4">role = <span className="text-emerald-600">"Python Full Stack"</span></p>
              <p className="pl-4">stack = [<span className="text-emerald-600">"Django"</span>, <span className="text-emerald-600">"React"</span>, <span className="text-emerald-600">"MySQL"</span>]</p>
              <p className="pl-4">status = <span className="text-emerald-600">"Building clean software"</span></p>
            </div>

            {/* Tech Badges Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                <Terminal className="w-4 h-4 text-[#2563EB]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">Python</div>
                  <div className="text-[10px] text-[#737373]">Backend Core</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                <Code2 className="w-4 h-4 text-[#2563EB]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">React.js</div>
                  <div className="text-[10px] text-[#737373]">Frontend UI</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                <Cpu className="w-4 h-4 text-[#2563EB]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">Django</div>
                  <div className="text-[10px] text-[#737373]">REST APIs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                <Database className="w-4 h-4 text-[#2563EB]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">MySQL</div>
                  <div className="text-[10px] text-[#737373]">Relational DB</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#737373]">
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-flex flex-col items-center gap-1 text-[11px] font-medium tracking-wider uppercase hover:text-[#171717]"
        >
          Scroll
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </section>
  );
}
