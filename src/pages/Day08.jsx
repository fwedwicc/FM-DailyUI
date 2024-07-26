import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { bot404 } from '../assets/day08'
import { Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day08 = () => {
  useLenisScroll();
  useScrollToTop();

  const [isOpen, setIsOpen] = useState(false);

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

  const heroLink = [
    {
      "label": "Documentation",
      "desc": "Dive in to learn all about our product."
    },
    {
      "label": "Career",
      "desc": "Explore our selection in careers."
    },
    {
      "label": "Support",
      "desc": "Our friendly team is here to help."
    },
  ]

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
      "title": "Company",
      "names": ['About us', 'Contact us', 'Careers', 'Press']
    },
    {
      "title": "Product",
      "names": ['Features', 'Pricing', 'News', 'Help Desk', 'Support']
    },
    {
      "title": "Services",
      "names": ['Digital Marketing', 'Content Writing', 'SEO for Business', 'UI Design']
    },
    {
      "title": "Legal",
      "names": ['Privacy Policy', 'Terms & Condition', 'Return Policy']
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className='lg:h-screen h-auto'>
          {/* Navigation bar */}
          <nav className='relative flex items-center justify-between pt-[2.5rem]  lg:px-24 px-12'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            {/* Desktop Navigation */}
            <ul className='hidden md:flex text-neutral-300 gap-9'>
              {['Careers', 'Job Search', 'News', 'Support'].map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
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
              <div className='absolute top-full right-12 mt-4 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
                <ul className='text-neutral-300 text-center'>
                  {['Careers', 'Job Search', 'News', 'Support'].map((link, index) => (
                    <li key={index}><a href="#" className={`${index === 0 ? 'rounded-t-lg' : 'rounded-none'} block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out`}>{link}</a></li>
                  ))}
                </ul>
                <div className='flex flex-col gap-2 p-4'>
                  <Button
                    styles={'text-neutral-200 bg-transparent hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                    label={'Login'}
                  />
                  <Button
                    styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                    label={'Sign up'}
                  />
                </div>
              </div>
            )}
            {/* Desktop Buttons */}
            <div className='hidden md:flex gap-3'>
              <Button
                styles={'text-neutral-200 bg-transparent hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                label={'Login'}
              />
              <Button
                styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Sign up'}
              />
            </div>
          </nav>
          {/* Title and Description */}
          <div className='lg:h-[89vh] h-auto lg:px-24 px-12 py-16 flex flex-wrap lg:flex-nowrap justify-center md:gap-24 gap-12 items-center'>
            <div className='space-y-5 lg:text-left text-center flex flex-col lg:items-start items-center'>
              <h1 className="lg:text-[20rem] md:text-[16rem] text-[14rem] leading-none font-bold text-neutral-200">
                404
              </h1>
              <div className='space-y-2'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  Page not found
                </h1>
                <p className="leading-relaxed text-neutral-400 text-sm">
                  Sorry, the page you're looking for doesn't exist or <br />
                  has been removed. Here's helpful link:
                </p>
              </div>
              <Button
                styles={'flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'Take me home'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </Button>
            </div>
            <div className='w-full max-w-lg space-y-8'>
              <div className='w-full h-[17rem] border border-neutral-600 bg-neutral-700/20 p-3 rounded-xl'>
                <img src={bot404} alt="Bot 404 Illustration" className='object-cover w-full h-full rounded-lg' />
              </div>
              <div className='space-y-8'>
                {heroLink.map((link, index) => (
                  <div className='space-y-[1px]' key={index}>
                    <a href="#" className='flex items-center gap-1 text-green-500 font-semibold'>
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                    <p className="leading-relaxed text-neutral-400 text-sm">
                      {link.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </motion.div>
  )
}

export default Day08
