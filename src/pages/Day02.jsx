import React from 'react'
import { fmUILogo } from '../assets'
import { motion } from 'framer-motion'

const Day02 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="lg:min-h-screen px-48 py-20">
          <a className="inline-block" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <div className='space-y-4'>
            <h1 className="mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
              Checkout
            </h1>
            <div>
              <p className='text-neutral-300'>Start your <strong>7-day free trial</strong> today.</p>
              <p className='text-neutral-300'>We'll email you a reminder 3 days before your trial ends.</p>
            </div>
          </div>
          {/* Plan and billing */}
          <div>
            <div className='flex justify-between'>
              <h2 className='text-neutral-300'>Plan and billing</h2>
              <h2 className='text-neutral-300'>Plan and billing</h2>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day02
