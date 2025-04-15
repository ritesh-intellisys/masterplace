import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import InputField from './InputField';
import { FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi';

const AuthModal = ({ onClose, initialTab, onAuthSuccess, onResetPasswordClick }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [loginForm, setLoginForm] = useState({ username: '', password: '', remember: false });
  const [registerForm, setRegisterForm] = useState({
    firstName: '', lastName: '', username: '', email: '', phone: '', password: '', confirmPassword: '', agreeTerms: false
  });
  const [errors, setErrors] = useState({});

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

  const validateLogin = () => {
    const newErrors = {};
    if (!loginForm.username) newErrors.username = 'Username or email is required';
    if (!loginForm.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerForm.firstName) newErrors.firstName = 'First name is required';
    if (!registerForm.lastName) newErrors.lastName = 'Last name is required';
    if (!registerForm.username) newErrors.username = 'Username is required';
    if (!registerForm.email) newErrors.email = 'Email is required';
    if (!registerForm.password) newErrors.password = 'Password is required';
    if (registerForm.password !== registerForm.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!registerForm.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log('Login submitted:', loginForm);
      onAuthSuccess();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      console.log('Register submitted:', registerForm);
      onAuthSuccess();
    }
  };

  return (
    <ModalWrapper onClose={onClose} title={activeTab === 'login' ? 'Sign In' : 'Create Account'}>
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'login' ? 'text-teal-800 border-b-2 border-teal-800' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Sign In
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'register' ? 'text-teal-800 border-b-2 border-teal-800' : 'text-gray-500'}`}
            onClick={() => setActiveTab('register')}
          >
            Create Account
          </button>
        </div>
      </div>

      {activeTab === 'login' ? (
        <form onSubmit={handleLoginSubmit}>
          <InputField
            name="username"
            placeholder="Username or Email"
            value={loginForm.username}
            onChange={handleLoginChange}
            icon="user"
            error={errors.username}
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
            icon="password"
            error={errors.password}
          />
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={loginForm.remember}
                onChange={handleLoginChange}
                className="h-4 w-4 text-teal-800 focus:ring-teal-800 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-teal-800 hover:underline focus:outline-none"
              onClick={onResetPasswordClick}
            >
              Lost your password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-800 hover:bg-teal-900 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
          >
            Sign In
          </button>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InputField
              name="firstName"
              placeholder="First Name"
              value={registerForm.firstName}
              onChange={handleRegisterChange}
              error={errors.firstName}
            />
            <InputField
              name="lastName"
              placeholder="Last Name"
              value={registerForm.lastName}
              onChange={handleRegisterChange}
              error={errors.lastName}
            />
          </div>
          <InputField
            name="username"
            placeholder="Username"
            value={registerForm.username}
            onChange={handleRegisterChange}
            icon="user"
            error={errors.username}
          />
          <InputField
            name="email"
            placeholder="Email"
            value={registerForm.email}
            onChange={handleRegisterChange}
            icon="email"
            type="email"
            error={errors.email}
          />
          <InputField
            name="phone"
            placeholder="Phone"
            value={registerForm.phone}
            onChange={handleRegisterChange}
            icon="phone"
            type="tel"
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            value={registerForm.password}
            onChange={handleRegisterChange}
            icon="password"
            error={errors.password}
          />
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={registerForm.confirmPassword}
            onChange={handleRegisterChange}
            icon="password"
            error={errors.confirmPassword}
          />
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={registerForm.agreeTerms}
                onChange={handleRegisterChange}
                className="h-4 w-4 mt-1 text-teal-800 focus:ring-teal-800 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree with <a href="#" className="text-teal-800 hover:underline">Terms & Conditions</a>
                {errors.agreeTerms && <span className="text-red-500 text-sm block">{errors.agreeTerms}</span>}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-800 hover:bg-teal-900 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
          >
            Create Account
          </button>
        </form>
      )}
    </ModalWrapper>
  );
};

export default AuthModal;