import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center font-montserrat text-lg leading-1 bg-coral-red rounded-full text-white gap-2 px-7 py-4 border border-coral-red">
      {label}
      <img
        src={iconURL}
        alt={label + "icon"}
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
