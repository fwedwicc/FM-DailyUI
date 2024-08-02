import React from 'react'
import { FMLogo } from '../assets'
import { motion } from 'framer-motion'
import useLenisScroll from '../hooks/useLenisScroll'
import { glowEllipse, fmUIMockup } from '../assets/home'
import { Card } from '../components'
import { Cards } from '../data'
import useScrollRestoration from '../hooks/useScrollRestoration';

const Home = () => {
  useLenisScroll();
  useScrollRestoration();

  const Hero = () => {
    return (
      <main className="relative lg:h-screen h-auto lg:gap-8 gap-0 grid lg:grid-cols-2 grid-cols-1">
        <img src={glowEllipse} alt="Glow Ellipse" className="absolute inset-0 z-0" />
        <div className="rounded-2xl h-full p-[1px] bg-border-gradient z-10 md:mt-10 mt-7 md:ml-10 ml-7">
          <div className='relative rounded-2xl h-full md:p-10 p-7 bg-neutral-900'>
            <img src={glowEllipse} alt="Glow Ellipse" className="absolute inset-0 z-0 rounded-tl-2xl" />
            {/* Hero Content */}
            <div className="relative w-full h-full flex flex-col gap-8 justify-center">
              <img src={FMLogo} alt="FM Logo" className='absolute top-0 left-0 w-6 h-auto' />
              <div className='space-y-7 lg:pt-0 pt-12'>
                <span className='bg-green-900/50 text-green-400 rounded-full border border-green-400/40 lg:py-1.5 lg:px-2.5 py-1 px-1.5 inline-flex items-center text-nowrap gap-2 text-xs'>
                  Featuring fmUI
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2 lg:size-3">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className='space-y-2.5'>
                  <h1 className="text-2xl font-bold text-green-50 sm:text-3xl md:text-4xl">
                    <a href="https://www.dailyui.co/" className='underline hover:text-green-500 transition duration-300 ease-in-out'>Daily UI</a> Challenges with <span className='text-green-500'>fmUI</span>: <br /> 100 Days of Innovation
                  </h1>
                  <p className="text-sm leading-relaxed text-green-50/80">
                    Join me on a creative journey through 100 days of Daily UI challenges, each crafted with my custom design system, fmUI. Explore innovative and inspiring UI designs that will elevate your web development skills and ignite your imagination.
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <button className='w-auto relative inline-flex lg:h-10 h-8 overflow-hidden rounded-md p-[1px] hover:shadow-lg hover:shadow-green-500/10 transition duration-300 ease-in-out'>
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cbffd1_0%,#39b259_50%,#cdffcb_100%)]" />
                  <span className=' bg-green-600 hover:bg-green-700 inline-flex h-full w-full cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-md bg-base px-3 lg:px-3.5 py-1 text-xs lg:text-sm font-semibold text-white backdrop-blur-3xl gap-3 ${styles}'>
                    Visit fmUI
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-4">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button className='w-auto relative inline-flex lg:h-10 h-8 overflow-hidden rounded-md p-[1px] hover:shadow-lg hover:shadow-green-500/10 transition duration-300 ease-in-out'>
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cbffd1_0%,#39b259_50%,#cdffcb_100%)]" />
                  <span className=' bg-neutral-900 hover:bg-neutral-950 inline-flex h-full w-full cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-md bg-base px-3 lg:px-3.5 py-1 text-xs lg:text-sm font-medium text-neutral-100 backdrop-blur-3xl gap-3 ${styles}'>
                    Give it a star
                    <svg className="size-3 lg:size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </div>
              <p className="text-xs leading-relaxed text-green-50/80">
                Originally designed and developed by <a href='#' className='text-green-500'>Frederick Moreno</a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden lg:h-auto h-[30rem]">
          <img src={fmUIMockup} alt="fmUI Mockup" className="object-contain w-full h-full" draggable="false" />
        </div>
        {/* TODO: Disclaimer Description */}
      </main>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-neutral-900'
    >
      <Hero />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:px-20 md:px-12 px-6 py-12'>
        {Cards.map((card, index) => (
          <Card
            key={index}
            day={card.day}
            title={card.title}
            desc={card.desc}
            link={card.link}
            img={card.img}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Home
