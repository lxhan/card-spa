import React, { useState } from "react";
import { TarotCard } from "../_common/_data";
import Row from "./Row";

type PickProps = {
  data: TarotCard[];
  gender: number;
};

const Pick: React.FC<PickProps> = ({ data, gender }) => {
  const genderData = data.filter((item) => item.gender === gender);

  const shuffleArray = (arr: TarotCard[]) => {
    let currentIndex = arr.length;

    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };

  const rows = shuffleArray(genderData);
  const row1 = rows.slice(0, 4);
  const row2 = rows.slice(4, 9);
  const row3 = rows.slice(9, 13);
  const row4 = rows.slice(13, 18);
  const row5 = rows.slice(18, 22);

  const [isFlipped, setFlip] = useState(false);

  return (
    <div className="flex flex-col items-center w-80">
      <Row row={row1} isFlipped={isFlipped} setFlip={setFlip} />
      <Row row={row2} isFlipped={isFlipped} setFlip={setFlip} />
      <Row row={row3} isFlipped={isFlipped} setFlip={setFlip} />
      <Row row={row4} isFlipped={isFlipped} setFlip={setFlip} />
      <Row row={row5} isFlipped={isFlipped} setFlip={setFlip} />
    </div>
  );
};

export default Pick;
