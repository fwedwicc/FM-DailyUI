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
          <div className='lg:col-span-4 md:col-span-3 md:p-10 p-6 col-span-1 flex flex-col justify-between gap-8'>
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
                  <a href="#" className='flex items-center gap-1 text-sm text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Back to home
                  </a>
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
                  Tell us more about your business
                </h1>
                <p className="mt-1 leading-relaxed text-neutral-400">
                  What tools do you currently use in your design business?
                </p>
              </div>
              {/* Radio Options */}
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                {[
                  { id: 'option-1', name: 'Figma', link: "figma.com", logo: "" },
                  { id: 'option-2', name: 'Adobe XD', link: "adobe.com", logo: "" },
                  { id: 'option-3', name: 'Framer', link: "framer.com", logo: "" },
                  { id: 'option-4', name: 'Webflow', link: "webflow.com", logo: "" },
                  { id: 'option-7', name: 'Wordpress', link: "wordpress.com", logo: "" },
                  { id: 'option-5', name: 'Adobe Illustrator', link: "adobe.com", logo: "" },
                  { id: 'option-6', name: 'Sketch', link: "sketch.com", logo: "" },
                ].map((item, index) => (
                  <label htmlFor={item.id} className="relative inline-flex cursor-pointer flex-col items-start gap-1 rounded-lg border border-neutral-700 p-6 transition hover:bg-neutral-700/30 has-[:checked]:border-2 has-[:checked]:border-green-500/80" key={index}>
                    <input id={item.id} type="checkbox" name="industry" className="peer h-4 w-4 cursor-pointer bg-transparent border border-neutral-600 text-green-500 transition duration-300 ease-in-out focus:ring-2 focus:ring-green-500 hidden" />
                    {/*  */}
                    <div className='absolute top-3 left-3 opacity-0 size-6 flex items-center justify-center rounded-md bg-green-500 text-white peer-checked:opacity-100'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    {/*  */}
                    <div className='absolute top-3 left-3 opacity-100 size-6 rounded-md border border-neutral-700 peer-checked:opacity-0'>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                      <img src={item.logo} alt={item.name} className='size-16 border mb-3' />
                      <span className="font-medium text-neutral-300">{item.name}</span>
                      <span className="flex items-center gap-1 text-neutral-400">
                        {item.link}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </span>
                    </div>
                  </label>
                ))}
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
          <div className='lg:col-span-2 md:col-span-2 md:pl-0 md:pt-4 pt-0 p-4 col-span-1'>
            <div className='flex flex-col justify-between gap-8 h-full bg-neutral-700/10 border border-neutral-700/40 rounded-lg md:p-8 p-5'>
              {/* Main Content */}
              <div className='flex flex-col'>
                <h1 className="mb-9 text-xl font-medium text-neutral-200 sm:text-2xl md:text-3xl text-nowrap">
                  Getting Started!
                </h1>
                {[
                  { icon: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z", title: "Your Details", description: "Provide necessary information" },
                  { icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z", title: "Select Your Design Tools", description: "Design tools currently used in your business" },
                  { icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z", title: "Invite your team", description: "Start collaborating with you team" },
                  { icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z", title: "Welcome Aboard!", description: "Get up and running in 3 minutes" },
                ].map((item, index) => (
                  <>
                    <div className={`flex items-center gap-5 ${index === 2 || index === 3 ? 'opacity-50' : ''}`} key={index}>
                      <div className={`size-11 flex justify-center items-center shrink-0 border rounded-lg ${index === 0 ? ' bg-green-500/20 border-green-500/40' : 'bg-neutral-700/40 border-neutral-700'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${index === 0 ? 'text-green-500' : 'text-neutral-300'}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="leading-relaxed text-neutral-200">
                          {item.title}
                        </p>
                        <p className="leading-none text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className={`ml-[22px] h-9 w-[1px] ${index === 0 ? 'bg-green-500/60' : 'bg-neutral-700'} ${index === 3 ? 'hidden' : ''}`}></div>
                  </>
                ))}
              </div>
              {/* Footer */}
              <div className='space-y-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-9 text-neutral-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                </svg>
                <p className="leading-relaxed text-neutral-200">
                  Having Trouble?
                </p>
                <p className="leading-6 py-2 text-neutral-400 w-full max-w-xs">
                  Feel free to contact us and we will always help you through the process.
                </p>
                <a href="#" className='flex items-center gap-1 text-sm text-green-500'>
                  Contact us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Draft
