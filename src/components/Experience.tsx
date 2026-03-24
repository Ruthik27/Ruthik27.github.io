import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Section3DEffect from './Section3DEffect';

export default function Experience({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);
  const experiences = data?.experience || [];
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Use a small timeout to ensure the new content is rendering or at least the state update has triggered
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  };

  return (
    <section id="experience" className="py-40 px-6 md:px-12 bg-bg relative overflow-hidden border-y border-ink/5 dark:border-white/5 transition-colors duration-500">
      <Section3DEffect />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-12 h-[1px] bg-violet" />
          <h2 className="font-mono text-violet text-[10px] tracking-[0.4em] uppercase">
            02 / TRAJECTORY
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Timeline Selector */}
          <div className="lg:w-1/3">
            <div className="flex flex-col gap-8">
              {experiences.map((exp: any, i: number) => (
                <button
                  key={exp.id}
                  onClick={() => handleTabClick(i)}
                  className="group text-left relative pl-8"
                  data-cursor="button"
                >
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-500 ${activeTab === i ? 'bg-violet scale-[3] shadow-[0_0_10px_#FF6120]' : 'bg-ink/10 dark:bg-white/10 group-hover:bg-ink/30 dark:group-hover:bg-white/30'}`} />
                  <span className={`block font-mono text-[9px] uppercase tracking-[0.2em] mb-2 transition-colors ${activeTab === i ? 'text-violet' : 'text-muted'}`}>
                    {exp.period}
                  </span>
                  <h4 className={`font-display text-xl font-bold uppercase tracking-tight transition-colors ${activeTab === i ? 'text-ink' : 'text-ink/40 dark:text-white/20 group-hover:text-ink/60 dark:group-hover:text-white/40'}`}>
                    {exp.roleShort || exp.org}
                  </h4>
                </button>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:w-2/3" ref={cardRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[2rem] p-10 md:p-16 transition-all duration-500"
              >
                <div className="mb-12">
                  <span className="font-mono text-[9px] text-violet uppercase tracking-[0.3em] mb-4 block">
                    {experiences[activeTab].org}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-ink transition-colors duration-500">
                    {experiences[activeTab].role}
                  </h3>
                  <div className="flex items-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {experiences[activeTab].location}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  {experiences[activeTab].description.map((item: string, idx: number) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <div className="mt-2 w-1.5 h-[1px] bg-violet/30 group-hover/item:bg-violet transition-colors flex-shrink-0" />
                      <p className="text-muted text-sm md:text-base leading-relaxed group-hover/item:text-ink/80 dark:group-hover/item:text-white/80 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-violet/5 border border-violet/10 rounded-full font-mono text-[9px] text-muted uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
