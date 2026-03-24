import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, Environment, ContactShadows, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Logo3D({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.intensity = 2 + Math.sin(t * 3) * 1;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          ref={meshRef}
          font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
          fontSize={2.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          RK
          <MeshDistortMaterial
            color="#ffffff"
            emissive="#FF6120"
            emissiveIntensity={progress > 90 ? 10 : 2}
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={1}
          />
        </Text>
      </Float>

      <pointLight ref={glowRef} position={[0, 0, 2]} color="#FF6120" intensity={5} distance={10} />
      <pointLight position={[-2, 1, 1]} color="#00f2ff" intensity={2} distance={8} />
      
      <Sparkles count={50} scale={10} size={2} speed={0.5} color="#FF6120" />
      <Sparkles count={30} scale={10} size={1} speed={0.8} color="#00f2ff" />
    </group>
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 1200);
          return 100;
        }
        // Random increment for more "realistic" feel
        const inc = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + inc, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] overflow-hidden"
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* 3D Scene */}
          <div className="absolute inset-0 z-0">
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
              <color attach="background" args={['#050505']} />
              <fog attach="fog" args={['#050505', 5, 15]} />
              
              <Suspense fallback={null}>
                <Logo3D progress={progress} />
                <Environment preset="night" />
                <ContactShadows 
                  position={[0, -2.5, 0]} 
                  opacity={0.4} 
                  scale={20} 
                  blur={2} 
                  far={4.5} 
                />
              </Suspense>
            </Canvas>
          </div>

          {/* UI Overlay */}
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center pointer-events-none">
            {/* Progress Bar Container */}
            <div className="absolute bottom-20 w-64 h-[2px] bg-white/5 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-violet to-cyan"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Progress Text */}
            <div className="absolute bottom-24 flex items-baseline gap-2">
              <motion.span 
                className="font-display font-black text-6xl text-white"
                key={progress}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {progress}
              </motion.span>
              <span className="font-mono text-violet text-xl">%</span>
            </div>

            {/* Status Text */}
            <motion.div 
              className="absolute bottom-12 font-mono text-[10px] text-muted tracking-[0.5em] uppercase"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Initializing Neural Interface
            </motion.div>
          </div>

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
