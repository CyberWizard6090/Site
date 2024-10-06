import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import clsx from "clsx";

// import { Footer } from 'widgets/footer'
// import { Header } from 'widgets/header'
import { Nav } from "widgets/navigation";
import "react-toastify/dist/ReactToastify.css";
import "./layout.scss";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { VisionPanel } from "widgets/sharpVisionPanel";



export const Layout = () => {
 

  return (
    <div className="layout layout__wrapper">
    <VisionPanel/>
        <Header />
        <Nav />
        <main className="layout__content">
          <Outlet />
        </main>

        <Footer  />

      

        <ScrollRestoration />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    
    </div>
  );
};
