import React from 'react';
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'

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
      <main className="bg-neutral-800 border">
        <div className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1 md:min-h-screen'>
          {/* Left Content */}
          <div className='lg:col-span-4 md:col-span-3 p-4 col-span-1 border flex flex-col justify-between'>
            {/* Header */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
            {/* Main Content */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
            {/* Footer */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
          </div>
          {/* Right Content */}
          <div className='lg:col-span-2 md:col-span-2 md:pl-0 md:pt-4 pt-0 p-4 col-span-1 border flex flex-col justify-between'>
            {/* Main Content */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
            {/* Footer */}
            <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus, itaque dolorum corporis quod nam culpa at! Inventore illo quam aut distinctio debitis, molestias, fuga sit ipsam nobis sed dignissimos.</div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Draft
