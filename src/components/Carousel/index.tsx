import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import SlideCard from "./SlideCard";
import "@brainhubeu/react-carousel/lib/style.css";
import "../../assets/css/carousel-override.css";
import { TarotQuestion } from "../_common/_data";
import { Link } from "react-router-dom";

type CarouselMenuProps = {
  data: TarotQuestion[];
  gender: number;
};

const CarouselMenu: React.FC<CarouselMenuProps> = ({ data, gender }) => {
  return (
    <div className="md:max-w-3-5xl mx-auto w-full mt-12">
      <Carousel
        centered={true}
        draggable={false}
        arrows={true}
        infinite={true}
        itemWidth={250}
        slidesPerPage={3}
      >
        {data &&
          data.map((item) => (
            <Link
              key={item?.id}
              to={{ pathname: "/shuffle", state: { data: item, gender } }}
            >
              <SlideCard
                title={item?.title}
                desc={item?.sub_title}
                order={item?.display_order + 1}
              />
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselMenu;
