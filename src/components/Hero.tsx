import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import gsap from 'gsap';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF6120"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  const mousePos = useRef({ x: 0, y: 0 });
  
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return p;
  }, []);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 3) {
          l.push(points[i], points[j]);
        }
      }
    }
    return l;
  }, [points]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.rotation.x = t * 0.05;
    
    // Mouse influence
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mousePos.current.x * 1.5, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mousePos.current.y * 1.5, 0.05);
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#FF6120" emissive="#FF6120" emissiveIntensity={2} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={lines.length}
            array={new Float32Array(lines.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#FFB74D" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

export default function Hero({ data }: { data: any }) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'chars' });
      gsap.from(text.chars, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
        delay: 1.2
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF6120" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FFB74D" />
          <NeuralNetwork />
          <ParticleField />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="font-mono text-xs tracking-[0.5em] text-violet mb-6 block"
        >
          {data.identity.titles[0].toUpperCase()}
        </motion.span>
        
        <h1 
          ref={titleRef}
          className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter text-ink uppercase overflow-hidden"
        >
          RUTHIK <br /> 
          <span className="text-stroke">KALE</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 text-lg md:text-xl text-muted max-w-xl mx-auto font-body transition-colors duration-500"
        >
          {data.identity.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="px-10 py-4 bg-violet text-white font-display font-bold tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(255,97,32,0.3)]"
            data-cursor="button"
            data-magnetic
          >
            EXPLORE WORKS
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border border-ink/20 text-ink font-display font-bold tracking-widest text-xs hover:bg-ink hover:text-bg transition-all duration-300"
            data-cursor="button"
            data-magnetic
          >
            INITIATE CONTACT
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet to-transparent" />
        <span className="font-mono text-[10px] text-muted tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
