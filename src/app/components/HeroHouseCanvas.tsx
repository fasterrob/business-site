"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Part = {
  key: string;
  position: [number, number, number];
  size: [number, number, number];
  start: number;
  duration: number;
  color: string;
  rotation?: [number, number, number];
  wireframe?: boolean;
  opacity?: number;
};

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function House() {
  const groupRef = useRef<THREE.Group>(null);

  const parts: Part[] = useMemo(
    () => {
      const W = 9.6;
      const D = 6.2;
      const H = 14.5;
      const baseY = -3.05;
      const slab = 0.28;
      const col = 0.22;
      const beam = 0.16;
      const levels = 10;
      const parts: Part[] = [];

      parts.push({
        key: "foundation",
        position: [0, baseY, 0],
        size: [W + 0.8, slab, D + 0.8],
        start: 0.0,
        duration: 0.1,
        color: "#1E3A8A",
        opacity: 0.16,
      });
      parts.push({
        key: "foundation-wire",
        position: [0, baseY + slab * 0.65, 0],
        size: [W + 0.55, slab * 0.5, D + 0.55],
        start: 0.06,
        duration: 0.1,
        color: "#F97316",
        wireframe: true,
        opacity: 0.24,
      });

      const xCols = [-W / 2, -W / 6, W / 6, W / 2];
      const zCols = [-D / 2, -D / 6, D / 6, D / 2];
      const columnPositions: Array<[number, number]> = [];
      xCols.forEach((x) => {
        zCols.forEach((z) => {
          columnPositions.push([x, z]);
        });
      });

      const colY = baseY + slab + H / 2;
      columnPositions.forEach(([x, z], i) => {
        parts.push({
          key: `col-${i + 1}`,
          position: [x, colY, z],
          size: [col, H, col],
          start: 0.12 + i * 0.015,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.65,
        });
      });

      for (let i = 1; i <= levels; i++) {
        const y = baseY + slab + (H * i) / (levels + 1);
        const start = 0.28 + (i - 1) * (0.56 / Math.max(1, levels - 1));

        parts.push({
          key: `beam-front-${i}`,
          position: [0, y, -D / 2],
          size: [W, beam, col],
          start,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.7,
        });
        parts.push({
          key: `beam-back-${i}`,
          position: [0, y, D / 2],
          size: [W, beam, col],
          start: start + 0.015,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.7,
        });
        parts.push({
          key: `beam-left-${i}`,
          position: [-W / 2, y, 0],
          size: [col, beam, D],
          start: start + 0.03,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.7,
        });
        parts.push({
          key: `beam-right-${i}`,
          position: [W / 2, y, 0],
          size: [col, beam, D],
          start: start + 0.045,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.7,
        });

        parts.push({
          key: `beam-mid-front-${i}`,
          position: [0, y, -D / 6],
          size: [W, beam, col],
          start: start + 0.06,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.55,
        });
        parts.push({
          key: `beam-mid-back-${i}`,
          position: [0, y, D / 6],
          size: [W, beam, col],
          start: start + 0.075,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.55,
        });
        parts.push({
          key: `beam-mid-left-${i}`,
          position: [-W / 6, y, 0],
          size: [col, beam, D],
          start: start + 0.09,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.55,
        });
        parts.push({
          key: `beam-mid-right-${i}`,
          position: [W / 6, y, 0],
          size: [col, beam, D],
          start: start + 0.105,
          duration: 0.12,
          color: "#1E3A8A",
          wireframe: true,
          opacity: 0.55,
        });

        parts.push({
          key: `floor-${i}`,
          position: [0, y - 0.11, 0],
          size: [W - 0.35, 0.11, D - 0.35],
          start: start + 0.12,
          duration: 0.14,
          color: "#1E3A8A",
          opacity: 0.06,
        });
      }

      const roofY = baseY + slab + H + 0.3;
      parts.push({
        key: "roof-slab",
        position: [0, roofY, 0],
        size: [W - 0.2, 0.14, D - 0.2],
        start: 0.92,
        duration: 0.12,
        color: "#1E3A8A",
        opacity: 0.1,
      });
      parts.push({
        key: "roof-wire",
        position: [0, roofY + 0.12, 0],
        size: [W, 0.12, D],
        start: 0.96,
        duration: 0.12,
        color: "#F97316",
        wireframe: true,
        opacity: 0.2,
      });

      const braceW = Math.sqrt((W - 1.0) ** 2 + (H * 0.55) ** 2);
      parts.push({
        key: "brace-front-1",
        position: [-W / 3, baseY + slab + H * 0.55, -D / 2],
        size: [braceW * 0.2, 0.12, 0.12],
        start: 0.6,
        duration: 0.16,
        color: "#F97316",
        wireframe: true,
        opacity: 0.55,
        rotation: [0, 0, Math.PI / 4],
      });
      parts.push({
        key: "brace-front-2",
        position: [W / 3, baseY + slab + H * 0.55, -D / 2],
        size: [braceW * 0.2, 0.12, 0.12],
        start: 0.64,
        duration: 0.16,
        color: "#F97316",
        wireframe: true,
        opacity: 0.55,
        rotation: [0, 0, -Math.PI / 4],
      });
      parts.push({
        key: "brace-back-1",
        position: [-W / 3, baseY + slab + H * 0.55, D / 2],
        size: [braceW * 0.2, 0.12, 0.12],
        start: 0.68,
        duration: 0.16,
        color: "#F97316",
        wireframe: true,
        opacity: 0.55,
        rotation: [0, 0, -Math.PI / 4],
      });
      parts.push({
        key: "brace-back-2",
        position: [W / 3, baseY + slab + H * 0.55, D / 2],
        size: [braceW * 0.2, 0.12, 0.12],
        start: 0.72,
        duration: 0.16,
        color: "#F97316",
        wireframe: true,
        opacity: 0.55,
        rotation: [0, 0, Math.PI / 4],
      });

      return parts;
    },
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.26;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.32) * 0.05;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
      groupRef.current.position.y = -1.0;
      groupRef.current.scale.setScalar(1.0);
    }

    const cam = state.camera as THREE.PerspectiveCamera;
    cam.position.z = 14.6;
    cam.position.y = 2.0;
    cam.position.x = 1.05;
    cam.lookAt(0, 1.1, 0);
    cam.updateProjectionMatrix();
    state.invalidate();
  });

  return (
    <group ref={groupRef}>
      {parts.map((part) => (
        <BuildingPart key={part.key} part={part} />
      ))}
    </group>
  );
}

