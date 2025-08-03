// src/context/AuthContext.jsx
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const login = async (email, password) => {
    const res = await fetch("https://economily-production.up.railway.app/api/v1/auth/login-by-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    saveToken(data.data);
  };

  const register = async (fullName, email, password) => {
    const res = await fetch("https://economily-production.up.railway.app/api/v1/auth/register-by-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({fullName, email, password }),
    });
    console.log("Response:", res.status);
    
    if (!res.ok) throw new Error("Register failed");
  };
  
  const verify = async (email, code) => {
    const res = await fetch("https://economily-production.up.railway.app/api/v1/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });
    console.log("Response:", res.status);

    if (!res.ok) throw new Error("Verification failed");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, register, verify, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
