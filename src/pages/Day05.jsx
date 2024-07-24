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
      <section className="bg-neutral-800 lg:h-screen md:h-auto h-auto grid lg:grid-cols-12 grid-cols-1">
        <div className="lg:col-span-8 col-span-1 border flex flex-col justify-between">
          <div className='h-full flex justify-center items-center p-20'>
            <img src={fmUILogo} alt="fmUILogo" className='w-[25rem] h-auto md:w-[30rem] lg:w-[50rem]' />
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
          <div className='space-y-7 p-12'>
            <img src={fmUILogo0103} alt="fmUILogo" />
            <p className="leading-relaxed text-sm text-neutral-300">
              fmUI is an extensive collection of free Tailwind CSS components and templates created specifically for your forthcoming project. With a diverse set of components and sample pages, you are able to develop websites, web apps, and much more. Explore our selection to improve your development process with simplicity and flexibility.
            </p>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 border flex-grow'>
            <div className='flex justify-center items-center border lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo0103} alt="fmUILogo" className='flex-shrink-0' />
            </div>
            <div className='flex justify-center items-center border lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo02} alt="fmUILogo" className='flex-shrink-0' />
            </div>
            <div className='flex justify-center items-center border lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo0103} alt="fmUILogo" className='flex-shrink-0' />
            </div>
            <div className='flex justify-center items-center border lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo04} alt="fmUILogo" className='flex-shrink-0' />
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
