import React, { useState } from "react";
import ParticleBGLanding from "../ParticleBG/ParticleBGLanding";
import { SHA256 } from "crypto-js";

const CodeForm = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const hash = (code) => {
    // Using SHA256 for hashing, you can choose a different algorithm if needed
    return SHA256(code).toString();
  };

  const handleCheckCodes = () => {
    // Hash the entered codes
    const hashedCode1 = hash(code1);
    const hashedCode2 = hash(code2);
    const hashedCode3 = hash(code3);

    console.log(hashedCode1);
    console.log(hashedCode2);
    console.log(hashedCode3);

    // Check if all hashed codes are correct (replace conditions with your logic)
    if (
      hashedCode1 ===
        "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3" &&
      hashedCode2 ===
        "b3a8e0e1f9ab1bfe3a36f231f676f78bb30a519d2b21e6c530c0eee8ebb4a5d0" &&
      hashedCode3 ===
        "35a9e381b1a27567549b5f8a6f783c167ebf809f1c4d6a9e367240484d8ce281"
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
            <div className="w-screen flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSewlZR7lf5cCu4QV1-AbJj8NKAyReDm9JL_yNQtW3K3VfIPEg/viewform?embedded=true"
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
