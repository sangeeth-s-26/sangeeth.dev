import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E5E5E5] bg-[#FAFAF9] text-xs text-[#737373]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div>
          © 2026 Sangeeth. All rights reserved.
        </div>

        {/* Center */}
        <div className="font-mono font-medium text-[#171717]">
          Python • Django • React
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center space-x-6">
          <a
            href={personalDetails.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalDetails.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalDetails.socials.email}
            className="hover:text-[#171717] transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#171717] font-semibold hover:text-[#2563EB] transition-colors ml-4"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
