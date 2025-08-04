import React from 'react';
import '../index.css';
// import useAuth from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom'; // sahifa o‘zgartirish uchun
import AuthContext from '../context/Authcontext';

const Header = () => {
  // const {email} = useContext(AuthContext)
  // const { user, logout } = useAuth(); // ⬅️ faqat keraklilarni olamiz
  const navigate = useNavigate();
  // console.log(user);
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   const userData = localStorage.getItem('email');
    
  // }, []);

// localStorage.clear()
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
        <ul className="nav-menu flex items-center" id="navMenu">
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
            {
              localStorage.getItem('email') ? 
              <p className='flex gap-5 items-center'>{localStorage.getItem('email').slice(0, 7)} <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
              onClick={() => navigate('/admin')}>Admin</button></p> 
              : <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
              onClick={() => navigate('/login')}>Login</button>
            }
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
