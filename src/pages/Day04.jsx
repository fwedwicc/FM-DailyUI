import React, { useState } from 'react';
import { fmUILogo } from '../assets'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion, AnimatePresence } from 'framer-motion';

const Day04 = () => {
  useLenisScroll();
  const [activeTab, setActiveTab] = useState('payment');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="lg:min-h-screen lg:px-32 md:px-20 px-8 lg:py-20 py-8">
          <div className='mb-12'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <div className='space-y-4'>
              <h1 className="mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                Mortgage Calculator
              </h1>
              <div>
                <p className="leading-relaxed text-neutral-300">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit, <br className='lg:block hidden' /> Eligendi nam dolorum aliquam quibusdam.
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-7 grid-cols-1 gap-10'>
            <div className='lg:col-span-2 col-span-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae voluptate adipisci eaque tempore sapiente laudantium dolore aliquid reiciendis quos repudiandae, dolorum consequatur quaerat vitae nisi, eos eius maxime? Molestiae.
            </div>
            <div className='lg:col-span-5 col-span-1'>
              <div className='space-x-2 flex'>
                <div className='inline-flex p-1.5 border border-neutral-700/80 gap-2 rounded-[0.4rem]'>
                  <motion.button
                    className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'payment' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                      }`}
                    onClick={() => setActiveTab('payment')}
                    whileTap={{ scale: 0.95 }}
                  >

                    Payment breakdown
                  </motion.button>
                  <motion.button
                    className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'amortization' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                      }`}
                    onClick={() => setActiveTab('amortization')}
                    whileTap={{ scale: 0.95 }}
                  >

                    Amortization
                  </motion.button>
                </div>
              </div>
              <div className="mt-3">
                <AnimatePresence mode="wait">
                  {activeTab === 'payment' ? (
                    <motion.div
                      key="payment"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='p-6'
                    >
                      <h1>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum impedit nostrum, fuga asperiores dolore eaque corrupti debitis at rerum autem, molestias adipisci nulla dolores voluptatibus, vitae necessitatibus vel expedita!</h1>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="amortization"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='p-6'
                    >
                      <h1>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum impedit nostrum, fuga asperiores dolore eaque corrupti debitis at rerum autem, molestias adipisci nulla dolores voluptatibus, vitae necessitatibus vel expedita!</h1>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day04
