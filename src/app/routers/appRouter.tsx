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
import { PdfReaderPage } from "pages/pdfPage";
import { Empty } from "shared/ui/empty";
import { PersonnelPage } from "pages/personnelPage";
import { DepartmentPage } from "pages/departmentPage";
import { DepartmentsPage } from "pages/departmentsPage";
import { EmployeePage } from "pages/EmployeePage";
import { ChatPage } from "pages/ChatPage";

export const AppRouter = () => {
 
  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      handle={{ crumb: <Link to="/">Домашняя страница</Link> }}
    >
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="article"
        element={<ArticlePage />}
        handle={{
          crumb: <Link to="/article">Новости и профилактика</Link>,
        }}
      />
         <Route
        path="chat"
        element={<ChatPage />}
      
      />
      <Route
        path="personnel"
        element={<PersonnelPage />}
        handle={{
          crumb: <Link to="/personnel">Персонал</Link>,
        }}
      />
         <Route
        path="personnel/:employeeID"
        element={<EmployeePage/>}
        loader={async ({ params }) => {
          const res = await fetch(
           
            ` /api/employee/${params.employeeID}?locale=undefined&draft=false&depth=1`,
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
        handle={{
          crumb: <Link to="/personnel">Персонал</Link>,
        }}

      />

      <Route
        path="departments"
        element={<DepartmentsPage />}
        
        handle={{
          crumb: <Link to="/department">Отделения</Link>,
        }}
      />
      <Route
        path="departments/:departmentID"
        element={<DepartmentPage />}
        handle={{
          crumb: <Link to="/departments">Отделение</Link>,
        }}
        loader={async ({ params }) => {
          const res = await fetch(
            `/api/departments/${params.departmentID}?locale=undefined&draft=false&depth=2`,
            {
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
        path="feedback"
        element={<FeedbackPage />}
        handle={{
          crumb: <Link to="/feedback">Обратная связь</Link>,
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
      <Route
        path="/pdf/:pdfId"
        element={<PdfReaderPage />}
        errorElement={<Empty text="Ошибка при загрузке PDF." />}
      />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return (
    <div className={"app"}>
      <RouterProvider router={router} />
    </div>
  );
};
