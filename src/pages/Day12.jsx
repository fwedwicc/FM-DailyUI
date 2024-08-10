import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day012 = () => {
  useLenisScroll();
  useScrollToTop();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        {/* Navbar */}
        <nav className='relative flex items-center justify-between h-[15vh] lg:px-24 px-12'>
          <a className="inline-block" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          {/* Desktop Navigation */}
          <ul className='hidden md:flex text-neutral-300 gap-9'>
            <li><a href="#">Home</a></li>
            <li><a href="#" className='font-bold'>Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden flex items-center p-2 rounded-md focus:bg-neutral-700 hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6h15m-15 6h15m-15 6h15" />
            </svg>
          </button>
          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className='absolute top-full right-12 -mt-8 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
              <ul className='text-neutral-300 text-center'>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out rounded-t-lg'>Home</a></li>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>Shop</a></li>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>About</a></li>
                <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>Contact</a></li>
              </ul>
              <div className='flex flex-col gap-3 p-4'>
                <div className='flex items-center justify-center gap-3'>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                  </button>
                  <img
                    className="size-7 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                    src="https://avatars.githubusercontent.com/u/84505567?v=4"
                    alt="Bot Avatar"
                  />
                </div>
                <Button
                  styles={'inline-flex justify-center items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                  label={'My Cart'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
          {/* Desktop Buttons */}
          <div className='hidden md:flex gap-6'>
            <div className='flex items-center gap-3'>
              <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>
              <Button
                styles={'inline-flex items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'My Cart'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </Button>
            </div>
            <img
              className="size-9 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
              src="https://avatars.githubusercontent.com/u/84505567?v=4"
              alt="Bot Avatar"
            />
          </div>
        </nav>
        <section className='lg:px-24 px-12 space-y-5'>
          {/* Breadcrumbs */}
          <nav>
            <ol className='flex items-center gap-2.5 text-neutral-400'>
              {['Men Fashion', 'Jacket & Coats', 'Chicago Oversized Biker Jacket'].map((link, index) => (
                <>
                  <li key={index}>
                    <a href='#' className={`text-sm ${index === 2 ? 'text-neutral-200' : ''}`}>
                      {link}
                    </a>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${index === 2 ? 'hidden' : 'size-3'}`}>
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </>
              ))}
            </ol>
          </nav>
          {/* Main grid */}
          {/* <img src="https://eu.thefrankieshop.com/cdn/shop/products/CHICAGO-OVERSIZED-BIKER-JACKET-CHARCOAL-KOREA-03.jpg?v=1722868490&width=1944" alt="" className='object-cover w-full h-auto' /> */}
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-14'>
            <div className='col-span-1'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam possimus accusamus excepturi eum mollitia blanditiis incidunt iure nihil expedita, asperiores amet odit maiores facere impedit, aut distinctio animi pariatur!
            </div>
            <div className='col-span-1 space-y-7'>
              {/* Upper part */}
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <a href='#' className='flex items-center gap-4'>
                    <span className="inline-flex size-[38px] items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold leading-none text-white">X</span>
                    <span className='text-neutral-300 text-sm font-semibold text-nowrap'>
                      Xolero
                    </span>
                  </a>
                  <span className="leading-relaxed text-neutral-500 text-sm">
                    ID: 24-HR23SK3900P
                  </span>
                </div>
                <h1 className="text-2xl font-medium text-neutral-300 lg:text-3xl">
                  Chicago Oversized Biker Jacket
                </h1>
                <div className='flex items-center gap-3'>
                  <div class="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg class={`w-4 h-4 ms-1 ${index === 4 ? 'text-neutral-600' : 'text-yellow-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" key={index}>
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="leading-relaxed text-neutral-400 text-sm">
                    (4.6 from 328 views)
                  </span>
                </div>
              </div>
              {/* Lower part */}
              <div className='space-y-3'>
                {/* Price */}
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col gap-2'>
                    <span className="leading-relaxed text-neutral-400 text-sm">
                      Price
                    </span>
                    <span className="inline-flex items-center gap-4">
                      <h1 className='font-medium text-neutral-300 text-3xl lg:text-5xl'>$350</h1>
                      <span className='line-through text-neutral-500 text-2xl lg:text-4xl'>$600</span>
                    </span>
                  </div>
                  <div className='flex items-end flex-col gap-2'>
                    <span className="leading-relaxed text-neutral-400 text-sm">
                      Quantity
                    </span>
                    <div className='border border-neutral-700 rounded-md text-neutral-300'>
                      <button className='border-r border-neutral-700 px-2.5 py-1 focus:ring-2 focus:ring-neutral-400 transition duration-300 ease-in-out hover:bg-neutral-600/40 rounded-l-md'>-</button>
                      <span className='px-2.5 py-1'>2</span>
                      <button className='border-l border-neutral-700 px-2.5 py-1 focus:ring-2 focus:ring-neutral-400 transition duration-300 ease-in-out hover:bg-neutral-600/40 rounded-r-md'>+</button>
                    </div>
                  </div>
                </div>
                {/* Color */}
                <div className='space-y-1.5'>
                  <span className="leading-relaxed text-neutral-400 text-sm">
                    Color
                  </span>
                  <div className='space-x-3'>
                    {[...Array(2)].map((_, index) => (
                      <input type="radio" className="size-5 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" key={index} checked={index === 1} />
                    ))}
                  </div>
                </div>
                {/* Size */}
                <div className='space-y-1.5'>
                  <span className="leading-relaxed text-neutral-400 text-sm">
                    Size
                  </span>
                  <div className='space-x-3 pb-2'>
                    {[
                      {
                        label: 'XS',
                        id: 'option-1',
                      },
                      {
                        label: 'S',
                        id: 'option-2',
                      },
                      {
                        label: 'M',
                        id: 'option-3',
                      },
                      {
                        label: 'L',
                        id: 'option-4',
                      },
                      {
                        label: 'XL',
                        id: 'option-5',
                      }
                    ].map((size, index) => (
                      <label htmlFor={size.id} className="inline-flex flex-col cursor-pointer items-start rounded-md bg-neutral-700/50 text-neutral-300 py-2 px-3 transition hover:bg-neutral-700 has-[:checked]:bg-neutral-300 has-[:checked]:text-neutral-800" key={index}>
                        <div className="flex items-center gap-3">
                          <input id={size.id} type="radio" name='size' className="hidden" checked={index === 3} />
                          <span className='font-medium text-sm'>{size.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <a href='#' className="leading-relaxed text-blue-400 text-xs">
                    Size guide
                  </a>
                </div>
              </div>
              {/* Action Buttons */}
              <div>
                <div className='flex items-center gap-4 flex-grow pb-3'>
                  <Button
                    styles={'flex items-center justify-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-none focus:ring-neutral-200/60 flex-grow'}
                    label={'Buy now'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </Button>
                  <Button
                    styles={'flex items-center justify-center gap-2.5 text-neutral-200 bg-neutral-700/50 hover:bg-neutral-700 border-none focus:ring-neutral-600/60 flex-grow'}
                    label={'Add to cart'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </Button>
                  <button className='size-11 shrink-0 flex justify-center items-center text-red-500 bg-transarent border hover:bg-neutral-700 border-neutral-700 focus:ring-neutral-200/60 rounded-md focus:ring-2 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                  </button>
                </div>
                <span className="inline-flex items-center gap-2 leading-relaxed text-green-500 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                    <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                    <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>
                  Free delivery on orders over $30.0
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div >
  )
}

export default Day012
