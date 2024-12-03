import { Outlet, ScrollRestoration } from "react-router-dom";
import { Nav } from "widgets/navigation";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { FullScreenView } from "features/FullScreenView";
import "./layout.scss";
import { SpecialUI } from "features/special-feature";
import { NotificationContainer } from "features/notifications";
export const Layout = () => {

  return (
    <div className="layout layout__wrapper">
      <NotificationContainer/>
      <FullScreenView />
   
      <Header />
      <Nav />
     
      <main className="layout__content">
      <SpecialUI/>
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};
