import { Outlet, ScrollRestoration } from "react-router-dom";
import { Nav } from "widgets/navigation";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { FullScreenView } from "features/FullScreenView";
import "./layout.scss";

import { NotificationContainer } from "features/notifications";
import { AccessibilityStyles, AccessibilityUI } from "features/accessibilityMode";
export const Layout = () => {
  return (
    <div className="layout layout__wrapper">
      <NotificationContainer />
      <FullScreenView />
<AccessibilityStyles/>
      <Header />
      <Nav />

      <main className="layout__content">
        <AccessibilityUI />
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};
