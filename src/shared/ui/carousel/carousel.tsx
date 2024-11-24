import React from "react";
import "./carousel.scss";
import { Carousel } from "antd";
import { ReactComponent as Left } from "shared/assets/svg/bootstrap-icons-1.11.2/caret-left-fill.svg";
import { ReactComponent as Right } from "shared/assets/svg/bootstrap-icons-1.11.2/caret-right-fill.svg";
type Props = {
  children: React.ReactNode[];
};

export const Galloper = ({ children }: Props) => {
  return (
    <div className="carousel">
      <h2>Баннеры</h2>
      <div className="carousel-content">
        <div className="carousel-arrow arrow-left"><Left/></div>
        <div className="carousel-arrow arrow-right" ><Right/></div>
        <Carousel autoplay  autoplaySpeed={30000} draggable>
          {children!.map((item: any) => (
            <Paper children={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
const Paper = ({ children }: Props) => {
  return <div className="Paper shadow__style">{children}</div>;
};
