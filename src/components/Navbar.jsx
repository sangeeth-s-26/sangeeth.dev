import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#E5E5E5] py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-wider text-[#171717] hover:text-[#2563EB] transition-colors"
        >
          SANGEETH<span className="text-[#2563EB]">.</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.name.toLowerCase()
                  ? 'text-[#2563EB]'
                  : 'text-[#737373] hover:text-[#171717]'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Resume button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-[#171717] border border-[#171717] rounded-full hover:bg-[#171717] hover:text-white transition-all duration-200"
          >
            Resume <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-semibold text-[#171717] border border-[#171717] rounded-full"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#171717] hover:text-[#2563EB] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAFAF9] border-b border-[#E5E5E5] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === link.name.toLowerCase()
                      ? 'text-[#2563EB]'
                      : 'text-[#737373] hover:text-[#171717]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
