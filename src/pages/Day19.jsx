import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day19 = () => {
  useLenisScroll();
  useScrollToTop();

  const ProfileCard = (props) => {
    return (
      <div className='border p-3.5 rounded-xl'>
        {/* Profile and Banner */}
        <div className='h-24 border relative rounded-md'>
          <div className='border size-24 rounded-full absolute left-5 top-11'>
            <img src="https://placehold.co/50x50" alt="Name" className='absolute object-cover w-full h-full rounded-full' />
          </div>
        </div>
        {/* Information */}
        <div className='mt-14 border px-5'>
          <h1 className='text-neutral-200 text-xl'>The Coding Train</h1>
          <p className="leading-relaxed text-neutral-400 text-sm">
            @TheCodingTrain
          </p>
          <div className=''>
            <p className="leading-relaxed text-neutral-300 text-sm">
              1.71M subscribers
            </p>
          </div>
          <a href="#" className='text-green-500 underline text-xs'>View channel</a>
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
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        {/* Modal */}
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-[15px] max-w-[95rem] p-4 gap-4 w-full flex lg:flex-row flex-col">
          {/* Creator Profiles */}
          <div className='flex flex-col min-w-5xl w-full z-10 space-y-4 border'>
            <h1 className='text-neutral-200 text-3xl'>Welcome to nowhere!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
              <ProfileCard

              />
              <ProfileCard

              />
              <ProfileCard

              />
            </div>
          </div>
          {/* Leaderboards */}
          <div className='lg:max-w-sm max-w-full rounded-lg w-full bg-neutral-500/10 p-6 space-y-4'>
            <h1 className='text-neutral-200 text-3xl'>Welcome to nowhere!</h1>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day19
