import { FC } from "react";

import { ThemeProvider, useTheme } from "app/theme";
import { ScreenProvider } from "features/FullScreenView";
import { SpecialProvider } from "features/special-feature";
import { App, ConfigProvider, theme as themeUI} from "antd";
// import { configData } from "./../config/notification.config";
interface IProviders {
  readonly children: JSX.Element;
}

// const Icon = theme === Theme.LIGHT ? Sun : Moon;
export const Providers: FC<IProviders> = ({ children }) => {
  const { theme  } = useTheme();
// const newTheme =  ;

  return (
    <>
      <ThemeProvider>
        <SpecialProvider>
          <ScreenProvider state={false}>
            <ConfigProvider
              prefixCls="guzkod"
              theme={{
                cssVar: true,
             
                token: {
                  borderRadius: 12,
                },
                components: {
                  Carousel: {
                    arrowSize: 32,
                    arrowOffset:32,
                    
                    dotWidth: 20,
                      dotHeight: 20,
                      dotActiveWidth: 30,
                  },
                  Notification: {
                    width: 600,
                  },
                },
              }}
            >
              <App
                notification={{
                  placement: "top",
                  top: 20,
                  duration: 300,
                  maxCount:6
               
                
                }}
              >
                {children}
              </App>
            </ConfigProvider>
          </ScreenProvider>
        </SpecialProvider>
      </ThemeProvider>
    </>
  );
};
