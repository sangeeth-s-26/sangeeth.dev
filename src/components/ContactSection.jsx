import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalDetails } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Intro & Direct Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
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
              Have a project, opportunity, or idea? I'd love to hear from you. Feel free to reach out directly or send a message using the form.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href={personalDetails.socials.email}
                className="inline-flex items-center gap-3 px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#171717] hover:border-[#171717] transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>{personalDetails.email}</span>
              </a>

              <a
                href={personalDetails.socials.phone}
                className="inline-flex items-center gap-3 px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#171717] hover:border-[#171717] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>{personalDetails.phone}</span>
              </a>

              <a
                href={personalDetails.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#171717] hover:border-[#171717] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp ({personalDetails.phone})</span>
              </a>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={personalDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#171717] hover:border-[#171717] transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#2563EB]" />
                  LinkedIn
                </a>

                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#171717] hover:border-[#171717] transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4 text-[#2563EB]" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-sm"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#2563EB] mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-[#171717]">Message Sent!</h3>
                <p className="text-xs text-[#737373]">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg text-sm text-[#171717] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg text-sm text-[#171717] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg text-sm text-[#171717] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
