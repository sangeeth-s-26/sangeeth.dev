import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code, Cpu, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

// Custom Count Up component
function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(totalMiliseconds / end, 16);

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const icons = [Award, Code, Cpu, ShieldCheck];

export default function AchievementsSection() {
  return (
    <section className="py-20 relative z-10 bg-zinc-950/60 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievementsData.map((stat, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 text-center space-y-3 glass-card-hover group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-fuchsia-500/20 transition-all" />

                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-zinc-900 to-violet-950 border border-white/10 text-fuchsia-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-center justify-center">
                  <Counter value={stat.value} />
                  <span className="text-fuchsia-400 ml-0.5">{stat.symbol}</span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
