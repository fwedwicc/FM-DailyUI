import React from 'react'
import { fmUILogo } from '../assets'
import { Toggle } from '../components'
import { motion } from 'framer-motion'

const Day02 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="lg:min-h-screen lg:px-48 md:px-32 px-8 lg:py-20 py-8">
          <a className="inline-block" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <div className='space-y-4'>
            <h1 className="mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
              Checkout
            </h1>
            <div>
              <p className='text-neutral-300'>Start your <strong>7-day free trial</strong> today.</p>
              <p className='text-neutral-300'>We'll email you a reminder 3 days before your trial ends.</p>
            </div>
          </div>
          {/* Plan and billing */}
          <div className='mt-12 space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='inline-flex items-center gap-3 text-neutral-300 lg:text-xl text-md'>
                <span className='rounded-md border border-neutral-500 px-2 py-1 font-bold'>1</span>
                <h2>Plan and billing</h2>
              </span>
              <Toggle>
                <span className="ms-3 text-sm font-medium text-neutral-300">
                  Save by paying annually
                  <span className='ms-2 bg-green-700 text-xs rounded-sm text-white px-2 py-1.5'>SAVE $36</span>
                </span>
              </Toggle>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-3'>
              <label htmlFor="option-1" className="inline-flex w-full flex-col cursor-pointer items-start gap-4 has-[:checked]:outline-none rounded-lg border has-[:checked]:border-2 border-neutral-700 transition hover:bg-neutral-700/40 has-[:checked]:bg-neutral-700 has-[:checked]:border-neutral-500">
                <div className="flex items-center justify-between border-b border-neutral-600 w-full lg:py-4 py-3 lg:px-8 px-4">
                  <div className='flex gap-3 items-center'>
                    <input id='option-1' type="radio" name='plan' className="w-4 h-4 text-neutral-300 bg-transparent border border-neutral-600 focus:ring-neutral-400 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
                    <span className='font-medium text-neutral-300'>Plus</span>
                  </div>
                  <span className='font-medium text-neutral-300 px-2.5 py-1 border border-neutral-600 bg-neutral-900/40 rounded-md'>Learn a skill</span>
                </div>
                <div className='lg:pt-4 pt-2 pb-6 lg:pb-8 lg:px-8 px-4 w-full'>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-2 lg:gap-4'>
                      <h1 className='text-neutral-200 text-[3rem] lg:text-[5.5rem] font-bold'>$14</h1>
                      <div className='flex flex-col justify-evenly'>
                        <p className='text-neutral-300 text-[0.9rem] lg:text-[1.5rem]'>.99</p>
                        <p className='text-neutral-300 text-[0.9rem] lg:text-[1.5rem]'>/mo</p>
                      </div>
                    </div>
                    <p className='text-neutral-300 font-semibold'>Billed Monthly</p>
                  </div>
                  <div className='mt-8 flex justify-center'>
                    <ul className='space-y-1.5 lg:text-base text-sm'>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 flex-none">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <span>Unlimited AI learning assistance</span>
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Real-world projects
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        All courses
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Skill paths
                      </li>
                      <li className='flex items-center gap-2 text-neutral-400 line-through'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-500/50">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Career paths
                      </li>
                      <li className='flex items-center gap-2 text-neutral-400 line-through'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-500/50">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Interview prep
                      </li>
                      <li className='flex items-center gap-2 text-neutral-400 line-through'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-500/50">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Professional certifications
                      </li>
                      <li className='flex items-center gap-2 text-neutral-400 line-through'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-500/50">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Career services
                      </li>
                      <li className='flex items-center gap-2 text-neutral-400 line-through'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-500/50">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Assessments
                      </li>
                    </ul>
                  </div>
                </div>
              </label>
              <label htmlFor="option-2" className="inline-flex w-full flex-col cursor-pointer items-start gap-4 has-[:checked]:outline-none rounded-lg border has-[:checked]:border-2 border-neutral-700 transition hover:bg-neutral-700/40 has-[:checked]:bg-neutral-700 has-[:checked]:border-green-500">
                <div className="flex items-center justify-between border-b border-neutral-600 w-full lg:py-4 py-3 lg:px-8 px-4">
                  <div className='flex gap-3 items-center'>
                    <input id='option-2' type="radio" name='plan' className="w-4 h-4 text-green-500 bg-transparent border border-neutral-600 focus:ring-neutral-400 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
                    <span className='font-medium text-neutral-300'>Pro</span>
                  </div>
                  <span className='font-medium text-neutral-300 px-2.5 py-1 border border-green-700 bg-green-900/40 rounded-md'>Build a career</span>
                </div>
                <div className='lg:pt-4 pt-2 pb-6 lg:pb-8 lg:px-8 px-4 w-full'>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-2 lg:gap-4'>
                      <h1 className='text-neutral-200 text-[3rem] lg:text-[5.5rem] font-bold'>$19</h1>
                      <div className='flex flex-col justify-evenly'>
                        <p className='text-neutral-300 text-[0.9rem] lg:text-[1.5rem]'>.99</p>
                        <p className='text-neutral-300 text-[0.9rem] lg:text-[1.5rem]'>/mo</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                      <p className='text-neutral-300 font-semibold'>Billed Monthly</p>
                      <span className='flex gap-1.5 items-center font-medium text-neutral-300 px-2.5 py-1 border border-green-700 bg-green-900/40 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        Recommended
                      </span>
                    </div>
                  </div>
                  <div className='mt-6 flex justify-center'>
                    <ul className='space-y-1.5 lg:text-base text-sm'>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 flex-none">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <span>Unlimited AI learning assistance</span>
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Real-world projects
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        All courses
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Skill paths
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Career paths
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Interview prep
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Professional certifications
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Career services
                      </li>
                      <li className='flex items-center gap-2 text-neutral-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Assesments
                      </li>
                    </ul>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day02
