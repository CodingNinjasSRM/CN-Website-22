import { Canvas } from "@react-three/fiber";
import React from "react";
import { Cloud1, Cloud2 } from "../Smoke/Smoke";
import Vfootermin from "../VFooterMin/Vfootermin";
import CardComponent from "./CardComponent";

import { board, leads, president, vicePresident } from "./board";
import SmokeBackground from "../Smoke/Cloud";

const TeamNew = () => {
  // console.log(president);
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-screen h-auto gap-y-10">
      <div className={`pt-16 text-[60px] font-[700] teamheading`}>
        Our Team
      </div>
      <SmokeBackground />
      {/* <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Cloud1 />
        <Cloud2 />
      </Canvas> */}

      <div className="flex flex-row flex-wrap items-center justify-around">
        {president.map(({ name, position, image, style }) => (
          <CardComponent
            name={name}
            position={position}
            img={image}
            style={style}
          />
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around">
        {vicePresident.map(({ name, position, image, style }) => (
          <CardComponent
            name={name}
            position={position}
            img={image}
            style={style}
          />
        ))}
      </div>

      <div
        className="flex flex-row flex-wrap items-center justify-around w-4/5"
        data-aos-duration="2000"
      >
        {board.map(({ name, position, image, style }) => (
          <CardComponent
            name={name}
            position={position}
            img={image}
            style={style}
          />
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
        {leads.map(({ name, position, image, style }) => (
          <CardComponent
            name={name}
            position={position}
            img={image}
            style={style}
          />
        ))}
      </div>

      <Vfootermin classNamess="fixed bottom-1 left-1 lg:bottom-6 lg:left-4" />
    </div>
  );
};

export default TeamNew;
