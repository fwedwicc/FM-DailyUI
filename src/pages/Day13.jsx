import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day13 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLenisScroll();
  useScrollToTop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
          <div className='flex justify-between items-center lg:hidden p-4'>
            {/* Button for left bar */}
            <button
              className="lg:hidden py-2 size-9 flex justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
            {/* Button for Right bar */}
            <button
              className="lg:hidden py-2 size-9 flex justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
            />
          </div>
          {/* Left Container */}
          <aside
            className={`fixed overflow-auto p-3 h-full bg-[#202020] w-96 space-y-2 transition-transform lg:pt-3 pt-16 transform z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:translate-x-0`}
          >
            {/* Avatar, name, and username */}
            <div className='flex gap-4 p-4'>
              <img
                className="size-12 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                src="https://avatars.githubusercontent.com/u/84505567?v=4"
                alt="Bot Avatar"
              />
              <div>
                <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                  Frederick Moreno
                </h1>
                <p className="leading-relaxed text-neutral-300 text-xs">
                  @fwedwicc
                </p>
              </div>
            </div>
            {/* Search and other buttons */}
            <div className='space-y-2'>
              {/* Title and other buttons */}
              <div className='flex justify-between items-center'>
                <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                  Messages
                </h1>
                <div className='flex gap-1.5'>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Search bar */}
              <div className='flex items-center gap-4 lg:max-w-md w-full'>
                <div className='w-full relative'>
                  <input
                    id="search"
                    type='text'
                    placeholder='Search people or message'
                    className={`w-full rounded-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
                    required={false}
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-grow h-full border text-wrap lg:pl-96">
            <p className='text-neutral-300'>Middle Contentssssssssssssssssssssssssss</p>
          </div>
          {/* Right bar */}
          <div className="lg:block hidden h-full border text-wrap p-6 w-full max-w-96">
            <p className='text-neutral-300'>Right Content</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day13
