import React, { useRef, useState, useLayoutEffect } from "react";

const useConcealment = () => {
  const useActiveControl = () => {
    const [info, setInfo] = useState("Disable");
    const elem = document.getElementById("myvideo");
        if (elem) {
        elem.setAttribute("VideoControls", info);
        }
    return { info, setInfo };
  };
  const { info, setInfo } = useActiveControl();
  const handleDisableControl = () => {
   
    if (info === "Disable") {
      setInfo("Active");
      setTimeout(() => {
        setInfo("Disable");
      }, 10000);
    } else {
      setInfo("Active");
    }
  };
  const handleMouseOver =()=>{
    setInfo("Active");
  };
  const handleMouseOut =( )=>{
    setTimeout(() => {
        setInfo("Disable");
      }, 10000);
  }
  return {
    handleDisableControl,
    handleMouseOver,
    handleMouseOut
  };
};

export default useConcealment;
