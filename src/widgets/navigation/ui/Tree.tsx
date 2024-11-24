import React, { useState } from "react";
import { Item } from "./Item";
import { ReactComponent as Icon } from "shared/assets/svg/bootstrap-icons-1.11.2/chevron-down.svg";
type Props = {
  children?: React.ReactNode;
  label: string;
  list: any;
};

export const Tree = ({ children, label, list }: Props) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="nav_menu-content_tree">
      <div
        onClick={handleClick}
        className="nav_menu_tree-header Tree hover__item ui-vertical-navigation-item__wrapper"
      >
        <span>{label}</span>
        <div className="nav_menu_tree-header-icon">
        <Icon />
        </div>
       
      </div>
      <div className="nav_menu-content_tree-list">
        {showChildren ? children : <></>}

        {showChildren ? (
          list &&
          list?.map((item: any) => {
            return <Item label={item.label} link={item.link} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
