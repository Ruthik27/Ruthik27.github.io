import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FlickingShape({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();
  const originalScale = useRef(0.5 + Math.random() * 0.5);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed * 0.5;
    meshRef.current.rotation.y = t * speed * 0.3;

    // Mouse proximity "flicking" effect
    const mouseVector = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);
    const distance = meshRef.current.position.distanceTo(mouseVector);
    
    if (distance < 2) {
      const flicker = Math.sin(t * 20) * 0.2 + 1.2;
      meshRef.current.scale.setScalar(originalScale.current * flicker);
      meshRef.current.rotation.z += 0.1;
    } else {
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, originalScale.current, 0.1));
    }
  });

  const geometry = useMemo(() => {
    const types = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.BoxGeometry(1, 1, 1)
    ];
    return types[Math.floor(Math.random() * types.length)];
  }, []);

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.3}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Section3DEffect() {
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 4
      ] as [number, number, number],
      color: i % 2 === 0 ? "#FF6120" : "#FFB74D",
      speed: 0.8 + Math.random() * 1.2,
      distort: 0.3 + Math.random() * 0.4
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF6120" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FFB74D" />
        {shapes.map((shape, i) => (
          <FlickingShape key={i} {...shape} />
        ))}
      </Canvas>
    </div>
  );
}
