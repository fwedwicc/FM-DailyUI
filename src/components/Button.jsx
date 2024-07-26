import React from 'react'

const Button = ({ label, styles, children }) => {
  return (
    <button
      className={`${styles} inline-block shrink-0 px-5 py-3 text-sm transition duration-300 ease-in-out border font-semibold rounded-md focus:outline-none focus:ring-2 active:scale-95`}
    >
      {children}
      {label}
    </button>
  )
}

export default Button
