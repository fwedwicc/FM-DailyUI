import React from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day13 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="flex lg:flex-row flex-col h-screen">
          {/* Nav buttons in mobile screens */}
          <div className='flex justify-between items-center lg:hidden'>
            {/* Button for left bar */}
            <button
              className="lg:hidden py-2 size-9 flex justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
            {/* Button for Right bar */}
            <button
              className="lg:hidden py-2 size-9 flex justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
            />
          </div>
          {/* Left bar */}
          <div className="lg:block hidden h-full border text-wrap p-6 w-full max-w-[20rem]">
            <p className='text-neutral-300'>Left Content</p>
          </div>
          <div className="flex-grow h-full border text-wrap lg:mt-0 mt-12">
            <p className='text-neutral-300'>Middle Content</p>
          </div>
          {/* Right bar */}
          <div className="lg:block hidden h-full border text-wrap p-6 w-full max-w-[20rem]">
            <p className='text-neutral-300'>Right Content</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day13
