import { motion } from 'framer-motion';
import { Send, ArrowUpRight } from 'lucide-react';
import Section3DEffect from './Section3DEffect';

export default function Contact({ data }: { data: any }) {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden transition-colors duration-500">
      <Section3DEffect />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-violet" />
          <span className="font-mono text-xs text-violet tracking-widest uppercase">07 / CONNECT</span>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-black text-ink uppercase leading-[0.85] mb-12">
              Let's build <br /> the <span className="text-violet">future.</span>
            </h2>
            
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <span className="text-[10px] font-mono text-violet uppercase tracking-[0.3em] mb-4 block">Direct Line</span>
                <a 
                  href={`mailto:${data.identity.email}`} 
                  className="text-3xl md:text-5xl font-display font-black text-ink hover:text-violet transition-all flex items-center gap-4"
                  data-cursor="text"
                >
                  {data.identity.email}
                  <ArrowUpRight size={32} className="text-violet opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="flex flex-wrap gap-12">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Socials</span>
                  <div className="flex gap-6">
                    <a href={data.identity.linkedin} target="_blank" className="text-sm font-mono text-ink hover:text-violet transition-colors flex items-center gap-2">
                      LINKEDIN <ArrowUpRight size={14} />
                    </a>
                    <a href={data.identity.github} target="_blank" className="text-sm font-mono text-ink hover:text-violet transition-colors flex items-center gap-2">
                      GITHUB <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Location</span>
                  <span className="text-sm font-mono text-ink uppercase">{data.identity.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          {/* Decorative Background Text */}
          <div className="absolute -bottom-10 -right-10 text-white/5 font-display font-black text-9xl pointer-events-none">
            HI
          </div>

          <form 
            action="https://formspree.io/f/xgonggqe"
            method="POST"
            className="space-y-12 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-ink placeholder:text-muted focus:outline-none focus:border-violet transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-muted font-mono text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-violet peer-valid:-top-4">
                  Full Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-ink placeholder:text-muted focus:outline-none focus:border-violet transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-muted font-mono text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-violet peer-valid:-top-4">
                  Email Address
                </label>
              </div>
            </div>
            <div className="relative group">
              <textarea 
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 text-ink placeholder:text-muted focus:outline-none focus:border-violet transition-colors resize-none peer"
              />
              <label className="absolute left-0 top-4 text-muted font-mono text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-violet peer-valid:-top-4">
                Your Message
              </label>
            </div>
            <button 
              type="submit"
              className="group relative w-full py-8 bg-violet text-white font-display font-black uppercase tracking-widest text-sm overflow-hidden rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              data-cursor="button"
            >
              <div className="relative z-10 flex items-center justify-center gap-4">
                DISPATCH MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              {/* Button Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
