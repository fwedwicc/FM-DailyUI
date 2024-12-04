import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'
import { ScrollRestoration } from 'react-router-dom';

const Day21 = () => {
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
        <aside className='fixed h-full w-24 p-3 border'>
          <div className='w-full h-full border rounded-md'></div>
        </aside>
        <section className='ml-24 border'>
          <div className='pl-0 p-3 space-y-5'>
            {/* Header */}
            <header className='flex justify-between items-start border'>
              <p className='text-white'>1</p>
              <p className='text-white'>2</p>
            </header>
            {/* Main Content */}
            <div className='space-y-3'>
              <div className='grid grid-cols-4'>
                <div className='border'>
                  <p className='text-white'>1</p>
                </div>
                <div className='border'>
                  <p className='text-white'>2</p>
                </div>
                <div className='border col-span-2'>
                  <p className='text-white'>3</p>
                </div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='border'>
                  <p className='text-white'>1</p>
                </div>
                <div className='border'>
                  <p className='text-white'>2</p>
                </div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='border'>
                  <p className='text-white'>1</p>
                </div>
                <div className='border'>
                  <p className='text-white'>2</p>
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
