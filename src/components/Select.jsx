import React from 'react';

const Select = ({ id, label, options = [], required = false }) => {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-300 mb-1.5">
        {label}
      </label>
      <select
        name={id}
        id={id}
        className="block rounded-md w-full bg-neutral-800 border border-neutral-600/60 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm py-2.5 px-3 text-neutral-300"
        required={required}
      >
        {options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          <option value="">Please select</option>
        )}
      </select>
    </>
  );
};

export default Select;
