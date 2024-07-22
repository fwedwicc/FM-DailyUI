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
        <main>
          <nav className='flex items-center justify-between h-[15vh] border'>
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
          <section className='h-[85vh] flex flex-col gap-5 justify-center items-center border lg:px-24 px-12'>
            <span className='text-green-500 text-xs uppercase'>Find job in your town</span>
            <div className='text-center space-y-1.5'>
              <h1 className="text-3xl font-bold text-neutral-200 sm:text-4xl md:text-5xl">
                Find a dream job that changes life.
              </h1>
              <p className="leading-relaxed text-neutral-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
            <div className='text-center'>
              <div className='flex border border-neutral-700 bg-neutral-900 rounded-md p-2 w-full max-w-xl'>
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
          <section className='h-screen'>

          </section>
        </main>
      </div>
    </motion.div>
  )
}

export default Day03
