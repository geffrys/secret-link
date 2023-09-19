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
import { HeadquarterProvider } from "./context/HeadquarterContext.jsx";
import { AgentTypesProvider } from "./context/AgentTypesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PackagesProvider>
        <DestinationsProvider>
          <HeadquarterProvider>
            <AgentTypesProvider>
              <HotelsProvider>
                <ItineraryProvider>
                  <FoodTypesProvider>
                    <RoomTypesProvider>
                      <TransportationProvider>
                        <DocTypesProvider>
                          <EpsProvider>
                            <RhProvider>
                              <BrowserRouter>
                                <App />
                              </BrowserRouter>
                            </RhProvider>
                          </EpsProvider>
                        </DocTypesProvider>
                      </TransportationProvider>
                    </RoomTypesProvider>
                  </FoodTypesProvider>
                </ItineraryProvider>
              </HotelsProvider>
            </AgentTypesProvider>
          </HeadquarterProvider>
        </DestinationsProvider>
      </PackagesProvider>
    </AuthProvider>
  </React.StrictMode>
);
