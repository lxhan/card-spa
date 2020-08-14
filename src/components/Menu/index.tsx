import React, { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../_common/Header";
import CarouselMenu from "../Carousel";
import ListMenu from "./ListMenu";
import Background from "../../assets/images/background-star.svg";
import DataContext from "../_common/DataProvider";

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  if (!location?.state && !localStorage.getItem("gender")) {
    history.push("/gender");
  }

  const gender: number =
    (location.state as any)?.gender || Number.parseInt(localStorage.getItem("gender")!);
  localStorage.setItem("gender", gender.toString());

  const [isList, setMenuState] = useState(false);

  const toggleList = () => {
    setMenuState(!isList);
  };

  const data = useContext(DataContext);

  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="flex flex-col items-center min-h-screen"
    >
      <Header
        title={isList ? "" : "궁금한 질문을 골라봐"}
        headerStyle={{ margin: "mt-12 md:mt-16" }}
      />
      {isList ? (
        <ListMenu data={data!} gender={gender!} />
      ) : (
        <CarouselMenu data={data!} gender={gender!} />
      )}
      <div
        className="w-24 my-8 md:my-16 cursor-pointer text-white text-center text-sm"
        onClick={toggleList}
      >
        {isList ? "기본메뉴로 보기" : "전체 메뉴 보기"}
      </div>
    </div>
  );
};

export default Menu;
