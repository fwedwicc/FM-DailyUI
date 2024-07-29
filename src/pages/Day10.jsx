import React from 'react'
import { fmUILogo } from '../assets'
import { qrCode } from '../assets/day10'
import { InputField, Button, Tooltip, Select } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day10 = () => {
  useLenisScroll();
  useScrollToTop();

  const recipeints = [
    {
      "avatar": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true",
      "name": "Emma Johnson",
      "email": "emma.johnson@email.com",
      "access": "accepted",
    },
    {
      "avatar": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true",
      "name": "John Smith",
      "email": "john.smith@email.com",
      "access": "sent",
    },
    {
      "avatar": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-4.jpg?raw=true",
      "name": "Olivia Brown",
      "email": "olivia.brown@email.com",
      "access": "sent",
    },
    {
      "avatar": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-1.jpg?raw=true",
      "name": "James Wilson",
      "email": "james.wilson@email.com",
      "access": "accepted",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        {/* Modal */}
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-xl max-w-7xl p-3 space-y-5 w-full">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            {/* Left Content */}
            <div className="lg:col-span-5 col-span-1 space-y-6 bg-neutral-600/10 px-8 py-6 rounded-md">
              <div>
                <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                  Your document is published
                </h1>
                <p className="leading-relaxed text-neutral-400 text-sm">
                  Future change will be published automatically.
                </p>
              </div>
              <div>
                <div className='flex items-end justify-between gap-3 pb-3'>
                  <div className='w-full'>
                    <InputField
                      id="doc-link"
                      label="Document link"
                      type="text"
                      value="https://sharedocumentname.com/34afh231kg"
                    />
                  </div>
                  <Button
                    styles={'inline-flex items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                    label={'Copy'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                  </Button>
                </div>
                <a href="#" className='flex items-center gap-1 text-green-500 text-sm font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add custom domain
                </a>
              </div>
              <div className='flex flex-col justify-center items-center gap-4'>
                <div className='text-center flex items-center w-full py-4'>
                  <hr className='h-px w-full border-neutral-600/70' />
                  <p className='text-neutral-300 text-xs text-nowrap px-3'>
                    Scan to open this document
                  </p>
                  <hr className='h-px w-full border-neutral-600/70' />
                </div>
                <img src={qrCode} alt="Sample QR Code" className='w-[25rem] h-auto lg:mt-12' />
                <p className='text-neutral-300 text-center text-xs px-3 -mt-16'>
                  Scan this code with your phone to <br /> open your document in your browser.
                </p>
              </div>
            </div>
            {/* Right Content */}
            <div className='lg:col-span-7 col-span-1 space-y-6 lg:pl-8 pl-6 pr-6 pt-6'>
              <div>
                <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                  Invite people to your document
                </h1>
                <p className="leading-relaxed text-neutral-400 text-sm">
                  We'll email them instructions and a link to create an accont.
                </p>
              </div>
              <div>
                <div className='flex items-end justify-between gap-3 pb-3'>
                  <div className='w-full'>
                    <InputField
                      id="email-add"
                      label="Email Address"
                      type="text"
                      placeholder='john.doe@email.com'
                    />
                  </div>
                  <Button
                    styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                    label={'Send invite'}
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <p className="leading-relaxed text-neutral-300 text-sm">
                    Recipeints
                  </p>
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id vero consequuntur saepe. Quia tempora."
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </div>
                <div className='space-y-0 lg:space-y-2'>
                  {recipeints.map((row, index) => (
                    <div className='flex justify-between items-center lg:py-1 py-3 flex-wrap gap-3 w-full md:border-none border-b border-neutral-700' key={index}>
                      <div className='flex items-center gap-4'>
                        <img className="size-9 border-2 border-neutral-300 rounded-full" src={row.avatar} alt="Sample Avatar Profile" />
                        <div className='flex flex-col'>
                          <span className="text-neutral-300 text">
                            {row.name}
                          </span>
                          <span className="text-neutral-400 text-sm">
                            {row.email}
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-3 items-center'>
                        {row.access === "sent" ? (
                          <span className="leading-relaxed text-nowrap text-neutral-300 px-2.5 py-[2px] rounded-full text-xs bg-neutral-700">
                            Invite sent
                          </span>
                        ) : (
                          <span className="leading-relaxed text-nowrap text-green-200 px-2.5 py-[2px] rounded-full text-xs bg-green-800/60">
                            Invite accepted
                          </span>
                        )}
                        <Select
                          id="access"
                          options={[
                            { value: 'CV', label: 'Can view' },
                            { value: 'CE', label: 'Can edit' },
                            { value: 'A', label: 'Admin' },
                            { value: 'DA', label: 'Default Access' },
                          ]}
                          required={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <p className="leading-relaxed text-neutral-300">
                    Access settings
                  </p>
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id vero consequuntur saepe. Quia tempora."
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </div>
                <div className='space-y-[8px]'>
                  {[
                    {
                      "icon": "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
                      "label": "Anyone at Company Co. can view",
                      "action": "Change access",
                    },
                    {
                      "icon": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z",
                      "label": "Anyone with the link can edit",
                      "action": "Set password",
                    }
                  ].map((row, index) => {
                    const parts = row.label.split('Company Co.');
                    return (
                      <div className='flex justify-between items-center' key={index}>
                        <div className='flex items-center gap-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-neutral-300">
                            <path fillRule="evenodd" d={row.icon} clipRule="evenodd" />
                          </svg>
                          <span className="text-neutral-400 text-sm">
                            {parts[0]}
                            <span className={`${index === 1 ? 'hidden' : ''} text-green-500`}>Company Co.</span>
                            {parts[1]}
                          </span>
                        </div>
                        <a href='#' className="text-blue-500 font-semibold text-sm">
                          {row.action}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='rounded-md bg-neutral-700/30 border border-neutral-600/40 py-4 px-6 space-y-4'>
                <div>
                  <div className='flex justify-between items-start'>
                    <span className="leading-relaxed text-neutral-200 font-bold text-sm">
                      4/10 team seats used
                    </span>
                    <a href='#' className="leading-relaxed text-green-500 font-bold text-sm">
                      Manage
                    </a>
                  </div>
                  <p className="leading-relaxed text-neutral-400 text-sm">
                    You can upgrade your account to add more users to your team.
                  </p>
                </div>
                <div className="w-full bg-neutral-600 rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='px-6 pb-2'>
            <div className='flex flex-wrap-reverse justify-end md:gap-3 gap-2'>
              <Button
                styles={'flex items-center gap-2.5 text-neutral-200 bg-neutral-700/50 hover:bg-neutral-700 border-none focus:ring-neutral-600/60'}
                label={'Get embed code'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </Button>
              <Button
                styles={'flex items-center gap-2.5 text-neutral-200 bg-neutral-700/50 hover:bg-neutral-700 border-none focus:ring-neutral-600/60'}
                label={'Copy link'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </Button>
              <Button
                styles={'flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Done'}
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div >
  )
}

export default Day10
