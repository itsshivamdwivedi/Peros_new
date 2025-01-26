

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Environment, useScroll } from "@react-three/drei";
import { Model } from "./Model";
import * as THREE from "three";

export default function App() {
  const modelRef = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [currentSection, setCurrentSection] = useState(0); 

  useEffect(() => {
    document.body.style.overflow = animationComplete ? "auto" : "hidden";
  }, [animationComplete]);

  return (
    <div
      style={{
        height: "100vh",
        width: "full",
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

          <ScrollControls pages={15} damping={0.5}>  
            <AnimatedModel
              modelRef={modelRef}
              onComplete={() => setAnimationComplete(true)}
              setPosition={setPosition}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection} 
            />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

function AnimatedModel({
  modelRef,
  onComplete,
  setPosition,
  currentSection,
  setCurrentSection,
}) {
  const scroll = useScroll();
  const targetRotation = useRef(new THREE.Vector3(0, 0, 0));
  const targetScale = useRef(1); 
  const targetPosition = useRef(new THREE.Vector3(0, 0, 0));

  const numSections = 15; 
  const [scrolling, setScrolling] = useState(false); 

  useEffect(() => {
   
    if (scrolling) {
      const newSection = Math.floor(scroll.offset * numSections);
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        setScrolling(false);
      }
    }
  }, [scroll.offset, currentSection, scrolling, numSections, setCurrentSection]);

  const handleScroll = (e) => {
    if (!scrolling) {
      setScrolling(true); 
    }
  };


  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [scrolling]);

  useFrame((state, delta) => {
    
    const sectionRatio = currentSection / numSections;

   
    targetRotation.current.set(
      Math.PI * 2 * sectionRatio,  
      Math.PI * 2 * sectionRatio,
      0
    );
    targetScale.current = 2 - sectionRatio * 1.3; 
    targetPosition.current.set(0, -0.5 * (targetScale.current - 1), 0); 

    
    if (modelRef.current) {
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotation.current.x,
        delta * 2
      );
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotation.current.y,
        delta * 2
      );
      modelRef.current.scale.lerp(
        new THREE.Vector3(
          targetScale.current,
          targetScale.current,
          targetScale.current
        ),
        delta * 2
      );
      modelRef.current.position.lerp(targetPosition.current, delta * 2);


      const { x, y, z } = modelRef.current.position;
      setPosition({ x, y, z });

     
      if (currentSection === numSections - 1) {
        onComplete();
      }
    }
  });

  return <Model ref={modelRef} position={[0, 0, 0]} />;
}
