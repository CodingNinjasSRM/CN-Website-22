import { motion } from "framer-motion";
import React from "react";
import { Link /* , Links */ } from "react-router-dom";
import ninja from "./assets/Ninja img.svg";
import roll from "./assets/roll.png";
import style from "./Domains.module.css";

const Domains = () => {
  return (
    <div className={`${style.domainsbg} mt-16`}>
      <div className={`${style.ninjacontainer}`}>
        <img src={ninja} alt="" />
      </div>
      <div
        className={`${style.domainBoxes} text-[#8B5130] font-semibold font-mono`}
      >
        <div>
          <Link to="/technical">
            <motion.div
              transition={{ duration: 0.6, ease: "easeOut" }}
              initial={{ x: "0" }}
              whileInView={{ x: "-80%", y: "40%" }}
            >
              <img src={roll} alt="" />
              <span className="absolute z-50 text-3xl top-1/2 right-1/2 translate-x-1/2">
                Technical
              </span>
            </motion.div>
          </Link>
        </div>
        <div>
          <Link to="/nontechnical">
            <motion.div
              transition={{ duration: 0.6, ease: "easeOut" }}
              initial={{ x: "0" }}
              whileInView={{ x: "80%", y: "-40%" }}
              className="relative"
            >
              <img src={roll} alt="" />
              <span className="absolute z-50 text-3xl top-1/2 right-1/2 translate-x-1/2 -translate-y-10">
                Non Technical
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Domains;
