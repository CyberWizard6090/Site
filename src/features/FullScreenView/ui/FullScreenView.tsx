import React from "react";
import "./FullScreenView.scss";
import Carousel from "react-material-ui-carousel";
import { ReactComponent as Icon } from "shared/assets/svg/bootstrap-icons-1.11.2/x.svg";
import { useFullScreen } from "../lib/useFullScreen";
// type Props = {
//     children: React.ReactNode [];
//   };
export const FullScreenView = () => {
  function on_off(active: boolean) {
    if (active) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
  function disableScroll() {
    const app = document.querySelector("app");

    document.body.style.overflow = "hidden";


  }

  function enableScroll() {
    // window.onscroll = function() {};
    const app = document.querySelector("app");
    // Get the current page scroll position
    document.body.style.overflowY = "scroll";
  }
  const { state, toggleState, children } = useFullScreen();
  on_off(state);
  if (state) {
    return (
      <div className="FullScreen__container">
        <div className="FullScreen__toolbar">
          <button className="modern-button" onClick={toggleState}><Icon /></button>

        </div>

        <div className="FullScreen__viewport">
          {/* <Carousel 
      navButtonsAlwaysVisible={true}
        duration={1000}
        interval={20000}
      > */}
          {/* {children!.map((item: any) => (
          <Paper children={item} />
        ))} */}
          {children}
          {/* </Carousel> */}
        </div>
        <div className="FullScreen__thumbs"></div>
        <div className="FullScreen__backdrop"></div>
      </div>
    );
  } else return <></>;
};
// const Paper = ({ children }: Props) => {
//     return <div className="Paper">{children}</div>;
//   };
