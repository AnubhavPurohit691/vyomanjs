'use client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Hemisphere Component
const RotatingHemisphere = () => {
  const pointsRef = useRef(null);
  const [positions] = useState(() => {
    const particles = [];
    const radius = 4; // Radius of the hemisphere
    for (let i = 0; i < 105000; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2; // Restrict theta to upper side (0 to π/2)
      const phi = Math.random() * Math.PI * 2; // Angle around the axis (0 to 2π)

      // Convert spherical coordinates to Cartesian coordinates
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      particles.push(x, y, z);
    }
    return new Float32Array(particles);
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.07; // Rotate around the Y axis
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial color="#000000" size={0.005} />
      <OrbitControls
        maxPolarAngle={1.57079}
        minPolarAngle={1.57079}
        enableZoom={false}
      />
    </Points>
  );
};

// Fullsphere Component
const Fullsphere = () => {
  return (
    <Canvas style={{}}>
      <mesh scale={0.5}>
        <ambientLight />
        <RotatingHemisphere />
      </mesh>
    </Canvas>
  );
};

export default Fullsphere;
