import {
  createHashRouter,
  createRoutesFromElements,
  Link,
  Route,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "app/layout";
import clsx from "clsx";
// import { selectBookDescriptionBook } from 'entities/book/bookDescripton'
import { useTheme } from "app/theme";
// import { BookDescription } from 'pages/bookDescription'
// import { Cart } from 'pages/cart'
// import { Categories } from 'pages/categories'
// import { Category } from 'pages/category'
import { HomePage } from "pages/homePage";
// import { SearchResults } from 'pages/searchResults'
// import { CATEGORIES } from 'shared/consts'
// import { useAppSelector } from 'shared/lib/store'
// import { Fallback } from 'shared/ui/fallback'

import "../styles/index.scss";
import { NotFound } from "pages/NotFound";
import { ArticlePage } from "pages/articlePage";
import { DefaultPage } from "pages/defaultPage";
import { FeedbackPage } from "pages/feedbackPage";

// const getCategoryNameByLink = (link?: string): string | undefined => {
//     for (const values of Object.values(CATEGORIES)) {
//         const findEl = values.find((item) => item.link === link)

//         if (findEl) {
//             return findEl.title
//         }
//     }
//     return undefined
// }

// /** Dynamic path parameter types for breadcrumbs. */
// interface IParamsDynamicPath {
//     /** Page path name. */
//     pathname: string
//     /** Page parameters. */
//     params?: { categoryId: string; bookId: string }
//     /** Additional data for the name of bread crumbs. */
//     data?: string
// }

export const AppRouter = () => {
  const { theme } = useTheme();

  // const book = useAppSelector(selectBookDescriptionBook)

  // const getDynamicPathForCategory = ({
  //     pathname,
  //     params,
  // }: IParamsDynamicPath): JSX.Element => {
  //     return (
  //         <Link to={pathname}>
  //             {getCategoryNameByLink(params?.categoryId) ??
  //                 params?.categoryId}
  //         </Link>
  //     )
  // }

  // const getDynamicPathForBook = ({
  //     pathname,
  //     data,
  // }: IParamsDynamicPath): JSX.Element => <Link to={pathname}>{data}</Link>
  //router element errorElement={<Fallback />}
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
      {/* <Route
                path='books'
                handle={{
                    crumb: <Link to='/page'>Books</Link>,
                }}>
                <Route index element={<DefaultPage />} />
                <Route
                    path=':categoryId'
                    element={<Category />}
                    handle={{
                        crumb: getDynamicPathForCategory,
                    }}
                /> */}
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
      {/* 
            </Route>

            <Route
                path='cart'
                element={<Cart />}
                handle={{
                    crumb: <Link to='/cart'>Cart</Link>,
                }}
            />
            <Route path='/search/:searchLine' element={<SearchResults />} /> */}
    </Route>
  );

  const router = createHashRouter(routers, {});

  return (
    <div className={clsx("app", theme)}>
      <RouterProvider router={router} />
    </div>
  );
};
