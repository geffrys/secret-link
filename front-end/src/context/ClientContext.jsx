/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { verifyClient, logOutClient, verifyClientToken } from "../api/client.api.js";

export const ClientContext = createContext(null);

export const ClientProvider = ({ children }) => {

  const [client, setClient] = useState(null);
  const [isClientValidated, setClientValidated] = useState(false);
  const [errors , setErrors] = useState(null);

  const validateClient = async (document, password) => {
    try {
      const response = await verifyClient(document, password);
      setClient(response.data.client);
      setClientValidated(true);
    } catch (error) {
      setErrors(error.response.data);
      setClientValidated(false);
    }
  }

  // useEffect(() => {
  //   const checkClientLogin = async () => {
  //     const cookies = Cookies.get();
  //     if (!cookies.clientToken) {
  //       setClientValidated(false);
  //       setClient(null);
  //       return;
  //     }
  //     try {
  //       const res = await verifyClientToken();
  //       if (!res.data) return setClientValidated(false);
  //       setClientValidated(true);
  //       setClient(res.data);
  //     } catch (error) {
  //       setClientValidated(false);
  //       setClient(null);
  //     }
  //   }
  //   checkClientLogin();
  // }, []);

  const logOut = async () => {
    try {
      const res = await logOutClient();
      setClientValidated(false);
      setClient(null);
    } catch (error) {
      setErrors(error.response.data);
      setClientValidated(false);
    }
  }

  const value = {
    client,
    isClientValidated,
    validateClient,
    logOut,
    errors
  }

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  )
}