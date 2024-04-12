import { useContext } from "react";
import "./../../css/BTNvisually.css";
import  { ViewContext } from "../Context/ViewContextProvider";
import { ReactComponent as Cross } from "./../../asset//svg/bootstrap-icons-1.11.2/x-lg.svg";
type Props = {}

const Close = (props: Props) => {
    const {setValue } = useContext(ViewContext);

  
    const handleOnClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setValue ();
    
    };
  return (
    <div className="visually-close" onClick={handleOnClick}><Cross/></div>
  )
}

export default Close