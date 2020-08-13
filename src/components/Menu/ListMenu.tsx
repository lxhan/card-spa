import React from "react";
import ListMenuItem from "./ListMenuItem";
import { TarotQuestion } from "../_common/_data";
import ScrollToTopOnMount from "../_common/ScrollToTopOnMount";
import { Link } from "react-router-dom";

type ListMenuProps = {
  data: TarotQuestion[];
  gender: number;
};

const ListMenu: React.FC<ListMenuProps> = ({ data, gender }) => {
  return (
    <div className="lg:max-w-3xl mx-auto">
      <ScrollToTopOnMount />
      <ul>
        {data &&
          data.map((item) => (
            <Link
              key={item?.id}
              to={{ pathname: "/shuffle", state: { data: item, gender } }}
            >
              <ListMenuItem title={item?.title} icon={item?.image_url} />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default ListMenu;
