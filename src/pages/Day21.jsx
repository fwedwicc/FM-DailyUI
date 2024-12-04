import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { fmUILogo } from '../assets'
import { Button } from '../components';
import { motion } from 'framer-motion'

const Day21 = () => {
  useLenisScroll();
  useScrollToTop();

  const CustomTab = () => {
    const label = [
      'Living room',
      'Bed room',
      'Garage',
      'Back yard',
    ]

    return (
      <nav className='flex flex-wrap gap-3'>
        {label.map((tab, index) => {
          const isActive = tab === 'Living room';
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
        <Button
          styles={'hidden md:flex flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
          label={'Add new'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
        </Button>
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
      <main className="bg-neutral-800">
        {/* WEB: Sidebar */}
        <aside className='md:block hidden fixed h-full w-24 p-3'>
          <div className='flex flex-col items-center justify-between p-1.5 w-full h-full border border-neutral-700 bg-neutral-700/30 rounded-xl'>
            <div className='space-y-2'>
              <a className="size-12 flex items-center justify-center rounded-full mb-5" href="#">
                <span className="sr-only">Home</span>
                <img src={fmUILogo} alt="fmUI Logo" className='w-14 h-auto' />
              </a>
              {[
                'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
                'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
                'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
                'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
              ].map((item, index) => (
                <button className={`size-12 rounded-full transition duration-300 ease-in-out text-white flex items-center justify-center ${index === 0 ? 'bg-green-500 text-white' : 'bg-neutral-700 hover:bg-neutral-600/70'}`} key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item} />
                  </svg>
                </button>
              ))}
            </div>
            <button className='size-12 rounded-full bg-red-200/5 hover:bg-neutral-600/70 transition duration-300 ease-in-out text-red-500 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
            </button>
          </div>
        </aside>
        <section className='sm:ml-[6.5rem]'>
          <div className='sm:pl-0 p-6 space-y-5'>
            {/* Header */}
            <header className='flex justify-between items-start'>
              <CustomTab />
              <div className='flex items-center gap-3'>
                {[
                  "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0",
                  ['M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z', 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'],
                  "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                ].map((button, index) => (
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out' key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      {Array.isArray(button) ? (
                        button.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)
                      ) : (
                        <path fillRule="evenodd" clipRule="evenodd" d={button} />
                      )}
                    </svg>
                  </button>
                ))}
                <img
                  className="size-8 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                  src="https://avatars.githubusercontent.com/u/823537?v=4"
                  alt="Bot Avatar"
                />
              </div>
            </header>
            {/* Main Content */}
            <div className='space-y-3'>
              <div className='grid grid-cols-4 gap-3'>
                <div className='border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <div className='flex items-center gap-3'>
                    <div className='inline-flex items-center justify-center p-3 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-neutral-200 text-2xl font-semibold'>23 C</h3>
                      <p className='text-neutral-400 leading-none'>Lorem ipsum dolor</p>
                    </div>
                  </div>
                </div>
                <div className='border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <p className='text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro animi provident facilis, itaque, quisquam repudiandae impedit placeat fugit dolor possimus aperiam, cumque distinctio! Delectus quaerat repellat necessitatibus hic. Nemo, harum!</p>
                </div>
                <div className='col-span-2 border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <p className='text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro animi provident facilis, itaque, quisquam repudiandae impedit placeat fugit dolor possimus aperiam, cumque distinctio! Delectus quaerat repellat necessitatibus hic. Nemo, harum!</p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <p className='text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro animi provident facilis, itaque, quisquam repudiandae impedit placeat fugit dolor possimus aperiam, cumque distinctio! Delectus quaerat repellat necessitatibus hic. Nemo, harum!</p>
                </div>
                <div className='border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <p className='text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro animi provident facilis, itaque, quisquam repudiandae impedit placeat fugit dolor possimus aperiam, cumque distinctio! Delectus quaerat repellat necessitatibus hic. Nemo, harum!</p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <p className='text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro animi provident facilis, itaque, quisquam repudiandae impedit placeat fugit dolor possimus aperiam, cumque distinctio! Delectus quaerat repellat necessitatibus hic. Nemo, harum!</p>
                </div>
                <div className='border bg-neutral-700/40 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <p className='text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro animi provident facilis, itaque, quisquam repudiandae impedit placeat fugit dolor possimus aperiam, cumque distinctio! Delectus quaerat repellat necessitatibus hic. Nemo, harum!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

export default Day21
