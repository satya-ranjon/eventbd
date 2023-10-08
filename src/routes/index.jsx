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
import Contact from "../pages/contact/Contact";
import PublicRoutes from "./PublicRoutes";
import Team from "../pages/team/Team";

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
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        ),
      },
      {
        path: "/team",
        element: (
          <PrivateRoutes>
            <Team />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/registration",
        element: (
          <PublicRoutes>
            <Registration />
          </PublicRoutes>
        ),
      },
    ],
  },
]);

export default router;
