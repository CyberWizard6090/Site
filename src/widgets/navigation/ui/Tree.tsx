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
    <>
      <div onClick={handleClick} className="Tree hover__item ui-vertical-navigation-item__wrapper">
        <span>{label}</span><Icon/>
      </div>

      <ul className="ui-vertical-navigation__list-item" style={{ paddingLeft: "10px"}}>
        {showChildren ? children : <></>}

        {showChildren ? (
          list &&
          list?.map((item: any) => {
            return <Item label={item.label} link={item.link} />;
          })
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};
