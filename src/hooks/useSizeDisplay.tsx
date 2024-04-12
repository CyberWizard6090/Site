
import React, { useEffect, useState } from "react";



export const useSizeDisplay = () => {
   const[desktop,setDesktop]= useState(false);
   const[tablet, setTablet]= useState(false);
   const[phone,setPhone]= useState(false);
    type Props = {};
    
  
      useEffect(() => {
        if (document.documentElement.clientWidth >= 1024) {
          setDesktop(true);
        }

        else if (document.documentElement.clientWidth <= 767) {
            setPhone(true);
        }else{
            setTablet(true)
        }
      }, [document.documentElement.clientWidth]);
return{desktop,tablet,phone}
}

