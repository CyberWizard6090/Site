import React from "react";
import "./homePage.scss";
import { Gosuslugi } from "widgets/gosuslugi";

import { BusGov } from "widgets/NOK";
import { National } from "widgets/National";
import { Contact } from "widgets/contact";
import { SoCool } from "widgets/soCool";
import { NewsBlock } from "widgets/newsBlock";
import { Galloper } from "shared/ui/carousel";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <div className="home">
      <div className="home__content">
        <Contact />
        <Galloper>
        
          <SoCool />
          <BusGov />
          <National />
        </Galloper>
        <Gosuslugi />
        <NewsBlock />

        {/* <NOK/> */}
      </div>
    </div>
  );
};
