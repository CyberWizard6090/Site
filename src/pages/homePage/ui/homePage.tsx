import React from "react";
import "./homePage.scss";
import { Gosuslugi } from "widgets/gosuslugi";
import { BusGov } from "widgets/NOK";
import { National } from "widgets/National";
import { Contact } from "widgets/contact";
import { SoCool } from "widgets/soCool";
import { NewsBlock } from "widgets/newsBlock";
import { Carousel } from "shared/ui/carousel";
import { NotificationButtons } from "features/notifications";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <div className="home">
      <div className="home__content">
        <Contact />
        <h2>Баннеры</h2>
        <Carousel>
        
          <SoCool />
          <BusGov />
          <National />
          <NotificationButtons/>
         
        </Carousel>
        <Gosuslugi />
        <NewsBlock />

        {/* <NOK/> */}
      </div>
    </div>
  );
};
