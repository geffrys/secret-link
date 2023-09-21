import { createContext, useState, useContext, useEffect } from "react";
import {
  createUserRequest,
  loginUserRequest,
  verifyTokenRequest,
  logOutRequest,
} from "../api/users.api";
import Cookies from "js-cookie";
<<<<<<< HEAD
=======
import { toast } from "react-hot-toast";
>>>>>>> sam

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const Signup = async (user) => {
    try {
      toast.promise(
        createUserRequest(user), // Llamada directa a la promesa
        {
          loading: "Registering agent...",
          success: (res) => {
            setIsAuthenticated(true);
            return res.data.message;
          },
          error: (error) => {
            if (Array.isArray(error.response.data)) {
              error.response.data.forEach((errorMsg) => {
                return errorMsg
              });
            } else {
              return error.response.data.message
            }
            return error.response.data.message;
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (info) => {
    try {
      toast.promise(loginUserRequest(info),{
        loading: "Logging in...",
        success: (res) => {
          setUser(res.data);
          setIsAuthenticated(true);
          return "Welcome back " + res.data.name_agent;
      },
      error: "Incorrect username or password",
    })
      
    } catch (error) {
      console.log(error)
    }
  };

  const signOut = async () => {
    try {
      const res = await logOutRequest();
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      return;
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        Signup,
        signIn,
        user,
        isAuthenticated,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
