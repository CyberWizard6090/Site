import { RootState } from "app/stores";
import { setTheme } from "features/theme/model/themeSlice";
import { useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

export const AccessibilityStyles = () => {
  const { isActive, fontSize, imagesHidden } = useSelector(
    (state: RootState) => state.accessibilityMode
  );
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (isActive) {
      document.documentElement.setAttribute("data-fontsize", fontSize);
      dispatch(
        setTheme(
          localStorage.getItem("AccessibilityTheme") ||
            localStorage.getItem("theme")|| "light"
        )
      );
    } else {
      document.documentElement.removeAttribute("data-fontsize");
      dispatch(setTheme(localStorage.getItem("theme")));
    }
  }, [isActive, fontSize, imagesHidden]);

  return null;
};
