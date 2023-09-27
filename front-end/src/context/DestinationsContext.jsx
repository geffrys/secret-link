import { createContext, useContext, useState, useEffect } from "react";
import {
  getDestinations,
  postDestination,
  updateDestination,
} from "../api/destinations.api";
import toast from "react-hot-toast";

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

  const createDestination = async (destination) => {
    try {
      const res = await postDestination(destination);
      toast.success("Destination created successfully");
      return res.data;
    } catch (error) {
      toast.error("Error creating destination");
      console.log(error);
    }
  };

  const updateDestinationById = async (id, destination) => {
    try {
      const res = await updateDestination(id, destination);
      toast.success("Destination updated successfully");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDestinationsList();
  }, []);

  return (
    <DestinationsContext.Provider
      value={{
        destinations,
        getDestinationsList,
        createDestination,
        updateDestinationById,
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};
