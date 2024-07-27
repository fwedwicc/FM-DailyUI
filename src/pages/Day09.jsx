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

  const navLink = {
    firstLinks: [
      {
        "label": "Feed",
        "icon": "M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      {
        "label": "Playlists",
        "icon": "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      },
      {
        "label": "Stats",
        "icon": "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      }
    ],
    secondLinks: [
      {
        "label": "Favorites",
        "icon": "M4 6.25A2.25 2.25 0 016.25 4h11.5A2.25 2.25 0 0120 6.25v11.5A2.25 2.25 0 0117.75 20H6.25A2.25 2.25 0 014 17.75V6.25zM9 7.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 11h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 14.75h3a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"
      },
      {
        "label": "Listen later",
        "icon": "M4 6.25A2.25 2.25 0 016.25 4h11.5A2.25 2.25 0 0120 6.25v11.5A2.25 2.25 0 0117.75 20H6.25A2.25 2.25 0 014 17.75V6.25zM9 7.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 11h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 14.75h3a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"
      },
      {
        "label": "History",
        "icon": "M4 6.25A2.25 2.25 0 016.25 4h11.5A2.25 2.25 0 0120 6.25v11.5A2.25 2.25 0 0117.75 20H6.25A2.25 2.25 0 014 17.75V6.25zM9 7.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 11h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 14.75h3a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"
      },
      {
        "label": "Podcasts",
        "icon": "M4 6.25A2.25 2.25 0 016.25 4h11.5A2.25 2.25 0 0120 6.25v11.5A2.25 2.25 0 0117.75 20H6.25A2.25 2.25 0 014 17.75V6.25zM9 7.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 11h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zM9 14.75h3a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"
      }
    ],
    thirdLinks: [
      {
        "label": "Profile",
        "icon": "M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm0 1.5c-2.07 0-6.75 1.054-6.75 3.125V19.5h13.5v-.625c0-2.071-4.68-3.125-6.75-3.125z"
      }
    ]
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
          className={`fixed h-screen bg-[#202020] w-64 space-y-4 transition-transform lg:pt-0 pt-11 transform z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >
          <a className="inline-block pl-8 pt-12" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <div className='space-y-8 p-3'>
            <ul className='space-y-1.5'>
              {navLink.firstLinks.map((link, index) => (
                <li
                  className={`${index == 0 ? 'text-green-500 font-bold bg-green-500/10' : 'text-neutral-200 hover:bg-neutral-700/50'} inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer`}
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
            <ul className='space-y-1.5'>
              <li className='text-neutral-500 text-xs uppercase mb-2'>Your music</li>
              {navLink.secondLinks.map((link, index) => (
                <li
                  className={'text-neutral-200 hover:bg-neutral-700/50 inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer'}
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main className="flex-1 ml-0 lg:ml-64 lg:p-4 p-6 lg:pl-0 lg:bg-[#202020] bg-neutral-800">
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
