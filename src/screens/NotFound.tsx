import React from "react";
import {
    Link
  } from 'react-router-dom';
import "./../css/NotFound.css";
import "./../css/СolorScheme.css";
// import { ReactComponent as Error404 } from "./../asset/svg/404_error_8hboj5xham1z.svg";

import { LogoView } from "../components/LogoView";
import Error404 from "../components/Error404";
type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="color_lv_0 error-page">
      <div className="error-page__container">
        <div className="error-page__logo-wrapper">
        <Link to={"/"} >
        {/* <LogoView/> */}
          </Link>
        </div>
        <div className="error-page__container-left color_lv_2-0">
          <h1>404. Страница не найдена</h1>
          <p className="desc">
            Возможно, она была перемещена, или вы&nbsp;просто неверно указали
            адрес страницы.
          </p>
          <div className="links">
          <Link to={"/"} >
            <span className="back__home">      На Главную</span>
      
          </Link>

          </div>
        </div>
        <div className="error-page__container-right color_lv_2-0">
            <div className="error__wrap-container">
            <Error404/>
            </div>
     
        </div>
      </div>
      <div className="error-wrap"></div>
    </div>
  );
};

export default NotFound;
