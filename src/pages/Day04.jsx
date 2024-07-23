import React from 'react'
import { fmUILogo } from '../assets'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'

const Day04 = () => {
  useLenisScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <h1>sssss</h1>
      </section>
    </motion.div>
  )
}

export default Day04
