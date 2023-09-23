import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

import {
  logOutClient,
  verifyClientToken,
  loginUserRequest,
  postClient,
} from "../api/client.api.js";
import { useNavigate } from "react-router-dom";

export const ClientContext = createContext(null);

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [isClientValidated, setClientValidated] = useState(false);
  const navigate = useNavigate();
  console.log(isClientValidated);
  console.log(client);

  const signIn = async (info) => {
    try {
      console.log(info);
      toast.promise(loginUserRequest(info), {
        loading: "Logging in...",
        success: (res) => {
          setClient(res.data);
          setTimeout(() => {
            navigate("/");
          }, 4000);
          setClientValidated(true);
          return "Welcome back " + res.data.client_name;
        },
        error: (error) => {
          if (Array.isArray(error.response.data)) {
            error.response.data.forEach((errorMsg) => {
              return errorMsg;
            });
          } else {
            return error.response.data;
          }
          return error.response.data;
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Signup = async (client) => {
    try {
      await toast.promise(postClient(client), {
        loading: "Registering client...",
        success: () => {
          setTimeout(() => {
            navigate("/client");
          }, 4000);
          return "Client created succesfully";
        },
        error: (error) => {
          if (Array.isArray(error.response.data)) {
            error.response.data.forEach((errorMsg) => {
              return errorMsg;
            });
          } else {
            return error.response.data.message;
          }
          return error.response.data.message;
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function checkClientLogin() {
      const cookies = Cookies.get();
      if (!cookies.clientToken) {
        setClientValidated(false);
        setClient(null);
        return;
      }
      try {
        let res;
        res = await verifyClientToken()
        if (!res.data) {
          console.log("No existe res.data");
          setClientValidated(false);
          return;
        }
        console.log("Pasé el if");
        setClientValidated(true);
        setClient(res.data);

      } catch (error) {
        setClientValidated(false);
        setClient(null);
      }
    }
   checkClientLogin();
  }, [isClientValidated]);



  const logOut = async () => {
    try {
      await logOutClient();
      setClientValidated(false);
      setClient(null);
    } catch (error) {
      setClientValidated(false);
    }
  };

  const value = {
    client,
    isClientValidated,
    signIn,
    logOut,
    Signup,
  };

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
};
