import React, { useState } from "react";
import { Spinner } from "./Spinner";
import Loader from "./Loader";

import { ReactComponent as Cross } from "./../asset//svg/bootstrap-icons-1.11.2/x-lg.svg";
import Slider from "./Slider/Slider";

const ImageView = ({ src }: any) => {
  const [active, setActive] = useState(false);
  const View: any = (props: any) => {
//     if (props.active) {
//       return (
//         <div className="fancybox__container">
//           <div className="fancybox__wrap">
//             <div className="fancybox__toolbar">
//               <div className="fancybox__toolbar__items"></div>
//               <div className="fancybox__toolbar__items  fancybox__toolbar__items__left">
//                 <button className="fancybox__toolbar__item" onClick={on_off} title="Закрыть">
//                   <Cross />
//                 </button>
//               </div>
//             </div>
// <Slider width="100%" height="100%" autoPlayTime={15000} autoPlay={false}/>
//             {/* <div className="fancybox__carousel is-draggable">
//               <div className="fancybox__viewport">
//                 <div className="fancybox__track">
//                   <div
//                     className="fancybox__slide is-selected has-image can-zoom_in"
//                     data-image-fit="contain"
//                   >
//                     <div className="fancybox__content">
//                       <img
//                         src="https://uiuiui.in/uploads/posts/2022-11/1654405176_05-06-2022-09_58_53.webp"
//                         alt=""
//                         draggable="false"
//                         className="fancybox__image"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="fancybox__nav">
//                 <button title="Next" className="carousel__button is-next">
//                   <Left />
//                 </button>
//                 <button title="Previous" className="carousel__button is-prev">
//                   <Right />
//                 </button>
//               </div>
//             </div>
//             <div className="fancybox__thumbs">
//               <div className="carousel__viewport">
//                 <div className="carousel__track">
//                   <div
//                     data-index="0"
//                     className="carousel__slide has-thumb has-image is-selected is-nav-selected"
//                   >
//                     <div className="fancybox__thumb"></div>
//                   </div>
//                   <div
//                     data-index="1"
//                     className="carousel__slide has-thumb has-image is-selected"
//                   >
//                     <div className="fancybox__thumb"></div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//           {/* <div className="ex__win" >
//             <svg
//               width="40px"
//               height="40px"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"
//                 fill="#000000"
//               />
//             </svg>
//           </div> */}
//           {/* <div className="win_wrap_img">
//             <div className="img_w">
//               <img
//                 src={window.location.origin + "/pictures/" + src}
//                 alt="no image"
//               />
//             </div>
//           </div> */}
//         </div>
//       );
//     }
  };
  const [isLoading, setIsLoading] = useState(true);
  const LoadTrue = () => {
    setIsLoading(false);
  };
  var img = document.createElement("img");
  img.src = window.location.origin + "/pictures/" + src; // здесь начинается загрузка изображения
  img.onload = function () {
    setIsLoading(false);
  };
  const ImgLoad = () => {
    return (
      <img
        src={window.location.origin + "/pictures/" + src}
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
        <View active={active} src={src} />
        {isLoading ? <Loader /> : <ImgLoad />}
      </div>
    </>
  );
};

export default ImageView;
