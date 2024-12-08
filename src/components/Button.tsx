import React from "react";
import clsx from "clsx";

type ButtonProps = {
  buttonLink: string;
  buttonText: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ buttonLink, buttonText, className }) => {
  return (
    <a
      href={buttonLink}
      className={clsx(
        "inline-block px-4 py-2 rounded-lg text-white bg-rose-600 hover:bg-orange-700 font-bold text-xl uppercase tracking-wide transition duration-300 mt-4 md:text2xl",
        className
      )}
    >
      {buttonText}
    </a>
  );
};

export default Button;
