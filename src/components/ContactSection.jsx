import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalDetails } from '../data/portfolioData';

export default function ContactSection() {

  return (
    <section id="contact" className="py-24 border-t border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">
              06 / GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mt-2 leading-tight">
              Let's build something together.
            </h2>
          </div>

          <p className="text-[#737373] text-sm leading-relaxed">
            Have a project, opportunity, or idea? I'd love to hear from you. Feel free to reach out directly via email, phone, or social channels.
          </p>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
            <a
              href={personalDetails.socials.email}
              className="inline-flex items-center gap-3 px-5 py-4 bg-white border border-[#E5E5E5] rounded-xl text-xs font-semibold text-[#171717] hover:border-[#2563EB] hover:shadow-md transition-all shadow-sm"
            >
              <Mail className="w-5 h-5 text-[#2563EB]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#737373] uppercase font-bold tracking-wider">Email</span>
                <span className="text-sm font-bold">{personalDetails.email}</span>
              </div>
            </a>

            <a
              href={personalDetails.socials.phone}
              className="inline-flex items-center gap-3 px-5 py-4 bg-white border border-[#E5E5E5] rounded-xl text-xs font-semibold text-[#171717] hover:border-[#2563EB] hover:shadow-md transition-all shadow-sm"
            >
              <Phone className="w-5 h-5 text-[#2563EB]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#737373] uppercase font-bold tracking-wider">Phone</span>
                <span className="text-sm font-bold">{personalDetails.phone}</span>
              </div>
            </a>

            <a
              href={personalDetails.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-4 bg-white border border-[#E5E5E5] rounded-xl text-xs font-semibold text-[#171717] hover:border-emerald-500 hover:shadow-md transition-all shadow-sm"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#737373] uppercase font-bold tracking-wider">WhatsApp</span>
                <span className="text-sm font-bold">{personalDetails.phone}</span>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 bg-white border border-[#E5E5E5] rounded-xl text-xs font-bold text-[#171717] hover:border-[#2563EB] hover:shadow-md transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#2563EB]" />
                LinkedIn
              </a>

              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 bg-white border border-[#E5E5E5] rounded-xl text-xs font-bold text-[#171717] hover:border-[#2563EB] hover:shadow-md transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-[#2563EB]" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
