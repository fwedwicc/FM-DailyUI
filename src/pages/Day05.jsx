import React from 'react'
import { fmUILogo, fmUILogo0103, fmUILogo02, fmUILogo04 } from '../assets/day05'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day05 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 lg:h-screen md:h-auto h-auto grid lg:grid-cols-12 grid-cols-1">
        <div className="lg:col-span-8 col-span-1 flex flex-col justify-between">
          <div className='h-full flex justify-center items-center p-20'>
            <img src={fmUILogo} alt="fmUILogo" className='w-[25rem] h-auto md:w-[30rem] lg:w-[50rem]' />
          </div>
          <div className='h-20 flex'>
            <div className='rounded-md bg-neutral-200 w-full flex items-center justify-center'>
              <h3 className='font-bold text-neutral-800'>#e5e5e5</h3>
            </div>
            <div className='rounded-md bg-neutral-800 border-y border-neutral-700/50 w-full flex items-center justify-center'>
              <h3 className='font-bold text-neutral-200'>#262626</h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1 border-l border-neutral-700/50 flex flex-col justify-between flex-grow">
          <div className='space-y-7 p-12'>
            <img src={fmUILogo0103} alt="fmUILogo" className='w-16 h-auto' />
            <p className="leading-relaxed text-sm text-neutral-300">
              fmUI is an extensive collection of free Tailwind CSS components and templates created specifically for your forthcoming project. With a diverse set of components and sample pages, you are able to develop websites, web apps, and much more. Explore our selection to improve your development process with simplicity and flexibility.
            </p>
            <div className="leading-relaxed text-neutral-200 font-bold flex items-center gap-4 justify-center">
              <span>f</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>m</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>UI</span>
            </div>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 flex-grow'>
            <div className='flex justify-center items-center bg-neutral-900 rounded-md lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo0103} alt="fmUILogo" className='flex-shrink-0 h-auto w-[4rem]' />
            </div>
            <div className='flex justify-center items-center border-t border-neutral-700/50 rounded-md lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo02} alt="fmUILogo" className='flex-shrink-0 h-auto w-[4rem]' />
            </div>
            <div className='flex justify-center items-center border-b border-neutral-700/50 rounded-md lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo0103} alt="fmUILogo" className='flex-shrink-0 h-auto w-[4rem]' />
            </div>
            <div className='flex justify-center items-center bg-neutral-200 rounded-md lg:p-4 md:p-16 p-20'>
              <img src={fmUILogo04} alt="fmUILogo" className='flex-shrink-0 h-auto w-[4rem]' />
            </div>
          </div>
          <div className='h-auto flex justify-center items-center py-[2rem]'>
            <h3 className='text-neutral-300 text-sm'>Founded by
              <a href='https://github.com/fwedwicc' target='_blank' className='text-green-500 font-semibold'> Frederick Moreno</a>
            </h3>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day05
