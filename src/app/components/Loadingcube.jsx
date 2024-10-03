'use client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Cube particle system component
const RotatingCube = () => {
  const pointsRef = useRef(null);
  const [positions] = useState(() => {
    const particles = [];
    const cubeSize = 10; // Size of the cube
    for (let i = 0; i < 17000; i++) {
      // Generate random positions inside a cube with side length 'cubeSize'
      const x = (Math.random() - 0.5) * cubeSize;
      const y = (Math.random() - 0.5) * cubeSize;
      const z = (Math.random() - 0.5) * cubeSize;

      particles.push(x, y, z);
    }
    return new Float32Array(particles);
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02; // Rotate around the Y axis
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial color="#000000" size={0.005} />{' '}
      {/* Slightly larger particles */}
    </Points>
  );
};

const Loadingcube = () => {
  return (
    <Canvas style={{ height: '80vh', width: '100vw' }}>
      <ambientLight />
      <RotatingCube />
       {/* Allow rotation and zoom */}
    </Canvas>
  );
};

export default Loadingcube;
