import React from 'react'

const Button = ({ label, styles }) => {
  return (
    <button
      className={`inline-block shrink-0 px-8 py-3 text-sm transition duration-300 ease-in-out border font-semibold rounded-md focus:outline-none focus:ring-2 active:scale-95 ${styles}`}
    >
      {label}
    </button>
  )
}

export default Button
