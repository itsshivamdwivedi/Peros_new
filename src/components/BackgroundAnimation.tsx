"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BackgroundAnimation: React.FC = () => {
  useEffect(() => {
   
    gsap.registerPlugin(ScrollTrigger);


    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body, 
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    
    scrollTl.fromTo(
      "body",
      { backgroundColor: "#e1eaee" }, 
      { backgroundColor: "#D9F99D", overwrite: "auto" } 
    );


  }, []);

  return (
    <div style={{ minHeight: "200vh" }}>
      <h1 className="text-center text-3xl font-bold pt-10">
        Scroll to See Background Color Change!
      </h1>
    </div>
  );
};

export default BackgroundAnimation;
