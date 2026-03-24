import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import Section3DEffect from './Section3DEffect';

function ProjectCard({ project }: { project: any }) {
  const [imageUrl, setImageUrl] = useState(project.custom_image || `https://picsum.photos/seed/${project.name}/800/600`);

  useEffect(() => {
    if (project.custom_image) {
      setImageUrl(project.custom_image);
      return;
    }
    
    fetch(`https://raw.githubusercontent.com/Ruthik27/${project.picture_serach}/main/README.md`)
      .then(res => res.text())
      .then(text => {
        const match = text.match(/!\[.*?\]\((.*?)\)/);
        if (match && match[1]) {
          setImageUrl(match[1]);
        }
      })
      .catch(() => {});
  }, [project.name, project.custom_image]);

  return (
    <div className="min-w-[400px] md:min-w-[600px] h-[70vh] px-4 group" data-cursor="image">
      <div className="h-full glass rounded-[2rem] overflow-hidden flex flex-col border border-ink/5 dark:border-white/5 relative transition-all duration-500">
        <div className="absolute top-6 left-6 z-10 flex gap-2">
          <span className="px-3 py-1 bg-bg/40 dark:bg-black/40 backdrop-blur-md border border-ink/10 dark:border-white/10 rounded-full text-[10px] font-mono text-ink/80 dark:text-white/80 transition-colors duration-500">
            {project.language || 'ML'}
          </span>
        </div>

        <div className="h-full overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80 transition-colors duration-500" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-10">
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-md">
                <h3 className="text-4xl md:text-5xl font-display font-black text-ink dark:text-white uppercase leading-none mb-4 group-hover:text-violet transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-muted text-sm line-clamp-2 font-body transition-colors duration-500">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.url} 
                  target="_blank" 
                  className="w-12 h-12 rounded-full border border-ink/10 dark:border-white/10 flex items-center justify-center text-ink dark:text-white hover:bg-ink dark:hover:bg-white hover:text-bg transition-all duration-500"
                  data-cursor="button"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.url} 
                  target="_blank" 
                  className="w-12 h-12 rounded-full bg-violet flex items-center justify-center text-white hover:scale-110 transition-all duration-500"
                  data-cursor="button"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ data }: { data: any }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%']);
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[500vh] bg-bg">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <Section3DEffect />
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-violet" />
              <span className="font-mono text-xs text-violet tracking-widest">05 / WORKS</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black text-ink dark:text-white uppercase leading-[0.85] transition-colors duration-500">
              CURATED <br /> PORTFOLIO.
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div style={{ x }} className="flex px-6 md:px-[10vw]">
          {data.projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* View More Card */}
          <div className="min-w-[400px] md:min-w-[600px] h-[70vh] px-4">
            <a 
              href="https://github.com/Ruthik27"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full glass rounded-[2rem] border border-dashed border-ink/20 dark:border-white/20 flex flex-col items-center justify-center group cursor-pointer transition-all duration-500"
              data-cursor="button"
            >
              <div className="w-24 h-24 rounded-full border border-ink/10 dark:border-white/10 flex items-center justify-center group-hover:bg-ink dark:group-hover:bg-white group-hover:text-bg dark:group-hover:text-black transition-all duration-500">
                <ArrowRight size={40} className="group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="mt-8 text-2xl font-display font-bold text-ink dark:text-white uppercase tracking-widest transition-colors duration-500">View All Repos</h3>
              <p className="mt-2 text-muted font-mono text-xs uppercase tracking-widest transition-colors duration-500">Github.com/Ruthik27</p>
            </a>
          </div>
        </motion.div>

        {/* Bottom Navigation / Progress */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-48 h-[2px] bg-ink/10 dark:bg-white/5 relative overflow-hidden transition-colors duration-500">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-violet"
                style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              />
            </div>
            <span className="font-mono text-[10px] text-muted tracking-widest uppercase transition-colors duration-500">
              {percent}% EXPLORED
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-muted tracking-widest uppercase transition-colors duration-500">
              REPOS: {data.projects.length}+
            </span>
            <div className="w-10 h-10 rounded-full border border-ink/10 dark:border-white/10 flex items-center justify-center transition-colors duration-500">
              <div className="w-1 h-1 bg-ink dark:bg-white rounded-full transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
