import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import Section3DEffect from './Section3DEffect';

export default function Education({ data }: { data: any }) {
  const education = data?.education || [];

  return (
    <section id="education" className="py-40 px-6 md:px-12 bg-bg relative overflow-hidden border-y border-ink/5 dark:border-white/5 transition-colors duration-500">
      <Section3DEffect />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-12 h-[1px] bg-violet" />
          <h2 className="font-mono text-violet text-[10px] tracking-[0.4em] uppercase">
            03 / FOUNDATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-[2rem] p-8 md:p-12 h-full flex flex-col transition-all duration-500 hover:border-violet/30">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2">
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={edu.school} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${edu.school}/100/100`;
                        }}
                      />
                    ) : (
                      <GraduationCap className="w-8 h-8 text-violet" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-violet/5 border border-violet/10 rounded-full">
                    <Calendar className="w-3 h-3 text-violet" />
                    <span className="font-mono text-[9px] text-muted uppercase tracking-wider">
                      {edu.year}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-2 text-ink transition-colors duration-500">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-[10px] text-violet uppercase tracking-[0.2em] mb-6">
                    {edu.school}
                    {edu.subSchool && (
                      <span className="block text-muted/60 mt-1">
                        {edu.subSchool}
                      </span>
                    )}
                  </p>
                  <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
                    {edu.description}
                  </p>
                </div>

                {edu.link && (
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-mono text-muted hover:text-violet transition-colors uppercase tracking-widest mt-auto group/link"
                    data-cursor="button"
                  >
                    View Program
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
