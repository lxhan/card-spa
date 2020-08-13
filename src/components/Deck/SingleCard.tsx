import React, { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { sha256 } from "js-sha256";
import CardBack from "../../assets/images/cards/back_big.png";
import { TarotCard } from "../_common/_data";

const CardBase = styled.div`
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
`;

const CardFace = styled.div`
  position: absolute;
  backface-visibility: hidden;
`;

const CardFaceFront = styled(CardFace)`
  transform: rotateY(180deg);
`;

const CardFaceBack = styled(CardFace)``;

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
type SingleCardProps = {
  data: TarotCard;
  isFlipped: boolean;
  setFlip: Dispatcher<boolean>;
};

const SingleCard: React.FC<SingleCardProps> = ({ data, isFlipped, setFlip }) => {
  const history = useHistory();
  const flipCard = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isFlipped) {
      const { currentTarget } = e;
      currentTarget.style.transform = "rotateY(180deg)";
      setFlip(true);
      setTimeout(() => {
        history.push(`/result?card_id=${sha256(data.id.toString())}`);
      }, 1000);
    }
  };

  return (
    <CardBase onClick={flipCard} className="card-base w-10 h-20 mx-2 focus:outline-none">
      <CardFaceBack className="w-10">
        <img src={CardBack} alt="Back" />
      </CardFaceBack>
      <CardFaceFront className="w-10">
        <img src={data?.image_url} alt="Front" />
      </CardFaceFront>
    </CardBase>
  );
};

export default SingleCard;
