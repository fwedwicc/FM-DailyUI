import React from 'react'

const Toggle = ({ children }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-9 h-5 bg-neutral-400 transition duration-300 ease-in-out peer-focus:ring-neutral-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-700"></div>
      {children}
    </label>
  );
};

export default Toggle
