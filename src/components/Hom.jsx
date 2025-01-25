// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { ScrollControls, Environment, useScroll } from "@react-three/drei";
// import { Model } from "./Model";
// import * as THREE from "three";

// export default function App() {
//   const modelRef = useRef();
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
   
//     document.body.style.overflow = animationComplete ? "auto" : "hidden";
//   }, [animationComplete]);

//   return (
//     <div
//       style={{
//         height: animationComplete ? "200vh" : "100vh", 
//         width: "100vw",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
    
//       <div
//         style={{
//           position: "sticky",
//           top: 0,
//           height: "100vh",
//         }}
//       >
//       <Canvas
//   style={{
//     position: "fixed",
//     top: 0,
//     left: "50%",
//     transform: "translateX(-50%) ", 
//     overflow: "hidden",
//     zIndex: -10,
//   }}
//   shadows
//   dpr={[1, 1.5]}
//   gl={{ antialias: true }}
//   camera={{
//     fov: 75, 
//     position: [3, 4, -3],
//     near: 0.1,
//     far: 100, 
//   }}
// >

//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
//           <Environment files="/hdr/lobby.hdr" />
//           <PeanutParticles />
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
//   const scroll = useScroll();
//   const animationThreshold = 0.95;

//   const scaleInEnd = 0.3;
//   const rotationEnd = 0.7;
//   const scaleOutEnd = 1;

 
//   const ease = (t) => t * t * (3 - 2 * t); 

//   useFrame(() => {
//     if (modelRef.current) {

//       const scrollOffset = scroll.offset % 1; 
//       let scale, rotationX, rotationY, position;


//       if (scrollOffset <= scaleInEnd) {
//         const progress = ease(scrollOffset / scaleInEnd); 
//         scale = 0.5 + progress * 1.5; 
//         rotationX = Math.PI * 2 * progress; 
//         rotationY = 0;
//         position = [0, 0, 0]; 
//       }
      
//       else if (scrollOffset <= rotationEnd) {
//         const progress = ease((scrollOffset - scaleInEnd) / (rotationEnd - scaleInEnd));
//         scale = 2; 
//         rotationX = Math.PI * 2 * progress; 
//         rotationY = 0;
//         position = [0, 0, 0]; 
//       }
      
//       else {
//         const progress = ease((scrollOffset - rotationEnd) / (scaleOutEnd - rotationEnd)); 
//         scale = 2 - progress * 1; 
//         rotationX = Math.PI * 2;
//         rotationY = 0; 
//         position = [3, 4, -3]; 
//       }

    
//       modelRef.current.scale.set(scale, scale, scale);
//       modelRef.current.rotation.x = rotationX;
//       modelRef.current.rotation.y = rotationY;
//       modelRef.current.position.set(...position);

//       if (scrollOffset >= animationThreshold && onComplete) {
//         onComplete();
//       }
//     }
//   });

//   return <Model ref={modelRef} />;
// }



// function PeanutParticles() {
//   const group = useRef();
//   const particles = new Array(200).fill().map(() => ({
//     position: new THREE.Vector3(
//       (Math.random() - 0.5) * 20,
//       Math.random() * 10 - 5,
//       (Math.random() - 0.5) * 20
//     ),
//     scale: Math.random() * 0.5 + 0.3, 
//     color: getRandomColor(),
//   }));

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime();
//     if (group.current) {
//       group.current.rotation.y = elapsed * 0.05; 
//     }
//   });

