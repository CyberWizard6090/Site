import React from "react";
import "./search.scss";
import { ReactComponent as SearchIcon } from "shared/assets/svg/bootstrap-icons-1.11.2/search.svg";
type Props = {};

export const Search = (props: Props) => {
  return (
    <div className="Card">
      <div className="CardInner">
        <div className="container">
          <div className="Icon">
            <SearchIcon />
          </div>
          <div className="InputContainer">
            <input placeholder="Поиск" />
          </div>
          <div className="cross"></div>
        </div>
      </div>
    </div>
  );
};
