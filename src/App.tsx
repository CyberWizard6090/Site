import { Suspense, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import "./css/font.css";
import "./css/responsiveness.css";
import "./css/styleinfo.css";

import "./css/СolorScheme.css";
import "./css/NavBar.css";
import "./css/Grid.css";
import "./css/Image.css";
import "./css/Read.css";
import "./css/Home.css";
import "./css/Menu.css";
import "./css/SideBar.css";
import { useTheme } from "./hooks/useTheme";
import React from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar/SideBar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer";
import SettingsView from "./components/BTVisually/SettingsView";
import ViewContextProvider from "./components/Context/ViewContextProvider";
import MobileMenu from "./components/Menu/MobileMenu";
import { useSizeDisplay } from "./hooks/useSizeDisplay";

const App = () => {
  // const {theme, setTheme} = useTheme() 
  const {phone} = useSizeDisplay();
  window.onload = (event) => {
    alert("page is fully loaded");
  };
  
const Loading= () => {
    return <h2>🌀 Loading...</h2>;
  }
  const history = useNavigate();
  let a: any;

  useEffect(() => {
    a = document.getElementById("app");
    a.scroll(0, 0);
  }, [history]);

  return (
    

  <ViewContextProvider>
    <SettingsView/>
  
      <div id="app" className="app color_lv_0">
        {/* <Header /> */}
        
        <Menu />
        <main className="Main Grid-size" id="Main">
          <Outlet />
        </main>
        {phone ? <MobileMenu/>:<></> }
        
        {/* <Footer/> */}
    
      </div>
      </ViewContextProvider>
  
    
  );
};

export default App;
