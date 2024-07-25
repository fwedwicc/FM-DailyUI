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

  const ColorRadio = ({ id, color, disabled, checked }) => {
    return (
      <div>
        <input type="radio" id={id} name="brand" class="hidden peer" disabled={disabled} checked={checked} />
        <label for={id} class={`px-[19px] py-[9.7px] bg-${color} rounded-full cursor-pointer peer-checked:border-neutral-700 peer-checked:border-4 peer-checked:ring-[2.5px] peer-checked:ring-${color} transition duration-300 ease-in-out`}>
        </label>
      </div>
    )
  }

  const SectionContainer = ({ child1, child2 }) => {
    return (
      <div className='border-b border-neutral-700/70 py-8 grid lg:grid-cols-9 md:grid-cols-1 grid-cols-1 gap-6'>
        <div className='md:col-span-3 col-span-1'>
          {child1}
        </div>
        <div className='md:col-span-5 col-span-1'>
          {child2}
        </div>
      </div>
    )
  }

  const BotAvatar = [
    'https://avatars.githubusercontent.com/u/84505567?v=4',
    'https://avatars.githubusercontent.com/u/98326799?v=4',
    'https://avatars.githubusercontent.com/u/92199408?v=4',
    'https://avatars.githubusercontent.com/u/823537?v=4',
  ]

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
          <div className='w-full border border-neutral-600/50 bg-neutral-700/20 rounded-xl max-w-7xl p-8 space-y-5'>
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
                      Select how you would like your interface look and feels in your browser.
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
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Company Logo
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Update what fits in your company's logo.
                    </p>
                  </div>
                }
                child2={
                  <div className='flex gap-8'>
                    <div className='px-[1.8rem] py-[3.2rem] rounded-full border border-neutral-400 bg-green-600 self-start flex justify-center items-center flex-shrink-0'>
                      <img src={fmUILogo} alt="fmUILogo" className='w-20 h-auto' />
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-neutral-600 border-dashed rounded-lg cursor-pointer bg-neutral-700/60 hover:bg-neutral-600/60 text-neutral-400 transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 md:px-4 px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                          </svg>
                          <p className="mb-2 text-sm text-center"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-center">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                }
              />
              {/* Bot Appearance */}
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Bot Avatar
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Change the look of your bot companion.
                    </p>
                  </div>
                }
                child2={
                  <div className='flex flex-wrap items-center gap-5'>
                    {BotAvatar.map((avatar, index) => (
                      <div key={index}>
                        <img
                          className={`size-14 border-2 border-neutral-300 rounded-full ${index === 2 ? 'border-4 border-neutral-700 ring-[2.5px] ring-green-500' : ''
                            }`}
                          src={avatar}
                          alt="Bot Avatar"
                        />
                      </div>
                    ))}
                    <button className='size-14 flex justify-center items-center transition duration-300 ease-in-out bg-neutral-700/70 hover:bg-neutral-600/60 rounded-full focus:ring-2 focus:ring-neutral-700 text-neutral-400'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </div>
                }
              />
              {/* Brand Color */}
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Brand Color
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Select or customize your brand color.
                    </p>
                  </div>
                }
                child2={
                  <div className='space-y-7'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <ColorRadio id="neutral-light" color="neutral-200" disabled={true} checked={false} />
                      <ColorRadio id="neutral-dark" color="neutral-500" disabled={true} checked={false} />
                      <ColorRadio id="red" color="red-500" disabled={true} checked={false} />
                      <ColorRadio id="orange" color="orange-500" disabled={true} checked={false} />
                      <ColorRadio id="indigo" color="indigo-500" disabled={true} checked={false} />
                      <ColorRadio id="green" color="green-500" disabled={false} checked={true} />
                    </div>
                    <div className='inline-flex items-center gap-3'>
                      <span className="leading-relaxed text-neutral-400 text-sm">
                        Custom Color:
                      </span>
                      <InputField
                        styles={'max-w-[7rem]'}
                        id="hex"
                        type="text"
                        value='#22c55e'
                        required={false}
                      />
                      <span className="flex w-3 h-3 ms-2 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                }
              />

            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day07
