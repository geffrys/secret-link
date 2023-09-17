import { createContext, useContext, useState } from "react";
import {
  getItineraries,
  getItinerary,
  postItinerary,
  updateItinerary,
  deleteItinerary,
} from "../api/itinerary.api";

const ItineraryContext = createContext();

export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error("useItinerary must be used within a ItineraryProvider");
  }
  return context;
};

export const ItineraryProvider = ({ children }) => {
  const [itineraries, setItineraries] = useState(null);

  const getItinerariesList = async () => {
    try {
      const res = await getItineraries();
      setItineraries(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ItineraryContext.Provider
      value={{
        itineraries,
        getItinerariesList,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};
