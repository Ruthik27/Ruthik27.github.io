import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PATH', href: '#experience' },
    { name: 'STACK', href: '#skills' },
    { name: 'WORKS', href: '#projects' },
    { name: 'CONNECT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[1000] transition-all duration-500 ${isScrolled ? 'py-3 glass rounded-full' : 'py-6 bg-transparent'}`}>
      <div className="px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-ink transition-colors duration-500" data-cursor="link" data-magnetic>
          RK<span className="text-violet">.</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-display font-bold tracking-widest text-ink/60 hover:text-ink transition-colors duration-500"
              data-cursor="link"
              data-magnetic
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink duration-500"
            data-cursor="button"
            data-magnetic
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button 
          className="md:hidden text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-display font-bold text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="flex items-center gap-2 text-ink">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-sm font-mono uppercase tracking-widest">Toggle Theme</span>
          </button>
        </motion.div>
      )}
    </nav>
  );
}
