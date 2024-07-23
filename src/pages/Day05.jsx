import React from 'react'
import { fmUILogo, fmUILogo0103, fmUILogo02, fmUILogo04 } from '../assets/day05'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'


const Day05 = () => {
  useLenisScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 h-screen grid lg:grid-cols-12 grid-cols-1">
        <div className="lg:col-span-8 col-span-1 border flex flex-col justify-between">
          <div className='h-full flex justify-center items-center'>
            <img src={fmUILogo} alt="fmUILogo" />
          </div>
          <div className='h-20 border flex'>
            <div className='border w-full flex items-center justify-center'>
              <h3>#e5e5e5</h3>
            </div>
            <div className='border w-full flex items-center justify-center'>
              <h3>#262626</h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1 border flex flex-col justify-between flex-grow">
          <div className='space-y-5 py-6 px-9'>
            <img src={fmUILogo0103} alt="fmUILogo" />
            <p className="leading-relaxed text-sm text-neutral-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum et consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum m et consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 border flex-grow'>
            <div className='flex justify-center items-center border'>
              <img src={fmUILogo0103} alt="fmUILogo" />
            </div>
            <div className='flex justify-center items-center border'>
              <img src={fmUILogo02} alt="fmUILogo" />
            </div>
            <div className='flex justify-center items-center border'>
              <img src={fmUILogo0103} alt="fmUILogo" />
            </div>
            <div className='flex justify-center items-center border'>
              <img src={fmUILogo04} alt="fmUILogo" />
            </div>
          </div>
          <div className='border h-auto flex justify-center items-center py-[1.60rem]'>
            <h3 className='text-neutral-300 text-sm'>Founded by
              <span className='text-green-500 font-semibold'> Frederick Moreno</span>
            </h3>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day05
