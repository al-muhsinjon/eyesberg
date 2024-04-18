"use client";
const Button = ({ children, small, padding }) => {
  return (
    <button
      className={`bg-blue text-white xl:text-base text-base ${
        (small ? "md:text-base" : "md:text-xl", padding ? "px-16" : "px-6")
      }  font-bold rounded-xl py-2`}
    >
      {children}
    </button>
  );
};

export default Button;
