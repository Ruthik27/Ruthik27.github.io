export default function Footer({ data }: { data: any }) {
  return (
    <footer className="py-8 border-t border-white/5 bg-bg2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="font-display font-bold text-2xl text-white">
            RK<span className="text-violet">.</span>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-ink/60 tracking-widest uppercase">
              Made with intent, built with AI.
            </p>
            <p className="font-mono text-[10px] text-violet tracking-widest uppercase">
              From idea to shipped in 2:49:00
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:items-center gap-6">
          <div className="flex gap-8">
            <a href={data.identity.github} className="text-[10px] font-mono text-muted hover:text-white transition-colors tracking-widest">GITHUB</a>
            <a href={data.identity.linkedin} className="text-[10px] font-mono text-muted hover:text-white transition-colors tracking-widest">LINKEDIN</a>
          </div>
          <p className="font-mono text-[9px] text-muted/40 tracking-[0.3em] uppercase">
            © 2026 {data.identity.name}
          </p>
        </div>

        <div className="md:text-right space-y-2">
          <div className="flex items-center md:justify-end gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-mono text-[10px] text-ink uppercase tracking-widest">
              {data.identity.location}
            </p>
          </div>
          <p className="font-mono text-[10px] text-muted uppercase tracking-widest">
            {new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })} PST
          </p>
        </div>
      </div>
    </footer>
  );
}
