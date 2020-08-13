import React from "react";

type ButtonProps = {
  title: string;
  outline?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, outline }) => {
  return (
    <div
      className={`
        w-80 font-apple  
        text-center py-3 rounded focus:outline-none 
        ${
          outline
            ? "bg-white border border-purple-700 text-purple-700 mt-4 mb-12"
            : "bg-purple-700 mt-8 text-white"
        } 
      `}
    >
      {title}
    </div>
  );
};

export default Button;
