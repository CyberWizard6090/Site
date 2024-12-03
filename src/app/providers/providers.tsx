import { FC } from "react";
import { Provider } from 'react-redux';
import { store } from '../stores/store';
import { ThemeProvider, useTheme } from "app/theme";
import { ScreenProvider } from "features/FullScreenView";
import { SpecialProvider } from "features/special-feature";

// import { configData } from "./../config/notification.config";
interface IProviders {
  readonly children: JSX.Element;
}

// const Icon = theme === Theme.LIGHT ? Sun : Moon;
export const Providers: FC<IProviders> = ({ children }) => {


  return (
    <>
      <ThemeProvider>
        <SpecialProvider>
          <ScreenProvider state={false}>
            <Provider store={store}>{children}</Provider>,
          </ScreenProvider>
        </SpecialProvider>
      </ThemeProvider>
    </>
  );
};
