import {
  createHashRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "app/layout";
import clsx from "clsx";

import { HomePage } from "pages/homePage";
// import { SearchResults } from 'pages/searchResults''

import "../styles/index.scss";
import { NotFound } from "pages/NotFound";
import { ArticlePage } from "pages/articlePage";
import { DefaultPage } from "pages/defaultPage";
import { FeedbackPage } from "pages/feedbackPage";
import { useSelector } from "react-redux";
import { RootState } from "app/stores";
import { SelectTheme } from "features/theme/model/selectors";

export const AppRouter = () => {
  const theme = useSelector((state: RootState) => SelectTheme(state));
  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      handle={{ crumb: <Link to="/">Home</Link> }}
    >
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="article"
        element={<ArticlePage />}
        handle={{
          crumb: <Link to="/article">Cart</Link>,
        }}
      />

      <Route
        path="feedback"
        element={<FeedbackPage />}
        handle={{
          crumb: <Link to="/feedback">Cart</Link>,
        }}
      />

      <Route
        path="/:pageId"
        element={<DefaultPage />}
        loader={async ({ params }) => {
          const res = await fetch(
            `/api/pages/${params.pageId}?locale=undefined&draft=false&depth=1`,
            {
              mode: "no-cors",
              method: "get",
            }
          );
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        }}
        errorElement={<NotFound />}
      />
      <Route
        path="/read/:pageId"
        element={<DefaultPage />}
        loader={async ({ params }) => {
          const res = await fetch(
            `/api/article/${params.pageId}?locale=undefined&draft=false&depth=1`,
            {
              mode: "no-cors",
              method: "get",
            }
          );
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        }}
        errorElement={<NotFound />}
      />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return (
    <div className={clsx("app", theme)} >
      <RouterProvider router={router} />
    </div>
  );
};
