import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

type HeaderProps = {
  title: string;
  headerStyle?: {
    font?: string;
    margin?: string;
    marginLogo?: string;
    marginTitle?: string;
    text?: string;
    width?: string;
  };
};

const Header: React.FC<HeaderProps> = ({ title, headerStyle }) => {
  return (
    <div
      className={`
        mx-auto flex flex-col justify-center items-center text-center
        ${headerStyle?.margin || ""}
      `}
    >
      <Link to="/">
        <Logo className={`${headerStyle?.marginLogo || "mb-8 md:mb-16"}`} />
      </Link>
      {title && (
        <h1
          style={{ wordBreak: "keep-all" }}
          className={`
            text-white
            ${headerStyle?.width || "w-68"}  
            ${headerStyle?.text || "text-xl"} 
            ${headerStyle?.marginTitle || "mb-8 md:mb-16"}
            ${headerStyle?.font || ""}
          `}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default Header;
