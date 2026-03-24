import { motion } from 'framer-motion';

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="py-12 border-y border-white/5 overflow-hidden flex whitespace-nowrap bg-bg2">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex gap-20 items-center"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-4xl md:text-6xl font-display font-bold text-white/20 hover:text-violet transition-colors duration-500">
              {item.toUpperCase()}
            </span>
            <div className="w-3 h-3 rounded-full bg-violet" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
