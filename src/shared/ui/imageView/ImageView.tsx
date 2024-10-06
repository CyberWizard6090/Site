import React, { useState } from "react";
// import { Spinner } from "../../../components/Spinner";
// import Loader from "../../../components/Loader";

import { ReactComponent as Cross } from "./../asset//svg/bootstrap-icons-1.11.2/x-lg.svg";
// import Slider from "../../../components/Slider/Slider";
// import FancyBox from "../../../components/FancyBox";
import './ImageView.scss'
export const ImageView = ({ url }: any) => {

  const [active, setActive] = useState(false);
 
  const [isLoading, setIsLoading] = useState(true);
  const LoadTrue = () => {
    setIsLoading(false);
  };
  var img = document.createElement("img");
  img.src =  url; // здесь начинается загрузка изображения
  img.onload = function () {
    setIsLoading(false);
  };
  const Loader =()=>{
    return(
      <div>загрузка</div>
    )
  }
  const ImgLoad = () => {
    return (
      <img
        src={url}
        loading="lazy"
        onLoad={LoadTrue}
        onClick={on_off}
        alt=""
      />
    );
  };
  function on_off() {
    if (active) {
      setActive(false);
      enableScroll();
    } else {
      setActive(true);
      disableScroll();
    }
  }
  function disableScroll() {
    const app = document.querySelector("app");
    // Get the current page scroll position
    document.body.style.overflow = "hidden";

    // // if any scroll is attempted, set this to the previous value
    // window.onscroll = function() {
    //     window.scrollTo(scrollLeft, scrollTop);
    // };
  }

  function enableScroll() {
    // window.onscroll = function() {};
    const app = document.querySelector("app");
    // Get the current page scroll position
    document.body.style.overflow = "scroll";
  }
  return (
    <>
      <div className=" img__view">
    
        {isLoading ? <Loader /> : <ImgLoad />}
      </div>
    </>
  );
};


