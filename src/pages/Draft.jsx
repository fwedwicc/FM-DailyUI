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
      {/* bg-neutral-800 */}
      <main className="relative">
        {/* <img src="https://placehold.co/50x50" alt="" className='z-10 absolute object-cover w-full h-full border border-red-500' />
        <div className='bg-red-500/50 absolute h-full w-full z-20 pointer-events-none'></div> */}
        <div className='lg:min-h-screen flex flex-col justify-between p-8 md:gap-20 gap-8'>
          {/* Logo */}
          <div className='border z-50'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
          </div>
          <div className='border flex flex-col items-center lg:gap-16 md:gap-12 gap-8 z-50'>
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
            <div className='border flex gap-4 z-50'>
              {[
                { icon: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z', label: "Smart TV" },
                { icon: ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], label: "Smart TV" },
                { icon: ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], label: "Smart TV" },
                { icon: ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], label: "Smart TV" },
              ].map((item, index) => (
                <div className='border p-3 rounded-lg flex flex-col items-center hover:bg-neutral-700/30 justify-center gap-2 cursor-pointer transition duration-300 ease-in-out' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='text-neutral-300 size-6'>
                    {Array.isArray(item.icon) ? (
                      item.icon.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    )}
                  </svg>

                  <p className="mt-1 leading-relaxed text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-4 border z-50'>
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
            <div className='relative border border-neutral-700/70 col-span-2 h-64 rounded-xl overflow-hidden'>
              <img src="https://placehold.co/30x30" alt="Sample Image" className='absolute object-cover z-10 w-full h-full pointer-events-none opacity-30' />
              <div className='absolute -left-10 -top-10 h-[140%] w-[65%] bg-neutral-900 z-20 blur-2xl rounded-r-[50rem]' />
              <div className='absolute z-50 py-4 px-6 space-y-3'>
                {/*  */}
                <div>
                  <h1 className="leading-none font-medium text-neutral-200 text-2xl md:text-4xl">
                    Game of Thrones
                  </h1>
                  <p className="leading-relaxed text-neutral-200">
                    2013 • 8 Seasons • 73 Episodes
                    <span className="ms-2 text-neutral-300 bg-neutral-800/70 rounded-md text-xs px-1.5 py-[4px] font-bold">
                      HD
                    </span>
                  </p>
                </div>
                {/*  */}
                <div className='space-y-2'>
                  <p className="leading-none text-neutral-400">
                    Season 1: Episode 1
                  </p>
                  <div className='w-[17rem] h-1 rounded-full bg-neutral-600 overflow-hidden'>
                    <div className='w-[60%] bg-red-500 h-1'></div>
                  </div>
                </div>
                {/*  */}
                <div className='flex flex-col items-start gap-2'>
                  {[
                    { icon: 'M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z', label: "Resume playing" },
                    { icon: 'M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z', label: "Play from beginning" },
                    { icon: 'M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z', label: "Remove from Continue Watching" },
                  ].map((item, index) => (
                    <button className='flex items-center gap-1.5 px-2 py-[2px] rounded-md text-neutral-200 bg-neutral-700/20' key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                      </svg>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Time, Date and Weather Container */}
            <div className='flex flex-col justify-end items-end border h-64'>
              <p className="flex items-center gap-1 leading-none text-neutral-400 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                </svg>
                24°c
              </p>
              <h1 className="font-medium text-neutral-200 text-3xl md:text-5xl mt-3">
                02:19 PM
              </h1>
              <p className="leading-relaxed text-xl text-neutral-300">
                Wednesday, February 19
              </p>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Draft
