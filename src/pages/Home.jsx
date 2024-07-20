import React from 'react'
import { motion } from 'framer-motion'
import useLenisScroll from '../hooks/useLenisScroll'
import { Card } from '../components'
import { Cards } from '../data'

const Home = () => {
  useLenisScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-neutral-900'
    >
      <div className='grid lg:grid-cols-3 grid-cols-2 gap-3 px-24 py-12'>
        {Cards.map((card, index) => (
          <Card
            key={index}
            day={card.day}
            title={card.title}
            desc={card.desc}
            link={card.link}
            img={card.img}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Home
