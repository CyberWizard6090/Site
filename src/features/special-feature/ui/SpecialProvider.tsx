import {  useState } from "react";

import { SpecialContext} from "../config/SpecialContext";

export const SpecialProvider = ({ children }:any) => {
  const [state, setState] = useState(false);
  
  return (
    <SpecialContext.Provider
      value={{
        state: state,
        setState: setState,
      }}
    >
      {children}
    </SpecialContext.Provider>
  );
};
