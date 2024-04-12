import React from "react";
import BTVisually from "./BTVisually/BTVisually";
import { LogoView } from "./LogoView";

import "./../css/Header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header id="Header">
     
      <nav></nav>

      {document.documentElement.clientWidth <= 1199 ? <></> : <BTVisually />}
    </header>
  );
};

export default Header;
