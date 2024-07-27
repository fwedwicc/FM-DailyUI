import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { mj01 } from '../assets/day09'
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
        "icon": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      },
      {
        "label": "History",
        "icon": "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      },
      {
        "label": "Podcasts",
        "icon": "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      }
    ],
    thirdLinks: [
      {
        "label": "Rock",
        "color": "orange"
      },
      {
        "label": "Pop",
        "color": "green"
      },
    ]
  };

  const soundIcons = [
    'm11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z',
    'm11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z',
    'm11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z',
    'm11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z',
  ]

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
            </svg>
          </button>
          <img
            className="size-10 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/84505567?v=4"
            alt="Bot Avatar"
          />
        </div>
      </div>
    )
  }

  const MusicPlayer = ({ styles }) => {
    return (
      <div className={`${styles} w-full`}>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-4'>
            <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>
            <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>
            <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>
          </div>
          <div className="w-full max-w-xl bg-neutral-700 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
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
          className={`fixed overflow-auto h-screen bg-[#202020] w-64 space-y-4 transition-transform lg:pt-0 pt-11 transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >
          <a className="inline-block pl-8 pt-12" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <div className='space-y-5 p-3'>
            {/* First Links */}
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
            {/* Second Links */}
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
            {/* Third Links */}
            <ul className='space-y-1.5'>
              <li className='text-neutral-500 text-xs uppercase mb-2'>Your playlist</li>
              {navLink.thirdLinks.map((link, index) => (
                <li
                  className={'text-neutral-200 hover:bg-neutral-700/50 inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer'}
                  key={index}
                >
                  <span className={`flex w-3 h-3 ms-2 bg-${link.color}-500 rounded-full`}></span>
                  <a href="#">{link.label}</a>
                </li>
              ))}
              <li className='pt-2'>
                <a href="#" className='flex items-center justify-center gap-1 text-green-500 text-sm font-medium'>
                  Create new playlist
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 ml-0 lg:ml-64 lg:p-4 p-6 lg:pl-0 lg:bg-[#202020] bg-neutral-800">
          <div className='bg-neutral-800 lg:rounded-xl rounded-none lg:p-6 p-0'>
            {/* Sidebar Toggle Button for Medium Screens */}
            <button
              className="lg:hidden py-2 size-9 flex fixed justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
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
            <div className='flex justify-end'>
              {/* Profile widget for small screen*/}
              <ProfileWidget styles={'lg:hidden flex'} />
            </div>
            {/* Main Content */}
            <div className='lg:mt-0 mt-5 space-y-8'>
              {/* Header */}
              <div className='flex justify-between items-center'>
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
              {/* Main */}
              <div className='bg-neutral-600'>
              </div>
            </div>
          </div>
        </main>
        {/* Sound Buttons Footer */}
        <footer className='bg-neutral-900 lg:pr-7 p-3 w-full bottom-0 fixed lg:z-50 z-40 lg:space-y-0 space-y-3'>
          <div className='flex justify-between items-center'>
            {/* Left Side */}
            <div className='flex items-center lg:gap-5 gap-3 w-full'>
              <div className='lg:w-16 w-12 h-auto'>
                <img src={mj01} alt="MJ Album" className='object-cover rounded-md w-full h-full' />
              </div>
              <div>
                <h1 className="font-medium text-neutral-200 text-md md:text-lg">
                  Billie Jean
                </h1>
                <p className="leading-relaxed text-neutral-400 text-sm">
                  Michael Jackson
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500 ms-3 cursor-pointer">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            {/* Center */}
            <MusicPlayer styles='lg:block hidden' />
            {/* Right Side */}
            <div className='flex items-center justify-end lg:gap-2 gap-1 w-full'>
              {soundIcons.map((icon, index) => (
                <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </button>
              ))}
              <div className="w-full lg:max-w-[7rem] max-w-[4rem] bg-neutral-700 rounded-full h-1">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Center in small screens */}
          <MusicPlayer styles='block lg:hidden' />
        </footer>
      </section>
    </motion.div >
  );
};

export default Day09;
