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
      <div className="content-container">
        <div className="Header__logo-wrap">
<div className="Header__logo">
  <span className="first">ГУЗ</span>
  <span>KOД</span>
</div>
</div>
          <AccessibilityButton /> 
          <ButtonTheme />
          </div>
    </header>
  );
};
