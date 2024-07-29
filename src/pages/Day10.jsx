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
                <img src={qrCode} alt="Sample QR Code" className='w-[25rem] h-auto' />
                <p className='text-neutral-300 text-center text-xs px-3 -mt-16'>
                  Scan this code with your phone to <br /> open your document in your browser.
                </p>
              </div>
            </div>
            {/* Right Content */}
            <div className='lg:col-span-7 col-span-1 space-y-6 pl-8 pr-6 py-6'>
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
                <div className='space-y-2'>
                  {recipeints.map((row, index) => (
                    <div className='flex justify-between items-center py-1' key={index}>
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
            </div>
          </div>
        </div>

      </section>
    </motion.div >
  )
}

export default Day10
