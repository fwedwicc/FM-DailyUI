import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day20 = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 py-8">
        <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-12 lg:gap-20'>
          {/* 1st */}
          <PhoneMockup>
            <div className='h-full pt-12 overflow-hidden'>
              <div className='h-full relative border'>
                {/* Map */}
                <div className='relative w-full h-72'>
                  <img src="" alt="" className='border h-full w-full object-cover rounded-t-3xl' />
                </div>
                {/* Drawer */}
                <div className='absolute bottom-0 border bg-neutral-800 w-full h-80 rounded-3xl'>
                  {/* Drawer indicator */}
                  <div className='absolute top-1.5 h-1.5 w-12 rounded-full border transform left-1/2 -translate-x-1/2'></div>
                  {/* Content */}
                  <div className='mt-5 px-2'>
                    <div className='border flex items-center justify-between px-2'>
                      <div className='flex items-center gap-2.5'>
                        <div className='flex flex-col items-center justify-center h-10 py-1'>
                          <div className='shrink-0 size-2 rounded-full bg-green-500'></div>
                          <div className='w-[2px] h-full bg-green-500'></div>
                          <div className='shrink-0 size-2 rounded-full bg-neutral-500'></div>
                        </div>
                        <div className='space-y-2'>
                          <p className='text-neutral-300 text-xs w-full max-w-xs truncate'>Bagong Silang, Caloocan City</p>
                          <p className='text-neutral-300 text-xs truncate'>Quezon City University</p>
                        </div>
                      </div>
                      <button className='size-8 flex justify-center items-center text-neutral-300 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-full focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>
                      </button>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                      <button className='flex justify-center items-center gap-1.5 text-neutral-300 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-md px-2 py-1 focus:ring-2 focus:ring-neutral-500 transition duration-300 ease-in-out text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        All modes selected
                      </button>
                      <button className='flex justify-center items-center gap-1.5 text-neutral-300 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-md px-2 py-1 focus:ring-2 focus:ring-neutral-500 transition duration-300 ease-in-out text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Leaving now
                      </button>
                    </div>
                    {/*  */}
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </PhoneMockup>
          {/* 2nd */}
          <PhoneMockup>
            <div className='h-full pt-12 overflow-hidden'>
              <div className='h-full relative border'>
                {/* Map */}
                <div className='relative w-full h-72'>
                  <img src="" alt="" className='border h-full w-full object-cover rounded-t-3xl' />
                </div>
                {/* Main Content */}
                <div className='absolute bottom-0 border bg-neutral-800 w-full h-80 rounded-3xl'>
                  <div className='absolute top-1.5 h-1.5 w-12 rounded-full border transform left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
            </div>
          </PhoneMockup>
        </div>
      </section>
    </motion.div>
  )
}

export default Day20
