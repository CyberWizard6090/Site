import React, { useContext } from "react";
import { SliderContext } from "./Slider";
import { ReactComponent as Left } from "./../../asset/svg/bootstrap-icons-1.11.2/chevron-left.svg";
import { ReactComponent as Right } from "./../../asset/svg/bootstrap-icons-1.11.2/chevron-right.svg";


export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} > <Left/></div>
      <div className="arrow right" onClick={() => changeSlide(1)} ><Right/> </div>
    </div>
  );
}