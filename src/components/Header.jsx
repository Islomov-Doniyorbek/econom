import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const email = localStorage.getItem('email');

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img className="w-20" src={logo} alt="logo" /> &nbsp; Economily
        </div>

        {/* Hamburger icon */}
        <button
          className="mobile-menu-btn md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav menu */}
        <ul
          className="nav-menu md:flex md:items-center gap-5"
          style={{ display: menuOpen ? 'flex' : 'flex', flexDirection: menuOpen ? 'column' : 'rows', left: menuOpen ? '0' : '-100%' }}
        >
          <li className="nav-item">
            <Link to="/">
              <b className="nav-link active" href="#">Home</b>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#news">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#historical">Historical</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#economic">Economic</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#stock-market">Stock Market</a>
          </li>
          <li className="nav-item">
            {email ? (
              <p className="flex gap-5 items-center">
                {email.slice(0, 7)}{' '}
                {email==="admin@example.com" ? <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
                  onClick={() => navigate('/admin')}
                >
                  Admin
                </button> : null}
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
                  onClick={() => {
                    navigate('/login')
                    localStorage.clear()
                  }}
                >
                  Logout
                </button>
              </p>
            ) : (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
