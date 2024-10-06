import React from "react";
// import { ReactComponent as Logo } from "./../../asset/svg/bootstrap-icons-1.11.2/chevron-right.svg";
import { ReactComponent as Logo } from 'shared/assets/svg/bootstrap-icons-1.11.2/chevron-right.svg'
function generateID() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
type Props = {
  children: React.ReactNode;
  nameItem: any;
};
export const DropdownItem = ({ children, nameItem }: Props) => {
  const idItem = generateID();

  return (
    <div className="itemDropMenu">
      <input id={idItem} type="checkbox" />
      <label className="Drop__head" htmlFor={idItem}>
        <div className="itemDropMenu__wrap item__sidebar">
          <div className="Drop__name">{nameItem}</div>
          <div className="Drop__arrow">
            <Logo />
          </div>
        </div>
      </label>
      <div className="submenu">{children}</div>
   
    </div>
  );
};