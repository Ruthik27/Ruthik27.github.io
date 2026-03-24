import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import gsap from 'gsap';

export default function Cursor() {
  const [cursorState, setCursorState] = useState('default');

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      dotX.set(x);
      dotY.set(y);

      // Cursor State
      const target = e.target as HTMLElement;
      const state = target.closest('[data-cursor]')?.getAttribute('data-cursor') || 'default';
      setCursorState(state);

      // Magnetic Pull
      const magnetic = target.closest('[data-magnetic]') as HTMLElement;
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = x - centerX;
        const distY = y - centerY;

        gsap.to(magnetic, {
          x: distX * 0.35,
          y: distY * 0.35,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        // Reset all magnetic elements if not hovering
        document.querySelectorAll('[data-magnetic]').forEach(el => {
          gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [dotX, dotY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {/* 11px Diameter Circle Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full transition-colors duration-300"
        animate={{
          width: cursorState === 'none' ? 0 : (cursorState === 'default' ? 11 : 22),
          height: cursorState === 'none' ? 0 : (cursorState === 'default' ? 11 : 22),
          backgroundColor: cursorState === 'default' ? 'var(--color-violet)' : 'var(--color-cyan)',
          opacity: cursorState === 'none' ? 0 : (cursorState === 'default' ? 0.8 : 0.4),
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ 
          x: dotX, 
          y: dotY, 
          translateX: '-50%', 
          translateY: '-50%',
        }}
      />
    </div>
  );
}
