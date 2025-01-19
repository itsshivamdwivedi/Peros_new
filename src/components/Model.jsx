import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/casual_jar_of_raspberry_jam_gltf (1)/scene.gltf'); // Update the path
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
  castShadow
  receiveShadow
  geometry={nodes.Object_4.geometry}
  material={materials.main}
  rotation={[Math.PI / 1.3, 0, 0]} // Adjusted rotation for bottom-facing start
  scale={[0.3, 0.3, 0.3]} // Small scale
  position={[0, 0, 0]} // Pin the jar at the center
/>

    </group>
  );
});

useGLTF.preload("/path-to-your-model/scene.gltf"); // Preload for better performance

// Preload the model for better performance
useGLTF.preload('/casual_jar_of_raspberry_jam_gltf (1)/scene.gltf');
