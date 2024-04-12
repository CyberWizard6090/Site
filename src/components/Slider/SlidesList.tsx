import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";

type Props = {
  children: React.ReactNode;
};

export const SlidesList = ({children}:Props) => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className="fancybox__track"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
     {children}
    
    </div>
  );
}