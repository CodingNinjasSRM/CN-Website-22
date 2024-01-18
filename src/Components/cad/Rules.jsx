import React from "react";
import style from "../Landing/Landing.module.css";

const formatHeading = (heading) => {
  return heading.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').toUpperCase();
};

const Rules = ({data}) => {
  return (
    <div className="flex flex-col justify-center items-center h-full my-5">
      <div className="md:w-[50%] w-[85%] bg-[#333333] bg-opacity-40 md:px-20 px-10 py-2 rounded-xl">
        <div
          className={`md:text-5xl text-4xl text-transparent bg-clip-text font-bold xl:mb-5 mb-5 xl:pb-5 pb-2 xl:pt-10 pt-10 ${style.aboutheading}`}
        >
          RULES
        </div>
        <ol className="list-decimal text-white text-left px-0 mx-0 md:text-xl text-1 md:pb-5 mb-5 tracking-wider leading-7 space-y-10">
          {Object.entries(data.rules).map(([ruleKey, ruleValue]) => (
            <li key={ruleKey}>
              <>
                <p className="capitalize font-bold py-2">{formatHeading(ruleKey)}</p>
                {typeof ruleValue === "object" ? (
                  <ol>
                    {Object.entries(ruleValue).map(([nestedKey, nestedValue]) => (
                      <div className="flex  items-start space-x-2">
                      <span>{nestedKey}</span>
                      <li key={nestedKey}>{nestedValue}</li>
                      </div>
                    ))}
                  </ol>
                ) : (
                  ruleValue
                )}
              </>
            </li>
          ))}
        </ol>
        <div className="text-white text-center px-0 py-5 mx-0 md:text-xl text-1 md:pb-5 mb-5 tracking-wider leading-7">
          <h1 className="md:text-2xl font-bold">NOTE</h1>
          <p>{data.note}</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
