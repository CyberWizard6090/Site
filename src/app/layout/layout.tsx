import { Outlet, ScrollRestoration } from "react-router-dom";
import { Nav } from "widgets/navigation";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { FullScreenView } from "features/FullScreenView";
import "./layout.scss";
import { SpecialUI } from "features/special-feature";
export const Layout = () => {

  return (
    <div className="layout layout__wrapper">
      <FullScreenView />
      {/* <SpecialUI/> */}
      <Header />
      <Nav />
     
      <main className="layout__content">
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};
