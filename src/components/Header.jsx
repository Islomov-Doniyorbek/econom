import React from 'react';
import '../index.css';
import useAuth from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom'; // sahifa o‘zgartirish uchun

const Header = () => {
  const { user, logout } = useAuth(); // ⬅️ faqat keraklilarni olamiz
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <i className="fas fa-newspaper"></i>
          <span>Uzbekistan Daily</span>
        </div>
        <button className="mobile-menu-btn" id="mobileMenuBtn">
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-menu" id="navMenu">
          <li className="nav-item">
            <Link to={"/"}>
            <a className="nav-link active" href="#">Home</a>
          </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Politics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Economy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Culture</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#stock-market">Stock Market</a>
          </li>
          <li className="nav-item">
            {user ? (
              <>
                <span style={{ color: 'white', marginRight: '10px' }}>Hello, {user.name}</span>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <button onClick={() => navigate('/login')}>Login</button> // ✅ Sahifaga yo‘naltiramiz
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
