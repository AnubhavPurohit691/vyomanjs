'use client';
import React, { useRef, useState } from 'react';
import {
  useGLTF,
  useAnimations,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Model component
export function Model(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF('/mol2.glb');
  const { actions } = useAnimations(animations, group);
  const [scale, setScale] = useState(1)
const handleClick = () => {
  setScale(scale === 1 ? 2 : 1); // Toggle between scale 1 and 2
};
  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <group name="Scene"scale={[scale, scale, scale]}>
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/mol2.glb');

const Molecule3 = () => {
  return (
    <Canvas style={{}}>
      <mesh scale={3}>
        <ambientLight />
        <OrbitControls />
        <Environment preset="studio" />
        <Model />
      </mesh>
    </Canvas>
  );
};

export default Molecule3;
