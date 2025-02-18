import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'
import { logoIpsum, barCode } from '../assets/day24'

const Day24 = () => {
  useLenisScroll()
  useScrollToTop()

  const PhoneMockup = ({ children }) => {
    return (
      <>
        {/* Phone Mockup */}
        <div className='relative border-[0.5rem] h-[43.5rem] w-[22.5rem] rounded-[2rem] ring-2 ring-neutral-400 bg-neutral-700/40 border-neutral-900'>
          {/* Sound Buttons */}
          <div className='absolute top-20 -left-3 flex flex-col gap-3'>
            {[0, 1, 2].map((index) => (
              <div
                className={`rounded-full w-2 bg-neutral-900 border-neutral-400 border-l-2 ${index === 0 ? 'h-7' : 'h-10'}`} key={index}>
              </div>
            ))}
          </div>
          {/* Power Button */}
          <div className='absolute top-[9.2rem] border-neutral-400 border-r-2 -right-3 rounded-full h-16 w-2 bg-neutral-900'></div>
          {/* Camera */}
          <div className='absolute rounded-full h-[1.3rem] w-20 top-3 left-1/2 transform -translate-x-1/2 bg-neutral-900'></div>
          {/* Phone Header */}
          <div className={`absolute w-full flex justify-between items-center pt-2.5 px-3.5 text-white`}>
            <p className="leading-relaxed text-xs font-semibold">
              4:17
            </p>
            <div className='flex items-center gap-1.5'>
              {[
                'M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z',
                'M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z',
                'M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z'
              ].map((icon, index) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${index === 2 ? 'size-4' : 'size-3'}`} key={index}>
                  <path d={icon} />
                </svg>
              ))}
            </div>
          </div>
          {children}
          {/* Phone Navigation */}
          <div className='absolute rounded-full h-1.5 w-24 bottom-2 left-1/2 transform -translate-x-1/2 bg-neutral-600'></div>
        </div>
      </>
    )
  }

  const AppNav = ({ active }) => {
    return (
      <div className='absolute flex items-center justify-evenly w-full bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-[1.6rem] rounded-b-[1.6rem] pb-6 p-2.5 gap-1 bg-neutral-800/70 backdrop-blur-md'>
        {[
          { icon: ['M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z', 'm12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z'] },
          { icon: ['M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z', 'M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z'] },
          { icon: 'M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' },
          { icon: 'M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z' },
        ].map((item, index) => (
          <button className={`p-2 flex justify-center items-center rounded-full gap-2 hover:bg-neutral-600/20 transition duration-300 ease-in-out ${active === 'Home' && index === 0 ? 'text-green-500 bg-neutral-600/20 px-3' : 'text-neutral-400'}`} key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 size-5">
              {Array.isArray(item.icon) ? (
                item.icon.map((d, i) => <path key={i} d={d} />)
              ) : (
                <path d={item.icon} />
              )}
            </svg>
            {index === 0 && active === 'Home' && <span className='text-sm'>{active}</span>}
          </button>
        ))}
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
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 py-8">
        <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-12 lg:gap-20'>
          {/* First Mockup */}
          <PhoneMockup>
            <div className='relative h-full px-3.5 pt-12 overflow-hidden border'>
              {/* Header */}
              <div className='flex justify-between items-center border'>
                <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </button>
                {/*  */}
                <div className='flex flex-col items-center border'>
                  <p className="block text-neutral-300 font-medium text-xs">Thursday, 19 Feb 25</p>
                  <div className='flex items-center gap-1 text-neutral-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                    <p className="block text-xs">Philippines, Manila</p>
                  </div>
                </div>
                <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </button>
              </div>
              {/* Content */}
              <section className='mt-4 border space-y-3'>
                {/* Greetings */}
                <div>
                  <h1 className='text-neutral-300 text-2xl leading-none'>Discover a new place.</h1>
                  <p className="text-neutral-400 text-xs">Explore, Journey, Discover, and Adventure.</p>
                </div>
                {/* Options */}
                <div className='border border-neutral-600/70 p-1.5 inline-flex gap-1.5 rounded-xl'>
                  {['One-way', 'Rouned trip', 'Multi-way'].map((item, index) => (
                    <span className={`text-xs rounded-md text-neutral-300 ${index === 0 ? 'bg-neutral-200 text-neutral-800' : 'bg-neutral-700/70'} px-2.5 py-1.5 cursor-pointer`} key={index}>{item}</span>
                  ))}
                </div>
                {/* Container */}
                <div className='border rounded-2xl bg-neutral-700/40 p-3.5 grid grid-cols-2 gap-3'>
                  <div className='relative col-span-full flex flex-col gap-3'>
                    {/* From */}
                    <div className='relative p-2 border border-neutral-600/70 rounded-md space-y-1'>
                      <p className="-top-1.5 left-3 absolute px-1.5 text-neutral-300/80 text-xs leading-none bg-neutral-700 rounded-full">From</p>
                      <div className='flex items-center gap-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor" className='text-neutral-300'>
                          <path d="M120-120v-80h720v80H120Zm70-200L40-570l96-26 112 94 140-37-207-276 116-31 299 251 170-46q32-9 60.5 7.5T864-585q9 32-7.5 60.5T808-487L190-320Z" />
                        </svg>
                        <div className='flex flex-col'>
                          <p className="text-neutral-200 text-md leading-none">Manila, Philippines <span className='text-neutral-300/80 text-sm'>MNL</span></p>
                          <p className="text-neutral-300/80 text-xs leading-none">Philippine Airlines </p>
                        </div>
                      </div>
                    </div>
                    {/* To */}
                    <div className='relative p-2 border border-neutral-600/70 rounded-md space-y-1'>
                      <p className="-top-1.5 left-3 absolute px-1.5 text-neutral-300/80 text-xs leading-none bg-neutral-700 rounded-full">To</p>
                      <div className='flex items-center gap-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor" className='text-neutral-300'>
                          <path d="M120-120v-80h720v80H120Zm622-202L120-499v-291l96 27 48 139 138 39-35-343 115 34 128 369 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z" />
                        </svg>
                        <div className='flex flex-col'>
                          <p className="text-neutral-200 text-md leading-none">San Francisco <span className='text-neutral-300/80 text-sm'>SFO</span></p>
                          <p className="text-neutral-300/80 text-xs leading-none">San Francisco National Airport</p>
                        </div>
                      </div>
                    </div>
                    <span className='absolute transform right-5 -translate-y-1/2 top-1/2 flex items-center justify-center size-9 rounded-full border border-neutral-600 bg-neutral-700'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-500 size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                      </svg>
                    </span>
                  </div>
                  {/* Departure */}
                  <div className='relative p-2 border border-neutral-600/70 rounded-md space-y-1'>
                    <p className="-top-1.5 left-3 absolute px-1.5 text-neutral-300/80 text-xs leading-none bg-neutral-700 rounded-full">Departure</p>
                    <div className='flex items-center gap-1.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-300">
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                      </svg>
                      <p className="text-neutral-200 text-sm leading-none">19 Feb 2025</p>
                    </div>
                  </div>
                  {/* Return */}
                  <div className='relative p-2 border border-neutral-600/70 rounded-md space-y-1'>
                    <p className="-top-1.5 left-3 absolute px-1.5 text-neutral-300/80 text-xs leading-none bg-neutral-700 rounded-full">Return</p>
                    <div className='flex items-center gap-1.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-300">
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                      </svg>
                      <p className="text-neutral-200 text-sm leading-none">23 Feb 2025</p>
                    </div>
                  </div>
                  {/* Traveller */}
                  <div className='relative p-2 border border-neutral-600/70 rounded-md space-y-1'>
                    <p className="-top-1.5 left-3 absolute px-1.5 text-neutral-300/80 text-xs leading-none bg-neutral-700 rounded-full">Traveller</p>
                    <p className="text-neutral-200 text-sm leading-none">2 Adults</p>
                  </div>
                  {/* Class */}
                  <div className='relative p-2 border border-neutral-600/70 rounded-md space-y-1'>
                    <p className="-top-1.5 left-3 absolute px-1.5 text-neutral-300/80 text-xs leading-none bg-neutral-700 rounded-full">Class</p>
                    <p className="text-neutral-200 text-sm leading-none">Regular</p>
                  </div>
                  {/* Search Button */}
                  <button className='col-span-full mt-1.5 text-neutral-800 text-xs bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60 inline-block shrink-0 px-4 py-1.5 transition duration-300 ease-in-out border font-semibold rounded-md focus:outline-none focus:ring-2 active:scale-95'>
                    Search
                  </button>
                </div>
                {/* Today's Flight */}
                <p className="text-neutral-300 text-sm leading-none">Today's Flight</p>
                {/*  */}
                <div className=''>
                  <div className='flex justify-between items-center'>
                    <p className="text-neutral-400 text-xs">From</p>
                    <p className="text-neutral-400 text-xs">To</p>
                  </div>
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-green-500 text-3xl'>MNL</h1>
                    <div className='relative w-full'>
                      <div className='w-full border border-neutral-600 border-dashed'></div>
                      <div className='absolute transform -translate-y-1/2 top-1/2 flex justify-between items-center w-full'>
                        <span className='bg-neutral-500 rounded-full size-1.5'></span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor" className='text-green-500 rotate-[90deg]'>
                          <path d="M280-80v-100l120-84v-144L80-280v-120l320-224v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120L560-408v144l120 84v100l-200-60-200 60Z" />
                        </svg>
                        <span className='bg-neutral-500 rounded-full size-1.5'></span>
                      </div>
                    </div>
                    <h1 className='text-green-500 text-3xl'>LAX</h1>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className="text-neutral-300 text-sm">Manila</p>
                    <p className="text-neutral-300 text-sm">Los Angeles</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className="text-neutral-400 text-xs">00:45</p>
                    <p className="text-neutral-300 text-xs">21h 45min</p>
                    <p className="text-neutral-400 text-xs">23:30</p>
                  </div>
                </div>
              </section>
              {/* Bottom Navigation */}
              <AppNav active={'Home'} />
            </div>
          </PhoneMockup>
          {/* Second Mockup */}
          <PhoneMockup>
            <div className='relative h-full px-3.5 pt-12 overflow-hidden border'>
              {/* Header */}
              <div className='flex justify-between items-center border'>
                <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <p className="text-neutral-300 text-sm">
                  Boarding Pass
                </p>
                <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                </button>
              </div>
              {/* Content */}
              <section className='mt-4 border'>
                {/* Ticket Container */}
                <div className='p-3 rounded-2xl border bg-neutral-700/40'>
                  {/* Header */}
                  <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center justify-center size-8 border bg-neutral-800 rounded-lg'>
                        <img src={logoIpsum} alt="LogoIpsum" className='w-4 h-auto' />
                      </div>
                      <div>
                        <p className="block text-neutral-300 font-medium text-sm">Philippine Airlines</p>
                        <p className="block text-neutral-400 text-xs">PH 788</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 text-xs">
                      2 seats
                    </p>
                  </div>
                  {/* Ticket Informations */}
                  <div className='grid grid-cols-2 gap-3 mt-4'>
                    {[
                      { label: 'Passenger', value: 'Frederick M.' },
                      { label: 'Seat Number', value: 'A3' },
                      { label: 'Terminal', value: '5' },
                      { label: 'Class', value: 'Regular' },
                      { label: 'Departure', value: '19 Feb 2025' },
                      { label: 'Passport ID', value: '5791987810' },
                    ].map((item, index) => (
                      <div className='' key={index}>
                        <p className="text-neutral-400 text-xs">{item.label}</p>
                        <p className="text-neutral-300 text-md">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  {/* Additional Informations */}
                  <div className='border-t border-neutral-600/70 mt-4 pt-4'>
                    <div className='flex justify-between items-center'>
                      <p className="text-neutral-400 text-xs">From</p>
                      <p className="text-neutral-400 text-xs">To</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                      <h1 className='text-green-500 text-3xl'>MNL</h1>
                      <div className='relative w-full'>
                        <div className='w-full border border-neutral-600 border-dashed'></div>
                        <div className='absolute transform -translate-y-1/2 top-1/2 flex justify-between items-center w-full'>
                          <span className='bg-neutral-500 rounded-full size-1.5'></span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor" className='text-green-500 rotate-[90deg]'>
                            <path d="M280-80v-100l120-84v-144L80-280v-120l320-224v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120L560-408v144l120 84v100l-200-60-200 60Z" />
                          </svg>
                          <span className='bg-neutral-500 rounded-full size-1.5'></span>
                        </div>
                      </div>
                      <h1 className='text-green-500 text-3xl'>SFO</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className="text-neutral-300 text-sm">Manila</p>
                      <p className="text-neutral-300 text-sm">San Francisco</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className="text-neutral-400 text-xs">23:30</p>
                      <p className="text-neutral-300 text-xs">13h 30min</p>
                      <p className="text-neutral-400 text-xs">13:00</p>
                    </div>
                  </div>
                  {/* Ticket Divider */}
                  <div className='relative flex justify-between items-center mt-4 mb-2 -mx-[29px]'>
                    <span className='shrink-0 bg-[#313131] rounded-full size-8'></span>
                    <div className='w-full border border-neutral-600 border-dashed'></div>
                    <span className='shrink-0 bg-[#313131] rounded-full size-8'></span>
                  </div>
                  {/* Bar Code */}
                  <div className='border space-y-3'>
                    <p className="text-neutral-400 text-xs text-center">Show the bar code at <br />the boarding gate</p>
                    <div className='relative w-full h-20'>
                      <img src={barCode} alt="Sample Bar Code" className='absolute object-cover w-[90rem] h-full' />
                    </div>
                  </div>
                </div>
                {/* Footer/Actions */}
                <div className='mt-2 flex justify-center gap-4 items-center'>
                  <a href="" className='flex items-center gap-1 text-xs text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download E-Ticket
                  </a>
                  <a href="" className='flex items-center gap-1 text-xs text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                    Share
                  </a>
                </div>
              </section>
            </div>
          </PhoneMockup>
        </div>
      </section>
    </motion.div>
  )
}

export default Day24
