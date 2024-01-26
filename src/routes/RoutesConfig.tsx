import { Route, Routes } from "react-router-dom";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import MyProjectsPage from "../screens/MyProjectsPage";
import DiscoverPage from "../screens/DiscoverPage";

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my-projects" element={<MyProjectsPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
        </Routes>
    )
}

export default RoutesConfig