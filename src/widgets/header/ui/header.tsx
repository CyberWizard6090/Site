import React from "react";
import "./header.scss";
import { VisionButton } from "shared/ui/visionButton";
import { Search } from "features/search";
import { Toggle } from "shared/ui/toggle";
import { Button } from "shared/ui/button";
import { ReactComponent as Logo } from "shared/assets/svg/bootstrap-icons-1.11.2/eye-fill.svg";
import { useSpecialFeature } from "features/special-feature";
type Props = {};

export const Header = (props: Props) => {
  const { state, toggleState } = useSpecialFeature();
  return (
    <header className="Header">
   <Search />
    
{/* {!state &&   <Button Icon={Logo} onClick={toggleState}>Версия для слабовидящих</Button>} */}

    </header>
  );
};
