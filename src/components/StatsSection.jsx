import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { statsData } from '../data/portfolioData';

function CountUp({ value, symbol }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1200; // ms
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formattedCount = count < 10 ? `0${count}` : `${count}`;

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-extrabold text-[#171717]">
      {formattedCount}{symbol}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 border-t border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`space-y-1 ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
            >
              <CountUp value={stat.value} symbol={stat.symbol} />
              <div className="text-sm font-bold text-[#171717]">{stat.label}</div>
              <div className="text-xs text-[#737373]">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
