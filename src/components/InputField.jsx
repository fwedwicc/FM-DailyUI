import React from 'react';

const InputField = ({ id, type, label, placeholder, required, styles }) => {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-300 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${styles} block rounded-md w-full bg-neutral-700/20 border border-neutral-600/60 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm py-2.5 px-3 text-neutral-200 placeholder:text-neutral-400/70`}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}

export default InputField;
