import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { VrGlass } from '../assets'
import { motion } from 'framer-motion'

const Day25 = () => {
  useLenisScroll()
  useScrollToTop()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        <section className='h-screen flex flex-col justify-center items-center'>
          <img src={VrGlass} alt="VR Glass Illustration" className='grayscale' />
          <h1 className='absolute bottom-1/3 text-neutral-400 font-medium'>Currently Crafting...</h1>
        </section>
      </main>
    </motion.div>
  )
}

export default Day25
