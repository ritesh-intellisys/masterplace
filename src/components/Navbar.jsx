import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for the profile icon

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate
    // For demo purposes, we'll just check if fields are not empty
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setShowLoginPopup(false);
      setLoginForm({ email: '', password: '' });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar__logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar__links ${isMobile ? 'mobile' : ''}`}>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to="/properties">All Properties</Link> </li>
        <li> <Link to="/about">About Us</Link> </li>
        <li> <Link to="/contact">Contact Us</Link> </li>
        <li className="navbar__profile">
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <div className="profile-icon" onClick={toggleLoginPopup}>
              <FaUserCircle size={24} />
            </div>
          )}
        </li>
      </ul>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="login-popup">
          <div className="login-popup-content">
            <button className="close-popup" onClick={toggleLoginPopup}>×</button>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={loginForm.email}
                onChange={handleInputChange}
                required
              />
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                value={loginForm.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="submit-login">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Hamburger menu */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
      </div>
    </nav>
  );
};

export default Navbar;