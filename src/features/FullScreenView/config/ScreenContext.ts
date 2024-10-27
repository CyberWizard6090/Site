import React, {createContext, useState } from 'react';
export interface TypeContext{
    state: boolean;
    setState?: any;
    children?: React.ReactNode | null |any;
    setChildren?: any;
}
export const ScreenContext = createContext<TypeContext>({
    state: false,
    setState: () => { },
    children: null
});
