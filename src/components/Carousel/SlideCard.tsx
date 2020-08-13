import React from "react";

type SlideCardProps = {
  title: string;
  desc: string;
  order: number;
};

const SlideCard: React.FC<SlideCardProps> = ({ title, desc, order }) => {
  return (
    <div
      style={{ background: "linear-gradient(180deg, #513ba4, 15%, #28d3d8)" }}
      className="relative p-1-5 rounded-lg my-0 mx-4 h-full shadow-purple"
    >
      <div className="p-5 rounded flex items-start flex-wrap h-72 bg-purple-800 text-white">
        <h1
          style={{ wordBreak: "keep-all" }}
          className="order-1 w-32 font-bold text-xl"
        >
          {title}
        </h1>
        <p
          style={{ wordBreak: "keep-all" }}
          className="order-2 flex-grow-1 leading-snug text-xs text-gray-500"
        >
          {desc}
        </p>
        <div
          className={`
            order-3 self-end ml-auto py-0 px-2 rounded-lg bg-gray-200 bg-opacity-25
            font-roboto text-xxs text-gray-500
         `}
        >{`${order}/10`}</div>
      </div>
    </div>
  );
};

export default SlideCard;
