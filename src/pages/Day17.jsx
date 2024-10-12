import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day17 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        {/* Modal */}
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-[15px] max-w-7xl p-3 w-full flex lg:flex-row flex-col">
          {/* Customer and Vendor Details */}
          <div className='flex min-w-4xl w-full border'>

          </div>
          {/* Purchase Summary */}
          <div className='lg:max-w-xl max-w-full rounded-lg w-full border p-6 space-y-4'>
            <h1 className="font-medium text-center text-neutral-200 text-xl md:text-2xl">
              Purchase Summary
            </h1>
            <div className='mt-4 space-y-1'>
              {/* Receipt No. and Purchase Date */}
              <div className='flex justify-between items-center'>
                <p className="leading-relaxed text-neutral-400">
                  Receipt No.:
                </p>
                <p className="leading-relaxed text-neutral-400">
                  Purchase Date:
                </p>
              </div>
              {/* Product Container */}
              <div className='flex gap-3 border p-3 pr-5 rounded-xl'>
                {/* Product Image */}
                <div className='relative shrink-0 size-36'>
                  <img src="https://placehold.co/50x50" className='absolute object-cover w-full h-full rounded-lg' alt="" />
                </div>
                {/* Prodcut Details */}
                <div className='border w-full'>
                  <span className="leading-relaxed text-neutral-200 text-lg md:text-xl">
                    Chicago Biker Jacket
                  </span>
                  <p className="leading-relaxed text-neutral-300 mt-1">
                    Color
                  </p>
                  <p className="leading-relaxed text-neutral-300">
                    Size
                  </p>
                  <p className="leading-relaxed text-neutral-300">
                    Quantity
                  </p>
                  <div className='flex items-end justify-between'>
                    <p className="leading-none text-neutral-400">
                      ID: 24-HR23SK3900P
                    </p>
                    <p className="leading-none text-green-500 text-2xl">
                      $350
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Method Container */}
            <div className='border p-3 pr-5 rounded-xl space-y-2'>
              <p className="leading-relaxed text-neutral-200 text-md md:text-lg">
                Payment Method
              </p>
              <div className='flex gap-3'>
                <div className='flex items-center justify-center p-4 border rounded-md'>
                  <img src="https://placehold.co/80x60" className='shrink-0' alt="" />
                </div>
                <div className='w-full border'>
                  <p className="leading-relaxed text-neutral-300">
                    <span className='text-neutral-400'>
                      Card Type: </span>
                    Mastercard
                  </p>
                  <p className="leading-relaxed text-neutral-300">
                    <span className='text-neutral-400'>
                      Card Number: </span>
                    5555 5555 5555 4444
                  </p>
                  <p className="leading-relaxed text-neutral-300">
                    <span className='text-neutral-400'>
                      Cardholder Name: </span>
                    John Doe
                  </p>
                </div>
              </div>
            </div>
            {/* Price breakdown */}
            <div className='space-y-2'>
              <div className='flex justify-between items-center border-b pb-1.5'>
                <p className="leading-relaxed text-neutral-200 text-md md:text-lg">
                  Description
                </p>
                <p className="leading-relaxed text-neutral-200 text-md md:text-lg">
                  Subtotal
                </p>
              </div>
              <div>
                {[
                  { desc: "Chicago Biker Jacket", price: 350 },
                  { desc: "Shipping Fee", price: 50.99 },
                ].map((line, index) => (
                  <div className='flex justify-between items-center' key={index}>
                    <p className="leading-relaxed text-neutral-300">
                      {line.desc}
                    </p>
                    <p className="leading-relaxed text-neutral-300">
                      ${line.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className='flex justify-between items-center border-t pt-1.5'>
                <p className="leading-relaxed text-neutral-200 text-md md:text-lg">
                  Total
                </p>
                <p className="leading-relaxed text-green-500 text-md md:text-lg">
                  $400.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day17
