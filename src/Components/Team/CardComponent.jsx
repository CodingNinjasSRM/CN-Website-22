import React from "react";

const CardComponent = ({ name, position, img }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center mx-auto gap-1">
      <div className=" w-75 h-110 bg-gray-1000 flex justify-center rounded-xl p-8 shadow-[0_0_4px_2px_rgba(255,165,0,0.5)]">
        <img src={img} alt={name} className="h-52 w-52 my-5 object-contain" />
      </div>
      <div>
        {" "}
        <h2 className="font-bold mt-2">{name}</h2>
      </div>
      <div>
        {" "}
        <h3 className="font-light mb-8">{position}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
