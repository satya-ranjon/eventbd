import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layout/AppWrapper";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import ServiceDetails from "../pages/service/ServiceDetails";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
