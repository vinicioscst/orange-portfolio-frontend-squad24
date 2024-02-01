import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext/UserContext";

const PublicRoutes = () => {
  const { user } = useContext(UserContext);

  return !user ? <Outlet /> : <Navigate to="/my-projects" />;
};

export default PublicRoutes;