import React, { useRef } from "react";

import { Environment, OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import BackUpJar from "../BackUpJar"
import { useGSAP } from "@gsap/react";
import {Model} from "../PeanutButterjar2";
import { useStore } from "@/app/hooks/useStore";

gsap.registerPlugin(useGSAP,ScrollTrigger);




type Props = {};


export default function Scene({}: Props){
  const isReady = useStore((state)=> state.isReady)
  
  

  const jar1Ref = useRef<Group>(null);
  const jar2Ref = useRef<Group>(null);
  const groupRef = useRef<Group>(null);
  
  useGSAP(() => {
    if (!jar1Ref.current || !jar2Ref.current || !groupRef.current) return;
    isReady();
   
    gsap.set(jar1Ref.current.position,  { x: -5.5 ,y:-0.2 }); 
    gsap.set(jar1Ref.current.rotation, { y: Math.PI*1.5 });
  
    gsap.set(jar2Ref.current.position, { x: 5, y: -0.2});
    gsap.set(jar2Ref.current.rotation, { y: Math.PI*1.9  });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });
    if (window.scrollY < 20) {
      introTl
        .from(jar1Ref.current.position, { y: -2, x: -1 }, 0) 
        .from(jar2Ref.current.position, { y: -1, x: 1 }, 0)
        .from(jar1Ref.current.rotation, { z: 3 }, 0)
        .from(jar2Ref.current.rotation, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
          end: "bottom bottom",
        scrub: 1.5,
        // markers:true,
        // pin: true, 
        // anticipatePin: 1, 
      },
    });
   
  
    scrollTl
      .to(groupRef.current.rotation, { y: Math.PI * 3.1 },2) 
      // Jar 1 animation
      .to(jar1Ref.current.position, { x: -0.1, y: -1.7, z: -1.5 }, 0)
      .to(jar1Ref.current.rotation, { z: 0 }, 0)
      // Jar 2 animation
      .to(jar2Ref.current.position, { x: 1.6, y: -1.3, z: -0.9 }, 0)
      .to(jar2Ref.current.rotation, { z: 0.1 }, 0)
    .to(
        groupRef.current.position,
        { x: 3.6, duration: 3, ease: "sine.inOut" },
        1.3,
      );
  }, []);

  return (
    <group ref={groupRef}>
      <group ref={jar1Ref}>
      <BackUpJar jarRef={jar1Ref} />
      </group>
      <group ref={jar2Ref}> 
      <Model jarRef={jar2Ref}   />
      </group>
      {/* <PerspectiveCamera makeDefault position={[0, 0, 9]} /> */}
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};