//   function getRandomColor() {
//     const colors = [
//       "#D2691E", 
//       "#F3E5AB", 
//       "#FFFFFF", 
//       "#FF6347", 
//       "#FFD700",
//       "#98FB98", 
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   return (
//     <group ref={group}>
//       {particles.map((data, index) => (
//         <mesh
//           key={index}
//           position={data.position}
//           scale={[data.scale, data.scale * 0.4, data.scale]}
//           castShadow
//           receiveShadow
//         >
//           <sphereGeometry args={[0.25, 12, 12]} />
//           <meshStandardMaterial color={data.color} />
//         </mesh>
//       ))}
//     </group>
//   );
// }








// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { ScrollControls, Environment, useScroll } from "@react-three/drei";
// import { Model } from "./Model";
// import * as THREE from "three";

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
//        <Canvas
//   style={{
//     position: "fixed",
//     top: 80,
//     left: "50%",
//     transform: "translateX(-50%) ", // Flip vertically
//     overflow: "hidden",
//     zIndex: -10,
//   }}
//   shadows
//   dpr={[1, 1.5]}
//   gl={{ antialias: true }}
//   camera={{
//     fov: 60, // Increase the field of view to see more
//     position: [3, 4, -3], // Adjust the camera position to fit the model
//     near: 0.1,
//     far: 100, // Ensure the far plane is far enough to encompass the jar
//   }}
// >

//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
//           <Environment files="/hdr/lobby.hdr" />
//           <PeanutParticles />
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
//   const scroll = useScroll();
//   const animationThreshold = 0.95; // Threshold for animation completion

//   const scaleInEnd = 0.3; // End point for scaling in (start small)
//   const rotationEnd = 0.7; // End point for rotation phase
//   const scaleOutEnd = 1; // End point for scale-out phase (shrink completely)

//   // Easing function for smooth transitions
//   const ease = (t) => t * t * (3 - 2 * t);

//   useFrame(() => {
//     if (modelRef.current) {
//       const scrollOffset = scroll.offset % 1; // Loop the scroll progress between 0 and 1
//       let rotationX, rotationY, rotationZ, position, scale;

//       // Scale-in phase (starts small and scales up)
//       if (scrollOffset <= scaleInEnd) {
//         const progress = ease(scrollOffset / scaleInEnd);
//         rotationX = Math.PI * 2 * progress; // Rotate over time
//         rotationY = Math.PI * progress; // Tilt along the Y-axis
//         rotationZ = 0; // No rotation on Z axis during scale-in phase
//         position = [0, 0, 0];
//         scale = 0.5 + progress * 0.5; // Start small and grow larger
//       }
//       // Rotation phase (with shrinking)
//       else if (scrollOffset <= rotationEnd) {
//         const progress = ease((scrollOffset - scaleInEnd) / (rotationEnd - scaleInEnd));
//         rotationX = Math.PI * 2 * progress;
//         rotationY = Math.PI * progress * 0.5; // Tilting effect to simulate rotating watch
//         rotationZ = Math.PI * 2 * progress * 0.5; // Circular rotation around Z-axis
//         position = [0, 0, 0];
//         scale = 1 - progress * 0.5; // Shrink as it rotates (e.g., from 1 to 0.5)
//       }
//       // Scale-out phase (shrink completely and move position)
//       else {
//         const progress = ease((scrollOffset - rotationEnd) / (scaleOutEnd - rotationEnd));
//         rotationX = Math.PI * 2; // Full rotation on X-axis
//         rotationY = Math.PI * 2 * 0.7; // Apply strong tilt on Y-axis
//         rotationZ = Math.PI * 2 * 0.3; // Rotate slightly on Z-axis
//         position = [3, 4, -3];
//         scale = 0.5 - progress * 0.4; // Shrink to a smaller size during the final phase
//       }

//       // Apply transformations
//       modelRef.current.rotation.x = rotationX;
//       modelRef.current.rotation.y = rotationY;
//       modelRef.current.rotation.z = rotationZ; // Apply Z-axis rotation for a more Rolex-like effect
//       modelRef.current.position.set(...position);
//       modelRef.current.scale.set(scale, scale, scale); // Apply the scale to the model

//       // Trigger completion callback when animation reaches a threshold
//       if (scrollOffset >= animationThreshold && onComplete) {
//         onComplete();
//       }
//     }
//   });

//   return <Model ref={modelRef} />;
// }

// Peanut particle background
// function PeanutParticles() {
//   const group = useRef();
//   const particles = new Array(200).fill().map(() => ({
//     position: new THREE.Vector3(
//       (Math.random() - 0.5) * 20,
//       Math.random() * 10 - 5,
//       (Math.random() - 0.5) * 20
//     ),
//     scale: Math.random() * 0.5 + 0.3, 
//     color: getRandomColor(),
//   }));

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime();
//     if (group.current) {
//       group.current.rotation.y = elapsed * 0.05; 
//     }
//   });

//   function getRandomColor() {
//     const colors = [
//       "#D2691E", // Chocolate
//       "#F3E5AB", // Vanilla
//       "#FFFFFF", // White
//       "#FF6347", // Tomato Red
//       "#FFD700", // Gold
//       "#98FB98", // Pale Green
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   return (
//     <group ref={group}>
//       {particles.map((data, index) => (
//         <mesh
//           key={index}
//           position={data.position}
//           scale={[data.scale, data.scale * 0.4, data.scale]}
//           castShadow
//           receiveShadow
//         >
//           <sphereGeometry args={[0.25, 12, 12]} />
//           <meshStandardMaterial color={data.color} />
//         </mesh>
//       ))}
//     </group>
//   );
// }



import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Environment, useScroll } from "@react-three/drei";
import { Model } from "./Model";
import * as THREE from "three";

export default function App() {
  const modelRef = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    
    document.body.style.overflow = animationComplete ? "auto" : "hidden";
  }, [animationComplete]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "100vh",
            width: "100vw",
            zIndex: -10,
            overflow: "hidden",
          }}
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          camera={{
            fov: 40,
            position: [10, 3, 6],
            near: 0.1,
            far: 100,
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
          <Environment files="/hdr/lobby.hdr" />

       
          <ScrollControls pages={2} damping={4}>
            <AnimatedModel
              modelRef={modelRef}
              onComplete={() => setAnimationComplete(true)}
              setPosition={setPosition}
            />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

function AnimatedModel({ modelRef, onComplete, setPosition }) {
  const scroll = useScroll(); 
  useFrame(() => {
    const scrollOffset = scroll.offset; 

    if (modelRef.current) {
      

      
      modelRef.current.rotation.x = Math.PI * 4 * scrollOffset; 
      modelRef.current.rotation.y = Math.PI * 4 * scrollOffset; 
      const scale = 2 - scrollOffset * 1.3; 
      modelRef.current.scale.set(scale, scale, scale);

      
      modelRef.current.position.y = -0.5 * (scale - 1);

      
      const { x, y, z } = modelRef.current.position;
      setPosition({ x, y, z });

     
      if (scrollOffset === 1) {
        onComplete(); 
      }
    }
  });

  return <Model ref={modelRef} position={[0, 0, 0]} />;
}
