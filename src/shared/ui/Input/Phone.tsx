import React from "react";
import './Style.scss'
import { useMaskito } from "@maskito/react";
import options from "./mask";
export const Phone = () => {
  const maskedInputRef = useMaskito({ options });

  return (
    <div className="input-container">
	<input placeholder="" ref={maskedInputRef} />
		<label>Номер телефона</label>		
	</div>
  ) 
};
