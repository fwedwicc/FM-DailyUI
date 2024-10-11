import React from 'react'
import { fmUILogo } from '../assets'
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
      <section className="relative bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        <img src="https://placeholder.co/300x300" alt="" className='opacity-50 absolute object-cover w-full h-full' />
        {/* Modal */}
        <div className="z-50 border border-neutral-600 bg-[#303030] rounded-xl max-w-lg p-12 gap-5 w-full">
          <a className="inline-block" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <h1 className="mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
            Welcome to fmUI
          </h1>
          <p className="mt-4 leading-relaxed text-neutral-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
            quibusdam aperiam voluptatum.
          </p>
          <form action="#" className="mt-8">
            <div>
              <button className='py-2 w-full border rounded-md text-neutral-200 bg-neutral-700/80 hover:bg-neutral-600/60 border-neutral-600 transition duration-300 ease-in-out'>
                Google
              </button>
            </div>
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
            <Checkbox
              id="marketing"
              label={'ss'}
            />
            <div>
              <Button
                styles={'w-full text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Get started'}
              />
              <p className="mt-4 text-sm text-neutral-300 sm:mt-0">
                Already have an account?
                <a href="#" className="text-neutral-200 underline"> Log in</a>.
              </p>
            </div>
          </form>
        </div>

      </section>
    </motion.div>
  )
}

export default Day16
