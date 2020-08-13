import React from "react";
import Header from "../_common/Header";
import GenderCard from "./GenderCard";
import Background from "../../assets/images/background-star.svg";
import { Link } from "react-router-dom";

const Gender: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="flex flex-col items-center justify-start h-screen"
    >
      <Header title="너의 성별을 알려줘" headerStyle={{ margin: "mt-16" }} />
      <div className="w-80 flex flex-row items-center justify-between mt-16 md:mt-32">
        <Link to={{ pathname: "/menu", state: { gender: 1 } }}>
          <GenderCard title="남성" isMale={true} />
        </Link>
        <Link to={{ pathname: "/menu", state: { gender: 2 } }}>
          <GenderCard title="여성" isMale={false} />
        </Link>
      </div>
    </div>
  );
};

export default Gender;
