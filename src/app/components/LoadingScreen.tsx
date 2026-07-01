"use client";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

type HousePartProps = {
  position: [number, number, number];
  size: [number, number, number];
  delay: number;
  color: string;
  wireframe?: boolean;
  opacity?: number;
};

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const HousePart = ({ position, size, delay, color, wireframe, opacity = 0.9 }: HousePartProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const from = useRef(new THREE.Vector3(position[0], position[1] - 2, position[2]));
  const to = useRef(new THREE.Vector3(position[0], position[1], position[2]));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = clamp01((state.clock.elapsedTime - delay) / 0.9);
    const e = easeOutCubic(t);
    meshRef.current.position.lerpVectors(from.current, to.current, e);
    meshRef.current.scale.setScalar(e);
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.opacity = opacity * e;
  });

  return (
    <mesh ref={meshRef} position={position} scale={0}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        roughness={0.55}
        metalness={0.15}
        transparent
        opacity={opacity}
        wireframe={wireframe}
      />
    </mesh>
  );
};

const House = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.06;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <HousePart position={[0, -1.7, 0]} size={[6.4, 0.2, 4.6]} delay={0.0} color="#1E3A8A" opacity={0.25} />
      <HousePart position={[0, -1.55, 0]} size={[6.2, 0.12, 4.4]} delay={0.2} color="#F97316" opacity={0.35} wireframe />

      <HousePart position={[-2.9, -0.55, -2.0]} size={[0.18, 2.1, 0.18]} delay={0.45} color="#1E3A8A" wireframe />
      <HousePart position={[2.9, -0.55, -2.0]} size={[0.18, 2.1, 0.18]} delay={0.55} color="#1E3A8A" wireframe />
      <HousePart position={[-2.9, -0.55, 2.0]} size={[0.18, 2.1, 0.18]} delay={0.65} color="#1E3A8A" wireframe />
      <HousePart position={[2.9, -0.55, 2.0]} size={[0.18, 2.1, 0.18]} delay={0.75} color="#1E3A8A" wireframe />

      <HousePart position={[0, 0.45, -2.0]} size={[6.2, 0.16, 0.18]} delay={0.9} color="#1E3A8A" wireframe />
      <HousePart position={[0, 0.45, 2.0]} size={[6.2, 0.16, 0.18]} delay={1.05} color="#1E3A8A" wireframe />
      <HousePart position={[-2.9, 0.45, 0]} size={[0.18, 0.16, 4.4]} delay={1.2} color="#1E3A8A" wireframe />
      <HousePart position={[2.9, 0.45, 0]} size={[0.18, 0.16, 4.4]} delay={1.35} color="#1E3A8A" wireframe />

      <HousePart position={[-1.6, -0.35, -2.0]} size={[0.18, 1.4, 0.18]} delay={1.55} color="#F97316" wireframe />
      <HousePart position={[1.6, -0.35, -2.0]} size={[0.18, 1.4, 0.18]} delay={1.65} color="#F97316" wireframe />
      <HousePart position={[0, 0.25, -2.0]} size={[3.8, 0.14, 0.18]} delay={1.8} color="#F97316" wireframe />

      <HousePart position={[0, 1.2, 0]} size={[6.0, 0.14, 4.2]} delay={2.0} color="#1E3A8A" opacity={0.18} />
      <HousePart position={[0, 1.35, 0]} size={[6.2, 0.14, 4.4]} delay={2.2} color="#F97316" opacity={0.25} wireframe />
    </group>
  );
};

const LoadingScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[8, 10, 6]} intensity={1.1} />
      <pointLight position={[-8, -6, -6]} intensity={0.6} color="#F97316" />

      <House />
      <Text
        position={[0, -3, 0]}
        color="white"
        fontSize={0.7}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        กำลังก่อสร้างประสบการณ์ของคุณ...
      </Text>
    </>
  );
};

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  // Add a fade-out animation when isLoading becomes false
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      // Start fade-out animation
      const timeout = setTimeout(() => {
        setOpacity(0);
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      setOpacity(1);
    }
  }, [isLoading]);

  if (!isLoading && opacity === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      style={{
        opacity: opacity,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Canvas>
        <LoadingScene />
      </Canvas>
    </div>
  );
}
