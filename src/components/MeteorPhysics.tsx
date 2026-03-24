import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';

const METEOR_COUNT = 30;
const BLAST_RADIUS = 0.6; 
const DAMPING = 1.0; // No damping for constant speed
const BOUNDS = { x: 20, y: 12 };

interface MeteorState {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  color: string;
  rotationSpeed: THREE.Vector3;
  isDestroyed: boolean;
  blastTime: number;
}

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: string;
  size: number;
  life: number;
}

interface BlastWave {
  position: THREE.Vector3;
  startTime: number;
  color: string;
}

function Scene() {
  const targetMouse = useRef(new THREE.Vector3());
  const mouseRef = useRef(new THREE.Vector3());
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [blastWaves, setBlastWaves] = useState<BlastWave[]>([]);

  // Use a global listener so the UFO moves even when the mouse is over pointer-events-auto cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById('about');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      // Calculate normalized coordinates (-1 to 1) relative to the section
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetMouse.current.set(x, y, 0);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const initialMeteors = useMemo(() => {
    return Array.from({ length: METEOR_COUNT }).map((_, i) => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 24, 0),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15, 0),
      size: 0.15 + Math.random() * 0.3,
      color: i % 2 === 0 ? "#FF6120" : "#FFB74D",
      rotationSpeed: new THREE.Vector3(Math.random() * 0.05, Math.random() * 0.05, Math.random() * 0.05),
      isDestroyed: false,
      blastTime: 0
    }));
  }, []);

  const meteorStates = useRef<MeteorState[]>(initialMeteors);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { viewport } = state;

    // Convert normalized coordinates to viewport coordinates
    const targetX = (targetMouse.current.x * viewport.width) / 2;
    const targetY = (targetMouse.current.y * viewport.height) / 2;
    
    // Smoothly interpolate (lerp) to match the "feel" of the global cursor's spring
    mouseRef.current.lerp(new THREE.Vector3(targetX, targetY, 0), 0.2);
    
    const newParticles: Particle[] = [...particles].filter(p => p.life > 0);
    const newBlastWaves: BlastWave[] = [...blastWaves].filter(bw => t - bw.startTime < 0.5);

    for (let i = 0; i < METEOR_COUNT; i++) {
      const m = meteorStates.current[i];
      const mesh = meshRefs.current[i];
      if (!mesh) continue;

      if (m.isDestroyed) {
        if (t - m.blastTime > 0.2) { 
          m.isDestroyed = false;
          // Respawn at a random edge
          const side = Math.floor(Math.random() * 4);
          if (side === 0) m.position.set(-BOUNDS.x, (Math.random() - 0.5) * BOUNDS.y * 2, 0); // Left
          else if (side === 1) m.position.set(BOUNDS.x, (Math.random() - 0.5) * BOUNDS.y * 2, 0); // Right
          else if (side === 2) m.position.set((Math.random() - 0.5) * BOUNDS.x * 2, -BOUNDS.y, 0); // Bottom
          else m.position.set((Math.random() - 0.5) * BOUNDS.x * 2, BOUNDS.y, 0); // Top
          
          m.velocity.set((Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15, 0);
          mesh.visible = true;
        }
        continue;
      }

      // 1. Constant Motion
      m.position.add(m.velocity);

      // 2. Mouse Interaction (Blaster Only - No Repulsion)
      const distToMouse = m.position.distanceTo(mouseRef.current);
      
      if (distToMouse < BLAST_RADIUS) {
        m.isDestroyed = true;
        m.blastTime = t;
        mesh.visible = false;
        
        newBlastWaves.push({
          position: m.position.clone(),
          startTime: t,
          color: m.color
        });

        for (let j = 0; j < 12; j++) {
          newParticles.push({
            position: m.position.clone(),
            velocity: new THREE.Vector3((Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.1),
            color: m.color,
            size: m.size * 0.2,
            life: 1.0
          });
        }
      }

      // 3. Out of Bounds Check (Respawn)
      if (Math.abs(m.position.x) > BOUNDS.x + 2 || Math.abs(m.position.y) > BOUNDS.y + 2) {
        m.isDestroyed = true;
        m.blastTime = t - 0.1; // Trigger near-instant respawn
        mesh.visible = false;
      }

      mesh.position.copy(m.position);
      mesh.rotation.x += m.rotationSpeed.x;
      mesh.rotation.y += m.rotationSpeed.y;
      mesh.scale.setScalar(m.size * (Math.sin(t * 3 + i) * 0.08 + 1));
    }

    newParticles.forEach(p => {
      p.position.add(p.velocity);
      p.life -= 0.04;
    });
    setParticles(newParticles);
    setBlastWaves(newBlastWaves);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#FF6120" />
      
      {initialMeteors.map((data, i) => (
        <mesh key={i} ref={(el) => (meshRefs.current[i] = el)}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={1.5}
            distort={0.5}
            speed={3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Particle System */}
      {particles.map((p, i) => (
        <mesh key={`p-${i}`} position={p.position} scale={p.size * p.life}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={p.color} transparent opacity={p.life} />
        </mesh>
      ))}

      {/* Blast Waves */}
      {blastWaves.map((bw, i) => (
        <BlastWaveEffect key={`bw-${i}`} {...bw} />
      ))}

      <UFOCursor mouseRef={mouseRef} />
    </>
  );
}

function BlastWaveEffect({ position, startTime, color }: BlastWave) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { clock } = useThree();

  useFrame(() => {
    const elapsed = clock.getElapsedTime() - startTime;
    const scale = elapsed * 10;
    const opacity = 1 - (elapsed / 0.5);
    meshRef.current.scale.setScalar(scale);
    if (meshRef.current.material instanceof THREE.MeshBasicMaterial) {
      meshRef.current.material.opacity = Math.max(0, opacity);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <ringGeometry args={[0.9, 1, 32]} />
      <meshBasicMaterial color={color} transparent opacity={1} side={THREE.DoubleSide} />
    </mesh>
  );
}

function UFOCursor({ mouseRef }: { mouseRef: React.MutableRefObject<THREE.Vector3> }) {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.position.copy(mouseRef.current);
    groupRef.current.rotation.y = t * 4;
    groupRef.current.rotation.z = Math.sin(t * 2) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* UFO Body */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial 
          color="#cccccc" 
          emissive="#222222" 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
      <mesh rotation={[Math.PI * 0.5, 0, 0]}>
        <torusGeometry args={[0.4, 0.04, 16, 100]} />
        <meshStandardMaterial color="#FF6120" emissive="#FF6120" emissiveIntensity={5} />
      </mesh>
      
      {/* Cockpit (Dome) */}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#00f2ff" 
          emissiveIntensity={4} 
          transparent 
          opacity={0.9} 
        />
      </mesh>

      <pointLight intensity={5} distance={10} color="#00f2ff" />
    </group>
  );
}

export default function MeteorPhysics() {
  return (
    <div data-cursor="none" className="absolute inset-0 pointer-events-auto z-0 opacity-60 cursor-none overflow-hidden">
      <Canvas style={{ cursor: 'none' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}


