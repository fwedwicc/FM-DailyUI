import React from 'react'
import { fmUILogo } from '../assets'
import { Button, InputField, Select } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'

const Day03 = () => {
  useLenisScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-neutral-800">
        <main className='bg-landing-hero bg-cover bg-center bg-no-repeat'>
          <nav className='flex items-center justify-between h-[15vh] px-24'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <ul className='text-neutral-300 flex gap-9'>
              <li>
                <a href="#">Demos</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className='flex gap-3'>
              <Button
                styles={'text-neutral-200 bg-transarent hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                label={'Login'}
              />
              <Button
                styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Sign up'}
              />
            </div>
          </nav>
          <section className='h-[85vh] flex flex-col gap-5 justify-center items-center lg:px-24 px-12'>
            <span className='text-green-500 text-xs uppercase'>Find job in your town</span>
            <div className='text-center space-y-2'>
              <h1 className="text-3xl font-bold text-neutral-200 sm:text-4xl md:text-5xl">
                Find a dream job that <br className='lg:hidden block' /> changes life.
              </h1>
              <p className="leading-relaxed text-neutral-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, <br className='lg:block hidden' />
                quibusdam aperiam voluptatum lor sit amet con.
              </p>
            </div>
            <div className='text-center'>
              <div className='flex border border-neutral-700 bg-neutral-900 rounded-[0.8rem] p-2 w-full max-w-xl'>
                <InputField
                  styles={'me-2'}
                  id="job"
                  type="text"
                  placeholder="Job title or keyword"
                  required={false}
                />
                <Select
                  styles={'me-2'}
                  id="city"
                  options={[
                    { value: '', label: 'City' },
                    { value: 'AU', label: 'Australia' },
                    { value: 'CA', label: 'Canada' },
                    { value: 'CN', label: 'China' },
                    { value: 'FR', label: 'France' },
                    { value: 'DE', label: 'Germany' },
                    { value: 'IN', label: 'India' },
                    { value: 'JP', label: 'Japan' },
                    { value: 'PH', label: 'Philippines' },
                    { value: 'GB', label: 'United Kingdom' },
                    { value: 'US', label: 'United States' },
                  ]}
                  required={true}
                />
                <Button
                  styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                  label={'Search'}
                />
              </div>
              <span className='text-neutral-300 text-xs'>Try Product Designer, Software Engineer, etc.</span>
            </div>
          </section>
        </main>
        <section className='flex justify-center items-center lg:px-24 px-12 py-6'>
          <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-16 gap-8'>
            <div className='space-y-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                Lorem Ipsum
              </h1>
              <p className="leading-relaxed text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
            <div className='space-y-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                Lorem Ipsum
              </h1>
              <p className="leading-relaxed text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
            <div className='lg:col-span-1 col-span-2 space-y-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                Lorem Ipsum
              </h1>
              <p className="leading-relaxed text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Day03
