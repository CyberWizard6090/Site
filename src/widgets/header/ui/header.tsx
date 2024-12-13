import React from "react";
import "./header.scss";
import { AccessibilityButton } from "features/accessibilityMode";



type Props = {};

export const Header = (props: Props) => {

  return (
    <header className="Header">
   {/* <Search />*/}
    
<AccessibilityButton/>
    </header>
  );
};
