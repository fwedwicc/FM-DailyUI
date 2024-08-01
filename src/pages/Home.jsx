import React from 'react'
import { motion } from 'framer-motion'
import useLenisScroll from '../hooks/useLenisScroll'
import { glowEllipse } from '../assets/home'
import { Card } from '../components'
import { Cards } from '../data'
import useScrollRestoration from '../hooks/useScrollRestoration';

const Home = () => {
  useLenisScroll();
  useScrollRestoration();

  const Hero = () => {
    return (
      <main className='h-screen relative grid grid-cols-2'>
        <img src={glowEllipse} alt="Glow Ellipse" className='absolute z-0' />
        <div className='border'>
          {/* Hero */}
        </div>
        <div className='border'>
          {/* Illustration */}
        </div>
      </main>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-neutral-900'
    >
      <Hero />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:px-20 md:px-12 px-6 py-12'>
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
