import React, { useState } from "react";
import ParticleBGLanding from "../ParticleBG/ParticleBGLanding";

const CodeForm = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleCheckCodes = () => {

    if (
      code1 ===
        "TOSHAKERATION" &&
      code2 ===
        "SANSKARMANTRA" &&
      code3 ===
        "7ANISHQ"
    ) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
      alert("Incorrect codes. Please try again.");
    }
  };

  return (
    <>
      <ParticleBGLanding />
      <div className="-mt-[30em]">
        <div className="my-2">
          <input
            className="p-3 rounded-xl max-w-4xl"
            placeholder="Enter Code 1"
            type="text"
            value={code1}
            onChange={(e) => handleInputChange(e, setCode1)}
          />
        </div>
        <div className="my-2">
          <input
            className="p-3 rounded-xl"
            placeholder="Enter Code 2"
            type="text"
            value={code2}
            onChange={(e) => handleInputChange(e, setCode2)}
          />
        </div>
        <div className="my-2">
          <input
            className="p-3 rounded-xl"
            placeholder="Enter Code 3"
            type="text"
            value={code3}
            onChange={(e) => handleInputChange(e, setCode3)}
          />
        </div>
        <button
          className="text-[#ee4623] hover:text-[#d61c03] hover:bg-gray-900 hover:bg-opacity-90 text-xl  p-2 rounded-md"
          onClick={handleCheckCodes}
        >
          Check Codes
        </button>
        {isSuccess && (
          <div className="-mb-96">
            {" "}
            <button className="text-white">Success!</button>
            <div className="w-screen flex justify-center rounded-lg">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScUsC6cSYCKQBKOE8ng-Y0tBNChMbXnyaWc4X6yi-jxOgnMsQ/viewform?usp=sf_link"
                // src="https://forms.gle/5TQ4QAopvoQF7fbr5"
                className="md:w-96 max-w-lg h-96 overflow-hidden flex justify-between"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CodeForm;
