import React, { Dispatch, SetStateAction } from "react";
import { TarotCard } from "../_common/_data";
import SingleCard from "./SingleCard";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type RowProps = {
  row: TarotCard[];
  isFlipped: boolean;
  setFlip: Dispatcher<boolean>;
};

const Row: React.FC<RowProps> = ({ row, isFlipped, setFlip }) => {
  return (
    <div className="flex flex-row">
      {row &&
        row.map((item, i) => (
          <SingleCard
            key={i}
            data={item}
            isFlipped={isFlipped}
            setFlip={setFlip}
          />
        ))}
    </div>
  );
};

export default Row;
