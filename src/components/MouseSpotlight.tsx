import { useEffect, useRef } from 'react';

export default function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.setProperty('--x', `${clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-60 dark:opacity-20 transition-opacity duration-1000"
      style={{
        background: `radial-gradient(800px circle at var(--x, 50%) var(--y, 50%), rgba(255, 97, 32, 0.08), transparent 80%),
                     radial-gradient(1200px circle at var(--x, 50%) var(--y, 50%), rgba(255, 183, 77, 0.05), transparent 80%)`,
      }}
    />
  );
}
