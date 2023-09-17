import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { RhProvider } from "./context/RhContext.jsx";
import { DocTypesProvider } from "./context/DocTypesContext.jsx";
import { EpsProvider } from "./context/EpsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DocTypesProvider>
        <EpsProvider>
          <RhProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </RhProvider>
        </EpsProvider>
      </DocTypesProvider>
    </AuthProvider>
  </React.StrictMode>
);
