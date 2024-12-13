"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'




function BackUpJar(props) {
  const { nodes, materials } = useGLTF('/backup.gltf')
  return (
    <group {...props} dispose={null} >
      <group
        position={[0, 1.141, 0]}
        rotation={[1.578, -0.026, -1.295]}
        scale={[0.014, 0.014, 0.013]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials['PEENUTBUTTER.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials.lable}
        />
      </group>
    </group>
  )
}

export default BackUpJar;
useGLTF.preload('/backup.gltf')