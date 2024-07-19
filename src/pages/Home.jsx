import React from 'react'
import { Card } from '../components'
import { Cards } from '../data'

const Home = () => {
  return (
    <div>
      <h1 className='bg-indigo-500 font-bold text-2xl p-12 text-white uppercase'>This is a test.</h1>
      <div className='grid lg:grid-cols-3 grid-cols-2'>
        {Cards.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            day={card.day}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
