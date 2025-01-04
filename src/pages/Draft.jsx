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
                  What industry are you in?
                </h1>
                <p className="mt-1 leading-relaxed text-neutral-400">
                  This ensure you receive more accurate recommendations.
                </p>
              </div>
              {/* Radio Options */}
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                {[
                  { id: 'option-1', name: 'Health Care', icon: "M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M7 7V21M17 7V21M10 14H14M12 12V16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" },
                  { id: 'option-2', name: 'Finance', icon: "M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M7 7V21M17 7V21M10 14H14M12 12V16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" },
                  { id: 'option-3', name: 'Information Technology', icon: "M8 3V6.18257M3 8H6.18257M3 12H6M3 16H6.18257M17.8174 8H21M18 12H21M17.8174 16H21M8 17.8174L8 21M12 3V6M12 18V21M16 3L16 6.18257M16 17.8174V21M10 14H10.01M14 14H14.01M14 10H14.01M10 10H10.01M10.8 18H13.2C14.8802 18 15.7202 18 16.362 17.673C16.9265 17.3854 17.3854 16.9265 17.673 16.362C18 15.7202 18 14.8802 18 13.2V10.8C18 9.11984 18 8.27976 17.673 7.63803C17.3854 7.07354 16.9265 6.6146 16.362 6.32698C15.7202 6 14.8802 6 13.2 6H10.8C9.11984 6 8.27976 6 7.63803 6.32698C7.07354 6.6146 6.6146 7.07354 6.32698 7.63803C6 8.27976 6 9.11984 6 10.8V13.2C6 14.8802 6 15.7202 6.32698 16.362C6.6146 16.9265 7.07354 17.3854 7.63803 17.673C8.27976 18 9.11984 18 10.8 18Z" },
                  { id: 'option-4', name: 'Education', icon: "M8 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V16.2C21 15.0799 21 14.5198 20.782 14.092C20.5903 13.7157 20.2843 13.4097 19.908 13.218C19.4802 13 18.9201 13 17.8 13H17.6568M11 8.34314L13.2728 6.07036C14.0648 5.27833 14.4608 4.88231 14.9175 4.73393C15.3192 4.60342 15.7519 4.60342 16.1536 4.73393C16.6102 4.88231 17.0062 5.27833 17.7983 6.07036L18.9296 7.20173C19.7217 7.99376 20.1177 8.38978 20.2661 8.84644C20.3966 9.24812 20.3966 9.68082 20.2661 10.0825C20.1177 10.5392 19.7217 10.9352 18.9296 11.7272L17.6568 13M11 8.34314V6.2C11 5.0799 11 4.51984 10.782 4.09202C10.5903 3.71569 10.2843 3.40973 9.90798 3.21799C9.48016 3 8.92011 3 7.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H7.8C8.92011 21 9.48016 21 9.90798 20.782C10.2843 20.5903 10.5903 20.2843 10.782 19.908C10.7926 19.8872 10.8027 19.866 10.8123 19.8445M11 8.34314V17.8C11 18.8656 11 19.4243 10.8123 19.8445M17.6568 13L10.8123 19.8445M7 17H7.01" },
                  { id: 'option-7', name: 'Arts and Crafts', icon: "M14.2639 15.9376L12.5958 14.2835C11.7909 13.4852 11.3884 13.0861 10.9266 12.9402C10.5204 12.8119 10.0838 12.8166 9.68048 12.9537C9.22188 13.1096 8.82814 13.5173 8.04068 14.3327L4.04409 18.2802M14.2639 15.9376L14.6053 15.5991C15.4112 14.7999 15.8141 14.4003 16.2765 14.2544C16.6831 14.1262 17.12 14.1312 17.5236 14.2688C17.9824 14.4252 18.3761 14.834 19.1634 15.6515L20 16.4936M14.2639 15.9376L18.275 19.9566M18.275 19.9566C17.9176 20.0001 17.4543 20.0001 16.8 20.0001H7.2C6.07989 20.0001 5.51984 20.0001 5.09202 19.7821C4.71569 19.5904 4.40973 19.2844 4.21799 18.9081C4.12796 18.7314 4.07512 18.5322 4.04409 18.2802M18.275 19.9566C18.5293 19.9257 18.7301 19.8728 18.908 19.7821C19.2843 19.5904 19.5903 19.2844 19.782 18.9081C20 18.4803 20 17.9202 20 16.8001V16.4936M12.5 4L7.2 4.00011C6.07989 4.00011 5.51984 4.00011 5.09202 4.21809C4.71569 4.40984 4.40973 4.7158 4.21799 5.09213C4 5.51995 4 6.08 4 7.20011V16.8001C4 17.4576 4 17.9222 4.04409 18.2802M20 11.5V16.4936M14 10.0002L16.0249 9.59516C16.2015 9.55984 16.2898 9.54219 16.3721 9.5099C16.4452 9.48124 16.5146 9.44407 16.579 9.39917C16.6515 9.34859 16.7152 9.28492 16.8425 9.1576L21 5.00015C21.5522 4.44787 21.5522 3.55244 21 3.00015C20.4477 2.44787 19.5522 2.44787 19 3.00015L14.8425 7.1576C14.7152 7.28492 14.6515 7.34859 14.6009 7.42112C14.556 7.4855 14.5189 7.55494 14.4902 7.62801C14.4579 7.71033 14.4403 7.79862 14.4049 7.97518L14 10.0002Z" },
                  { id: 'option-5', name: 'Real Estate', icon: "M10 7.5V6.2C10 5.0799 10 4.51984 10.218 4.09202C10.4097 3.71569 10.7157 3.40973 11.092 3.21799C11.5198 3 12.0799 3 13.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H16M14 7H17M14 11H17M3 16L7.42372 11.9784C7.8038 11.6329 7.99384 11.4601 8.20914 11.3947C8.39876 11.337 8.60124 11.337 8.79086 11.3947C9.00616 11.4601 9.1962 11.6329 9.57628 11.9784L14 16M5 14.1818V19.4C5 19.9601 5 20.2401 5.10899 20.454C5.20487 20.6422 5.35785 20.7951 5.54601 20.891C5.75992 21 6.03995 21 6.6 21H10.4C10.9601 21 11.2401 21 11.454 20.891C11.6422 20.7951 11.7951 20.6422 11.891 20.454C12 20.2401 12 19.9601 12 19.4L12 14.1818" },
                  { id: 'option-6', name: 'Manufacturing', icon: "M7 21L8.6345 16.2599M18 21L14.8513 13.3906M4 13.9999L10.4385 11.0283M17 7.99995L13.3229 9.69704M8.37939 17H16.345M3 21H21M4 21V9.99995M13.3229 9.69704L12 6.49994L10.4385 11.0283M13.3229 9.69704L10.4385 11.0283M15 3.49995L19 12.5L19.4359 12.282C20.8705 11.5647 21.4871 9.84594 20.8357 8.38029L19.2751 4.86883C18.5804 3.30591 16.7217 2.63908 15.192 3.40396L15 3.49995Z" },
                ].map((item, index) => (
                  <label htmlFor={item.id} className="inline-flex cursor-pointer flex-col items-start gap-1 rounded-lg border border-neutral-700 p-3 transition hover:bg-neutral-700/30 has-[:checked]:bg-green-600/20 has-[:checked]:border-green-500/80 pb-8" key={index}>
                    <input id={item.id} type="radio" name="industry" className="peer h-4 w-4 cursor-pointer bg-transparent border border-neutral-600 text-green-500 transition duration-300 ease-in-out focus:ring-2 focus:ring-green-500 hidden" />
                    {/*  */}
                    <div className='opacity-0 size-6 flex items-center justify-center rounded-md bg-green-500 text-white peer-checked:opacity-100'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center w-full'>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-12'>
                        <path d={item.icon} stroke="#fff" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="font-medium text-neutral-300">{item.name}</span>
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
                  { icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z", title: "Industry you're in", description: "Select the industry that describes your business" },
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
