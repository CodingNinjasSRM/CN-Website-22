import React from "react";

const CardComponent = ({ name, position, img }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <img src={img} alt={name} className="h-40 w-40 object-contain" />
      <h2>{name}</h2>
      <h3>{position}</h3>
    </div>
  );
};

export default CardComponent;
