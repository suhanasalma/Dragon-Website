import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyAccount from "../../Pages/MyAccount/MyAccount";
import News from "../../Pages/News/News/News";
import Registration from "../../Pages/Registration/Registration";
import TermsAndConditons from "../../Pages/TermsAndCondition/TermsAndConditons";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/all-news"),
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:5000/all-news"),
        element: <Home />,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),

        element: <Category />,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/terms",
        element: <TermsAndConditons />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        ),
      },
    ],
  },
]);