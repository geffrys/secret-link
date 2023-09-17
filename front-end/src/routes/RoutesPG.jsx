import { useAuth } from "../context/AuthContext.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import RegisterClient from "../pages/RegisterClient.jsx";
import LoginClient from "../pages/LoginClient.jsx";
import TravelPackages from "../pages/TravelPackages.jsx";
import CreatePackages from "../pages/CreatePackages.jsx";

function RoutesPG() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <LoginClient /> : <Login />} />
      <Route
        path="/client"
        element={isAuthenticated ? <LoginClient /> : <Login />}
      />
      <Route
        path="/registerclient"
        element={isAuthenticated ? <RegisterClient /> : <Login />}
      />
      <Route
        path="/packages"
        element={isAuthenticated ? <TravelPackages /> : <Login />}
      />
      <Route
        path="/create-packages"
        element={isAuthenticated ? <CreatePackages /> : <Login />}
      />
      <Route path="*" element={isAuthenticated ? <NotFound /> : <Login />} />
    </Routes>
  );
}

export default RoutesPG;
