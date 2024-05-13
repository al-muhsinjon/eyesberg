"use client";
const Button = ({
  children,
  small,
  fill,
  padding,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue border-blue text-white xl:text-base text-base hover:bg-transparent   hover:text-blue hover:border-2 border-2 ${
        (small ? "md:text-base" : "md:text-xl", padding ? "px-16" : "px-6")
      } ${fill ? "w-full" : "w-auto"}  font-bold rounded-xl py-2`}
    >
      {children}
    </button>
  );
};

export default Button;
