import React from "react";
import "./SoCool.scss";
import Image from "./../../../shared/assets/image/SoCool.png";
import { Button } from "shared/ui/button";
type Props = {};

export const SoCool = (props: Props) => {
  return (
    <div className="SoCool">
      <img src={Image} alt="" />
      <a href="https://www.takzdorovo.ru/">
        <Button>Перейти</Button>
      </a>
    </div>
  );
};
