import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { InputField, Select, Toggle, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day07 = () => {
  useLenisScroll();
  useScrollToTop();

  const [value, setValue] = useState(3);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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

  const ThemeIcon = [
    'https://github.githubassets.com/assets/light_disc-f013f2cb4228.svg',
    'https://github.githubassets.com/assets/light_high_contrast_disc-f74abfa8e811.svg',
    'https://github.githubassets.com/assets/light_colorblind_disc-307fec254fd3.svg',
    'https://github.githubassets.com/assets/light_tritanopia_disc-bac905a50c2c.svg',
    'https://github.githubassets.com/assets/dark_disc-2bd434b8617d.svg',
    'https://github.githubassets.com/assets/dark_high_contrast_disc-3820ceab953a.svg',
    'https://github.githubassets.com/assets/dark_colorblind_disc-cf4710564c71.svg',
    'https://github.githubassets.com/assets/dark_tritanopia_disc-606f4df188f0.svg',
    'https://github.githubassets.com/assets/dark_dimmed_disc-ee3bad70351b.svg',
  ]

  const ThemeContent = [
    {
      "icon": "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
      "theme": "Day theme",
      "desc": "This theme will be active when your system is set to “light mode”.",
      "thumbnail": "https://github.githubassets.com/assets/light_preview-0fd4f11e117f.svg",
      "variant": "Light default",
      "index": 0
    },
    {
      "icon": "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z",
      "theme": "Night theme",
      "desc": "This theme will be active when your system is set to “dark mode",
      "thumbnail": "https://github.githubassets.com/assets/dark_dimmed_preview-82b04acf17cc.svg",
      "variant": "Dark dimmed",
      "index": 8
    },

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
                      <span className="flex size-11 bg-neutral-200 rounded-full cursor-pointer"></span>
                      <span className="flex size-11 bg-neutral-700 rounded-full cursor-pointer"></span>
                      <span className="flex size-11 bg-red-500 rounded-full cursor-pointer"></span>
                      <span className="flex size-11 bg-orange-500 rounded-full cursor-pointer"></span>
                      <span className="flex size-11 bg-indigo-500 rounded-full cursor-pointer"></span>
                      <span className="flex size-11 bg-cyan-500 rounded-full cursor-pointer"></span>
                      <span className="flex size-11 bg-green-500 rounded-full ring-[2.5px] ring-green-500 border-4 border-neutral-700 cursor-pointer"></span>
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
              {/* Interface Theme */}
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Interface Theme
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Select a UI theme or sync with your system.
                    </p>
                    <Toggle>
                      <span className="ms-3 text-sm font-medium text-neutral-300">
                        Sync with system
                      </span>
                    </Toggle>
                  </div>
                }
                child2={
                  <div className='flex md:flex-nowrap flex-wrap items-start gap-4'>
                    {ThemeContent.map((content, index) => {
                      const activeTheme = content.theme === "Night theme";
                      return (
                        <div
                          className={`inline-flex w-full md:max-w-sm flex-col items-start rounded-lg border ${activeTheme ? 'border-green-500/40 border-2 bg-green-800/10' : 'border-neutral-700'}`}
                          key={index}
                        >
                          <div className={`flex flex-wrap gap-3 justify-between items-center border-b ${activeTheme ? 'border-green-500/40 py-[14px]' : 'border-neutral-700 py-[15px]'} w-full px-5`}>
                            <div className={`inline-flex gap-2 items-center ${activeTheme ? 'text-green-500' : 'text-neutral-300'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d={content.icon} />
                              </svg>
                              <span className='font-medium text-neutral-300'>{content.theme}</span>
                            </div>
                            <span className={`text-xs text-neutral-300 px-2.5 py-1 border border-green-700 bg-green-900/40 rounded-md ${activeTheme ? '' : 'hidden'}`}>Active</span>
                          </div>
                          <div className='w-full p-4 space-y-5'>
                            <span className="text-xs font-thin text-neutral-400">
                              {content.desc}
                            </span>
                            <img src={content.thumbnail} alt="Light Mode Thumbnail" className='rounded-md w-full h-auto' />
                            <p className="text-xs font-thin text-neutral-300 mt-1">
                              {content.variant}
                            </p>
                            <div className='flex flex-wrap items-center gap-3'>
                              {ThemeIcon.map((icon, iconIndex) => (
                                <div key={iconIndex}>
                                  <img
                                    className={`size-9 border border-neutral-500 cursor-pointer rounded-full ${iconIndex === content.index ? 'border-[3px] border-neutral-700 ring-[2px] ring-green-500' : ''}`}
                                    src={icon}
                                    alt="Theme Icon"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                }
              />
              {/* Text Size */}
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Text size
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Choose a text size that fits for you.
                    </p>
                  </div>
                }
                child2={
                  <div className="flex md:flex-nowrap flex-wrap items-start gap-4">
                    <div className='flex flex-col gap-6 w-full'>
                      <input
                        id="minmax-range"
                        type="range"
                        min="0"
                        max="4"
                        value={value}
                        onChange={handleChange}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-700 custom-range
                        "
                      />
                      <div className="flex justify-between w-full">
                        {[20, 40, 60, 80, 100].map((label, index) => (
                          <span
                            key={index}
                            className={`text-xs font-medium ${index === 1 ? 'pl-3' : 'px-0'} ${index === 2 ? 'pl-4' : 'px-0'} ${index === 3 ? 'pl-4' : 'px-0'}  ${value == (index * 1) ? 'text-green-500' : 'text-neutral-400'
                              }`}
                          >
                            {label}%
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
              {/* Contrast */}
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Contrast
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Customize the contrast base on your taste.
                    </p>
                  </div>
                }
                child2={
                  <div className="flex md:flex-nowrap flex-wrap items-start gap-4">
                    <input id="default-range" type="range" value="50" className="w-full md:max-w-sm h-2 rounded-lg appearance-none cursor-pointer bg-neutral-700 custom-range" />
                  </div>
                }
              />
              {/* Sidebar Appearance */}
              <SectionContainer
                child1={
                  <div className='space-y-2'>
                    <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                      Sidebar apperance
                    </h1>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      Change the look of your sidebar.
                    </p>
                  </div>
                }
                child2={
                  <div className="flex flex-col md:flex-nowrap flex-wrap items-start gap-6">
                    <Toggle>
                      <span className="ms-3 text-sm font-medium text-neutral-300">
                        Transparent sidebar
                      </span>
                    </Toggle>
                    <Toggle>
                      <span className="ms-3 text-sm font-medium text-neutral-300">
                        Expanded sidebar
                      </span>
                    </Toggle>
                    <div className='w-full md:max-w-sm '>
                      <Select
                        id="loan-term"
                        options={[
                          { value: 'rc', label: 'Recent changes' },
                          { value: 'sc', label: 'Some changes' },
                          { value: 'sc', label: 'Some changes' },
                          { value: 'sc', label: 'Some changes' },
                        ]}
                        required={false}
                      ></Select>
                    </div>
                  </div>
                }
              />
              {/* Modal Footer */}
              <div className='pt-7'>
                <div className='flex flex-wrap-reverse md:gap-4 gap-2 justify-between'>
                  <Button
                    styles={' flex items-center gap-2.5 text-red-300 bg-red-500/10 hover:bg-red-700/20 border-red-700/60 focus:ring-red-500/60'}
                    label={'Reset to default'}
                  />
                  <div className='flex self-start md:gap-4 gap-2'>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-200 bg-neutral-700/50 hover:bg-neutral-700 border-none focus:ring-neutral-600/60'}
                      label={'Cancel'}
                    />
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                      label={'Save changes'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div >
  )
}

export default Day07
