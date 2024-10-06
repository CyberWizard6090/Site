import React from "react";
import "./carousel.scss";
import Carousel from "react-material-ui-carousel";
type Props = {
  children: React.ReactNode [];
};

export const Galloper = ({ children }: Props) => {
  return (
    <div className="carousel">
        <h2>Баннеры</h2>
      <Carousel 
      navButtonsAlwaysVisible={true}
        duration={1000}
        interval={20000}
      >
        {children!.map((item: any) => (
          <Paper children={item} />
        ))}
      </Carousel>
    </div>
  );
};
const Paper = ({ children }: Props) => {
  return <div className="Paper">{children}</div>;
};
