// src/context/AuthContext.jsx
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  // const [token, setToken] = useState(localStorage.getItem("token"));

  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  const saveEmail = (newEmail) => {
    localStorage.setItem("email", newEmail);
    setEmail(newEmail);
  };
  
  // localStorage.setItem('user', JSON.stringify(user));

  const login = async (email, password) => {
    const res = await fetch("https://economily-production.up.railway.app/api/v1/auth/login-by-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    console.log(data.email);
    console.log(data);
    
    saveToken(data.data);
    saveEmail(email);
  };

  const register = async (fullName, email, password) => {
  const res = await fetch("https://economily-production.up.railway.app/api/v1/auth/register-by-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password }),
  });
  const data = await res.json();
  console.log("Register response:", data);
  console.log("Register response:", res);
  
  if (!res.ok) throw new Error(data.message || "Register failed");
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
    <AuthContext.Provider value={{email, token, login, register, verify, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
