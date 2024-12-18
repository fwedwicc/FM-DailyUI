import React, { useState } from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { InputField, Checkbox, Button } from '../components'
import { fmUILogo } from '../assets'
import { motion } from 'framer-motion'

const Draft = () => {
  useLenisScroll();
  // useScrollToTop();

  const SearchBar = ({ styles }) => {
    return (
      <div className={`${styles} flex-col border gap-2 w-full`}>
        {/* Search bar */}
        <div className='flex items-center gap-4'>
          <div className='w-full relative'>
            <input
              id="search"
              type='text'
              value='Hello World'
              className={`w-full rounded-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
              required={false}
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className='flex items-center justify-between'>
          {/* Tab Component */}
          <div className='flex items-center gap-4 cursor-pointer text-neutral-400 text-sm'>
            <span>All</span>
            <span>Images</span>
            <span>Videos</span>
            <span>Shopping</span>
            <span>News</span>
            <span>More</span>
          </div>
          <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  const Accordion = ({ title, svg, children, isOpen, onClick, styles }) => {
    return (
      <div className={`w-full overflow-hidden`}>
        <button
          className={`${styles} w-full flex justify-between items-center text-neutral-400 py-2 font-medium focus:outline-none`}
          onClick={onClick}
        >
          <span className={`md:text-base text-sm ${isOpen ? 'text-neutral-200' : 'text-neutral-400'}`}>{title}</span>
          <span className='size-10 flex items-center justify-center rounded-full bg-neutral-700/20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`shrink-0 size-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            {children}
          </div>
        </motion.div>
      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqsData = [
    {
      title: 'Why is Hello World so popular?',
      content:
        <div className='space-y-3'>
          <p className='text-sm leading-5 text-neutral-300'>The answer lies in its <span className='bg-blue-500/30 text-neutral-200'>simplicity and universal applicability</span>. By writing a program that displays “Hello World,” programmers can quickly verify that their development environment is correctly configured and that they have successfully grasped the basics of a new programming language. <span className='text-[9px]'>Jan 15, 2024</span></p>
          <div className='flex gap-3 w-full'>
            <div className='size-9 flex-shrink-0'>
              <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-[12px]' />
            </div>
            <div className='leading-none'>
              <h4 className='text-neutral-200'>GitHub</h4>
              <p className='text-neutral-400/90 line-clamp-1 text-sm'>docs.github.com › get-started › quickstart › hello-world</p>
            </div>
          </div>
          <h5 className='text-blue-500 text-xl group-hover:underline'>Hello world</h5>
        </div>,
    },
    {
      title: 'What is the Hello World phrase?',
      content:
        <div className='space-y-3'>
          <p className='text-sm leading-5 text-neutral-300'>The answer lies in its <span className='bg-blue-500/30 text-neutral-200'>simplicity and universal applicability</span>. By writing a program that displays “Hello World,” programmers can quickly verify that their development environment is correctly configured and that they have successfully grasped the basics of a new programming language. <span className='text-[9px]'>Jan 15, 2024</span></p>
          <div className='flex gap-3 w-full'>
            <div className='size-9 flex-shrink-0'>
              <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-[12px]' />
            </div>
            <div className='leading-none'>
              <h4 className='text-neutral-200'>GitHub</h4>
              <p className='text-neutral-400/90 line-clamp-1 text-sm'>docs.github.com › get-started › quickstart › hello-world</p>
            </div>
          </div>
          <h5 className='text-blue-500 text-xl group-hover:underline'>Hello world</h5>
        </div>,
    },
    {
      title: 'What did the ending of Hello World mean?',
      content:
        <div className='space-y-3'>
          <p className='text-sm leading-5 text-neutral-300'>The answer lies in its <span className='bg-blue-500/30 text-neutral-200'>simplicity and universal applicability</span>. By writing a program that displays “Hello World,” programmers can quickly verify that their development environment is correctly configured and that they have successfully grasped the basics of a new programming language. <span className='text-[9px]'>Jan 15, 2024</span></p>
          <div className='flex gap-3 w-full'>
            <div className='size-9 flex-shrink-0'>
              <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-[12px]' />
            </div>
            <div className='leading-none'>
              <h4 className='text-neutral-200'>GitHub</h4>
              <p className='text-neutral-400/90 line-clamp-1 text-sm'>docs.github.com › get-started › quickstart › hello-world</p>
            </div>
          </div>
          <h5 className='text-blue-500 text-xl group-hover:underline'>Hello world</h5>
        </div>,
    },
    {
      title: 'What is the story behind Hello World?',
      content:
        <div className='space-y-3'>
          <p className='text-sm leading-5 text-neutral-300'>The answer lies in its <span className='bg-blue-500/30 text-neutral-200'>simplicity and universal applicability</span>. By writing a program that displays “Hello World,” programmers can quickly verify that their development environment is correctly configured and that they have successfully grasped the basics of a new programming language. <span className='text-[9px]'>Jan 15, 2024</span></p>
          <div className='flex gap-3 w-full'>
            <div className='size-9 flex-shrink-0'>
              <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-[12px]' />
            </div>
            <div className='leading-none'>
              <h4 className='text-neutral-200'>GitHub</h4>
              <p className='text-neutral-400/90 line-clamp-1 text-sm'>docs.github.com › get-started › quickstart › hello-world</p>
            </div>
          </div>
          <h5 className='text-blue-500 text-xl group-hover:underline'>Hello world</h5>
        </div>,
    },
  ];

  const Content = () => {
    return (
      <div className='space-y-1 cursor-pointer border'>
        {/*  */}
        <div className='flex gap-3 w-full'>
          <div className='size-9 flex-shrink-0'>
            <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-[12px]' />
          </div>
          <div className='leading-none'>
            <h4 className='text-neutral-200'>GitHub</h4>
            <p className='text-neutral-400/90 line-clamp-1 text-sm'>docs.github.com › get-started › quickstart › hello-world</p>
          </div>
        </div>
        {/*  */}
        <div className='flex group'>
          <div className='space-y-1'>
            {/*  */}
            <h5 className='text-blue-500 text-xl group-hover:underline'>Hello world</h5>
            {/*  */}
            <p className='text-sm leading-5 text-neutral-300 line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum corporis adipisci quibusdam aspernatur explicabo unde dolorum accusamus veniam, distinctio odio atque. Rem, facere? Illum aliquam explicabo consequuntur dicta corporis commodi.</p>
            <ul className='flex gap-2 text-sm text-blue-500 cursor-pointer'>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
          <div className='w-44 h-28 flex-shrink-0'>
            <img src="https://placehold.co/30x30" alt="Sample" className='object-cover w-full h-full rounded-lg' />
          </div>
        </div>
      </div>
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

  const socialLink = [
    {
      "link": "#",
      "svg": "M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z",
    },
    {
      "link": "#",
      "svg": "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z",
    },
    {
      "link": "#",
      "svg": "M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z",
    },
    {
      "link": "#",
      "svg": "M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z",
    }
  ]

  const footerLink = [
    {
      title: "Resources",
      names: ["Search Premium", "Search Help", "Transparency Support", "Security Issue", "Status"]
    },
    {
      title: "Products",
      names: ["Browser", "Wallet", "Firewall + VPN", "News", "Search API"]
    },
    {
      title: "Services",
      names: ["Talk", "Playlist", "Brave Rewards", "Ads"]
    },
    {
      title: "Policies",
      names: ["Privacy Policy", "Terms & Condition", "Return Policy", "Terms of Use"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800 space-y-6">
        {/* Header */}
        <div className='bg-[#2b2b2b] md:p-6 p-4 sticky top-0'>
          <header className='flex border justify-between items-start'>
            <div className='flex items-start gap-36 w-full'>
              {/* Logo */}
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
              {/* WEB: Search Bar */}
              <SearchBar styles='lg:flex hidden lg:max-w-3xl max-w-md' />
            </div>
            {/* Settings */}
            <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </button>
          </header>
          {/* MOB: Search Bar */}
          <SearchBar styles='mt-6 lg:hidden flex max-w-full' />
        </div>
        {/* Content */}
        <section className='flex flex-wrap gap-4 border lg:px-[14.6rem] w-full'>
          {/* Left */}
          <div className='border w-full lg:max-w-3xl max-w-full space-y-8'>
            {/* Contents */}
            <Content />
            <Content />
            {/*  */}
            <div className='divide-y-2 divide-neutral-700/30'>
              <h3 className='text-neutral-200 text-xl flex items-center gap-2 mb-2 border'>
                People also search for
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                </svg>
              </h3>
              {faqsData.map((accordion, index) => (
                <Accordion
                  key={index}
                  title={accordion.title}
                  isOpen={openIndex === index}
                  styles={''}
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className='pb-3'>
                    {accordion.content}
                  </div>
                </Accordion>
              ))}
            </div>
            <Content />
            <Content />
            <Content />
            <Content />
            {/* "People also search for" Section */}
            <div className='space-y-3'>
              <h3 className='text-neutral-200 text-xl flex items-center gap-2'>
                People also search for
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                </svg>
              </h3>
              <div className='grid grid-cols-2 gap-2'>
                {['meaning', 'program', 'code', '(song)', 'anime', 'download', 'C++', 'app'].map((item, index) => (
                  <div key={index} className='flex items-center justify-between group border border-neutral-700 w-full px-4 py-3 rounded-md cursor-pointer hover:bg-neutral-700/20 transition duration-300 ease-in-out'>
                    <p className='text-neutral-300/90 group-hover:underline'>Hello World {item}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-neutral-600">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className='flex justify-center mt-1'>
                <button className='inline-flex items-center gap-2 px-4 py-[0.6rem] text-neutral-200 border rounded-md bg-transarent hover:bg-neutral-700 border-neutral-600 focus:ring-neutral-200/60 transition duration-300 ease-in-out'>
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='flex-1 border'>
            <h1 className='text-neutral-300 text-3xl'>"Hello, World!" program</h1>
            <h3 className='text-neutral-400 text-md flex items-center gap-2'>
              Computer program
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 cursor-pointer">
                <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
            </h3>
            {/*  */}
            <div className='grid grid-cols-2 grid-rows-2 mt-4 w-full h-48'>
              <div className='border-2 row-span-full border-neutral-300'>
                <img src="https://placehold.co/40x40" alt="Sample Image" className='object-cover w-full h-full' />
              </div>
              <div className='border-2 border-neutral-300 h-full w-full'>
                <img src="https://placehold.co/40x40" alt="Sample Image" className='object-cover w-full h-full' />
              </div>
              <div className='border-2 border-neutral-300 h-full w-full'>
                <img src="https://placehold.co/40x40" alt="Sample Image" className='object-cover w-full h-full' />
              </div>
            </div>
            {/*  */}
            <div className='mt-4'>
              <p className='text-sm leading-5 text-neutral-300'>A "Hello, World!" program is generally a simple computer program that emits to the screen a message similar to "Hello, World!". A small piece of code in most general-purpose programming languages, this program is used to illustrate a language's basic syntax. <span className='cursor-pointer text-blue-500 hover:underline'>Wikipedia</span></p>
            </div>
            {/*  */}
            <div className='flex items-center gap-2 mt-4 py-4 border-t'>
              {['https://placehold.co/30x30', 'https://placehold.co/30x30', 'https://placehold.co/30x30', 'https://placehold.co/30x30', 'https://placehold.co/30x30', 'https://placehold.co/30x30'].map((item, index) => (
                <a href='#' className='size-10 flex items-center justify-center hover:bg-neutral-500 border rounded-md' key={index}>
                  <img src={item} alt="Sample Image Links" className='w-5 h-auto' />
                </a>
              ))}
            </div>
            {/*  */}
            <div className='flex items-center gap-2'>
              <span className='flex-1 text-xs text-nowrap text-neutral-400'>Data from <a href='#' className='hover:underline'>Wikipedia</a></span>
              <div className='flex-grow h-[0.5px] w-full bg-neutral-600'></div>
              <button className='size-6 flex-shrink-0 flex items-center justify-center rounded-md hover:bg-neutral-700/20 text-neutral-400'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <footer className='lg:px-24 px-12 py-16 bg-neutral-900/40 grid lg:grid-cols-7 grid-cols-1 gap-24'>
          <div className='lg:col-span-2 col-span-1 space-y-5'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <p className="leading-relaxed text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam quibusdam.
            </p>
            <ul className='flex gap-3 items-center text-neutral-200'>
              {socialLink.map((item, index) => (
                <Link
                  key={index}
                  link={item.link}
                  svg={item.svg}
                />
              ))}
            </ul>
          </div>
          <div className='lg:col-span-5 col-span-1 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-12'>
            {footerLink.map((list, index) => (
              <LinkList
                key={index}
                title={list.title}
                names={list.names}
              />
            ))}
          </div>
        </footer>
      </main>
    </motion.div>
  )
}

export default Draft
