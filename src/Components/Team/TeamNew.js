import React, { useState } from "react";

import SmokeBackground from "../Smoke/Cloud";
import Vfootermin from "../VFooterMin/Vfootermin";
import CardComponent from "./CardComponent";

import {
  aiml,
  appDev,
  board,
  corporate,
  creatives,
  edi,
  leads,
  president,
  sponsi,
  vicePresident,
  webDev,
} from "./board";

const TeamNew = () => {
  const [showDomains, setShowDomains] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mt-5 w-screen h-auto gap-y-10">
      <div
        className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading`}
      >
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

      <div
        className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading`}
      >
        Team Leads
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

      <div
        className={`${
          showDomains ? "hidden" : "block"
        } text-[#ce3f1a] border-[#ce3f1a] p-3 m-4 border rounded-lg text-lg hover:bg-[#ce3f1a] hover:cursor-pointer hover:text-white`}
        onClick={() => setShowDomains(true)}
      >
        Show More
      </div>

      <div
        className={`${
          showDomains ? "flex" : "hidden"
        }  flex-col justify-center items-center w-screen`}
      >
        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          AI/ML
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-3/5">
          {aiml.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>

        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          App Dev
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-3/5">
          {appDev.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>

        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          Web Dev
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
          {webDev.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>

        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          Corporate
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
          {corporate.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>

        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          Creatives
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
          {creatives.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>

        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          Editorial
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
          {edi.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>

        <div
          className={`pt-16 text-[40px] md:text-[60px] font-[700] teamheading mb-4`}
        >
          Sponsorship
        </div>
        <div className="flex flex-row flex-wrap items-center justify-around w-4/5">
          {sponsi.map(({ name, position, image, style }) => (
            <CardComponent
              name={name}
              position={position}
              img={image}
              style={style}
            />
          ))}
        </div>
      </div>

      <Vfootermin classNamess="fixed bottom-1 left-1 lg:bottom-6 lg:left-4" />
    </div>
  );
};

export default TeamNew;
