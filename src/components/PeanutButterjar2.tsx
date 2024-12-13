import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/peanutbutterjar2.gltf')
  const cameraRef = useRef()

  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        ref={cameraRef}
        position={[0, 1.5, 3]} // Adjust the camera position to face the front of the jar
        rotation={[0, 0, 0]} // Adjust the camera rotation as needed
      />
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
          material={materials.lable}
        />
      </group>
    </group>
  )
}

export default Model;
useGLTF.preload('/peanutbutterjar2.gltf')