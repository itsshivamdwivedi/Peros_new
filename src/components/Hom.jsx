// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { ScrollControls, Environment, useScroll } from "@react-three/drei";
// import { Model } from "./Model";

// export default function App() {
//   const modelRef = useRef();
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
//     // Lock body scrolling while animation is running
//     document.body.style.overflow = animationComplete ? "auto" : "hidden";
//   }, [animationComplete]);

//   return (
//     <div
//       style={{
//         height: animationComplete ? "200vh" : "100vh", // Expand page height after animation
//         width: "100vw",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Canvas section for the animation */}
//       <div
//         style={{
//           position: "sticky",
//           top: 0,
//           height: "100vh", // Match viewport height
//         }}
//       >
//         <Canvas
//           shadows
//           camera={{
//             position: [-1,-3,-3],
            
//             fov: 60,
//           }}
//         >
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
//           <Environment preset="studio" />

//           {/* ScrollControls to handle animation */}
//           <ScrollControls pages={2} damping={4}>
//             <AnimatedModel
//               modelRef={modelRef}
//               onComplete={() => setAnimationComplete(true)}
//             />
//           </ScrollControls>
//         </Canvas>
//       </div>
//     </div>
//   );
// }

// function AnimatedModel({ modelRef, onComplete }) {
//   const scroll = useScroll(); // Use scroll hook to track progress
//   const animationThreshold = 0.95; // Define when the animation is complete

//   // Animate the model based on scroll offset
//   useFrame(() => {
//     const scrollOffset = scroll.offset; // Get scroll progress (0 to 1)

//     if (modelRef.current) {
//       if (scrollOffset < animationThreshold) {
//         // During animation:
//         // Rotate smoothly
//         modelRef.current.rotation.y = Math.PI * 2 * scrollOffset; // Full Y rotation
//         modelRef.current.rotation.x = Math.PI * scrollOffset; // Slight X rotation
//         modelRef.current.rotation.z = 0; // Keep upright with no tilting

//         // Scale from the bottom
//         const scale = 1 + scrollOffset * 1.5;
//         modelRef.current.scale.set(scale, scale, scale);
//         modelRef.current.position.y = -0.5 * (scale - 1); // Move upward as it scales
//       } else {
//         // After animation:
//         // Smoothly reset to upright position
//         modelRef.current.rotation.y = 0; // Reset to front-facing
//         modelRef.current.rotation.x = 0; // Upright
//         modelRef.current.rotation.z = 0; // No tilt

//         // Return to original scale and position
//         modelRef.current.scale.set(1, 1, 1);
//         modelRef.current.position.y = 0;

//         // Mark animation complete
//         if (onComplete) {
//           onComplete();
//         }
//       }
//     }
//   });

//   return <Model ref={modelRef} position={[0, 0, 0]} />;
// }

import React from 'react'

const Hom = () => {
  return (
    <div>Hom</div>
  )
}

export default Hom