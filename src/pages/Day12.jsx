import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { productLg, productSm01, productSm02, productSm03, productSm04, fadeBg } from '../assets/day12'
import { InputField, Checkbox, Select, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day12 = () => {
  useLenisScroll();
  // useScrollToTop();

  const [isOpen, setIsOpen] = useState(false);

  const sizeOptions = [
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
  ]

  const Feedback = [
    {
      profile: "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true",
      name: "John Doe",
      date: "July 22, 2024",
      message: "I recently purchased this product, and I must say I'm thoroughly impressed. The quality is top-notch, and it exceeded all my expectations. The fabric is soft and comfortable, yet durable enough to withstand daily wear. The stitching is precise, adding to the overall premium feel of the product. What truly stands out is the attention to detail.",
      likes: 22,
    },
    {
      profile: "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-4.jpg?raw=true",
      name: "Jane Smith",
      date: "August 3, 2024",
      message: "After searching for the perfect addition to my wardrobe, I finally found this gem! The quality of this product is outstanding. The material feels luxurious, and the fit is absolutely perfect. I've received numerous compliments every time I wear it.",
      likes: 38,
    },
    {
      profile: "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-5.jpg?raw=true",
      name: "Michael Brown",
      date: "July 15, 2024",
      message: "This product has quickly become a staple in my daily routine. The build quality is superb, and it's clear that this was made with care and precision. It's rare to find a product that combines both aesthetic appeal and functionality so well. The design is modern and sleek, and it goes well with almost anything in my closet.",
      likes: 26,
    },
    {
      profile: "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true",
      name: "Emily Davis",
      date: "August 9, 2024",
      message: "I'm absolutely in love with this product! From the moment I unpacked it, I could tell that it was something special. The attention to detail is remarkable, and it's evident that a lot of care went into its creation. The fabric is soft yet durable, and it drapes beautifully. What I love most is how versatile it is – it can easily be dressed up or down depending on the occasion. ",
      likes: 79,
    },
  ];

  const Link = ({ link, svg }) => {
    return (
      <li className='inline-flex'>
        <a href={link} className='p-1.5 rounded-md group hover:bg-neutral-800 transition duration-300 ease-in-out'>
          <svg className="size-6 group-hover:text-green-500 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d={svg} clip-rule="evenodd" />
          </svg>
        </a>
      </li>
    )
  }

  const LinkList = ({ title, names = [] }) => {
    return (
      <ul className='text-neutral-300 lg:text-base text-sm space-y-3'>
        <li className='mb-7'>
          <span className='text-neutral-400 font-thin'>{title}</span>
        </li>
        {names.map((name, index) => (
          <li key={index}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
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
        {/* First Section */}
        <section className='lg:px-24 px-12 lg:pb-36 pb-20 space-y-5'>
          {/* Breadcrumbs */}
          <nav>
            <ol className='flex items-center gap-2.5 text-neutral-400'>
              {['Women Fashion', 'Jacket & Coats', 'Chicago Oversized Biker Jacket'].map((link, index) => (
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
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-14'>
            <div className='col-span-1 flex flex-col gap-4'>
              <div className='flex-grow flex-shrink-0 lg:h-full md:h-[30rem] h-[20rem] border-2 border-neutral-600/60 relative rounded-[8px]'>
                <img src={productLg} alt="Product Overview" className='absolute object-cover w-full h-full rounded-[7px]' />
              </div>
              <div className='flex md:gap-4 gap-3'>
                {[productSm01, productSm02, productSm03, productSm04].map((product, index) => (
                  <div className='border-4 border-neutral-800 ring-2 ring-neutral-600/70 md:size-[5rem] size-[4rem] relative rounded-[4px] cursor-pointer' key={index}>
                    <img src={product} alt="Product Overview" className='absolute object-cover w-full h-full rounded-[3px]' />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-span-1 space-y-7'>
              {/* Upper part */}
              <div className='space-y-2'>
                <div className='flex justify-between items-center pb-2'>
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
                    {sizeOptions.map((size, index) => (
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
        {/* Second Section */}
        <section className=' bg-neutral-900/40 lg:px-24 px-12 py-12 space-y-12'>
          {/* Descriptions */}
          <div className='gap-8 grid lg:grid-cols-2 grid-cols-1'>
            <div className="flex flex-col text-3xl font-medium text-neutral-300 lg:text-4xl uppercase">
              <span className='inline-flex items-center gap-3'>
                <span>
                  Stylish Women's Coat
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 size-12">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Your Outerwear Upgrade</span>
            </div>
            <p className="leading-relaxed text-neutral-400">
              Discover ultimate comfort and style with our diverse collection of women's coats! Whether you're looking for a timeless trench coat or a cozy, insulated parka, we offer a wide range of options to keep you warm and fashionable throughout every season. Embrace the perfect blend of functionality and elegance, no matter the weather.
            </p>
          </div>
          {/* Product Image Overview */}
          <div className='lg:h-[40rem] h-[50rem] grid lg:grid-cols-3 grid-cols-1 gap-8'>
            {[
              {
                img: productSm01,
                heading: 'Elegant coat with the best materials',
                label: '97% Polyester'
              },
              {
                img: productSm03,
                heading: 'Durable and strong stitches',
                label: 'Neat Stitches'
              },
              {
                img: productSm02,
                heading: 'Sophisticated and timeless design',
                label: 'Premium Quality Wool'
              },
            ].map((product, index) => (
              <div className='relative border-2 border-neutral-600/60 rounded-[11px]' key={index}>
                <img src={fadeBg} alt="Fade Effect" className='opacity-80 absolute object-cover w-full h-full rounded-[10px] z-10' />
                <img src={product.img} alt="Product Overview" className='absolute object-cover w-full h-full rounded-[10px]' />
                <div className='absolute bottom-7 px-7 z-20 space-y-2'>
                  <p className="leading-relaxed text-neutral-300">
                    {product.label}
                  </p>
                  <h1 className="text-2xl font-medium text-neutral-200 lg:text-3xl">
                    {product.heading}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className='gap-8 flex flex-wrap justify-around items-center'>
            {/* Product Detail */}
            <div className='space-y-4'>
              <h1 className="text-2xl font-medium text-neutral-300 lg:text-3xl">
                Product Detail
              </h1>
              <div className='flex gap-14'>
                <ul className='list-disc list-inside text-neutral-300 space-y-2'>
                  {['Midweight women fabric', 'Regular fit', 'Peak lapels', 'Drop shoulders', 'Front-flap pockets'].map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <ul className='list-disc list-inside text-neutral-300 space-y-2'>
                  {['Laten zipper', 'Front illusion welt pocket', '97% polyester 3% elastine', 'Double-breasted front zipper closure', 'Dry Clean'].map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Size & Fit */}
            <div className='space-y-4'>
              <h1 className="text-2xl font-medium text-neutral-300 lg:text-3xl">
                Size & Fit
              </h1>
              <div className='space-x-3'>
                {sizeOptions.map((size, index) => (
                  <label htmlFor={size.id} className="inline-flex flex-col cursor-pointer items-start rounded-md bg-neutral-700/50 text-neutral-300 py-2 px-3 transition hover:bg-neutral-700 has-[:checked]:bg-neutral-300 has-[:checked]:text-neutral-800" key={index}>
                    <div className="flex items-center gap-3">
                      <input id={size.id} type="radio" name='size' className="hidden" checked={index === 3} />
                      <span className='font-medium text-sm'>{size.label}</span>
                    </div>
                  </label>
                ))}
              </div>
              <div className='flex gap-12'>
                <div className='leading-relaxed text-neutral-400 space-y-1.5'>
                  {['Shoulder', 'Bust', 'Length', 'Sleeve length'].map((label, index) => (
                    <span className='block' key={index}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className='leading-relaxed text-neutral-300 space-y-1.5'>
                  {['50cm / 19.75in', '124cm / 48.75in', '122cm / 48in', '64cm / 25.25in'].map((label, index) => (
                    <span className='block' key={index}>
                      :  &nbsp; &nbsp; &nbsp; {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Third Section */}
        <section className='lg:px-24 px-12 py-12 space-y-5'>
          {/* Review and Ratings Header */}
          <div className='space-y-5'>
            <h1 className="text-2xl font-medium text-neutral-300 lg:text-3xl">
              Rating & Reviews (328)
            </h1>
            <div className='flex items-center justify-between'>
              <span className="leading-relaxed text-neutral-400 text-sm">
                Showing <span className='text-neutral-200'>4</span> results from totoal of <span className='text-neutral-200'>89</span> reviews
              </span>
              <div className='flex items-center gap-2 w-[14rem]'>
                <span className="leading-relaxed text-neutral-400 text-sm text-nowrap">
                  Filter by
                </span>
                <Select
                  styles={'me-6'}
                  id="city"
                  options={[
                    { value: 'Default', label: 'All ratings' },
                    { value: '5', label: '5 star' },
                    { value: '4', label: '4 star' },
                    { value: '3', label: '3 star' },
                    { value: '2', label: '2 star' },
                    { value: '1', label: '1 star' },
                  ]}
                  required={true}
                />
              </div>
            </div>
          </div>
          {/* Grid Feedbacks */}
          <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6'>
            {Feedback.map((feedback, index) => (
              <div className='flex gap-5 py-6 border-b border-neutral-600/50' key={index}>
                <img className="size-11 border-2 border-neutral-600 rounded-full" src={feedback.profile} alt="Sample Avatar Profile" />
                <div className='space-y-5'>
                  <div className='space-y-1.5'>
                    <div className='space-x-3.5'>
                      <span className="text-neutral-200 font-medium text-nowrap">
                        {feedback.name}
                      </span>
                      <span className="text-neutral-400 text-sm text-nowrap">
                        {feedback.date}
                      </span>
                    </div>
                    <div class="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg class='size-3 ms-1 text-yellow-300' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" key={index}>
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className='space-y-5'>
                    <p className="leading-relaxed text-sm text-neutral-300">
                      {feedback.message}
                    </p>
                    <div className='flex items-center gap-5'>
                      <a href='#' className="text-neutral-300 font-semibold text-sm text-nowrap">
                        Reply
                      </a>
                      <a href='#' className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm text-nowrap">
                        {index === 1 || index === 2 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                          </svg>
                        )}
                        {feedback.likes}
                      </a>
                      <a href="#" className='text-red-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center pt-6'>
            <Button
              styles={'inline-flex justify-center items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
              label={'Show more'}
            >
            </Button>
          </div>
        </section>
        {/* Fourth Section */}
        <section className='lg:px-24 px-12 py-12 space-y-5 bg-neutral-900/40'>
          <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-medium text-neutral-300 lg:text-3xl">
              Related Products
            </h1>
            <div className='flex md:gap-4 gap-3'>
              <button className='rounded-full lg:p-3 p-2 text-neutral-200 bg-transarent hover:bg-neutral-700 border border-neutral-500 focus:ring-2 focus:ring-neutral-200/60 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-6 size-5 text-neutral-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button className='rounded-full lg:p-3 p-2 text-neutral-200 bg-transarent hover:bg-neutral-700 border border-neutral-500 focus:ring-2 focus:ring-neutral-200/60 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-6 size-5 text-neutral-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {[
              {
                img: "https://eu.thefrankieshop.com/cdn/shop/products/FITZ-TRENCH-COAT-NAVY-KATE-16657.jpg?v=1693816753&width=1944",
                name: "Fitz Trench Coat",
                price: 299,
                rating: "5.0 (1.2k Reviews)",
              },
              {
                img: "https://eu.thefrankieshop.com/cdn/shop/files/NIKOLA-PADDED-TRENCH-COAT-GREY-ALEYNA-20230428-FRANKIE_SHOT-8_677.jpg?v=1696945228&width=1944",
                name: "Nikola Padded Trench Coat",
                price: 350,
                rating: "4.9 (2k Reviews)",
              },
              {
                img: "https://eu.thefrankieshop.com/cdn/shop/products/Decima-Trench-Coat-Black-9384.jpg?v=1675936497&width=1944",
                name: "Decima Trench Coat",
                price: 390,
                rating: "5.0 (1.1k Reviews)",
              },

            ].map((product, index) => (
              <a href='' className='border border-neutral-700/50 hover:bg-neutral-700/30 transition duration-300 ease-in-out p-4 rounded-xl space-y-3' key={index}>
                <div className='relative w-full lg:h-[38rem] md:h-[20rem] h-[25rem]'>
                  <img src={product.img} alt="Product Overview" className='absolute object-cover w-full h-full rounded-[8px]' />
                </div>
                <div className='space-y-1'>
                  <div className='flex justify-between items-center'>
                    <h1 className="text-xl font-medium text-neutral-300 lg:text2xl">
                      {product.name}
                    </h1>
                    <span className="text-green-500 font-semibold text-md">
                      ${product.price}
                    </span>
                  </div>
                  <div className='flex gap-2'>
                    <svg class='size-3.5 ms-1 text-yellow-300' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="leading-relaxed text-neutral-400 text-xs">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        {/* Footer */}
        <footer className='lg:px-24 px-12 py-16 bg-neutral-950/40 grid lg:grid-cols-7 grid-cols-1 gap-24'>
          <div className='lg:col-span-2 col-span-1 space-y-5'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <p className="leading-relaxed text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam quibusdam.
            </p>
            <ul className='flex gap-3 items-center text-neutral-200'>
              <Link
                link='#'
                svg='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z'
              />
              <Link
                link='#'
                svg='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
              />
              <Link
                link='#'
                svg='M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z'
              />
              <Link
                link='#'
                svg='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z'
              />
            </ul>
          </div>
          <div className='lg:col-span-5 col-span-1 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-12'>
            <LinkList
              title='Company'
              names={['About Us', 'Contact Us', 'Our Story', 'Sustainability']}
            />
            <LinkList
              title='Shop'
              names={['New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards', 'Size Guide']}
            />
            <LinkList
              title='Customer Service'
              names={['Shipping Information', 'Returns & Exchanges', 'FAQs', 'Track Order']}
            />
            <LinkList
              title='Legal'
              names={['Privacy Policy', 'Terms & Conditions', 'Return Policy']}
            />
          </div>
        </footer>
      </main>
    </motion.div >
  )
}

export default Day12
