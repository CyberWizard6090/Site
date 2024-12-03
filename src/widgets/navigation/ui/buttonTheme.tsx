import React from 'react'
import { Theme, useTheme } from "app/theme";
import { ReactComponent as Moon } from "shared/assets/svg/bootstrap-icons-1.11.2/moon-stars-fill.svg";
import { ReactComponent as Sun } from "shared/assets/svg/bootstrap-icons-1.11.2/sun-fill.svg";
import './ButtonTheme.scss'
type Props = {}

export const ButtonTheme = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme, toggleTheme } = useTheme();
    const Icon = theme === Theme.LIGHT ? Sun : Moon;
    const Label = theme === Theme.LIGHT ? "Светлый режим" : "Темный режим";
  return (
  <div onClick={toggleTheme} className='ButtonTheme'>
    <div><Icon/></div>
    <div>{Label}</div>
  </div>
  )
}

