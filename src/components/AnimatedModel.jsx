import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Environment } from "@react-three/drei";
import { Model } from "./Model";

export default function AnimatedModel() {
  const modelRef = useRef();
  const scroll = useScroll();

  // Animate the model based on scroll
  useFrame(() => {
    const scrollOffset = scroll.offset; // 0 to 1
    if (modelRef.current) {
      // Smooth rotation effect based on scroll offset
      modelRef.current.rotation.y = Math.PI * 2 * scrollOffset; // Horizontal rotation
      modelRef.current.rotation.x = Math.PI * 2 * scrollOffset / 2; // Slight vertical rotation for effect
    }
  });

  return (
    <div style={{ height: "200vh", width: "100vw" }}>
      <Canvas
        shadows
        camera={{
          position: [0, 0, 6], // Camera positioned to keep the jar fully visible
          fov: 45, // Adjusted field of view
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <Environment preset="studio" />

        <ScrollControls pages={2} damping={4}>
          <Model ref={modelRef} position={[0, 0, 0]} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
