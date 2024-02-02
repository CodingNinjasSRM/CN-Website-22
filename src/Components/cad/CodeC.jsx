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

function CodeC() {
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
      "screenshot_requirement": {
        "a": "Upon scanning the QR code for Day 3, visit the corresponding website and take a screenshot.",
        "b": "Save the screenshot on your device."
      },
      "code_preservation": "Keep the Day 3 Code (\"100000+\") stored on your device. This code is essential for the Final Day.",
      "final_day_information": {
        "a": "The Final Day is scheduled for tomorrow. Ensure you have the Day 3 Code saved for the upcoming events."
      },
      "reporting_to_helpdesk": {
        "a": "Tomorrow, report to the HELPDESK of CODING NINJAS SRM, located on the ground floor UB.",
        "b": "Representatives at the HELPDESK will provide you with the final step to redeem the prize."
      }
    },
    "note": "Make sure to adhere to these instructions to successfully complete the challenge. Your presence at the HELPDESK on the Final Day is crucial for the redemption process. Keep the code and screenshots secure for the upcoming events."
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
          <DecoderText text="7ANISHQ" start={aboutInView} delay={500} />
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
        <Rules data={data}/>
      </div>
    </>
  );
}

export default CodeC;
