import { useAuth } from "../context/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import RegisterClient from "../pages/RegisterClient.jsx";
import LoginClient from "../pages/LoginClient.jsx";
import TravelPackages from "../pages/TravelPackages.jsx";
import CreatePackages from "../pages/CreatePackages.jsx";
import EnteredClient from "../pages/Entered.jsx";
<<<<<<< HEAD
import { useContext } from "react";
import { ClientContext } from "../context/ClientContext.jsx";
=======
import RegisterAgent from '../pages/RegisterAgent.jsx'
>>>>>>> sam

function RoutesPG() {
  const { isAuthenticated } = useAuth();
  const { isClientValidated} = useContext(ClientContext);
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <LoginClient /> : <Login />} />
      <Route
        path="/client"
        element={isAuthenticated ? <LoginClient /> : <Login />}
      />
<<<<<<< HEAD


      <Route
        path="/dashboardclient"
        element={isAuthenticated ? (isClientValidated ? <EnteredClient /> : <LoginClient />) : <Login />}
      />


      <Route path="*" element={isAuthenticated ? <NotFound /> : <Login />} />

=======
      <Route
        path="/enteredclient"
        element={isAuthenticated ? <EnteredClient /> : <Login />}
      />
>>>>>>> sam
      <Route
        path="/registerclient"
        element={isAuthenticated ? <RegisterClient /> : <Login />}
      />
      <Route
        path="/registeragent"
        element={isAuthenticated ? <RegisterAgent /> : <Login />}
      />
      <Route
        path="/packages"
        element={isAuthenticated ? <TravelPackages /> : <Login />}
      />
      <Route
        path="/create-packages"
        element={isAuthenticated ? <CreatePackages /> : <Login />}
      />
      <Route
        path="/create-packages/:id_transport"
        element={isAuthenticated ? <CreatePackages /> : <Login />}
      />
      <Route path="*" element={isAuthenticated ? <NotFound /> : <Login />} />
    </Routes>
  );
}

export default RoutesPG;
