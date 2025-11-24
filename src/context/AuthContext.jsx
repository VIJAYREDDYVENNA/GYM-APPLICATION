import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Load initial user from localStorage OR sessionStorage
  const [user, setUser] = useState(() => {
    return (
      localStorage.getItem("user") ||
      sessionStorage.getItem("user") ||
      null
    );
  });

  // LOGIN FUNCTION
  const login = (username, rememberMe) => {
    setUser(username);

    // Clear both storages first
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    if (rememberMe) {
      // Save permanently
      localStorage.setItem("user", username);
    } else {
      // Save only for session
      sessionStorage.setItem("user", username);
    }

    navigate("/");
  };

  // LOGOUT FUNCTION
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
