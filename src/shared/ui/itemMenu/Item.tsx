import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import './item.scss'
export const ItemMenu = (props: any) => {
  
  return (
    <NavLink to={props.url} >
      <div className="itemMenu item__sidebar" >
        <div className="itemMenu__wrap" >
          <span> {props.nameItem}</span>
        </div>
      </div>
    </NavLink>
  );
};
