"use client";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Text, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Building block component
type BuildingBlockProps = {
  position: [number, number, number];
  color: string;
  scale?: number;
  rotationSpeed?: number;
};

const BuildingBlock = ({
  position,
  color,
  scale = 1,
  rotationSpeed = 0.01,
}: BuildingBlockProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      // Rotate the cube
      meshRef.current.rotation.x += rotationSpeed * delta * 15;
      meshRef.current.rotation.y += rotationSpeed * delta * 10;

      // Add a slight floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(_state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1 * scale, 1 * scale, 1 * scale]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
    </mesh>
  );
};

// Main scene component
const LoadingScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0080ff" />

      {/* Create multiple building blocks in different positions */}
      <BuildingBlock
        position={[-3, 0, 0]}
        color="#2563eb"
        scale={0.8}
        rotationSpeed={0.02}
      />
      <BuildingBlock
        position={[-1.5, 1, 0]}
        color="#1d4ed8"
        scale={1.2}
        rotationSpeed={0.015}
      />
      <BuildingBlock
        position={[0, -0.5, 1]}
        color="#3b82f6"
        scale={1}
        rotationSpeed={0.01}
      />
      <BuildingBlock
        position={[2, 0.5, -1]}
        color="#60a5fa"
        scale={0.9}
        rotationSpeed={0.025}
      />
      <BuildingBlock
        position={[3.5, -1, 0]}
        color="#93c5fd"
        scale={1.1}
        rotationSpeed={0.018}
      />

      {/* Add text */}
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
        Building your experience...
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
