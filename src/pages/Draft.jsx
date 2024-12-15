import React from 'react';
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { InputField, Checkbox, Button } from '../components'
import { fmUILogo } from '../assets'
import { motion } from 'framer-motion'

const Draft = () => {
  useLenisScroll();
  useScrollToTop();

  const Content = () => {
    return (
      <div className='space-y-1 cursor-pointer border'>
        {/*  */}
        <div className='flex gap-3 w-full'>
          <div className='size-9 flex-shrink-0'>
            <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-[12px]' />
          </div>
          <div className='leading-none'>
            <h4 className='text-neutral-200'>GitHub</h4>
            <p className='text-neutral-400/90 line-clamp-1 text-sm'>docs.github.com › get-started › quickstart › hello-world</p>
          </div>
        </div>
        {/*  */}
        <div className='flex group'>
          <div className='space-y-1'>
            {/*  */}
            <h5 className='text-blue-500 text-xl group-hover:underline'>Hello world</h5>
            {/*  */}
            <p className='text-sm leading-5 text-neutral-300 line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum corporis adipisci quibusdam aspernatur explicabo unde dolorum accusamus veniam, distinctio odio atque. Rem, facere? Illum aliquam explicabo consequuntur dicta corporis commodi.</p>
            <ul className='flex gap-2 text-sm text-blue-500 cursor-pointer'>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
          <div className='w-44 h-28 flex-shrink-0'>
            <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-lg' />
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
      <main className="bg-neutral-800 space-y-6">
        {/* Header */}
        <div className='bg-[#2b2b2b] p-7 sticky top-0'>
          <header className='flex border justify-between items-start'>
            <div className='flex items-start gap-36 w-full'>
              {/* Logo */}
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
              <div className='lg:flex hidden flex-col border gap-2 lg:max-w-3xl w-full max-w-md'>
                {/* Search bar */}
                <div className='flex items-center gap-4'>
                  <div className='w-full relative'>
                    <input
                      id="search"
                      type='text'
                      value='Hello World'
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
                {/* Categories */}
                <div className='flex items-center justify-between'>
                  {/* Tab Component */}
                  <div className='flex items-center gap-4 cursor-pointer text-neutral-400 text-sm'>
                    <span>All</span>
                    <span>Images</span>
                    <span>Videos</span>
                    <span>Shopping</span>
                    <span>News</span>
                    <span>More</span>
                  </div>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Settings */}
            <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </button>
          </header>
        </div>
        {/* Content */}
        <section className='flex flex-wrap border lg:px-[14.6rem] w-full'>
          {/* Left */}
          <div className='border w-full lg:max-w-3xl max-w-full space-y-8'>
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
          </div>
          {/* Right */}
          <div className='flex-1 border'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio incidunt eligendi, quo impedit est sequi voluptatum natus dolores iste id repellat magni neque consequatur, deserunt quidem ex, sint dignissimos? Placeat!</div>
        </section>
        <footer className='bg-neutral-900'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati aliquam asperiores ea facere sint sunt, dolor veritatis, dicta dignissimos quaerat quo voluptatibus et architecto, ex sequi vel inventore eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eveniet vitae! Tempora ut vel assumenda sapiente nobis, aliquam velit enim eius dolorem maxime modi labore magnam. Adipisci dolore asperiores tempora.
        </footer>
      </main>
    </motion.div>
  )
}

export default Draft