function BuildingPart({ part }: { part: Part }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const from = useMemo(
    () => new THREE.Vector3(part.position[0], part.position[1] - 2, part.position[2]),
    [part.position]
  );
  const to = useMemo(
    () => new THREE.Vector3(part.position[0], part.position[1], part.position[2]),
    [part.position]
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const build = clamp01((state.clock.elapsedTime - 0.2) / 3.2);
    const raw = clamp01((build - part.start) / (part.duration || 0.001));
    const e = easeOutCubic(raw);
    meshRef.current.position.lerpVectors(from, to, e);
    meshRef.current.scale.setScalar(e);
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.opacity = (part.opacity ?? 0.85) * e;
  });

  return (
    <mesh
      ref={meshRef}
      position={part.position}
      rotation={part.rotation ?? [0, 0, 0]}
      scale={0}
    >
      <boxGeometry args={part.size} />
      <meshStandardMaterial
        color={part.color}
        roughness={0.55}
        metalness={0.15}
        transparent
        opacity={part.opacity ?? 0.85}
        wireframe={part.wireframe}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[1.05, 2.0, 14.6]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[12, 16, 10]} intensity={1.1} />
      <pointLight position={[-10, -8, -8]} intensity={0.6} color="#F97316" />
      <House />
    </>
  );
}

export default function HeroHouseCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <Scene />
    </Canvas>
  );
}

