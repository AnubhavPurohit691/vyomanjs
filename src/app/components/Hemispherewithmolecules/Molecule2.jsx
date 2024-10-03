/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 mol1.glb 
*/
'use client';
import React, { useRef, useState } from 'react';
import {
  useGLTF,
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
  const { nodes, materials } = useGLTF('/mol1.glb');

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <group name="Scene" scale={[scale, scale, scale]} >
        <pointLight
          name="Light"
          intensity={54351.413}
          decay={2}
          color="#fff1fd"
          position={[3.559, 2.134, 0.661]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/mol1.glb');

const Molecule2 = () => {
  return (
    <Canvas style={{}}>
      <mesh scale={2}>
        <ambientLight />
        <OrbitControls />
        <Environment preset="studio" />
        <Model />
      </mesh>
    </Canvas>
  );
};

export default Molecule2;
