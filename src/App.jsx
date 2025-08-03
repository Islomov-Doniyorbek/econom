import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import Economy from './components/Economy';
import NationalHighlights from './components/Hightless';
import StockMarket from './components/Stock';
import CurrencyExchange from './components/Exchange';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import {AuthProvider} from "./context/Authcontext";
import Dashboard from './components/dashboard';
import Verify from './components/verify';
import AdminDashboard from './components/admin';



const App = () => {
  return (
     <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
           <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>   
    </AuthProvider>
  );
};

export default App;