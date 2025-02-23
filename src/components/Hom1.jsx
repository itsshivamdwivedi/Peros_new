"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "./Model2";

export default function App() {
  const modelRef = useRef();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
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
          <Model ref={modelRef} position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}
