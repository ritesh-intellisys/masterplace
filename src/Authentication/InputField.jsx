import React from 'react';
import { FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi';

const InputField = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon, 
  error,
  className = '',
  ...props 
}) => {
  const Icon = () => {
    switch (icon) {
      case 'user': return <FiUser className="text-gray-400" />;
      case 'email': return <FiMail className="text-gray-400" />;
      case 'password': return <FiLock className="text-gray-400" />;
      case 'phone': return <FiPhone className="text-gray-400" />;
      default: return null;
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <div className={`relative flex items-center border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'} focus-within:border-teal-700`}>
        {icon && (
          <div className="absolute left-3">
            <Icon />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-3 ${icon ? 'pl-10' : 'pl-4'} pr-4 rounded-lg focus:outline-none`}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;