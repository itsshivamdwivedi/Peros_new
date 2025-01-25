// import React, { useRef, useEffect } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useScroll } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/peanutbutterjar2.gltf');


//   // Hook for scroll interaction
//   const scroll = useScroll();

//   // Update the model's rotation based on scroll position
//   useFrame(() => {
//     if (modelRef.current) {
//       // Use scroll offset to drive rotation and scalhome
//       const scrollOffset = scroll.offset;
//       const rotationSpeed = Math.PI * 2; // Rotation speed

//       // Apply rotation to the model
//       modelRef.current.rotation.y = scrollOffset * rotationSpeed; // Rotate on Y-axis based on scroll
//       modelRef.current.rotation.x = scrollOffset * rotationSpeed * 0.5; // Optional: Rotate on X-axis for additional effect
//       const scaleFactor = Math.max(0.3, 1 - scrollOffset * 0.2); // Shrink model as scroll progresses, with a minimum scale of 0.3

//       // Apply the scale to the model
//       modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      
//     }
//   });

//   return (
//     <group {...props} dispose={null} ref={Ref}>
//       <group
//         position={[0, 1.141, 0]}
//         rotation={[1.578, -0.026, -1.295]}
//         scale={[0.014, 0.014, 0.013]}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Mesh001.geometry}
//           material={materials['PEENUTBUTTER.001']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Mesh001_1.geometry}
//           material={materials['Material.002']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Mesh001_2.geometry}
//           material={materials.lable}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload('/peanutbutterjar2.gltf');






// import React, { forwardRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export const Model = forwardRef((props, ref) => {
//   const { nodes, materials } = useGLTF('/casual_jar_of_raspberry_jam_gltf (1)/scene.gltf'); // Update the path
//   return (
//     <group {...props} dispose={null} ref={ref}>
//      <mesh
//   castShadow
//   receiveShadow
//   geometry={nodes.Object_4.geometry}
//   material={materials.main}
  // rotation={[Math.PI / 1.3, 0, 0]} // Adjusted rotation for bottom-facing start
  // scale={[0.3, 0.3, 0.3]} // Small scale
  // position={[0, 0, 0]} // Pin the jar at the center
// />

//     </group>
//   );
// });

// useGLTF.preload('/casual_jar_of_raspberry_jam_gltf (1)/scene.gltf'); // Preload for better performance

// // Preload the model for better performance
// useGLTF.preload('/casual_jar_of_raspberry_jam_gltf (1)/scene.gltf');  


















import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/peanutbutterjar2.gltf');
  return (
    <group {...props} dispose={null} ref={ref}>
    <group
  position={[0, 0, 0]}
        rotation={[Math.PI / 1.3, 0.2, 0]}
        scale={[0.020, 0.020, 0.020]}
      >
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
  );
});

useGLTF.preload('/peanutbutterjar2.gltf');

useGLTF.preload('/peanutbutterjar2.gltf'); 