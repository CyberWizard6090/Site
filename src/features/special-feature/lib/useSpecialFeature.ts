import React, { useContext } from 'react'
import { SpecialContext } from '../config/SpecialContext';
import { resetFontSize } from './resetFontSize';



export const useSpecialFeature = () => {
    const { state, setState } = useContext(SpecialContext);
    const toggleState = () => {
        resetFontSize();
        setState(!state);
       

    }

    return { state, toggleState }
}