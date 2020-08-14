import React, { useContext } from "react";
import qs from "qs";
import { sha256 } from "js-sha256";
import { useLocation, useHistory, Link } from "react-router-dom";
import { isIOS, isAndroid } from "react-device-detect";
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

  let storeLink = "";
  if (isIOS) {
    storeLink =
      "https://apps.apple.com/kr/app/%EC%95%84%EB%A7%8C%EB%8B%A4-%EC%95%84%EB%AC%B4%EB%82%98-%EB%A7%8C%EB%82%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%8B%B9%EC%8B%A0%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%86%8C%EA%B0%9C%ED%8C%85/id906675357";
  } else if (isAndroid) {
    storeLink = "https://play.google.com/store/apps/details?id=com.dorsia.amanda&hl=ko";
  } else {
    storeLink = "http://amanda.co.kr/";
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
        <Link to="/menu">
          <Button title="타로 다시 보기" />
        </Link>
        <a href={storeLink} target="_blank" rel="noopener noreferrer">
          <Button title="아만다에서 타로 보기" outline={true} />
        </a>
        <Share />
        <Comment identifier={query?.card_id} />
      </div>
    </div>
  );
};

export default Result;
