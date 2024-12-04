import React from 'react'

import { ReactComponent as Moon } from "shared/assets/svg/bootstrap-icons-1.11.2/moon-stars-fill.svg";
import { ReactComponent as Sun } from "shared/assets/svg/bootstrap-icons-1.11.2/sun-fill.svg";
import './ButtonTheme.scss'
import { useDispatch, useSelector } from 'react-redux';
import { SelectTheme } from '../model/selectors';
import { AppDispatch, RootState } from 'app/stores';
import { toggleTheme } from '../model/themeSlice';
type Props = {}

export const ButtonTheme = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch: AppDispatch = useDispatch();
    const theme = useSelector((state: RootState) => SelectTheme(state));
  
    const handleToggle = () => {
      dispatch(toggleTheme());
    };
  
    const Icon = theme === 'light' ? Sun : Moon;
    const Label = theme === 'light' ? "Светлый режим" : "Темный режим";
  return (
  <div onClick={handleToggle} className='ButtonTheme'>
    <div><Icon/></div>
    <div>{Label}</div>
  </div>
  )
}

