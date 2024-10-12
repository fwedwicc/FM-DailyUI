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
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-[15px] max-w-7xl p-[1.1rem] gap-[1.1rem] w-full flex lg:flex-row flex-col">
          {/* Customer and Vendor Details */}
          <div className='flex flex-col min-w-4xl w-full p-4 z-10 space-y-4'>
            {/* Headline and Description */}
            <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 size-10">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <h1 className="font-medium text-neutral-200 text-2xl md:text-4xl mt-3">
                Payment Success!
              </h1>
              <p className="leading-relaxed text-center text-neutral-300">
                Thank you for your purchase. Your order is on its way
              </p>
              <div className='mt-4'>
                {[
                  { label: "Order No.:", data: "24-WP128JI83P" },
                  { label: "Receive Date:", data: "October 18, 2024" },
                  { label: "Status:", data: "Processing" },
                ].map((detail, index) => (
                  <p className="leading-relaxed text-neutral-300 text-center" key={index}>
                    <span className='text-neutral-400'>
                      {detail.label} </span>
                    {detail.data}
                  </p>
                ))}
              </div>
            </div>
            {/* Vendor Details */}
            <div className='space-y-1'>
              <p className="leading-relaxed text-neutral-400">
                Vendor Details
              </p>
              <div className='flex gap-3 border p-3.5 pr-5 rounded-xl'>
                {/* Company Logo */}
                <div className='relative shrink-0 size-36'>
                  <img src="https://placehold.co/50x50" className='absolute object-cover w-full h-full rounded-md' alt="" />
                </div>
                {/* Company Information */}
                <div className='border w-full'>
                  <span className="leading-relaxed text-neutral-200 text-lg md:text-xl">
                    Xolero
                  </span>
                  <p className="leading-relaxed text-neutral-300 mt-1">
                    Business loc
                  </p>
                  <p className="leading-relaxed text-neutral-300">
                    Website
                  </p>
                  <p className="leading-relaxed text-neutral-300">
                    Email
                  </p>
                  <div className='flex gap-1.5'>
                    socials
                  </div>
                </div>
              </div>
            </div>
            {/* Customer Summary */}
            <div className='space-y-2 pb-3'>
              <div className='flex items-center border-b pb-1.5'>
                <p className="leading-relaxed text-neutral-200 text-md md:text-lg">
                  Customer profile
                </p>
              </div>
              <div>
                {[
                  { label: "Name:", data: "Michael Johnson" },
                  { label: "Email:", data: "michael.johnson@example.com" },
                  { label: "Phone:", data: "+1 (555) 789-0123" },
                  { label: "Shipping Address:", data: "456 Oak Street, Apt 14C, CA 90210 United States" },
                ].map((detail, index) => (
                  <p className="leading-relaxed text-neutral-300" key={index}>
                    <span className='text-neutral-400'>
                      {detail.label} </span>
                    {detail.data}
                  </p>
                ))}
              </div>
            </div>
            {/* Container's Footer */}
            <div className='flex flex-col items-center w-full'>
              <div class="flex w-full items-center text-sm text-neutral-500 before:flex-1 before:border-t before:border-neutral-700 before:me-4 after:flex-1 after:border-t after:border-neutral-700 after:ms-4">
                <div className='size-16 rounded-full flex justify-center items-center bg-neutral-700 text-green-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="leading-relaxed text-neutral-200 text-lg md:text-xl mt-3">
                ShopEase
              </p>
              <p className="leading-relaxed text-neutral-300">
                Shop More, Save More!
              </p>
              <p className='text-xs text-neutral-400 text-center max-w-sm'>
                Explore thousands of products across various categories. Enjoy unbeatable deals, fast shipping, and a seamless shopping experience.
              </p>
            </div>
          </div>
          {/* Purchase Summary */}
          <div className='lg:max-w-xl max-w-full rounded-lg w-full bg-neutral-500/10 p-6 space-y-4'>
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
              <div className='flex gap-3 border p-3.5 pr-5 rounded-xl'>
                {/* Product Image */}
                <div className='relative shrink-0 size-36'>
                  <img src="https://placehold.co/50x50" className='absolute object-cover w-full h-full rounded-md' alt="" />
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
            <div className='space-y-2 pb-3'>
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
            {/* QR for feedback */}
            <div className='border-t border-dashed border-neutral-600 relative px-12'>
              <div className='flex size-9 bg-[#2b2b2b] rounded-full absolute transform -translate-y-1/2 left-[-2.63rem]'></div>
              <div className='flex size-9 bg-[#2b2b2b] rounded-full absolute transform -translate-y-1/2 right-[-2.63rem]'></div>
            </div>
            {/* QR for feedback */}
            <div className='flex gap-2 flex-col items-center pt-3'>
              <div className='relative size-24'>
                <img src={'https://placehold.co/50x50'} alt="" className='absolute rounded-sm object-cover w-full h-full' />
              </div>
              <p className="text-neutral-400 text-xs text-center">
                Scan the QR code for a chance to <br /> win a discount voucher or more surprises!
              </p>
              <a href='' className='flex items-center text-xs gap-1 text-green-500 underline'>
                Download Receipt
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day17
