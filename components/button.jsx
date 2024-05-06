"use client";
const Button = ({ children, small, fill, padding, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue text-white xl:text-base text-base ${
        (small ? "md:text-base" : "md:text-xl", padding ? "px-16" : "px-6")
      } ${fill ? "w-full" : "w-auto"}  font-bold rounded-xl py-2`}
    >
      {children}
    </button>
  );
};

export default Button;
