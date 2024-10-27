import React, { useState } from "react";
// import { Spinner } from "../../../components/Spinner";
// import Loader from "../../../components/Loader";

import { ReactComponent as Cross } from "./../asset//svg/bootstrap-icons-1.11.2/x-lg.svg";
// import Slider from "../../../components/Slider/Slider";
// import FancyBox from "../../../components/FancyBox";
import './ImageView.scss'
import { useFullScreen } from "features/FullScreenView";
export const ImageView = ({ url }: any) => {
  const {toggleState,children, setChildren}= useFullScreen();
  const [isLoading, setIsLoading] = useState(true);
  const LoadTrue = () => {
    setIsLoading(false);
  };
  var img = document.createElement("img");
  img.src =  url; // здесь начинается загрузка изображения
  img.onload = function () {
    setIsLoading(false);
  };
  // setChildren ( <img src={url}/>) 
  const Loader =()=>{
    return(
      <div>загрузка</div>
    )
  }
  function  transmission (){
    toggleState()
    setChildren(<img
      src={url}/>)
  }
  const ImgLoad = () => {
    return (
      <img
        src={url}
        loading="lazy"
        onClick={transmission}
        onLoad={LoadTrue}
        alt=""
      />
    );
  };

  return (
    <>
      <div className=" img__view">
    
        {isLoading ? <Loader /> : <ImgLoad />}
      </div>
    </>
  );
};


