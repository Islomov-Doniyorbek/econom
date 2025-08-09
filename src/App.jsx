import React from 'react';
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
import AdminDashboard2 from './components/article';
import Articles from './components/articles';
import ArticleDetails from './components/[id]/articleDetails';
import ArticlesNews from './components/articlesNews';
import ArticlesMaqola from './components/articlesMaqola';
import ArticlesHightless from './components/articlesHightless';
import StockCharts from './components/[id]/stockCharts';



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
            <Route path="/" element={<Dashboard />} />
            <Route path="/article" element={<AdminDashboard2 />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articlesNews" element={<ArticlesNews />} />
            <Route path="/hightless" element={<ArticlesHightless />} />
            <Route path="/maqolalar" element={<ArticlesMaqola />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/stock/:symbol" element={<StockCharts />} />
        </Routes>
      </BrowserRouter>   
    </AuthProvider>
  );
};

export default App;