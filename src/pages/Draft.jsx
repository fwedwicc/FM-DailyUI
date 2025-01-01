import React from 'react';
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'
import { fmUILogo } from '../assets'
import { Button, InputField, Select } from '../components'

const Draft = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        <div className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1 md:min-h-screen'>
          {/* Left Content */}
          <div className='lg:col-span-4 md:col-span-3 md:p-10 p-6 col-span-1 flex flex-col justify-between'>
            {/* Header */}
            <div className='space-y-8'>
              <div className='flex justify-between items-start'>
                {/* Logo */}
                <a className="inline-block" href="#">
                  <span className="sr-only">Home</span>
                  <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
                </a>
                {/* Action Buttons */}
                <div className='flex items-center gap-3'>
                  <a href="#" className='underline text-sm text-neutral-300'>Login</a>
                  <a href="#" className='underline text-sm text-neutral-300'>Sign Up</a>
                </div>
              </div>
              {/* Stepper */}
              <div className='space-y-3'>
                <div className='grid grid-cols-4 gap-3'>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      className={`h-1.5 rounded-full ${index === 0 || index === 1 ? 'bg-green-500' : 'bg-neutral-700'}`}
                      key={index}
                    ></div>
                  ))}
                </div>
                <p className='text-sm text-neutral-500'>2/4</p>
              </div>
            </div>
            {/* Main Content */}
            <div className='space-y-7'>
              <div>
                <h1 className="text-3xl font-medium text-neutral-200 sm:text-4xl md:text-5xl text-nowrap">
                  What industry are you in?
                </h1>
                <p className="mt-1 leading-relaxed text-neutral-400">
                  This ensure you receive more accurate recommendations.
                </p>
              </div>
              {/* Radio Options */}
              <div className='grid grid-cols-4 gap-3'>
                <label htmlFor="option-1" className="inline-flex cursor-pointer flex-col items-start gap-4 rounded-lg border border-neutral-700 p-4 transition hover:bg-neutral-700/30 has-[:checked]:bg-neutral-600/70 has-[:checked]:border-green-500">
                  <div className="flex items-center gap-3">
                    <input id="option-1" type="radio" name="language" className="h-4 w-4 cursor-pointer border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
                    <span className="font-medium text-neutral-300">HTML</span>
                  </div>
                  <p className="text-sm text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </label>
                <label htmlFor="option-2" className="inline-flex cursor-pointer flex-col items-start gap-4 rounded-lg border border-neutral-700 p-4 transition hover:bg-neutral-700/30 has-[:checked]:bg-neutral-600/70 has-[:checked]:border-green-500">
                  <div className="flex items-center gap-3">
                    <input id="option-2" type="radio" name="language" className="h-4 w-4 cursor-pointer border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
                    <span className="font-medium text-neutral-300">CSS</span>
                  </div>
                  <p className="text-sm text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </label>
              </div>
            </div>
            {/* Footer */}
            <div className='flex gap-3'>
              <Button
                styles={'flex items-center gap-2.5 text-neutral-200 bg-neutral-700/50 hover:bg-neutral-700 border-none focus:ring-neutral-600/60'}
                label={'Back'}
              >
              </Button>
              <Button
                styles={'flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Continue'}
              />
            </div>
          </div>
          {/* Right Content */}
          <div className='lg:col-span-2 md:col-span-2 md:pl-0 md:pt-4 pt-0 p-4 col-span-1 border flex flex-col justify-between'>
            {/* Main Content */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
            {/* Footer */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Draft
