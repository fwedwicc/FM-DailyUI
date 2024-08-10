import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day012 = () => {
  useLenisScroll();
  useScrollToTop();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        {/* Navbar */}
        <nav className='relative flex items-center justify-between h-[15vh] lg:px-24 px-12'>
          <a className="inline-block" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          {/* Desktop Navigation */}
          <ul className='hidden md:flex text-neutral-300 gap-9'>
            <li><a href="#">Home</a></li>
            <li><a href="#" className='font-bold'>Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden flex items-center p-2 rounded-md focus:bg-neutral-700 hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6h15m-15 6h15m-15 6h15" />
            </svg>
          </button>
          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className='absolute top-full right-12 -mt-8 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
              <ul className='text-neutral-300 text-center'>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out rounded-t-lg'>Home</a></li>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>Shop</a></li>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>About</a></li>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>Contact</a></li>
              </ul>
              <div className='flex flex-col gap-3 p-4'>
                <div className='flex items-center justify-center gap-3'>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                  </button>
                  <img
                    className="size-7 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                    src="https://avatars.githubusercontent.com/u/84505567?v=4"
                    alt="Bot Avatar"
                  />
                </div>
                <Button
                  styles={'inline-flex justify-center items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                  label={'My Cart'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </Button>

              </div>
            </div>
          )}
          {/* Desktop Buttons */}
          <div className='hidden md:flex gap-6'>
            <div className='flex items-center gap-3'>
              <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>
              <Button
                styles={'inline-flex items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'My Cart'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </Button>
            </div>
            <img
              className="size-9 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
              src="https://avatars.githubusercontent.com/u/84505567?v=4"
              alt="Bot Avatar"
            />
          </div>
        </nav>
        <section className='lg:px-24 px-12'>
          {/* Breadcrumbs */}
          <nav>
            <ol className='flex items-center gap-2.5 text-neutral-400'>
              <li>
                <a href='#' className='text-sm'>
                  Woman Fashion
                </a>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              <li>
                <a href='#' className='text-sm'>
                  Jacket & Coats
                </a>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              <li>
                <a href='#' className='text-sm text-neutral-200'>
                  Nadetta Coat Beige
                </a>
              </li>
            </ol>
          </nav>
        </section>
      </main>
    </motion.div >
  )
}

export default Day012
