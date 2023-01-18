import React from 'react';
import styles from './Nontechnical.module.css';
import ninja from './assets/ninja.svg';
import shiruken from './assets/shiruken.png';
import corporate from './assets/corporate.png';
import creative from './assets/creative.png';
import dollar from './assets/dollar.png';
import editorial from './assets/editorial.png';

function Nontechnical() {
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${styles.corporatebg} uppercase`}>
      <div
        className={`absolute opacity-0 top-32 left-40 text-2xl text-white font-semibold ${styles.reveal}`}>
        <img src={editorial} alt="" />
        <p>Editorial</p>
      </div>
      <div
        className={`absolute opacity-0 bottom-32 left-40 text-2xl text-white font-semibold ${styles.reveal1}`}>
        <img src={creative} alt="" />
        <p>Creatives</p>
      </div>
      <div
        className={`absolute opacity-0 top-32 right-52 text-2xl text-white font-semibold ${styles.reveal2}`}>
        <img src={corporate} alt="" />
        <p>Corporate</p>
      </div>
      <div
        className={`absolute opacity-0 bottom-32 right-40 text-2xl text-white font-semibold ${styles.reveal3}`}>
        <img src={dollar} alt="" />
        <p>Sponsorship</p>
      </div>
      <img
        className={`absolute opacity-0 top-32 left-40 ${styles.star1}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute opacity-0 bottom-32 left-40 ${styles.star2}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute opacity-0 top-32 right-40 ${styles.star3}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute opacity-0 bottom-32 right-40 ${styles.star4}`}
        src={shiruken}
        alt=""
      />
      <img src={ninja} alt="" className={`h-40 ${styles.flip}`} />
    </div>
  );
}

export default Nontechnical;
