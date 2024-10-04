'use client';
import React, { useState } from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

// Model component
export function Model(props) {
  const { nodes, materials } = useGLTF('/compressed.glb');
  const [scale, setScale] = useState(1)
  
const handleClick = () => {
  setScale(scale === 1 ? 2 : 1); // Toggle between scale 1 and 2
};

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <mesh
        geometry={nodes.Icosphere__0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.003, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[scale, scale, scale]}
      />
      <instancedMesh
        args={[
          nodes['Icosphere|Icosphere001|Dupli|_Material001_0'].geometry,
          materials.PaletteMaterial001,
          2612,
        ]}
        instanceMatrix={
          nodes['Icosphere|Icosphere001|Dupli|_Material001_0'].instanceMatrix
        }
      />
    </group>
  );
}

useGLTF.preload('/compressed.glb');

const CompressedMolecule = () => {
  return (
    <Canvas style={{ width: '150px', height: '150px' }}>
      <mesh scale={0.7}>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Environment preset="studio" />
        <Model />
      </mesh>
    </Canvas>
  );
};

export default CompressedMolecule;
