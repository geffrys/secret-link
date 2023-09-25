import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { RhProvider } from "./context/RhContext.jsx";
import { DocTypesProvider } from "./context/DocTypesContext.jsx";
import { EpsProvider } from "./context/EpsContext.jsx";
import { PackagesProvider } from "./context/PackagesContext.jsx";
import { DestinationsProvider } from "./context/DestinationsContext.jsx";
import { TransportationProvider } from "./context/TransportationContext.jsx";
import { ItineraryProvider } from "./context/ItineraryContext.jsx";
import { FoodTypesProvider } from "./context/FoodTypesContext.jsx";
import { RoomTypesProvider } from "./context/RoomTypesContext.jsx";
import { HotelsProvider } from "./context/HotelsContext.jsx";
import { ClientProvider } from "./context/ClientContext.jsx";
import { HeadquarterProvider } from "./context/HeadquarterContext.jsx";
import { AgentTypesProvider } from "./context/AgentTypesContext.jsx";
import { OperationProvider } from "./context/operationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <PackagesProvider>
        <DestinationsProvider>
          <HotelsProvider>
            <ItineraryProvider>
              <FoodTypesProvider>
                <RoomTypesProvider>
                  <TransportationProvider>
                    <DocTypesProvider>
                      <EpsProvider>
                        <RhProvider>
                          <ClientProvider>
                            <HeadquarterProvider>
                              <AgentTypesProvider>
                                <OperationProvider>
                                  <App />
                                </ OperationProvider>
                              </AgentTypesProvider>
                            </HeadquarterProvider>
                          </ClientProvider>
                        </RhProvider>
                      </EpsProvider>
                    </DocTypesProvider>
                  </TransportationProvider>
                </RoomTypesProvider>
              </FoodTypesProvider>
            </ItineraryProvider>
          </HotelsProvider>
        </DestinationsProvider>
      </PackagesProvider>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>
);
