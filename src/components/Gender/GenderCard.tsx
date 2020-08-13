import React from "react";
import { ReactComponent as Male } from "../../assets/icons/icon-man.svg";
import { ReactComponent as Female } from "../../assets/icons/icon-woman.svg";
import styled from "styled-components";

type GenderCardProps = {
  title: string;
  isMale: boolean;
};

const GenderDiv = styled.div`
  fill: #232733;
  :hover .male {
    fill: #fff;
  }
  :hover .female {
    fill: #fff;
  }
`;

const GenderCard: React.FC<GenderCardProps> = ({ title, isMale }) => {
  return (
    <GenderDiv
      className={` 
          bg-white hover:bg-purple-700 text-gray-800 hover:text-white 
          text-lg text-center py-6 px-8 rounded-lg cursor-pointer
        `}
    >
      {isMale ? (
        <Male className="male mb-1" />
      ) : (
        <Female className="female mb-1" />
      )}
      {title}
    </GenderDiv>
  );
};

export default GenderCard;
