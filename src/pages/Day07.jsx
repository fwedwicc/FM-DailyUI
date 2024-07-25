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
      <nav className='flex gap-3'>
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
          <div className='w-full border border-neutral-600/50 bg-neutral-700/20 rounded-md max-w-7xl p-8'>
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
              <div className='border-b py-8'>
                <p className="leading-relaxed text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, rerum aspernatur ipsum dignissimos maxime qui, nemo amet ipsam sequi commodi nam! Sint error fuga fugit. Veniam quam accusamus quibusdam laboriosam.
                </p>
              </div>
              <div className='border-b py-8'>
                <p className="leading-relaxed text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, rerum aspernatur ipsum dignissimos maxime qui, nemo amet ipsam sequi commodi nam! Sint error fuga fugit. Veniam quam accusamus quibusdam laboriosam.
                </p>
              </div>
              <div className='border-b py-8'>
                <p className="leading-relaxed text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, rerum aspernatur ipsum dignissimos maxime qui, nemo amet ipsam sequi commodi nam! Sint error fuga fugit. Veniam quam accusamus quibusdam laboriosam.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day07
