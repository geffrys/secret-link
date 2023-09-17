import { createContext, useState, useContext } from "react";
import { getRh } from "../api/rh.api";

export const RhContext = createContext();

export const useRh = () => {
  const context = useContext(RhContext);
  if (!context) {
    throw new Error("useRh must be used within a RhProvider");
  }
  return context;
};

export const RhProvider = ({ children }) => {
  const [rhList, setRhList] = useState(null);

  const getRhList = async () => {
    try {
      const res = await getRh();
      setRhList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RhContext.Provider
      value={{
        rhList,
        getRhList,
      }}
    >
      {children}
    </RhContext.Provider>
  );
};

export default RhContext;
