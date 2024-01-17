import React from "react";
import style from "../Landing/Landing.module.css";

const data = {
  1: "Rule1",
  2: "Rule2",
  3: "Rule3",
};

const Rules = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="md:w-[45%] w-[80%] bg-[#333333] bg-opacity-40 px-10 py-2 h-[60%] rounded-xl">
        <div
          className={`xl:text-7xl md:text-6xl text-5xl text-transparent bg-clip-text font-bold xl:mb-5 mb-5 xl:pb-5 pb-2 xl:pt-10 pt-10 ${style.aboutheading}`}
        >
          RULES
        </div>
        {Object.keys(data).map((ruleNumber) => (
          <p
            key={ruleNumber}
            className="text-white xl:text-left text-center px-0 mx-0 md:text-xl text-1 md:pb-5 mb-5 tracking-wider leading-7"
          >
            {`- ${data[ruleNumber]}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Rules;

