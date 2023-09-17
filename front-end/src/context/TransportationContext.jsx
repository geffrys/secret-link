import { useContext, useState, createContext } from "react";
import {
  getTransportations,
  getTransportation,
  postTransportation,
  updateTransportation,
  deleteTransportation,
} from "../api/transportation.api";

const TransportationContext = createContext();

export const useTransportation = () => {
  const context = useContext(TransportationContext);
  if (!context) {
    throw new Error(
      "useTransportation must be within a TransportationProvider"
    );
  }
  return context;
};

export const TransportationProvider = ({ children }) => {
  const [transportation, setTransportation] = useState(null);

  const getTransportationsList = async () => {
    try {
      const res = await getTransportations();
      setTransportation(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TransportationContext.Provider
      value={{
        transportation,
        getTransportationsList,
      }}
    >
      {children}
    </TransportationContext.Provider>
  );
};
