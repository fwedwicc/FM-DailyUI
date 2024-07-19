import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ day, title, desc, link }) => {
  return (
    <Link to={link}>
      <div className='border p-6 rounded-md w-full h-full'>
        <h1>Day {day}</h1>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </Link>
  )
}

export default Card
