import React, { useContext } from 'react'
import { ReactComponent as Menu } from "./../../asset/svg/bootstrap-icons-1.11.2/list.svg";
import { ReactComponent as Cross } from "./../../asset//svg/bootstrap-icons-1.11.2/x-lg.svg";
import { ViewContext } from '../Context/ViewContextProvider';
type Props = {}

const BtnMenu = (props: Props) => {
  const {setStateMenuValue ,stateMenuValue} = useContext(ViewContext);
  const handleOnClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStateMenuValue ();
  };
  return (
    <div className=' BtnMenu' onClick={handleOnClick}>{stateMenuValue?<Menu/>: <Cross/>}</div>
  )
}

export default BtnMenu