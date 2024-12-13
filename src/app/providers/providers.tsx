import { FC } from "react";
import { Provider } from 'react-redux';
import { store } from '../stores/store';
import { ScreenProvider } from "features/FullScreenView";


interface IProviders {
  readonly children: JSX.Element;
}


export const Providers: FC<IProviders> = ({ children }) => {


  return (
    <>
    
       
          <ScreenProvider state={false}>
            <Provider store={store}>{children}</Provider>,
          </ScreenProvider>
      
    
    </>
  );
};
