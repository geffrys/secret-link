import { createContext } from "react";
import { useState } from "react";

const ClientContext = createContext();

export const ClientProvider = () => {
  const [client, setClient] = useState(null);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
     
    </ClientContext.Provider>
  );
}