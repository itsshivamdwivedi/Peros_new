"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ModelView from "./ModelView";

const Model: React.FC = () => {
  const [model, setModel] = useState({ title: "Peros Jar 360° View" });

  useEffect(() => {
    gsap.to("#heading", { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width text-center mt-2">
        <h1 id="heading" className="section-heading mb-8">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center">
          <div className="w-full h-[50vh] md:h-[50vh] relative">
            {/* Render 3D Model */}
            <ModelView />
          </div>

          {/* Adjusted spacing for the title */}
          <div className="mt-2">
            <p className="text-base font-medium text-center">{model.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
