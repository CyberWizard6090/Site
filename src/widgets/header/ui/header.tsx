import React from "react";
import "./header.scss";
import { AccessibilityButton } from "features/accessibilityMode";
import { Search } from "features/search";
import { useDeviceDetect } from "shared/lib/WindowSizeListener";
import { ButtonTheme } from "features/theme/ui/buttonTheme";

type Props = {};

export const Header = (props: Props) => {
  const { isMobile } = useDeviceDetect();
  return (
    <header className="Header">
      {/* <Search /> */}


          <AccessibilityButton /> 
          <ButtonTheme />
  
    </header>
  );
};
