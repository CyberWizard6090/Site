import React from "react";
import { useState, createContext } from "react";
type Props = {
  children: React.ReactNode;
};

interface TypeContext {
  value: boolean;
  setValue: () => void;
  stateMenuValue: boolean;
  setStateMenuValue: () => void;
}

export const ViewContext = createContext<TypeContext>({
  value: false,
  setValue: () => { },
  stateMenuValue: false,
  setStateMenuValue: () => () => { },

});

const ViewContextProvider = ({ children }: Props) => {

  const [condition, setСondition] = useState(false);
  const toggleCondition = () => {
    setСondition(!condition);
  };

  const [menuStateChange, setMenuStateChange] = useState(false);

  const toggleMenuState = () => {
    setMenuStateChange(!menuStateChange);
  };

  return (
    <ViewContext.Provider
      value={{
        value: condition,
        setValue: toggleCondition,
        stateMenuValue: menuStateChange,
        setStateMenuValue: toggleMenuState,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContextProvider;
