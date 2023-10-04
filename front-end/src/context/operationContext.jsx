import { useContext, createContext, useState, useEffect } from "react";
import { getOperationAlone } from "../api/operations.api";

export const OperationContext = createContext(null);

export const useOperation = () => {
  const context = useContext(OperationContext);
  if (!context) {
    throw new Error("useOperation must be used within a OperationProvider");
  }
  return context;
};

export const OperationProvider = ({ children }) => {
  const [operationId, setOperationId] = useState(null);
  const [operation, setOperations] = useState(null);

  const setOperation = (id) => {
    setOperationId(id);
  };

  const getOperationList = async () => {
    try {
      const res = await getOperationAlone();
      setOperations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOperationList();
  });

  const getOperation = () => {
    return operationId;
  };

  return (
    <OperationContext.Provider
      value={{
        operation,
        operationId,
        setOperation,
        getOperation,
        getOperationList,
      }}
    >
      {children}
    </OperationContext.Provider>
  );
};
