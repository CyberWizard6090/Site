import { RootState } from 'app/stores';
import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../model/themeSlice';
import { SelectTheme } from '../model/selectors';

type Props = {}

export const StateTheme = (props: Props) => {
  const theme = useSelector((state: RootState) => SelectTheme(state));
   
      const dispatch = useDispatch();
      useLayoutEffect(() => {
       
        //  if (theme === "light" || localStorage.getItem("theme") === "light"){
        //     document.documentElement.setAttribute("data-theme", "light");
        //  } else{
            document.documentElement.setAttribute("data-theme", theme);
  
      
      }, [theme]);
      return null;
}

