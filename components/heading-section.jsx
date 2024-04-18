import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="font-bold md:text-3xl text-2xl md:w-2/3">{children}</h2>
  );
};

export default Heading;
