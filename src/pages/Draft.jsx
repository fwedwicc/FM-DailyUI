import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'
import { Button, InputField } from '../components'
import { fmUILogo } from '../assets'


const Draft = () => {
  useLenisScroll()
  useScrollToTop()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        <div className='lg:min-h-screen flex flex-col justify-between p-8 md:gap-20 gap-8'>
          {/* Logo */}
          <div className='border'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
          </div>

          <div className='border flex flex-col items-center lg:gap-16 md:gap-12 gap-8'>
            {/*  */}
            <div className='border w-full max-w-4xl space-y-4'>
              {/* Search Bar */}
              <div className='flex border border-neutral-700 bg-neutral-950/40 rounded-[0.8rem] p-3 w-full'>
                <InputField
                  styles={'me-3'}
                  id="job"
                  type="text"
                  placeholder="Job title or keyword"
                  required={false}
                />
                <Button
                  styles={'me-3 flex items-center px-2 text-neutral-200 bg-neutral-700/30 hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                    <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                  </svg>
                </Button>
                <Button
                  styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                  label={'Search'}
                />
              </div>
              {/*  */}
              <div className='border flex gap-3.5'>
                {['asdfasdf', 'asdfasdf', 'asdfasdf', 'asdfasdf', 'asdfasdf'].map((item, index) => (
                  <div className='inline-flex items-center gap-2 rounded-lg text-neutral-400 bg-neutral-700/20 hover:bg-neutral-700/40 border border-neutral-700 px-3 py-1.5 cursor-pointer transition duration-300 ease-in-out' key={index}>
                    {item}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className='border flex gap-4'>
              {[
                { icon: 'M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z', label: "Smart TV" },
                { icon: ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], label: "Smart TV" },
                { icon: ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], label: "Smart TV" },
                { icon: ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], label: "Smart TV" },
              ].map((item, index) => (
                <div className='border p-3 rounded-lg flex flex-col items-center hover:bg-neutral-700/30 justify-center gap-2 cursor-pointer transition duration-300 ease-in-out' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='text-neutral-300 size-6'>
                    {Array.isArray(item.icon) ? (
                      item.icon.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)
                    ) : (
                      <path fillRule="evenodd" clipRule="evenodd" d={item.icon} />
                    )}
                  </svg>
                  <p className="mt-1 leading-relaxed text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-4 border'>
            {/* Netflix Container */}
            <div className='border h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            {/* Spotify Container */}
            <div className='border h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            {/* Continue Watching Container */}
            <div className='border col-span-2 h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            {/* Time, Date and Weather Container */}
            <div className='border h-64'>
              <p className="leading-relaxed text-neutral-200">
                Lorem ipsum dolor sit
              </p>
              <p className="leading-none text-neutral-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>


        </div>
      </main>
    </motion.div>
  )
}

export default Draft
