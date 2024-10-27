import { FC } from "react";
// import { ErrorBoundary } from 'react-error-boundary'
// import { Provider } from 'react-redux'
// import store, { persistor } from 'app/store'
import { ThemeProvider } from "entities/theme";
import { ScreenProvider } from "features/FullScreenView";
import { SpecialProvider } from "features/special-feature";

// import { PersistGate } from 'redux-persist/integration/react'
// import { Fallback } from 'shared/ui/fallback'

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ThemeProvider>
      <SpecialProvider >
        <ScreenProvider state={false}>{children}</ScreenProvider>
      </SpecialProvider>
    </ThemeProvider>
  );
};
