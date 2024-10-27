import React, {createContext, useState } from 'react';
export interface TypeContext{
    state: boolean;
    setState?: any;
  
}
export const SpecialContext = createContext<TypeContext>({
    state: false,
    setState: () => { },
   
});