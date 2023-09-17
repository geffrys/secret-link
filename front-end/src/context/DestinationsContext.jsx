import { createContext, useContext, useState, useEffect } from "react";
import {
  getDestinations,
  getDestination,
  postDestination,
  updateDestination,
  deleteDestination,
} from "../api/destinations.api";

export const DestinationsContext = createContext();

export const useDestinations = () => {
  const context = useContext(DestinationsContext);
  if (!context) {
    throw new Error("useDestinations must be within a DestinationsProvider");
  }
  return context;
};

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState(null);

  const getDestinationsList = async () => {
    try {
      const res = await getDestinations();
      setDestinations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDestinationById = async (id) => {
    try {
      const res = await getDestination(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createDestination = async (destination) => {
    try {
      const res = await postDestination(destination);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateDestinationById = async (id, destination) => {
    try {
      const res = await updateDestination(id, destination);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDestination = async (id) => {
    try {
      const res = await deleteDestination(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DestinationsContext.Provider
      value={{
        destinations,
        getDestinationsList,
        getDestinationById,
        createDestination,
        updateDestinationById,
        deleteDestination,
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};
