import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import InputField from './InputField';
import { FiMail } from 'react-icons/fi';

const ResetPasswordModal = ({ onClose, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    console.log('Reset password requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <ModalWrapper onClose={onClose} title="Reset Password">
      {isSubmitted ? (
        <div className="text-center py-6">
          <svg className="mx-auto h-12 w-12 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Password reset link sent!</h3>
          <p className="mt-2 text-sm text-gray-500">
            We've sent a password reset link to your email address. Please check your inbox.
          </p>
          <div className="mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            Please enter your username or email address. You will receive a link to create a new password via email.
          </p>
          <form onSubmit={handleSubmit}>
            <InputField
              name="email"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon="email"
              error={error}
            />
            <button
              type="submit"
              className="w-full bg-teal-800 hover:bg-teal-900 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
            >
              Get New Password
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                onClose();
                onLoginClick();
              }}
              className="text-teal-800 hover:underline text-sm"
            >
              Back to Login
            </button>
          </div>
        </>
      )}
    </ModalWrapper>
  );
};

export default ResetPasswordModal;