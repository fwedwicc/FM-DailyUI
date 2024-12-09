import React from 'react'
import { motion } from 'framer-motion'

const UpcomingChallenge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className='min-h-screen flex items-center justify-center'>
        <h1 className='text-neutral-300 text-3xl font-medium'>Upcoming Challenge.</h1>
      </main>
    </motion.div>
  )
}

export default UpcomingChallenge
