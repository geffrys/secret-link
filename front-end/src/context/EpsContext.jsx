import { createContext, useContext, useState } from "react";
import { getEps } from "../api/eps.api"

const EpsContext = createContext();

export const useEps = () => {
  const context = useContext(EpsContext);
  if (!context) {
    throw new Error("useEps must be used within a EpsProvider");
  }
  return context;
};

export const EpsProvider = ({ children }) => {
  const [eps, setEps] = useState([]);

  const getEpsList = async () => {
    try {
      const res = await getEps();
      setEps(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EpsContext.Provider
      value={{
        eps,
        getEpsList,
      }}
    >
      {children}
    </EpsContext.Provider>
  );
};
