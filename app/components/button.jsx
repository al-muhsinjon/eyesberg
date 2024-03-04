import React from "react";

const Button = ({ children, small }) => {
  return (
    <button className={`bg-blue text-white px-6 text-base ${small ? "md:text-base": "md:text-xl"}  font-bold rounded-xl py-2`}>
      {children}
    </button>
  );
};

export default Button;
