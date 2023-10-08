import useAuthentication from "../hooks/useAuthentication";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { user } = useAuthentication();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoutes;
