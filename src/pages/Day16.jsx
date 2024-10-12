import React from 'react'
import { fmUILogo02, UICompilation } from '../assets/day16'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day16 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative bg-neutral-900/70 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        <img src={UICompilation} alt="FM DailyUI Complication" className='opacity-50 absolute object-cover w-full h-full' />
        {/* Modal */}
        <div className="z-50 relative border border-neutral-700 bg-[#272727] rounded-xl max-w-lg p-12 gap-5 w-full">
          <div className='bg-neutral-800 border-neutral-700/80 absolute left-1/2 transform -translate-x-1/2 -top-[3.4rem] size-28 flex items-center justify-center border rounded-full'>
            <img src={fmUILogo02} alt="fmUI Logo" className='w-16 h-auto' />
          </div>
          <h1 className="mt-10 text-2xl text-center font-bold text-neutral-200 sm:text-3xl md:text-4xl">
            Welcome to fmUI
          </h1>
          <p className="leading-relaxed text-neutral-400 text-center">
            Enter your fmIU account details
          </p>
          <div className='flex gap-2 mt-8'>
            <button className='py-2 w-full border rounded-md text-neutral-200 bg-neutral-700/80 hover:bg-neutral-600/60 border-neutral-600 transition duration-300 ease-in-out'>
              Google
            </button>
            <button className='py-2 w-full border rounded-md text-neutral-200 bg-neutral-700/80 hover:bg-neutral-600/60 border-neutral-600 transition duration-300 ease-in-out'>
              Google
            </button>
            <button className='py-2 w-full border rounded-md text-neutral-200 bg-neutral-700/80 hover:bg-neutral-600/60 border-neutral-600 transition duration-300 ease-in-out'>
              Google
            </button>
          </div>
          <div class="pt-4 pb-2 flex items-center text-sm text-neutral-500 before:flex-1 before:border-t before:border-neutral-700 before:me-4 after:flex-1 after:border-t after:border-neutral-700 after:ms-4">or</div>
          <form action="#" className="space-y-4">
            <div className='space-y-1'>
              <InputField
                id="email"
                type="email"
                placeholder="Email or username"
                required={true}
              />
              <InputField
                id="password"
                type="password"
                placeholder="Password"
                required={true}
              />
              <div className='flex justify-between items-center pt-1.5'>
                <Checkbox
                  id="marketing"
                  label={'Keep me signed in'}
                />
                <a href="" className='underline text-green-500 md:text-sm text-xs'>Forgot password</a>
              </div>
            </div>
            <div className='space-y-3 pt-2'>
              <Button
                styles={'w-full text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Get started'}
              />
              <p className="mt-4 text-center text-sm text-neutral-300 sm:mt-0">
                Don't have an account? <a href="" className="text-green-500 underline">Register here</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  )
}

export default Day16
