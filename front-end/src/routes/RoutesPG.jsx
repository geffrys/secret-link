import { useAuth } from "../context/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import RegisterClient from "../pages/RegisterClient.jsx";
import LoginClient from "../pages/LoginClient.jsx";
import TravelPackages from "../pages/TravelPackages.jsx";
import CreatePackages from "../pages/CreatePackages.jsx";
import EnteredClient from "../pages/Entered.jsx";
import NewReservation from "../pages/NewReservation.jsx";
import { useContext } from "react";
import { ClientContext } from "../context/ClientContext.jsx";
import RegisterAgent from "../pages/RegisterAgent.jsx";
import DataPage from '../pages/DataPage.jsx'
import CreateFoodType from '../components/DataComponents/Create/CreateFoodType.jsx'
import CreateRoomType from '../components/DataComponents/Create/CreateRoomType.jsx'
import CreateTransport from '../components/DataComponents/Create/CreateTransport.jsx'
import CreateDestination from '../components/DataComponents/Create/CreateDestination.jsx'
import CreateHotel from '../components/DataComponents/Create/CreateHotel.jsx'
import MetricsPage from '../pages/MetricsPage.jsx'

import CurrentReservation from "../pages/CurrentReservation.jsx";
import { OperationContext } from "../context/operationContext.jsx";
import TakingPlan from "../pages/TakingPlan.jsx";

function RoutesPG() {
  const { isAuthenticated, user } = useAuth();
  const { isClientValidated } = useContext(ClientContext);
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? (isClientValidated ? (<EnteredClient />) : (<LoginClient />)) : (<Login />)} />
      <Route
        path="/client"
        element={isAuthenticated ? <LoginClient /> : <Login />}
      />
        <Route
          path="/dashboardclient"
          element={isAuthenticated ? (isClientValidated ? (<EnteredClient />) : (<LoginClient />)) : (<Login />)}
        />
        <Route path='/newreservation' element={isAuthenticated ? (isClientValidated ? (<NewReservation />) : (<LoginClient />)) : (<Login />)} />
        <Route path='/currentreservation' element={isAuthenticated ? (isClientValidated ? (<CurrentReservation />) : (<LoginClient />)) : (<Login />)} />
        <Route path='/reservation/:id' element={isAuthenticated ? (isClientValidated ? (<TakingPlan />) : (<LoginClient />)) : (<Login />)} />
        
      <Route
        path="/registerclient"
        element={isAuthenticated ? <RegisterClient /> : <Login />}
      />
      <Route
        path="/registeragent"
        element={isAuthenticated && user?.id_agent_type != 2 ? <RegisterAgent /> : <Login />}
      />
      <Route
        path="/packages"
        element={isAuthenticated ? <TravelPackages /> : <Login />}
      />
      <Route
        path="/create-packages"
        element={isAuthenticated && user?.id_agent_type != 2 ? <CreatePackages /> : <Login />}
      />
      <Route
        path="/create-packages/:id_transport"
        element={isAuthenticated && user?.id_agent_type != 2 ? <CreatePackages /> : <Login />}
      />
      <Route
        path="/datapage"
        element={isAuthenticated && user?.id_agent_type === 3 ? <DataPage /> : <Login />}
      />

      <Route
        path="/foodtypes"
        element={isAuthenticated && user?.id_agent_type === 3 ? <CreateFoodType /> : <Login />}
      />
      <Route
        path="/roomtypes"
        element={isAuthenticated && user?.id_agent_type === 3 ? <CreateRoomType /> : <Login />}
      />

      <Route
        path="/transportation"
        element={isAuthenticated && user?.id_agent_type === 3 ? <CreateTransport /> : <Login />}
      />
      
      <Route
        path="/destination"
        element={isAuthenticated && user?.id_agent_type === 3 ? <CreateDestination /> : <Login />}
      />

      <Route
        path="/hotels"
        element={isAuthenticated && user?.id_agent_type === 3 ? <CreateHotel /> : <Login />}
      />

      <Route 
        path="/metrics" 
        element={isAuthenticated && user?.id_agent_type === 3 ? <MetricsPage /> : <Login />}
      />
      <Route path="*" element={isAuthenticated ? <NotFound /> : <Login />} />
    </Routes>
  );
}

export default RoutesPG;
