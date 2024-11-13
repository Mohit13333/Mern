import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [services, setServices] = useState([]);
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  const isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    toast.success("Logged out successfully");
    return localStorage.removeItem("token");
  };
  // Authentication
  useEffect(() => {
    const userAuthentication = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auth/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          // console.log(data.userData);
          setUser(data.userData);
        }
      } catch (error) {
        console.log("Error while fetching data");
      }
    };
    userAuthentication();
  }, []);

  // services

  useEffect(() => {
    const Service = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/data/services",
          {
            method: "GET",
            header: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(response.ok){
            const data=await response.json();
            console.log(data);
            setServices(data.message)
        }
      } catch (error) {
        console.log(error);
      }
    };
    Service();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLs, LogoutUser, user,services}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
