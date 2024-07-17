import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, name, type, label, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={name}
        type={type}
        required={required}
      />
    </div>
  );
};

export default Input;
