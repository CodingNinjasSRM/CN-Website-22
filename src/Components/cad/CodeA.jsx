import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef ,useState} from "react";
import "react-multi-carousel/lib/styles.css";
import { DecoderText } from "../DecoderText";
import ParticleBGLanding from "../ParticleBG/ParticleBGLanding";
import styles from "./styles.module.css";
import Rules from "./Rules";
import { FiChevronDown } from "react-icons/fi";

function CodeA() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const aboutRef = useRef(null);
  const scrollButtonRef = useRef(null);
  const aboutInView = useInView(aboutRef);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToRules = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowScrollButton(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="h-screen w-full -z-10 absolute">
        <ParticleBGLanding />
      </div>
      <div className="h-screen w-full">
        <ParticleBGLanding />
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center absolute inset-0">
        <div
          className={`${styles.heading} xl:text-9xl md:text-8xl text-5xl text-transparent`}
          ref={aboutRef}
        >
          <DecoderText text="NINJA" start={aboutInView} delay={500} />
        </div>
        {showScrollButton && (
          <motion.button
          ref={scrollButtonRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white flex flex-col items-center absolute bottom-20 xl:text-left text-center md:text-xl text-1 tracking-wider leading-7"
          onClick={scrollToRules}
        >
          <FiChevronDown size={24} />
          See Rules
        </motion.button>
        )}
      </div>
      <div ref={aboutRef}>
        <Rules />
      </div>
    </>
  );
}

export default CodeA;
