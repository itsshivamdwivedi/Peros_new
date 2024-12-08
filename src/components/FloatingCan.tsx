"use client";

import React, { forwardRef } from "react";
import { Float,Environment } from "@react-three/drei";
// import Model  from "./BackUpJar";
import { Group } from "three";
import ModelView from "./ModelView";
import Model from "./BackUpJar";

type FloatingProps = React.ComponentPropsWithoutRef<"group">;

const Floating = forwardRef<Group, FloatingProps>((props, ref) => {
  return (
    <group ref={ref} {...props}>
 
     
        <Model />
        <Environment files="/hdr/lobby.hdr" intensity={1.5} />

    </group>
  );
});

Floating.displayName = "Floating";

export default Floating;
