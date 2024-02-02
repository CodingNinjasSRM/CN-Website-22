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

function CodeB() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const aboutRef = useRef(null);
  const aboutRef2 = useRef(null);
  const scrollButtonRef = useRef(null);
  const aboutInView = useInView(aboutRef);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToRules = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowScrollButton(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  const data ={
    "rules": {
      "Screenshot Requirement": {
        "a": "Upon scanning the QR code for Day 2, access the corresponding website and take a screenshot.",
        "b": "Save the screenshot on your device."
      },
      "Code Preservation": 'Keep the Day 2 Code ("FARHANiTRATE") stored on your device. This code will be essential for the Final Day.',
      "Critical Information in QR Codes": {
        "a": "Details about the final day will be revealed in one of the QR codes encountered during the challenge.",
        "b": "Pay close attention to the information provided by the QR codes to avoid missing any crucial updates."
      },
      "Continuation of the Challenge": {
        "a": "Tomorrow, a new QR code will be placed at the same location where you found the Day 2 QR code.",
        "b": "Ensure that you have the necessary preparations to scan the new QR code for the next stage of the challenge."
      }
    },
    "note": "It is crucial to follow these rules to successfully navigate through the challenge. Stay vigilant for updates and information in the QR codes for a seamless progression and make sure you follow us on our INSTAGRAM for further updates. (add the insta link here)"
  }
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
          className={`${styles.heading} md:text-6xl text-3xl text-transparent font-medium`}
          ref={aboutRef}
        >
          <DecoderText text="SANSKARMANTRA" start={aboutInView} delay={500} />
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
      <div ref={aboutRef2}>
        <Rules data={data} />
      </div>
    </>
  );
}

export default CodeB;
