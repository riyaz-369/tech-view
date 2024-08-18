import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/authentications/Login";
import Registration from "../pages/authentications/Registration";
import Products from "@/pages/Products/Products";
import HomePage from "@/pages/Home/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
