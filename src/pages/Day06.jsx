import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'


const Day06 = () => {
  useLenisScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="lg:min-h-screen lg:px-32 md:px-24 px-8 lg:py-20 py-8">
        </div>
      </section>
    </motion.div>
  )
}

export default Day06
