import React from "react";
import './Style.scss'
import { useMaskito } from "@maskito/react";
import options from "./mask";
type Props = {
  id?: string;
  labelElement: string;
};
export const Phone = ({id,labelElement}:Props) => {
  const maskedInputRef = useMaskito({ options });

  return (
    <div className="input-container">
	<input placeholder="" ref={maskedInputRef} id={id} />
		<label>{labelElement}</label>		
	</div>
  ) 
};
