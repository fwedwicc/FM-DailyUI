import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day14 = () => {
  useLenisScroll();
  useScrollToTop();

  const PhoneMockup = ({ children }) => {
    return (
      <>
        {/* Phone Mockup */}
        <div className='relative border-[0.5rem] h-[40rem] w-[21.5rem] rounded-[2rem] ring-2 ring-neutral-400 bg-neutral-700/40 border-neutral-900'>
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
        </div>
      </>
    );
  };

  const AppHeader = () => {
    return (
      <div className='flex justify-between items-center pl-2'>
        <img
          className="size-8 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
          src="https://avatars.githubusercontent.com/u/943537?v=4"
          alt="Bot Avatar"
        />
        <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </button>
      </div>
    )
  }

  const AppNav = ({ active }) => {
    return (
      <div className='absolute flex items-center justify-between w-full bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-[1.6rem] rounded-b-[1.6rem] p-1 gap-1 bg-neutral-700'>
        {[
          'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z',
          'M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z',
          ['M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z', 'M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z'],
          'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
        ].map((nav, index) => (
          <button
            className={`text-neutral-400 bg-neutral-600/50 flex flex-grow items-center justify-center py-3 rounded-sm hover:bg-neutral-800/10 transition duration-300 
            ${active === 'task' && index === 1 ? '!text-green-500 !bg-neutral-800/50' : ''} 
            ${active === 'timer' && index === 0 ? '!text-green-500 !bg-neutral-800/50' : ''} 
            ${index === 0 ? 'rounded-l-[1.6rem]' : index === 3 ? 'rounded-r-[1.6rem]' : ''}`}
            key={index}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              {Array.isArray(nav) ? (
                nav.map((d, i) => <path key={i} fillRule="evenodd" clipRule="evenodd" d={d} />)
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d={nav} />
              )}
            </svg>
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
          {/* Task Overview */}
          <PhoneMockup>
            <div className='relative h-full px-3.5 pt-12 overflow-hidden'>
              {/* Header */}
              <AppHeader />
              {/* Content */}
              <div className='pt-5 space-y-3'>
                <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                  Welcome back, Fred! 👋🏻
                </h1>
                <div className='bg-neutral-700 flex flex-col gap-4 rounded-xl p-3.5'>
                  <p className="text-neutral-200 text-center text-sm">
                    Your today's focus time
                  </p>
                  <div className='flex justify-evenly items-center'>
                    {[
                      { time: "04", label: "Hour" },
                      { time: "19", label: "Minutes" },
                      { time: "47", label: "Seconds" }
                    ].map((block, index) => (
                      <>
                        <div className='flex flex-col gap-1 items-center justify-center' key={index}>
                          <span className='border border-neutral-600 bg-neutral-800/50 size-11 flex justify-center items-center rounded-xl font-semibold text-green-500'>
                            {block.time}
                          </span>
                          <span className='text-neutral-400 text-[0.6rem] uppercase'>{block.label}</span>
                        </div>
                        <span className={`text-neutral-300 mb-5 text-2xl ${index === 2 ? 'hidden' : ''}`}>:</span>
                      </>
                    ))}
                  </div>
                </div>
                <button className='flex justify-between items-center pl-4 p-2 w-full bg-green-500/20 hover:bg-green-500/30 transition duration-300 ease-in-out rounded-lg text-neutral-200 text-sm'>
                  What are you working on?
                  <span className='p-2 rounded-full text-white bg-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                <div className='flex justify-between items-center pt-1'>
                  <p className="leading-relaxed text-neutral-300 text-xs">
                    Today's task (2)
                  </p>
                  <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </button>
                </div>
                <div className='space-y-1'>
                  {[
                    { emoji: "💻", label: "Learn Programming" },
                    { emoji: "✍🏻", label: "Drawing Session" }
                  ].map((block, index) => (
                    <div className='flex items-center justify-between bg-neutral-700/30 hover:bg-neutral-700/50 p-2 w-full rounded-xl cursor-pointer transition duration-300 ease-in-out' key={index}>
                      <div className='flex gap-2.5'>
                        <div className='border border-neutral-600 bg-neutral-600/50 py-1 px-1.5 text-lg rounded-md'>
                          {block.emoji}
                        </div>
                        <div className='space-y-1'>
                          <p className="text-neutral-300 text-sm">
                            {block.label}
                          </p>
                          <div className='flex items-center gap-1 text-green-500'>
                            {["M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"].map((icon, index) => (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4" key={index}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <button className='size-8 flex justify-center items-center text-green-500 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-full focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className='flex justify-between items-center pt-1'>
                  <p className="leading-relaxed text-neutral-300 text-xs">
                    All task (6)
                  </p>
                  <button className='size-8 flex justify-center items-center text-neutral-200 hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Bottom Navigation */}
              <AppNav active={'task'} />
            </div>
          </PhoneMockup>
          {/* Timer Overview */}
          <PhoneMockup>
            <div className='h-full px-3.5 pt-12 overflow-hidden'>
              {/* Header */}
              <AppHeader />
              {/* Content */}
              <div className='pt-8 flex flex-col items-center justify-center space-y-10'>
                <div className='flex items-center justify-between bg-neutral-700 p-2 w-full max-w-[16rem] rounded-xl'>
                  <div className='flex gap-2.5'>
                    <div className='border border-neutral-600 bg-neutral-600/50 py-1 px-1.5 text-lg rounded-md'>
                      🎹
                    </div>
                    <div className='space-y-1'>
                      <p className="text-neutral-300 text-sm">
                        Piano Practice
                      </p>
                      <div className='flex items-center gap-1 text-green-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        {["M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"].map((icon, index) => (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4" key={index}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className='size-8 flex justify-center items-center text-neutral-300 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-full focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                    <svg className="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="relative size-56 border border-dashed border-neutral-500 rounded-full">
                  <svg className="-rotate-90 size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-neutral-700" strokeWidth="1" strokeLinecap="round"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500" strokeWidth="1.5" strokeDasharray="56.25 100" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="font-normal text-green-500 text-4xl">
                      14 : 07
                    </h1>
                    <p className="leading-relaxed text-neutral-300 text-sm">
                      1 of 4 sessions
                    </p>
                  </div>
                </div>
                <div className='w-full flex justify-evenly'>
                  {[
                    { label: "Reset", icon: 'M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z' },
                    { label: "Pause", icon: 'M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z' },
                    { label: "Stop", icon: 'M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z' }
                  ].map((button, index) => (
                    <div className='flex flex-col gap-1 items-center' key={index}>
                      <button className='p-3 rounded-full text-neutral-300 bg-neutral-600/30 hover:bg-neutral-600/60 transition duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path fillRule="evenodd" d={button.icon} clipRule="evenodd" />
                        </svg>
                      </button>
                      <p className="leading-relaxed text-neutral-300 text-xs">
                        {button.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom Navigation */}
              <AppNav active={'timer'} />
            </div>
          </PhoneMockup>
        </div>
      </section>
    </motion.div>
  )
}

export default Day14
