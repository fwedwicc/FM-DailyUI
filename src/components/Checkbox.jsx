import React from 'react'

const Checkbox = ({ id, label }) => {
  return (
    <label htmlFor={id} className="flex gap-3">
      <input
        type="checkbox"
        id={id}
        className="size-5 cursor-pointer rounded bg-neutral-700/40 border border-neutral-600/60 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700"
      />
      <span className="text-sm text-neutral-300">
        {label}
      </span>
    </label>
  )
}

export default Checkbox
