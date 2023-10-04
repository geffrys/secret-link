import { useContext, createContext, useState } from "react";

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

  const setOperation = (id) => {
    setOperationId(id);
  };

  const getOperation = () => {
    return operationId;
  };

  return (
    <OperationContext.Provider
      value={{ operationId, setOperation, getOperation }}
    >
      {children}
    </OperationContext.Provider>
  );
};
