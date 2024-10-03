'use client';
import React, { useRef, useState } from 'react';
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Environment,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Model component
export function Model(props) {
  const [scale, setScale] = useState(1)
const handleClick = () => {
  setScale(scale === 1 ? 2 : 1); // Toggle between scale 1 and 2
};
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF('/mol4.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <group name="Scene" scale={[scale, scale, scale]}>
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/mol4.glb');

const Molecule5 = () => {
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

export default Molecule5;
