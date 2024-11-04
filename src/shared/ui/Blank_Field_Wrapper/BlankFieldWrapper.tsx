import React, { useState } from "react";
import './Style.scss'
import { ReactComponent as Icon } from "shared/assets/svg/bootstrap-icons-1.11.2/shield-fill-x.svg";
type Props = {
  error_text?: string;
  status: boolean;
  children: React.ReactNode;
};

export const BlankFieldWrapper = ({
  error_text = "пустое поле",
  status,
  children,
}: Props) => {

  return (
    <div className="BlankFieldWrapper">
      <div> {children}</div>
      { status ? <div className="text__error"><Icon/>{error_text}</div> : <></>}
    </div>
  );
};

 
