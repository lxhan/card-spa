import React from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/icon-arrow-right.svg";

type ListMenuItemProps = {
  title: string;
  icon: string;
};

const ListMenuItem: React.FC<ListMenuItemProps> = ({ title, icon }) => {
  return (
    <li
      className={`
          flex flex-row justify-between items-center w-88 p-3 text-white 
          border border-purple-900 border-opacity-0 rounded hover:border-purple-600
          hover:shadow-purplish cursor-pointer font-apple
        `}
    >
      <img src={icon} alt="Title" className="w-8 mr-3" />
      <span className="mr-auto">{title}</span>
      <ArrowIcon />
    </li>
  );
};

export default ListMenuItem;
