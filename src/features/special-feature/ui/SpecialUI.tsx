import React, { useEffect, useLayoutEffect } from "react";
import "./Style.scss";
import { Button } from "shared/ui/button";
import { UpFontSize } from "../lib/UpFontSize";
import { resetFontSize } from "../lib/resetFontSize";
import { useSpecialFeature } from "../lib/useSpecialFeature";
import { useLocation } from "react-router-dom";
type Props = {};

export const SpecialUI = (props: Props) => {
  // const [size, setSize] = useState(localStorage.getItem("app-font-size") || "small")

  const { state, toggleState } = useSpecialFeature();
  if (state) {
    return (
      <div className="SpecialUI">
        <div className="SpecialUI__block-wrap">
          шрифт
          <Button onClick={() => UpFontSize(100)}>Стандарт</Button>
          <Button onClick={() => UpFontSize(150)}>большой</Button>
          <Button onClick={() => UpFontSize(170)}>Очень большой</Button>
          <Button onClick={() => UpFontSize(200)}>Огромный</Button>
        </div>
        <Button className="btn__exit" onClick={toggleState}>
          Обычный режим
        </Button>
      </div>
    );
  }
};
