import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section3DEffect from './Section3DEffect';

function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative p-8 glass rounded-[2rem] group overflow-hidden transition-all duration-500"
    >
      {/* Spotlight */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,97,32,0.15),transparent_40%)]" 
           style={{ '--x': `${(x.get() + 0.5) * 100}%`, '--y': `${(y.get() + 0.5) * 100}%` } as any} />

      <h3 className="text-2xl font-display font-bold text-ink mb-6 group-hover:text-violet transition-colors duration-500">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-4 py-2 rounded-full border border-ink/10 dark:border-white/5 bg-ink/[0.04] dark:bg-white/5 text-xs font-mono text-muted group-hover:border-violet/30 group-hover:text-ink dark:group-hover:text-white transition-all duration-500"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Expertise({ data }: { data: any }) {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden transition-colors duration-500">
      <Section3DEffect />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
        <span className="font-mono text-xs text-violet tracking-widest mb-4 block">04 / STACK</span>
        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-ink transition-colors duration-500">
          Technical <br /> Arsenal.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(data.skills).map(([category, skills]: [string, any]) => (
          <SkillCard key={category} title={category} skills={skills} />
        ))}
      </div>
    </div>
    </section>
  );
}
