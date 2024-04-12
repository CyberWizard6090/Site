import React, { useEffect, useState, createContext } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import {SlidesList} from "./SlidesList";
import "./../../css/Slider.css"
interface TypeContext {
  slideNumber: number;
  items: any;
  changeSlide: any;
  slidesCount: number;
  goToSlide: any;
}
export const SliderContext = createContext<TypeContext>({
  slideNumber: 0,
  items: undefined,
  changeSlide: undefined,
  slidesCount: 0,
  goToSlide: undefined,
});
type Props = {
  autoPlay: boolean;
  autoPlayTime: number;
  width: string;
  height: string;
  children: React.ReactNode;
};
const Slider = ({
  children = null,
  width = "100%",
  height = "100%",
  autoPlay = false,
  autoPlayTime = 15000,

}: Props) => {
  const [items, setItems] = useState(6);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  // let data = ["1.jpg","2.jpg","3.jpg","qt.jpg", "CyberpunkGirl.png"];
  useEffect(() => {
setItems(6);
  }, []);
  
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items - 1;
    } else {
      slideNumber = (slide + direction) % items;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number: number) => {
    setSlide(number % items);
  };

  // const handleTouchStart = (e: TouchEvent<HTMLButtonElement>) => {
  //   const touchDown = e.touches[0].clientX;

  //   setTouchPosition(touchDown);
  // };

  // const handleTouchMove = (e: { touches: { clientX: any }[] }) => {
  //   if (touchPosition === null) {
  //     return;
  //   }

  //   const currentPosition = e.touches[0].clientX;
  //   const direction = touchPosition - currentPosition;

  //   if (direction > 10) {
  //     changeSlide(1);
  //   }

  //   if (direction < -10) {
  //     changeSlide(-1);
  //   }

  //   setTouchPosition(null);
  // };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <div style={{ width, height }} className="fancybox__viewport">
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        <SlidesList>    {children}</SlidesList>
      
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

export default Slider;
