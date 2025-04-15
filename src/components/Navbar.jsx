import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '', remember: false });
  const [registerForm, setRegisterForm] = useState({
    firstName: '', lastName: '', username: '', email: '', phone: '', password: '', confirmPassword: '', agreeTerms: false
  });

  const toggleMenu = () => setIsMobile(!isMobile);
  const toggleAuthPopup = () => setShowAuthPopup(!showAuthPopup);

  const handleLoginClick = () => {
    setActiveTab('login');
    setShowAuthPopup(true);
  };

  const handleRegisterClick = () => {
    setActiveTab('register');
    setShowAuthPopup(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowAuthPopup(false);
  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowAuthPopup(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowAuthPopup(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobile(false);
    };

    const handleClickOutside = (e) => {
      if (isMobile && !e.target.closest('.navbar__links') && !e.target.closest('.navbar__toggle')) {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      <div className={`navbar__links ${isMobile ? 'mobile' : ''}`}>
        <ul>
          <li><Link to='/' onClick={() => setIsMobile(false)}>Home</Link></li>
          <li><Link to="/properties" onClick={() => setIsMobile(false)}>Properties</Link></li>
          <li><Link to="/about" onClick={() => setIsMobile(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
          <li className="navbar__profile">
            {isLoggedIn ? (
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            ) : (
              <div className="profile-icon" onClick={toggleAuthPopup}>
                <FaUserCircle size={24} />
              </div>
            )}
          </li>
        </ul>
      </div>

      {showAuthPopup && (
        <div className="auth-popup">
          <div className="auth-popup-content">
            <button className="close-popup" onClick={toggleAuthPopup}>
              <FaTimes />
            </button>
            
            <div className="auth-tabs">
              <button
                className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Sign In
              </button>
              <button
                className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            {activeTab === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="auth-form">
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username or Email"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="auth-options">
                  <label>
                    <input
                      type="checkbox"
                      name="remember"
                      checked={loginForm.remember}
                      onChange={handleLoginChange}
                    />
                    Remember me
                  </label>
                  <button type="button" className="forgot-password">
                    Forgot password?
                  </button>
                </div>
                <button type="submit" className="auth-submit-btn">
                  Sign In
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="auth-form signup-form-x">
                <div className="name-fields">
                  <div className="input-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={registerForm.firstName}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={registerForm.lastName}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={registerForm.username}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <FiPhone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={registerForm.phone}
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerForm.password}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={registerForm.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="terms-agreement">
                  <label>
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={registerForm.agreeTerms}
                      onChange={handleRegisterChange}
                      required
                    />
                    I agree to the <a href="#">Terms & Conditions</a>
                  </label>
                </div>
                <button type="submit" className="auth-submit-btn">
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <div className={`navbar__toggle ${isMobile ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
      </div>
    </nav>
  );
};

export default Navbar;