import React from 'react';
import { successBg } from '../assets/day11';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Day11 = () => {
  useLenisScroll();
  useScrollToTop();

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return {
          ring: 'ring-green-500',
          border: 'border-green-500'
        };
      case 'red':
        return {
          ring: 'ring-red-500',
          border: 'border-red-500'
        };
      default:
        return {
          ring: '',
          border: ''
        };
    }
  };

  const PhoneMockup = ({ color, children }) => {
    const { ring, border } = getColorClasses(color);

    return (
      <>
        {/* Phone Mockup */}
        <div className={clsx('relative border-[0.5rem] h-[40rem] w-[21.5rem] rounded-[2rem] ring-2', ring, 'border-neutral-900')}>
          {/* Background Image */}
          <img src={successBg} alt="Illustration Background" className='rounded-[1.5rem] absolute object-cover w-full h-full z-0' />
          {/* Sound Buttons */}
          <div className='absolute top-20 -left-3 flex flex-col gap-3'>
            {[0, 1, 2].map((index) => (
              <div
                className={clsx('rounded-full w-2 bg-neutral-950 border-l-2', border, {
                  'h-7': index === 0,
                  'h-10': index !== 0,
                })}
                key={index}
              ></div>
            ))}
          </div>
          {/* Power Button */}
          <div className={clsx('absolute top-[9.2rem] border-r-2 -right-3 rounded-full h-16 w-2 bg-neutral-950', border)}></div>
          {/* Camera */}
          <div className='absolute rounded-full h-5 w-20 top-3 left-1/2 transform -translate-x-1/2 bg-neutral-950'></div>
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
    );
  };

  const Content = ({ label, message, button }) => {
    return (
      <div className='absolute w-full h-full pt-12 px-4 pb-11 rounded-[1.5rem] flex flex-col justify-between'>
        <div className="space-y-3 text-white">
          <div className='flex justify-between items-center'>
            <button className='size-8 flex justify-center items-center hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-green-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            <span className='text-xs text-center z-50'>DailyUI</span>
            <button className='size-8 flex justify-center items-center hover:bg-neutral-200/20 rounded-md focus:ring-2 focus:ring-green-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="text-white">
            <h1 className="font-medium text-md md:text-lg text-center z-50">
              Order no: 22808
            </h1>
            <p className='text-xs text-center'>Payment Successful</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div className='space-y-1'>
            <h1 className="font-medium text-neutral-200 text-2xl md:text-4xl text-center z-50">
              {label}
            </h1>
            <p className='text-xs text-center text-neutral-300 z-50' dangerouslySetInnerHTML={{ __html: message }}></p>
          </div>
          <button className='text-neutral-800 text-xs bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60 inline-block shrink-0 px-4 py-1.5 transition duration-300 ease-in-out border font-semibold rounded-md focus:outline-none focus:ring-2 active:scale-95'>
            {button}
          </button>
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
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 py-8">
        <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-12 lg:gap-20'>
          {/* Success */}
          <PhoneMockup color='green'>
            {/* Content */}
            <Content
              label='Hooray!'
              message='Sit back and relax, <br /> your order is on the way.'
              button='Continue'
              color='dark'
            />
          </PhoneMockup>
          {/* Error */}
          <PhoneMockup color='red'>
            {/* Content */}
            <Content
              label='Oops!'
              message="Your order didn't go through, <br /> please try again."
              button='Try again'
              color='light'
            />
          </PhoneMockup>
        </div>
      </section>
    </motion.div>
  );
};

export default Day11;
