import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, X } from 'lucide-react';
import * as THREE from 'three';

function RotatingObject({ theme }: { theme: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.4;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
  });

  const color = theme === 'dark' ? '#FF6120' : '#20BEFF';

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Central Core - Octahedron for a sharp, technical look */}
        <mesh>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={1.5} 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Outer Wireframe Shell - More complex geometry */}
        <mesh>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshStandardMaterial 
            color={color} 
            wireframe 
            transparent 
            opacity={0.2} 
          />
        </mesh>

        {/* Orbiting Data Particles */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.5;
          return (
            <mesh 
              key={i} 
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 1.5) * 0.6,
                Math.sin(angle) * radius
              ]}
            >
              <boxGeometry args={[0.15, 0.15, 0.15]} />
              <meshStandardMaterial 
                color={color} 
                emissive={color} 
                emissiveIntensity={0.8} 
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

export default function ResumePopup({ theme, resumeUrl }: { theme: string, resumeUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const glowColor = theme === 'dark' ? 'rgba(255, 97, 32, 0.4)' : 'rgba(32, 190, 255, 0.4)';
  const accentColor = theme === 'dark' ? 'bg-violet' : 'bg-cyan';

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
            className="glass p-6 rounded-3xl w-64 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
              style={{ backgroundColor: glowColor }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Curriculum Vitae</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-ink transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <h4 className="font-display text-xl font-bold text-ink mb-2">Resume 2024</h4>
              <p className="text-xs text-muted mb-6 leading-relaxed">
                Machine Learning Specialist with expertise in MLOps and Predictive Analytics.
              </p>

              <a 
                href={resumeUrl}
                download
                className={`flex items-center justify-center gap-2 w-full py-3 ${accentColor} text-white rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all group`}
              >
                Download PDF
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center group overflow-hidden"
        data-cursor="button"
      >
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 opacity-40 blur-xl group-hover:opacity-60 transition-opacity"
          style={{ backgroundColor: glowColor }}
        />

        {/* 3D Visual */}
        <div className="absolute inset-0 pointer-events-none">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <RotatingObject theme={theme} />
          </Canvas>
        </div>

        {/* Text Overlay (Visible when not open) */}
        <div className={`relative z-10 transition-all duration-500 flex flex-col items-center ${isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}>
          <span className="font-display font-bold text-2xl text-ink tracking-tighter leading-none">CV</span>
          <div className="w-6 h-[1px] bg-violet/50 mt-1" />
        </div>
        
        {/* Close Icon (Visible when open) */}
        <div className={`absolute z-10 transition-all duration-500 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}`}>
          <X size={24} className="text-ink" />
        </div>
      </motion.button>
    </div>
  );
}
