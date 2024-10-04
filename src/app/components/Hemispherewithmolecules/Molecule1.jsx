'use client';
import React, { useRef, useState } from 'react';
import { Group, Mesh, Material } from 'three';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


  // Handle click to scale up the object
  
// Model component
export function Model(props) {
  
const [scale, setScale] = useState(1)
const[toggledescription,settoggledescription]=useState(false)
const handleClick = () => {
  setScale(scale === 1 ? 2 : 1); // Toggle between scale 1 and 2
  settoggledescription(true?false:true)
};
  const group = useRef(null);
  const { nodes, materials } = useGLTF('/molecule1.glb');

  // Add null checks to avoid potential runtime errors
  if (!nodes || !materials) {
    console.error('Failed to load GLTF model or its materials');
    return null;
  }

  return (
    <group ref={group} {...props} onClick={handleClick}>
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

useGLTF.preload('/molecule1.glb');

const Molecule1 = () => {
  return (
    <Canvas style={{ width: '150px', height: '150px' }} >
      <mesh scale={3}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Environment preset="studio" />
        <Model />
      </mesh>
    </Canvas>
  );
};

export default Molecule1;
