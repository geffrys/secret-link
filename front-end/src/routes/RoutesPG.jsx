import { useAuth } from "../context/AuthContext.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../components/SignUp";
import NotFound from "../components/NotFound";
import RegisterClient from "../pages/RegisterClient.jsx";
import LoginClient from "../pages/LoginClient.jsx";

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
        path="/signup"
        element={isAuthenticated ? <SignUp /> : <Login />}
      />
      <Route path="*" element={isAuthenticated ? <NotFound /> : <Login />} />
      <Route
        path="/registerclient"
        element={isAuthenticated ? <RegisterClient /> : <Login />}
      />
    </Routes>
  );
}

export default RoutesPG;
