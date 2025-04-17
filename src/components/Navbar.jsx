import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaTimes, FaSearch, FaHome, FaBuilding, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
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
  const [scrolled, setScrolled] = useState(false);

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to='/' onClick={() => setIsMobile(false)}>
            <img src={logo} alt="MasterPlace Logo" />
            <span>MasterPlace</span>
          </Link>
        </div>

        <div className={`navbar__links ${isMobile ? 'mobile' : ''}`}>
          <ul>
            <li>
              <Link to='/' onClick={() => setIsMobile(false)}>
                <FaHome className="nav-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/properties" onClick={() => setIsMobile(false)}>
                <FaBuilding className="nav-icon" />
                <span>Properties</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobile(false)}>
                <FaInfoCircle className="nav-icon" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobile(false)}>
                <FaEnvelope className="nav-icon" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="navbar__search">
              <div className="search-box">
                <input type="text" placeholder="Search properties..." />
                <button type="submit">
                  <FaSearch />
                </button>
              </div>
            </li>
            <li className="navbar__profile">
              {isLoggedIn ? (
                <div className="profile-dropdown">
                  <button className="profile-btn">
                    <FaUserCircle size={24} />
                    <span>My Account</span>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/profile">Profile</Link>
                    <Link to="/saved">Saved Properties</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              ) : (
                <button className="auth-btn" onClick={toggleAuthPopup}>
                  <FaUserCircle size={24} />
                  <span>Sign In</span>
                </button>
              )}
            </li>
          </ul>
        </div>

        <div className={`navbar__toggle ${isMobile ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </div>
      </div>

      {showAuthPopup && (
        <div className="auth-popup">
          <div className="auth-popup-overlay" onClick={toggleAuthPopup}></div>
          <div className="auth-popup-content">
            <button className="close-popup" onClick={toggleAuthPopup}>
              <FaTimes />
            </button>
            
            <div className="auth-header">
              <h3>{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h3>
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
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={loginForm.remember}
                      onChange={handleLoginChange}
                    />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="forgot-password">
                    Forgot password?
                  </button>
                </div>
                <button type="submit" className="auth-submit-btn">
                  Sign In
                </button>
                <div className="auth-divider">
                  <span>or</span>
                </div>
                <div className="social-auth">
                  <button type="button" className="social-btn google">
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
                    Continue with Google
                  </button>
                  <button type="button" className="social-btn facebook">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                    Continue with Facebook
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="auth-form signup-form">
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
                    placeholder="Phone Number"
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
                    <span>I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></span>
                  </label>
                </div>
                <button type="submit" className="auth-submit-btn">
                  Register
                </button>
                <div className="auth-footer">
                  Already have an account? <button type="button" onClick={() => setActiveTab('login')}>Sign In</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;