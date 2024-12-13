"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import BackUpJar from "./BackUpJar";
import Lights from "./Lights";

const ModelView: React.FC = () => {
  return (
    <Canvas
      className="w-full h-full"
      style={{
        position: "relative",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      shadows
    >
  
      <PerspectiveCamera makeDefault position={[0, 0, 9]} />
    
      <ambientLight intensity={0.5} />
      <Lights />
      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} />
      {/* Model */}
      <Suspense fallback={<Html>Loading...</Html>}>
        <BackUpJar
          scale={[0.2, 0.2, 0.2]}
          position={[0, -1, 0]}
          rotation={[0, Math.PI * 1.3, 0]}
        />
      </Suspense>
      {/* Environment */}
      <Environment files="/hdr/lobby.hdr" intensity={1.5} />
    </Canvas>
  );
};

export default ModelView;
