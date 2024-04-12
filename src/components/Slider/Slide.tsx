import React from "react";

type Props = {
  // data: any;
  // key: any;
  children: React.ReactNode;
};

const Slide = ({ children }: Props) => {
  return (
    <div className="fancybox__slide">
      <div className="fancybox__content">
        {children}
        {/* <img
        src={window.location.origin + "/pictures/" + data}
        loading="lazy"
      
        alt=""
      /> */}
      </div>
    </div>
  );
};

export default Slide;
