import { FC, useMemo, useState } from "react";

import { ScreenContext, TypeContext } from "../config/ScreenContext";

export const ScreenProvider: FC<TypeContext> = ({ children }) => {
  const [state, setState] = useState(false);
const [item,setItem] = useState();
  return (
    <ScreenContext.Provider
      value={{
        state: state,
        setState: setState,
        children: item,
        setChildren:setItem
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
