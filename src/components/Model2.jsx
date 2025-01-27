

"use client";
import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = forwardRef((props, ref) => {
  Model.displayName ="Models"
  const { nodes, materials } = useGLTF('/peanutbutterjar2.glb');

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.butter_primitive0.geometry}
        material={materials['PEENUTBUTTER.001']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0.2, 0]}
        scale={[0.020, 0.020, 0.020]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.butter_primitive1.geometry}
        material={materials['Material.002']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0.2, 0]}
        scale={[0.020, 0.020, 0.020]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.butter_primitive2.geometry}
        material={materials.lable}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0.2, 0]}
        scale={[0.020, 0.020, 0.020]}
      />
    </group>
  );
});

useGLTF.preload('/peanutbutterjar2.glb');
