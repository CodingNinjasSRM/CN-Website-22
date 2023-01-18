import React from 'react';
import ninja from './assets/ninja.svg';
import shiruken from './assets/shiruken.png';
import android from './assets/android.png';
import c from './assets/c.png';
import laptop from './assets/laptop.png';
import pcb from './assets/pcb.png';
import styles from './Technical.module.css';

function Technical() {
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${styles.technicalbg} uppercase`}>
      <div
        className={`absolute opacity-0 top-32 left-40 text-2xl text-white font-semibold ${styles.reveal}`}>
        <img src={c} alt="" />
        <p>CPP</p>
      </div>
      <div
        className={`absolute opacity-0 bottom-32 left-40 text-2xl text-white font-semibold ${styles.reveal1}`}>
        <img src={pcb} alt="" />
        <p>AI/ML</p>
      </div>
      <div
        className={`absolute opacity-0 top-28 right-24 text-2xl text-white font-semibold ${styles.reveal2}`}>
        <img src={laptop} alt="" />
        <p>Programming</p>
      </div>
      <div
        className={`absolute opacity-0 bottom-32 right-40 text-2xl text-white font-semibold ${styles.reveal3}`}>
        <img src={android} alt="" />
        <p>App Dev</p>
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

export default Technical;
