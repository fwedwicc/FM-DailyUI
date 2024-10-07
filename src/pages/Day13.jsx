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

  const ContactBox = () => {
    return (
      <div className='border flex items-center gap-3 py-1 px-1.5 rounded-md'>
        <img
          className="w-10 h-10 border-2 ring-2 ring-neutral-500 border-neutral-700 rounded-full cursor-pointer"
          src="https://avatars.githubusercontent.com/u/84505567?v=4"
          alt="Bot Avatar"
        />
        <div className='flex-grow w-full max-w-[85%]'>
          <div className='flex items-center justify-between'>
            <h1 className="text-neutral-200 text-sm md:text-base">
              Joanah Marie Aldave
            </h1>
            <p className='leading-relaxed text-blue-400 text-xs'>
              19:04
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <p className="leading-relaxed text-neutral-400 text-sm truncate max-w-[85%]">
              This is a sample messagesssssssssssssssssssssssssssssssss
            </p>
            <span className='text-white text-[11px] bg-red-500 rounded-full px-1.5 p-1 leading-none'>
              3
            </span>
          </div>
        </div>
      </div>
    )
  }

  const LianMessage = () => {
    return (
      <div className='flex justify-start items-start w-full'>
        <div className='flex items-end gap-3'>
          <img
            className="size-9 border border-neutral-700 rounded-full"
            src="https://avatars.githubusercontent.com/u/84505567?v=4"
            alt="Bot Avatar"
          />
          <div>
            <div className='space-y-2'>
              {[
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, praesentium doloribus. Consectetur eveniet quaerat dicta quia perspiciatis velit dignissimos ullam tenetur.",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, praesentium doloribus."
              ].map((message, index) => (
                <div className={`relative rounded-r-2xl rounded-tl-2xl ${index === 1 ? 'rounded-tl-md' : ''} rounded-bl-md border px-3 py-2 w-full max-w-lg`} key={index}>
                  <p className='text-neutral-300'>{message}</p>
                  {index === 1 ? (
                    <div className='absolute -bottom-3 right-3 border rounded-full px-2 z-30 bg-neutral-700'>
                      reacts
                    </div>
                  ) : ('')}
                </div>
              ))}
            </div>
            <span className='leading-relaxed text-neutral-400 text-xs'>Lian T. • 12:04</span>
          </div>
        </div>
      </div>
    )
  }

  const FredMessage = () => {
    return (
      <div>
        <p>Hellossssss</p>
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
      <section className="bg-[#202020]">
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
                <p className="leading-relaxed text-neutral-300 text-sm">
                  @fwedwicc
                </p>
                <a href='' className='font-medium text-green-500 text-xs px-2 py-1 border border-green-700 bg-green-900/40 rounded-md inline-flex items-center gap-1 mt-1'>
                  Basic Plan
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2.5">
                    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                  </svg>
                </a>
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
            {/* Pinned Contact Boxes */}
            <div className='space-y-1'>
              <p className='text-neutral-400 text-xs'>Pinned</p>
              <ContactBox />
            </div>
            {/* All Contact Boxes */}
            <div className='space-y-1'>
              <p className='text-neutral-400 text-xs'>All messages</p>
              <ContactBox />
              <ContactBox />
              <ContactBox />
              <ContactBox />
            </div>
          </aside>
          <div className="flex-grow h-full text-wrap lg:pl-[24.6rem] p-3">
            <div className='relative h-full bg-neutral-800 rounded-t-2xl rounded-b-[1.7rem]'>
              {/* Top Container */}
              <div className='flex justify-between items-center absolute top-0 border rounded-t-2xl w-full p-4 z-20'>
                <div className='flex items-center gap-5'>
                  <img
                    className="size-10 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                    src="https://avatars.githubusercontent.com/u/84505567?v=4"
                    alt="Bot Avatar"
                  />
                  <div>
                    <h1 className="leading-none font-normal text-neutral-200 text-md md:text-xl">
                      Tech-Commr
                    </h1>
                    <span className="flex items-center gap-3 leading-none text-neutral-300 text-sm">
                      3 members
                      <span>
                        <span className='inline-flex size-2 rounded-full bg-green-500 me-2'></span>
                        1 online
                      </span>
                    </span>
                  </div>
                </div>
                <div className='flex gap-1.5'>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Chat Contents */}
              <div className='py-24 h-full overflow-auto z-30 flex flex-col justify-end items-end px-6'>
                <LianMessage />
                <FredMessage />
              </div>
              {/* Bottom Container */}
              <div className='absolute bottom-0 border w-full p-3 z-20'>
                <div className='w-full relative'>
                  <input
                    id="search"
                    type='text'
                    placeholder='Type a message'
                    className={`z-20 w-full rounded-full bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 ps-10 pe-36 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
                    required={false}
                  />
                  {/* Left Button */}
                  <button className='absolute inset-y-0 start-0 ps-3 flex items-center text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </button>
                  {/* Right button groups */}
                  <div className="absolute inset-y-0 end-0 flex items-center gap-3 pe-3">
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </button>
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                      </svg>
                    </button>
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </button>
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right bar */}
          <div className="lg:block hidden h-full border text-wrap p-6 w-full md:min-w-80 lg:min-w-96 md:max-w-80 lg:max-w-96">
            <p className='text-neutral-300'>Right Content</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day13
