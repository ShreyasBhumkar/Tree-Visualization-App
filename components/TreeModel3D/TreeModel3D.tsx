import { useGLTF } from '@react-three/drei/native';
import { useFrame } from '@react-three/fiber/native';
import React, { useRef, useState } from 'react';
import { Group as ThreeGroup } from 'three';
import { TreeModel, TreePart } from '../../types/tree';

// Type assertion for React Three Fiber JSX elements
const Group = 'group' as any;
const Primitive = 'primitive' as any;

interface TreeModel3DProps {
  treeData: TreeModel;
  onPartClick: (part: TreePart) => void;
  selectedPart: TreePart | null;
}

export function TreeModel3D({ treeData, onPartClick, selectedPart }: TreeModel3DProps) {
  const groupRef = useRef<ThreeGroup>(null);
  const [, setHoveredPart] = useState<string | null>(null);
  
  // Load the GLB model
  const gltf = useGLTF('./assets/models/apple_tree.glb');
  const scene = Array.isArray(gltf) ? gltf[0].scene : gltf.scene;
  
  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Handle click on 3D objects
  const handleClick = (event: any) => {
    event.stopPropagation();
    
    // Find the clicked object
    const clickedObject = event.object;
    const objectName = clickedObject.name;
    
    // Find corresponding tree part
    const treePart = treeData.parts.find(part => 
      part.name.toLowerCase().includes(objectName.toLowerCase()) ||
      objectName.toLowerCase().includes(part.name.toLowerCase())
    );
    
    if (treePart) {
      onPartClick(treePart);
    }
  };

  // Handle hover
  const handlePointerOver = (event: any) => {
    event.stopPropagation();
    setHoveredPart(event.object.name);
  };

  const handlePointerOut = (event: any) => {
    event.stopPropagation();
    setHoveredPart(null);
  };

  return (
    <Group 
      ref={groupRef} 
      onClick={handleClick} 
      onPointerOver={handlePointerOver} 
      onPointerOut={handlePointerOut}
    >
      <Primitive 
        object={scene} 
        scale={[2, 2, 2]} 
        position={[0, -1, 0]} 
      />
    </Group>
  );
}
