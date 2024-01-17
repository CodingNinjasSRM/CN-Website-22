import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { DecoderText } from "../DecoderText";
import ParticleBGLanding from "../ParticleBG/ParticleBGLanding";
import styles from "./styles.module.css";

function CodeB() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef);
  return (
    <>
      <div className="h-screen w-full -z-10 absolute">
        <ParticleBGLanding />
      </div>
      <div className="h-screen w-full">
        <ParticleBGLanding />
      </div>
      <div className="w-screen h-screen flex items-center justify-center absolute inset-0">
        <div
          className={`${styles.heading} text-9xl text-transparent`}
          ref={aboutRef}
        >
          <DecoderText text="AT" start={aboutInView} delay={500} />
        </div>
      </div>
    </>
  );
}

export default CodeB;
