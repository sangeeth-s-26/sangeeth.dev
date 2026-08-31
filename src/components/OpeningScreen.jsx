import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF9] text-[#171717] px-4 select-none"
    >
      <div className="text-center overflow-hidden">
        {/* Name reveal */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-[#171717]"
        >
          SANGEETH
        </motion.div>

        {/* Title reveal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-sm md:text-base font-medium tracking-wide text-[#737373] uppercase"
        >
          Python Full Stack Developer
        </motion.div>
      </div>

      {/* Subtle bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        className="w-16 h-[2px] bg-[#2563EB] mt-6 origin-center"
      />
    </motion.div>
  );
}
