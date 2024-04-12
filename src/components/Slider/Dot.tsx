import React, { useContext } from "react";
import { SliderContext } from "./Slider";


type Props = {
  number: number
}
export default function Dot({ number }:Props) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}
