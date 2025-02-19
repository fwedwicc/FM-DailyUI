import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'
import { fmUILogo } from '../assets'


const Draft = () => {
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
        <div className='lg:min-h-screen flex flex-col justify-between p-8 md:gap-20 gap-8'>
          {/* Logo */}
          <div className='border'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
          </div>

          <div className='border flex flex-col lg:gap-20 md:gap-16 gap-8'>
            {/*  */}
            <div className='border'>
              <h1 className="text-3xl font-medium text-neutral-200 sm:text-4xl md:text-5xl text-nowrap">
                Lorem Ipsum dolor kemerut
              </h1>
              <p className="mt-1 leading-relaxed text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
              </p>
            </div>
            {/*  */}
            <div className='border'>
              <p className="mt-1 leading-relaxed text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
              </p>
            </div>
          </div>

          <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-4 border'>
            {/* Netflix Container */}
            <div className='border h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            {/* Spotify Container */}
            <div className='border h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            {/* Continue Watching Container */}
            <div className='border col-span-2 h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            {/* Time, Date and Weather Container */}
            <div className='border h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>


        </div>
      </main>
    </motion.div>
  )
}

export default Draft
