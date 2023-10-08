import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layout/AppWrapper";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import ServiceDetails from "../pages/service/ServiceDetails";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import { getService } from "../fetch";
import Services from "../pages/service/Services";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => getService(params.id),
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
