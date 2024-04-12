import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ViewContext } from "../Context/ViewContextProvider";
import { NavLink } from "react-router-dom";

export const Item = (props: any) => {
  const { setStateMenuValue } = useContext(ViewContext);
  const handleOnClick = (e: { preventDefault: () => void }) => {
  
    setStateMenuValue();
  };
  return (
    <NavLink to={props.url} >
      <div className="itemMenu item__sidebar" >
        <div className="itemMenu__wrap" onClick={handleOnClick}>
          <span> {props.nameItem}</span>
        </div>
      </div>
    </NavLink>
  );
};
