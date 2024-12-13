import  { useState } from "react";
import './ImageView.scss'
import { useFullScreen } from "features/FullScreenView";
import { Loader } from "../loader";
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

  function  transmission (){
    toggleState()
    setChildren(
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={url}/>)
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


