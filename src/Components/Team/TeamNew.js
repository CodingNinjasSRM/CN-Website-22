import React from "react";
import { Cloud1, Cloud2 } from "../Smoke/Smoke";
import Vfootermin from "../VFooterMin/Vfootermin";
import CardComponent from "./CardComponent";

import { Canvas } from "@react-three/fiber";

import { board, leads, president, vicePresident } from "./board";

const TeamNew = () => {
  console.log(president);
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-screen h-auto gap-y-10">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Cloud1 />
        <Cloud2 />
      </Canvas>

      <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
        {president.map(({ name, position, image }) => (
          <CardComponent name={name} position={position} img={image} />
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
        {vicePresident.map(({ name, position, image }) => (
          <CardComponent name={name} position={position} img={image} />
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
        {board.map(({ name, position, image }) => (
          <CardComponent name={name} position={position} img={image} />
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
        {leads.map(({ name, position, image }) => (
          <CardComponent name={name} position={position} img={image} />
        ))}
      </div>

      <Vfootermin classNamess="fixed bottom-1 left-1 lg:bottom-6 lg:left-4" />
    </div>
  );
};

export default TeamNew;
