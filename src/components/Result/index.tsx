import React, { useContext } from "react";
import qs from "qs";
import { sha256 } from "js-sha256";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../_common/Header";
import Background from "../../assets/images/background-star.svg";
import Button from "../_common/Button";
import Share from "./Share";
import DataContext from "../_common/DataProvider";
import { TarotQuestion, QueryParams, TarotCard } from "../_common/_data";
import Comment from "./Comment";

const Result: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  if (!location?.search) {
    history.push("/");
  }

  const query = (qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as any) as QueryParams;
  const data: TarotQuestion[] = useContext(DataContext);

  const arrayOfArrays = data?.map((item) => item.tarot_cards);
  const tarotCards = arrayOfArrays?.reduce((a, b) => a.concat(b));
  const card: TarotCard = tarotCards?.filter(
    (item) => sha256(item.id.toString()) === query?.card_id
  )[0];
  const question: TarotQuestion = data?.filter((item) => item.id === card.tarot_question_id)[0];

  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="flex flex-col items-center bg-left-top bg-repeat-x"
    >
      <Header
        title={`“${question?.title}”`}
        headerStyle={{
          margin: "mt-12 md:mt-16",
          font: "font-apple",
          marginLogo: "mb-4 md:mb-6",
          marginTitle: "mb-4 md:mb-6",
        }}
      />
      <div className="flex flex-col items-center w-80">
        <div className="w-32">
          <img src={card?.image_url} alt={card?.name} />
        </div>
        <h1 className="font-bold text-lg my-4">{card?.name}</h1>
        <hr className="w-80" />
        <h3 className="font-bold font-applebold my-2">{`“${card?.keyword}”`}</h3>
        <hr className="w-80" />
        <p style={{ wordBreak: "keep-all" }} className="text-sm my-8 font-apple">
          {card?.description}
        </p>
        <div className="flex flex-col justify-end items-center w-80 h-80 mb-2 border border-gray-300 rounded-lg">
          <p className="flex justify-center items-center w-full h-10 bg-gray-800 text-white text-center text-sm rounded-b-lg">
            결과에 맞는 이성 만나러 가기
          </p>
        </div>
        <Button title="타로 다시 보기" />
        <Button title="아만다에서 타로 보기" outline={true} />
        <Share />
        <Comment identifier={query?.card_id} />
      </div>
    </div>
  );
};

export default Result;
