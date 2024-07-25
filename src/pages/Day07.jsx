import React from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'

const Day07 = () => {
  useLenisScroll();

  const CustomTab = () => {
    const label = [
      'Account',
      'Profile',
      'Security',
      'Appearance',
      'Notification',
      'Billing',
      'Integration',
    ]

    return (
      <nav className='flex flex-wrap gap-3'>
        {label.map((tab, index) => {
          const isActive = tab === 'Appearance';
          return (
            <button
              className={`py-2 px-4 transition duration-300 ease-in-out rounded-md focus:ring-2 focus:ring-neutral-700 ${isActive ? 'bg-neutral-700 text-neutral-200' : 'hover:bg-neutral-700/70 text-neutral-400'
                }`}
              key={index}
            >
              {tab}
            </button>
          );
        })}
      </nav>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 p-12 md:px-16 px-8 lg:py-20 py-8">
        <div className='flex justify-center items-center'>
          {/* Modal */}
          <div className='w-full border border-neutral-600/50 bg-neutral-700/20 rounded-md max-w-7xl p-8 space-y-5'>
            {/* Header */}
            <div className='space-y-7'>
              <div className='flex justify-between items-start'>
                <h1 className="text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                  Settings
                </h1>
                <button className='size-9 flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div>
                <CustomTab />
              </div>
            </div>
            {/* Main Content */}
            <div>
              {/* Apperance Description */}
              <div className='border-b border-neutral-700/70 py-8'>
                <div className='flex items-end justify-between gap-16'>
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Appearance
                    </h1>
                    <p className="leading-relaxed text-neutral-400">
                      Select how you would like your interface look. Select a theme or sync with your system and have automatic theme switching.
                    </p>
                  </div>
                  <button className='size-9 flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Company Logo */}
              <div className='border-b border-neutral-700/70 py-8 grid md:grid-cols-9 grid-cols-1 gap-6'>
                <div className='md:col-span-3 col-span-1'>
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Company Logo
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Update what fits in your company's logo.
                    </p>
                  </div>
                </div>
                <div className='md:col-span-5 col-span-1'>
                  <p className="leading-relaxed text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, rerum aspernatur ipsum dignissimos maxime qui, nemo amet ipsam sequi commodi nam! Sint error fuga fugit. Veniam quam accusamus quibusdam laboriosam.
                  </p>
                </div>
              </div>
              {/* Brand Color */}
              <div className='border-b border-neutral-700/70 py-8 grid md:grid-cols-9 grid-cols-1 gap-6'>
                <div className='md:col-span-3 col-span-1'>
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Brand Color
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Select or customize your brand color.
                    </p>
                  </div>
                </div>
                <div className='md:col-span-5 col-span-1'>
                  <p className="leading-relaxed text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, rerum aspernatur ipsum dignissimos maxime qui, nemo amet ipsam sequi commodi nam! Sint error fuga fugit. Veniam quam accusamus quibusdam laboriosam.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day07
