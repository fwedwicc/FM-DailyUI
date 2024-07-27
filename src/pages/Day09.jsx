import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'

const Day09 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLenisScroll();
  useScrollToTop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const ProfileWidget = ({ styles }) => {
    return (
      <div className={`${styles} items-center gap-8`}>
        <a href='#' className='font-medium text-green-400 text-sm px-2.5 py-1 border border-green-700 bg-green-900/40 rounded-md inline-flex items-center gap-1'>
          My account
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ms-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
        <div className='gap-4 flex items-center'>
          <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg></button>
          <img
            className="size-10 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/84505567?v=4"
            alt="Bot Avatar"
          />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 flex">
        {/* Sidebar */}
        <aside
          className={`fixed h-screen bg-[#202020] w-64 transition-transform transform z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >

        </aside>
        <main className="flex-1 ml-0 lg:ml-64 p-4 lg:bg-[#202020] bg-neutral-800">
          <div className='bg-neutral-800 lg:rounded-md rounded-none lg:p-6 p-0'>
            {/* Sidebar Toggle Button for Medium Screens */}
            <div className='flex justify-between'>
              <button
                className="lg:hidden py-2 size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
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
              {/* Profile widget for small screen*/}
              <ProfileWidget styles={'lg:hidden flex'} />
            </div>
            {/* Main Content */}
            <div className='flex justify-between items-center lg:mt-0 mt-5'>
              {/* Search bar */}
              <div className='w-full lg:max-w-md max-w-xs relative'>
                <input
                  id="search"
                  type='text'
                  placeholder='Search by artists, songs, or albums'
                  className={`w-full rounded-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
                  required='false'
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
              {/* Profile widget for large screen*/}
              <ProfileWidget styles={'hidden lg:flex'} />
            </div>
          </div>
        </main>
      </section>
    </motion.div >
  );
};

export default Day09;
