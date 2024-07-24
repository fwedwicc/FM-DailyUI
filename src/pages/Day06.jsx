import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll';
import { Button } from '../components';
import { motion } from 'framer-motion';

const Day06 = () => {
  useLenisScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 relative">
        <div className='lg:h-56 md:h-48 h-40 w-full border absolute -z-0'></div>
        <div className="relative h-auto lg:px-32 md:px-24 px-8 lg:py-20 py-8 z-10 space-y-8">
          <div className='flex justify-between items-end lg:pt-16 md:pt-20 pt-12'>
            <div>
              <div className="relative inline-block">
                <img className="w-36 h-36 p-1.5 rounded-full ring-4 ring-green-500" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
                <div className="absolute bottom-0 right-[-6rem] flex items-center space-x-2 bg-neutral-700 border border-neutral-600/70 py-1 px-2 rounded-full">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="text-xs text-neutral-200 whitespace-nowrap">Available for work</span>
                </div>
              </div>
            </div>
            <div className='flex gap-3 relative'>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden flex items-center p-2 rounded-md focus:bg-neutral-700 hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              {/* Mobile Dropdown Menu */}
              {isOpen && (
                <div className='absolute top-full right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
                  <div className='flex flex-col gap-2 p-4'>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                      label={'Message'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>
                    </Button>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                      label={'Connect'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              )}
              <Button
                styles={'hidden md:flex flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'Message'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </Button>
              <Button
                styles={'hidden md:flex flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Connect'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className="text-3xl font-medium text-neutral-200 sm:text-4xl md:text-5xl">
                Frederick Moreno
              </h1>
              <p className="leading-relaxed text-neutral-300">
                Front-end Developer | UI/UX Designer | BSIT Student
              </p>
            </div>
            <div>
              <p className="leading-relaxed text-neutral-300">
                Quezon City University
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Day06;
