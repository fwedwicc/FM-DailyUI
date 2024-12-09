import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day22 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        <section className='h-screen flex justify-center items-center'>
          <h1 className='text-neutral-300 text-3xl font-medium'>Currently Crafting.</h1>
        </section>
      </main>
    </motion.div>
  )
}

export default Day22
