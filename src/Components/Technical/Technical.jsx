import React from "react";
import { Link } from "react-router-dom";
import FooterMin from "../FooterMin/FooterMin";
import android from "./assets/android.png";
import c from "./assets/c.png";
import laptop from "./assets/laptop.png";
import ninja from "./assets/ninja.svg";
import pcb from "./assets/pcb.png";
import shiruken from "./assets/shiruken.png";
import styles from "./Technical.module.css";

function Technical() {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${styles.technicalbg} uppercase mt-32 sm:mt-0`}
    >
      <div className="grid grid-cols-1 grid-rows-4 lg:mt-12  sm:grid-cols-3 sm:grid-rows-2 gap-y-16 sm:gap-y-20 md:gap-20 lg:gap-x-60 lg:gap-y-36">
        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white font-semibold ${styles.reveal}`}
        >
          <Link to="/technical/cp">
            <img src={c} alt="" />
            <p>CPP</p>
          </Link>
        </div>

        <div className="row-span-2 justify-self-center self-center hidden sm:flex">
          <img src={ninja} alt="" className={`h-40 ${styles.flip}`} />
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white sm:hidden font-semibold ${styles.reveal1}`}
        >
          <Link to="/technical/webdev">
            <img src={laptop} alt="" />
            <p>Web Dev</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white hidden sm:grid  font-semibold ${styles.reveal2}`}
        >
          <Link to="/technical/webdev">
            <img src={laptop} alt="" />
            <p>Web Dev</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white sm:hidden font-semibold ${styles.reveal2} `}
        >
          <Link to="/technical/aiml">
            <img src={pcb} alt="" />
            <p>AI/ML</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white hidden sm:grid font-semibold ${styles.reveal1} `}
        >
          <Link to="/technical/aiml">
            <img src={pcb} alt="" />
            <p>AI/ML</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white font-semibold ${styles.reveal3}`}
        >
          <Link to="/technical/appdev">
            <img src={android} alt="" />
            <p>App Dev</p>
          </Link>
        </div>
      </div>

      <img
        className={`absolute hidden h-16 w-16 md:flex opacity-0 top-32 left-40 ${styles.star1}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 bottom-32 left-40 ${styles.star2}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 top-32 right-40 ${styles.star3}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 bottom-32 right-40 ${styles.star4}`}
        src={shiruken}
        alt=""
      />
      <FooterMin classNames="py-6 sm:py-0 sm:absolute sm:bottom-6" />
    </div>
  );
}

export default Technical;
