import React from 'react'
import { motion } from 'framer-motion'
import { fmUILogo, UICompilation } from '../assets'
import { titles } from '../data'

const UpcomingChallenge = () => {

  const currentChallengeIndex = titles.length - 1
  const currentChallengeNumber = currentChallengeIndex + 1

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className='h-screen flex items-center justify-center'>
        <img src={UICompilation} alt="UI Compliation" className='absolute object-cover h-full w-full' />
        <div className='absolute w-full h-full bg-neutral-800/40'></div>
        <div className='z-20 flex flex-col items-center justify-center md:gap-3 gap-1 transition-all duration-300 ease-in-out'>
          <img src={fmUILogo} alt="FM Logo" className='mb-10 md:w-20 w-12 h-auto' />
          <h1 className='text-neutral-300 md:text-3xl text-2xl font-medium'>Upcoming Challenge</h1>
          <p className="md:text-sm text-xs text-center font-medium text-neutral-400">This challenge has not yet been revealed. <br /> Stay tuned for updates!</p>
          <div className='absolute bottom-14'>
            <p className='text-sm leading-relaxed text-neutral-300 text-center'>Frederick is currently working on:</p>
            <p className='leading-relaxed text-green-500 text-center'>Challenge #{currentChallengeNumber}</p>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default UpcomingChallenge
