import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section3DEffect from './Section3DEffect';

export default function Certifications({ data }: { data: any }) {
  const [hoveredCert, setHoveredCert] = useState<any>(null);
  const [cardPos, setCardPos] = useState({ top: true, left: true });
  const sectionRef = useRef<HTMLElement>(null);

  // Flatten and group certifications for clustering
  const allCerts = data?.certifications ? [...data.certifications].sort((a, b) => {
    // Sort by category first to cluster them
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    // Then by date (newest first)
    return new Date(b.issued).getTime() - new Date(a.issued).getTime();
  }) : [];

  const handleMouseEnter = (e: React.MouseEvent, cert: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Determine if card should be above or below
    // If element is in the bottom 70% of the screen, show above
    const showAbove = rect.top > viewportHeight * 0.3;
    // Determine if card should be left or right
    // If element is in the right 50% of the screen, show left
    const showLeft = rect.left > viewportWidth * 0.5;

    setCardPos({ top: !showAbove, left: !showLeft });
    setHoveredCert(cert);
  };

  // Helper to get logo based on issuer
  const getLogo = (issuer: string) => {
    const i = issuer.toLowerCase();
    if (i.includes('aws') || i.includes('amazon')) return 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg';
    if (i.includes('google')) return 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';
    if (i.includes('oracle')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1200px-Oracle_logo.svg.png';
    if (i.includes('cisco')) return 'https://www.logo.wine/a/logo/Cisco_Systems/Cisco_Systems-Logo.wine.svg';
    if (i.includes('vmware')) return 'https://www.logo.wine/a/logo/VMware/VMware-Logo.wine.svg';
    if (i.includes('coursera')) return 'https://cdn.brandfetch.io/idTHfL51P-/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667591275475';
    if (i.includes('udemy')) return 'https://www.logo.wine/a/logo/Udemy/Udemy-Logo.wine.svg';
    if (i.includes('university of michigan')) return 'https://www.logo.wine/a/logo/University_of_Michigan/University_of_Michigan-Logo.wine.svg';
    if (i.includes('johns hopkins')) return 'https://www.logo.wine/a/logo/Johns_Hopkins_University/Johns_Hopkins_University-Logo.wine.svg';
    if (i.includes('sololearn')) return 'https://upload.wikimedia.org/wikipedia/commons/5/53/SoloLearn_logo.svg';
    if (i.includes('mathworks')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png';
    return null;
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-32 px-8 md:px-12 bg-bg relative z-[50] transition-colors duration-500">
      <Section3DEffect />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/10 dark:bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="font-mono text-cyan text-sm tracking-[0.3em] uppercase mb-4">
              06 / CERTIFICATIONS
            </h2>
            <h3 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-ink transition-colors duration-500">
              Neural <span className="italic font-light text-muted transition-colors duration-500">Badges</span>
            </h3>
          </div>
          <p className="max-w-md text-muted font-sans text-lg transition-colors duration-500">
            A collection of verified technical proficiencies across Machine Learning, Cloud Architecture, and Data Science.
          </p>
        </div>

        {/* Clustered Display - Honeycomb-like wrap */}
        <div className="flex flex-wrap gap-x-2 gap-y-8 md:gap-x-4 md:gap-y-12 justify-center max-w-5xl mx-auto">
          {allCerts.map((cert, i) => {
            const logo = getLogo(cert.issuer);
            const isLargeLogo = cert.issuer.toLowerCase().includes('udemy') || cert.issuer.toLowerCase().includes('vmware') || cert.issuer.toLowerCase().includes('university of michigan') || cert.issuer.toLowerCase().includes('johns hopkins') || cert.issuer.toLowerCase().includes('sololearn') || cert.issuer.toLowerCase().includes('coursera') || cert.issuer.toLowerCase().includes('oracle') || cert.issuer.toLowerCase().includes('cisco');
            
            return (
              <div
                key={cert.name + i}
                className="relative group"
                onMouseEnter={(e) => handleMouseEnter(e, cert)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Hexagon Shape */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 2, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.02,
                    scale: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  className="w-28 h-32 md:w-36 md:h-40 relative flex items-center justify-center z-10"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Outer Border/Shadow Layer */}
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/10 transition-colors duration-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  
                  {/* Main Background Layer - Solid White */}
                  <div className="absolute inset-[1px] bg-white transition-colors duration-500 shadow-inner" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  
                  {/* Inner Glow / Hover Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden" style={{ clipPath: 'inherit' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/20 dark:via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  </div>
                  
                  <div className="relative z-10 text-center p-4 flex flex-col items-center justify-center h-full">
                    {logo ? (
                      <div className="relative mb-3 group-hover:scale-110 transition-transform duration-500">
                        {/* Logo Background for visibility */}
                        <div className="absolute inset-0 bg-cyan/10 dark:bg-cyan/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img 
                          src={logo} 
                          alt={cert.issuer} 
                          className="w-12 h-12 md:w-16 md:h-16 object-contain relative z-10 transition-all duration-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                          style={{ transform: isLargeLogo ? 'scale(2.0)' : undefined }}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="font-mono text-[8px] md:text-[10px] text-cyan mb-1 uppercase tracking-tighter opacity-70">
                        {cert.issuer.split(' ')[0]}
                      </div>
                    )}
                    <h5 className="font-display text-[8px] md:text-[10px] font-bold text-black/70 group-hover:text-black leading-tight uppercase line-clamp-2 max-w-[85%] transition-colors duration-500">
                      {cert.name}
                    </h5>
                  </div>

                  {/* Animated Border */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 115">
                    <path
                      d="M50 2L98 28V87L50 113L2 87V28L50 2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-black/5 dark:text-white/10 group-hover:text-cyan transition-colors duration-500"
                      strokeDasharray="400"
                      strokeDashoffset="400"
                    />
                  </svg>
                </motion.div>

                {/* Dynamic Hover Info Card */}
                <AnimatePresence>
                  {hoveredCert === cert && (
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        y: cardPos.top ? 20 : -20, 
                        scale: 0.9,
                        filter: 'blur(10px)'
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        filter: 'blur(0px)'
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: cardPos.top ? 20 : -20, 
                        scale: 0.9,
                        filter: 'blur(10px)'
                      }}
                      className={`absolute z-[100] w-80 p-6 glass rounded-3xl pointer-events-auto transition-all duration-500
                        ${cardPos.top ? 'top-full mt-6' : 'bottom-full mb-6'}
                        ${cardPos.left ? 'left-1/2 -translate-x-1/2' : 'right-0'}
                      `}
                    >
                      {/* Connector Arrow */}
                      <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-l border-t border-white/40 dark:border-white/10 rotate-45 transition-colors duration-500
                        ${cardPos.top ? '-top-2' : '-bottom-2'}
                      `} />

                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          {logo && (
                            <div className="p-2 bg-black/5 dark:bg-white/5 rounded-xl transition-colors duration-500">
                              <img 
                                src={logo} 
                                alt={cert.issuer} 
                                className="w-8 h-8 object-contain"
                                style={{ transform: isLargeLogo ? 'scale(2.0)' : undefined }}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                          <div>
                            <div className="font-mono text-[10px] text-cyan uppercase tracking-wider">
                              {cert.issuer}
                            </div>
                            <div className="font-mono text-[9px] text-muted uppercase transition-colors duration-500">
                              Issued {cert.issued}
                            </div>
                          </div>
                        </div>
                        <div className="px-2 py-1 bg-cyan/10 border border-cyan/20 rounded text-[8px] font-mono text-cyan uppercase tracking-tighter">
                          {cert.category}
                        </div>
                      </div>

                      <h6 className="font-display text-xl font-bold text-ink dark:text-white mb-3 leading-tight uppercase tracking-tight transition-colors duration-500">
                        {cert.name}
                      </h6>
                      
                      <div className="flex flex-col gap-4">
                        {cert.show_credential_url && (
                          <a 
                            href={cert.show_credential_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 bg-violet text-white font-mono text-[10px] uppercase font-bold rounded-xl hover:bg-cyan hover:text-black transition-all duration-300 group/btn shadow-[0_10px_20px_rgba(255,97,32,0.2)]"
                          >
                            View Credential
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover/btn:translate-x-1">
                              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        )}
                        
                        <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between transition-colors duration-500">
                          <div className="flex flex-col">
                            <span className="font-mono text-[9px] text-muted uppercase tracking-wider transition-colors duration-500">Verified Status</span>
                            <span className="font-mono text-[8px] text-cyan uppercase">Authentic Record</span>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_rgba(255,183,77,0.5)]" />
                            <div className="w-2 h-2 rounded-full bg-violet animate-pulse delay-150 shadow-[0_0_10px_rgba(255,97,32,0.5)]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-\\[shimmer_2s_infinite\\] {
          animation: shimmer 2s infinite;
        }
      `}} />
    </section>
  );
}
