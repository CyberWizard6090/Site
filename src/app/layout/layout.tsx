import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Nav } from 'widgets/navigation';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

import './layout.scss';

import { NotificationContainer } from 'features/notifications';
import { AccessibilityStyles, AccessibilityUI } from 'features/accessibilityMode';
import { ImageViewerModal } from 'features/imageViewer';
import { SearchModal } from 'features/search';
import { StateTheme } from 'features/theme';
export const Layout = () => {
  return (
    <>
      {' '}
      <Header />
      <div className="content-container">
        <div className="layout layout__wrapper ">
          <NotificationContainer />
          <ImageViewerModal />
          <AccessibilityStyles />
          <StateTheme />
          <SearchModal />

          <Nav />

          <main className="layout__content">
            <AccessibilityUI />
            <Outlet />
          </main>

          <Footer />

          <ScrollRestoration />
        </div>
      </div>
    </>
  );
};
