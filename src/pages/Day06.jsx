import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll';
import { fmAvatar, qcuLogo, profileBackground } from '../assets/day06';
import { Button } from '../components';
import { motion, AnimatePresence } from 'framer-motion';

const Day06 = () => {
  useLenisScroll();
  const [activeTab, setActiveTab] = useState('posts');
  const [isOpen, setIsOpen] = useState(false);


  const PeopleAlsoViewedData = [
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true",
      "name": "John Reyes",
      "bio": "Computer Science major at Quezon City University. Aspiring Software Engineer.",
    },
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-4.jpg?raw=true",
      "name": "Maria Santos",
      "bio": "Information Technology student at Quezon City University. Passionate about UI/UX Design.",
    },
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-5.jpg?raw=true",
      "name": "Michael Cruz",
      "bio": "Engineering student at Quezon City University. Enthusiastic about robotics and AI.",
    },
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true",
      "name": "Angelica Flores",
      "bio": "Multimedia Arts student at Quezon City University. Focused on graphic design and animation.",
    }
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 relative">
        <div className='lg:h-60 md:h-52 h-44 w-full absolute -z-0'>
          <img
            src={profileBackground}
            alt="Background Image"
            className='object-cover h-full w-full'
            style={{ aspectRatio: '16/9' }}
          />
        </div>
        <div className="relative h-auto lg:px-32 md:px-24 px-8 lg:py-20 py-8 z-10 space-y-8">
          <div className='flex justify-between items-center lg:pt-16 md:pt-20 pt-12'>
            <div>
              <div className="relative inline-block">
                <img className="size-48 p-1.5 rounded-full ring-4 ring-green-500" src={fmAvatar} alt="Frederick Moreno - Avatar Profile" />
                <div className="absolute bottom-0 right-[-5rem] flex items-center space-x-2 bg-neutral-700 border border-neutral-600/70 py-1 px-2 rounded-full">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="text-xs text-neutral-200 whitespace-nowrap">Available for work</span>
                </div>
              </div>
            </div>
            <div className='flex gap-3 relative pt-20'>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden flex items-center p-2 rounded-md focus:bg-neutral-700 hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              {/* Mobile Dropdown Menu */}
              {isOpen && (
                <div className='absolute top-full right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
                  <div className='flex flex-col gap-2 p-4'>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                      label={'Message'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>
                    </Button>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                      label={'Connect'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              )}
              <Button
                styles={'hidden md:flex flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'Message'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </Button>
              <Button
                styles={'hidden md:flex flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Connect'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className='flex lg:justify-between lg:items-center items-start flex-col lg:flex-row justify-start gap-7'>
            <div className='space-y-5'>
              <span className='flex items-center gap-3'>
                <h1 className="text-3xl font-medium text-neutral-200 sm:text-4xl md:text-5xl text-nowrap">
                  Frederick Moreno
                </h1>
                <span className='font-thin text-lg text-neutral-400'>(He/Him)</span>
                <span className='inline-flex gap-2 items-center font-medium text-sm text-neutral-300 px-3 py-1 border border-green-700 bg-green-900/40 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  Verified
                </span>
              </span>
              <div className='space-y-1'>
                <span className="block leading-relaxed text-neutral-300">
                  Front-end Developer | UI/UX Designer | BSIT Student
                </span>
                <span className="block leading-relaxed text-neutral-300">
                  National Capital Region, Philippines
                  <span className='mx-3 text-neutral-400'>•</span>
                  <a href="#" className='text-blue-500 text-sm font-semibold text-nowrap'>
                    Contact info
                  </a>
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className="flex -space-x-2">
                  <img className="size-9 border-2 border-neutral-300 rounded-full" src="https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true" alt="Sample Avatar Profile" />
                  <img className="size-9 border-2 border-neutral-300 rounded-full" src="https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true" />
                  <img className="size-9 border-2 border-neutral-300 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
                  <span className="flex items-center justify-center size-9 text-xs font-medium text-white bg-neutral-700 border-2 border-neutral-300 rounded-full">+99</span>
                </div>
                <a href="#" className='text-neutral-300 text-sm text-nowrap'>
                  179+ Connections
                </a>
              </div>
            </div>
            <div className='space-y-4 flex flex-col lg:items-end md:items-start items-start'>
              <div className="text-neutral-300 font-semibold text-lg inline-flex items-center gap-3">
                <img src={qcuLogo} alt="QCU Logo" className='w-12 h-auto' />
                Quezon City University
              </div>
              <div className='border border-neutral-600/40 bg-neutral-700/40 p-4 rounded-md'>
                <h2 className="leading-relaxed text-neutral-300 font-semibold">
                  Open to work
                </h2>
                <p className="leading-relaxed text-neutral-300">
                  Web Developer, React Developer, Front-end Developer and UI/UX Designer roles
                </p>
                <a href="#" className='text-blue-500 text-sm font-semibold text-nowrap'>
                  Show details
                </a>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1'>
            <div className='lg:col-span-2 col-span-1 self-start'>
              <div className='border-y border-neutral-700/60 py-10 pr-10 space-y-3'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  About
                </h1>
                <p className="leading-relaxed text-neutral-400 pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla id! Doloremque eum a libero quidem sapiente quia! Quas quisquam, delectus consectetur blanditiis ex quis aut accusamus amet quia nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum voluptatem neque dignissimos quae voluptas quisquam perspiciatis repellendus. Commodi quia maxime a beatae tempora iusto, quidem eius.
                </p>
                <div className='py-5 px-7 flex justify-between items-center border-neutral-600/40 bg-neutral-700/40 rounded-md'>
                  <div className='space-y-3'>
                    <h1 className="text-lg text-neutral-300 lg:text-xl inline-flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                      </svg>
                      Top skills
                    </h1>
                    <p className="leading-relaxed text-neutral-300">
                      Web Development • Front-End Development • Responsive Web Design • User Interface Design • User Experience Design
                    </p>
                  </div>
                  <a href="#" className='border border-green-500 hover:bg-green-500/20 transition duration-300 ease-in-out p-2.5 rounded-full text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className='border-y border-neutral-700/60 py-10 pr-10 space-y-3'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  Activity
                </h1>
                <span className="leading-relaxed text-neutral-400 text-sm pb-4">
                  1,083 followers
                </span>
                <div>
                  <div className='space-x-2 flex'>
                    <div className='inline-flex p-1.5 border border-neutral-700/80 gap-2 rounded-[0.4rem]'>
                      <motion.button
                        className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'posts' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                          }`}
                        onClick={() => setActiveTab('posts')}
                        whileTap={{ scale: 0.95 }}
                      >

                        Posts
                      </motion.button>
                      <motion.button
                        className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'comments' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                          }`}
                        onClick={() => setActiveTab('comments')}
                        whileTap={{ scale: 0.95 }}
                      >

                        Comments
                      </motion.button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <AnimatePresence mode="wait">
                      {activeTab === 'posts' ? (
                        <motion.div
                          key="payment"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='p-6 space-y-6'
                        >
                          1
                        </motion.div>
                      ) : (
                        <motion.div
                          key="comments"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='p-6 space-y-12'
                        >
                          2
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1 border-y border-l border-neutral-700/60 pl-8 py-8 space-y-4 self-start'>
              <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                People also viewed
              </h1>
              <div className='space-y-2'>
                {PeopleAlsoViewedData.map((card, index) => {
                  return (
                    <div className='flex justify-between items-center pl-6 p-4 hover:bg-neutral-700/40 transition duration-300 ease-in-out rounded-md cursor-pointer' key={index}>
                      <div className='space-y-4'>
                        <div className='flex items-center gap-5'>
                          <img className="size-10 border-2 border-neutral-600 rounded-full" src={card.img} alt="Sample Avatar Profile" />
                          <div className='flex flex-col items-start'>
                            <span className="leading-relaxed text-neutral-300">
                              {card.name}
                            </span>
                            <span className="leading-relaxed font-thin text-sm text-neutral-400 line-clamp-1">
                              {card.bio}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        styles={'flex items-center px-2 text-neutral-200 bg-transparent hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                      </Button>
                    </div>
                  )
                })}
              </div>
              <Button
                styles={'w-full text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'Show more'}
              >
              </Button>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Day06;
