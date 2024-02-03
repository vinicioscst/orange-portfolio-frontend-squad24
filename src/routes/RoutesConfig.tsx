import { Route, Routes } from "react-router-dom";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import MyProjectsPage from "../screens/MyProjectsPage";
import DiscoverPage from "../screens/DiscoverPage";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFoundPage from "../screens/NotFoundPage";

function RoutesConfig() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutesConfig;
