import { useContext } from "react";
import "./../../css/BTNvisually.css";
import  { ViewContext } from "../Context/ViewContextProvider";

import { ReactComponent as Eye } from "./../../asset//svg/bootstrap-icons-1.11.2/eye-fill.svg";
type Props = {};

const BTNVisuallyMenu = (props: Props) => {
    const {setValue } = useContext(ViewContext);

  
    const handleOnClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setValue ();
    
    };
  
  return (
    <div className="visually-sidebar" onClick={handleOnClick}>
      <Eye />
      <span>Версия для слабовидящих</span>
    </div>
  );
};

export default BTNVisuallyMenu;
