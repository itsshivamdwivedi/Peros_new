"use client";

import React, { forwardRef } from "react";
import { Float,Environment } from "@react-three/drei";
import Model  from "./BackUpJar";
import { Group } from "three";
import ModelView from "./ModelView";

type FloatingProps = React.ComponentPropsWithoutRef<"group">;

const Floating = forwardRef<Group, FloatingProps>((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* <Float */}
        {/* // speed={0.5} // Animation speed, defaults to 1 */}
        {/* // rotationIntensity={1} // XYZ rotation intensity, defaults to 1 */}
        {/* // floatIntensity={0} // Up/down float intensity, works like a multiplier with floatingRange, defaults to 1 */}
        {/* // floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1, 0.1] */}
      {/* > */}
     
        <ModelView />
        <Environment files="/hdr/lobby.hdr" intensity={1.5} />

      {/* </Float> */}
    </group>
  );
});



export default Floating;
