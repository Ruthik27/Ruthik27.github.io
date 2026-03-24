import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Github, MapPin, Clock, Mail } from 'lucide-react';
import MeteorPhysics from './MeteorPhysics';

export default function About({ data }: { data: any }) {
  return (
    <section id="about" data-cursor="none" className="relative py-32 overflow-hidden transition-colors duration-500 cursor-none">
      <MeteorPhysics />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pointer-events-auto"
        >
          <span className="font-mono text-xs text-violet tracking-widest mb-4 block">01 / OVERVIEW</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-ink mb-8 transition-colors duration-500">
            I architect <br />intelligence.
          </h2>
          <p className="text-xl text-muted leading-relaxed mb-12 transition-colors duration-500">
            I design <span className="text-ink font-semibold">ML systems and MLOps pipelines</span>. that make churn, risk, and forecasting models reliable, observable, and actually used by the business.
            {/*Based in {data.identity.location}, I bridge the gap between complex data and actionable insights.*/}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 text-muted">
              <div className="w-10 h-10 rounded-full bg-ink/5 dark:bg-white/5 backdrop-blur-md border border-ink/10 dark:border-white/10 flex items-center justify-center text-violet transition-all duration-500">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest">Location</p>
                <p className="text-ink font-medium transition-colors duration-500">{data.identity.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted">
              <div className="w-10 h-10 rounded-full bg-ink/5 dark:bg-white/5 backdrop-blur-md border border-ink/10 dark:border-white/10 flex items-center justify-center text-violet transition-all duration-500">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest">Timezone</p>
                <p className="text-ink font-medium transition-colors duration-500">{data.identity.timezone}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Bento Grid */}
        <div className="grid grid-cols-2 gap-4 pointer-events-auto">
          {data.stats.map((stat: any, index: number) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="col-span-1 p-8 bg-ink/5 dark:bg-white/5 backdrop-blur-[1px] border border-ink/5 dark:border-white/5 rounded-[2rem] flex flex-col justify-between transition-all duration-500 h-48"
            >
              <span className="text-4xl md:text-5xl font-display font-bold text-ink transition-colors duration-500">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
