import React, { useState, useEffect } from "react";
import Header from "../_common/Header";
import Shuffle from "./Shuffle";
import Pick from "./Pick";
import Background from "../../assets/images/background-star.svg";
import { TarotQuestion } from "../_common/_data";
import { useHistory, useLocation } from "react-router-dom";

const Deck: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  if (!location?.state) {
    history.push("/menu");
  }

  const gender: number = (location.state as any)?.gender;
  const data: TarotQuestion = (location.state as any)?.data;

  const [isShuffle, setShuffle] = useState(true);

  const toggleShuffle = () => {
    setShuffle(!isShuffle);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShuffle(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="flex flex-col items-center min-h-screen"
    >
      <Header
        title={
          isShuffle
            ? "언제, 어디서 애인을 만날 수 있을까?"
            : "질문을 생각하면서 카드 1장을 선택해줘."
        }
        headerStyle={{ width: "w-44 md:w-80", margin: "mt-12 md:mt-16" }}
      />
      {isShuffle ? (
        <Shuffle />
      ) : (
        <Pick data={data?.tarot_cards} gender={gender} />
      )}
      <div
        className="w-24 mx-auto cursor-pointer text-white text-center text-sm my-12"
        onClick={toggleShuffle}
      >
        카드 다시 섞기
      </div>
    </div>
  );
};

export default Deck;
