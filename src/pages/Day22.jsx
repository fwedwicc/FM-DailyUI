import React, { useState } from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { fmUILogo } from '../assets'
import { motion } from 'framer-motion'

const Day22 = () => {
  useLenisScroll();
  useScrollToTop();

  const SearchBar = ({ styles }) => {
    return (
      <div className={`${styles} flex-col gap-2 w-full`}>
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
            <div className="absolute inset-y-0 end-0 flex items-center pe-3">
              {['M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z', 'M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z', ['M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z', 'M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z'], 'M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z',].map((item, index) => (
                <span className={`${index === 0 ? 'border-r border-neutral-600 pr-3' : ''} px-2.5`} key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${index === 1 ? 'text-green-500' : 'text-neutral-300'} cursor-pointer size-5`}>
                    {Array.isArray(item) ? (
                      item.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)
                    ) : (
                      <path fillRule="evenodd" clipRule="evenodd" d={item} />
                    )}
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className='flex items-center justify-between'>
          {/* Tab Component */}
          <div className='flex items-center gap-4 cursor-pointer text-neutral-400 text-sm'>
            {['All', 'Images', 'Videos', 'Shopping', 'News', 'More'].map((item, index) => (
              <span className={`${index === 0 ? 'flex items-center gap-1 border-b-2 pr-1 text-green-500 border-green-500' : ''}`} key={index}>
                {index === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                  </svg>
                ) : (null)}
                {item}
              </span>
            ))}
          </div>
          <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
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
            <div className='size-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-neutral-100'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVR4AWNwL/ChCDM4dZ+SBOIJ5GCYAZuBWB5kEIlYFYhXM4AIcp0PNwBN0AeESTcAgWHe8iHPAITkaZAh5LogBxTKlITBBDSX7IDiHAIGEMbUNmAzigHQFLYDJEEIQ72WAzUAEerk5IUdUM2S5GYmH0pyI8XZGQBFUlxD9c3VgwAAAABJRU5ErkJggg==" alt="Website Icon" className='object-cover w-6 h-auto rounded-md' />
            </div>
            <div className='leading-none'>
              <h4 className='text-neutral-200'>CodeInterview</h4>
              <p className='text-neutral-400/90 line-clamp-1 text-sm'>https://codeinterview.io › the-history-of-hello-world-a-brief-overview</p>
            </div>
          </div>
          <h5 className='text-blue-500 text-xl group-hover:underline'>The History of Hello World: A Brief Overview - CodeInterview Blog</h5>
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

  const Content = ({ link, icon, website, title, desc, sublinks = [], img }) => {
    return (
      <article className='space-y-1 cursor-pointer'>
        {/*  */}
        <div className='flex gap-3 w-full'>
          <div className='size-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-neutral-100'>
            <img src={icon} alt="Website Icon" className='object-cover w-6 h-auto rounded-md' />
          </div>
          <div className='leading-none'>
            <h4 className='text-neutral-200'>{website}</h4>
            <p className='text-neutral-400/90 line-clamp-1 text-sm'>{link}</p>
          </div>
        </div>
        {/*  */}
        <div className='flex group gap-2'>
          <div className='space-y-1'>
            {/*  */}
            <h5 className='text-blue-500 text-xl group-hover:underline'>{title}</h5>
            {/*  */}
            <p className='text-sm leading-5 text-neutral-300 line-clamp-3'>{desc}</p>
            {sublinks && (
              <ul className={`${!sublinks ? 'hidden' : 'flex gap-4 text-sm text-blue-500 cursor-pointer'} `}>
                {sublinks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={`w-44 h-28 flex-shrink-0 ${!img ? 'hidden' : ''}`}>
            {img && (
              <img src={img} alt={`${title} Preview`} className='object-cover w-full h-full rounded-lg' />
            )}
          </div>
        </div>
      </article>
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
        <div className='bg-[#2b2b2b] md:p-6 md:pb-2 p-4 pb-2 sticky top-0'>
          <header className='flex justify-between items-start'>
            <div className='flex items-start gap-36 w-full'>
              {/* Logo */}
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
              {/* WEB: Search Bar */}
              <SearchBar styles='lg:flex hidden lg:max-w-3xl max-w-md' />
            </div>
            {/* Settings */}
            <div className='flex items-center gap-3'>
              {[
                "M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z", "M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
              ].map((button, index) => (
                <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d={button} clipRule="evenodd" />
                  </svg>
                </button>
              ))}
              <img
                className="shrink-0 size-8 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer me-5"
                src="https://avatars.githubusercontent.com/u/823537?v=4"
                alt="Bot Avatar"
              />
            </div>
          </header>
          {/* MOB: Search Bar */}
          <SearchBar styles='mt-6 lg:hidden flex max-w-full' />
        </div>
        {/* Content */}
        <section className='flex flex-wrap gap-4 lg:px-[14.6rem] w-full'>
          {/* Left */}
          <div className='w-full lg:max-w-3xl max-w-full space-y-8'>
            {/* Contents */}
            <Content
              link={`en.wikipedia.org › wiki › "Hello,_World!"_program`}
              icon="https://imgs.search.brave.com/m6XxME4ek8DGIUcEPCqjRoDjf2e54EwL9pQzyzogLYk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjQwNGZhZWY0/ZTQ1YWUzYzQ3MDUw/MmMzMGY3NTQ0ZjNj/NDUwMDk5ZTI3MWRk/NWYyNTM4N2UwOTE0/NTI3ZDQzNy9lbi53/aWtpcGVkaWEub3Jn/Lw"
              website="Wikipedia"
              title={`"Hello, World!" program - Wikipedia`}
              desc={`1 week ago - A "Hello, World!" program is generally a simple computer program that emits (or displays) to the screen (often the console) a message similar to "Hello, World!". A small piece of code in most general-purpose programming languages, this program is used to`}
              sublinks={['Hello World', 'Time to Hello World', 'Programming Languages', 'Coding']}
              img="https://assets.hongkiat.com/uploads/hello-world-different-programming-languages/kotlin.jpg"
            />
            <Content
              link={`helloworld.org`}
              icon="https://static-00.iconduck.com/assets.00/globe-icon-512x512-0i6hmjdv.png"
              website="Helloworld"
              title={`Hello World - Simple source code examples`}
              desc={`A "Hello world" program is a computer program that outputs "Hello World" (or some variant) on a display device. The first known version of this program comes from Brian Kernighan's paper A Tutorial Introduction to the Language B from 1972 (chapter 7).`}
            />
            {/*  */}
            <div className='divide-y-2 divide-neutral-700/30'>
              <h3 className='text-neutral-200 text-xl flex items-center gap-2 mb-2'>
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
            <Content
              link="stackoverflow.blog › 2020 › 03 › 05 › a-modern-hello-world-program-needs-more-than-just-code"
              icon="https://imgs.search.brave.com/nHSlmEoUbL41OIgI1Gz6bkrt7aSMVybujjhQXpfM4-c/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDgyNjY2MTMx/MGMzYmRlZGI5N2I0/NzkxZjhjMTZlNzI0/M2Q3ZjEzY2JhNjZh/ODc0NDYzYzg3MDI3/OTU3ZjU5ZS9zdGFj/a292ZXJmbG93LmJs/b2cv"
              website="Stackoverflow"
              title="A modern 'Hello, World' program needs more than just code"
              desc={`May 3, 2020 - Engage the world’s technology talent with your employer brand. ... The tradition of a "Hello, World" program goes back at least to 1978.`}
              img="https://imgs.search.brave.com/1xo6xkTxPOna1PgfYvx8nCjk5h8shViB4FjeQYwAHII/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/c3RhY2tvdmVyZmxv/dy5jby9pbWFnZXMv/am83bjRrOHMvcHJv/ZHVjdGlvbi8wYWRi/MWQ4MWM0YWQ3ZjRh/YTkyNmEzZmU0NDgz/M2E4NjA0MTNjZWM5/LTIwMDB4MTUwMC5q/cGc_dz0xMjAwJmZt/PXBuZyZhdXRvPWZv/cm1hdA"
            />
            <Content
              link={`thehelloworldprogram.com`}
              icon="https://imgs.search.brave.com/QsNaC3FEAHwHzmRclbIvgoWHOlKbNBceOkZJqIzujdA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTY1MTJjODkz/NTk3N2I0YjQ5OTgw/OThmOGEwODAzODI2/ZDY4Nzc0ZDEyOWRk/Yzg3YTI5OWFhZDZi/ZmY1ZjNlNi90aGVo/ZWxsb3dvcmxkcHJv/Z3JhbS5jb20v"
              website="Thehelloworldprogram"
              title={`Hands-on Computer Science • The Hello World Program`}
              desc={`From the early mechanical work of Charles Babbage and Ada Lovelace, the field of computer science has expanded to include a diversity of subjects from hardware, software, robots, artificial intelligence, graphics, networks, and more. With our 10 amazing videos, you will lea`}
            />
            <Content
              link={`geeksforgeeks.org › hello-world-program-first-program-while-learning-programming`}
              icon="https://imgs.search.brave.com/bGE5KD5Za34la_MeOAt7584d1aXRWEQopsXEQyAALPw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjBhOGQ3MmNi/ZWE5N2EwMmZjYzA1/ZTI0ZTFhMGUyMTE0/MGM0ZTBmMWZlM2Y2/Yzk2ODMxZTRhYTBi/NDdjYTE0OS93d3cu/Z2Vla3Nmb3JnZWVr/cy5vcmcv"
              website="GeeksforGeeks"
              title={`Hello World Program : First program while learning Programming`}
              desc={`February 16, 2023 - A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive`}
              img="https://imgs.search.brave.com/XsmKjgGdPhI5EyY-T7EbvI3rvV4x8PGYYcrUI5GzqfU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvZ2ZnXzIwMFgy/MDAtMTAweDEwMC5w/bmc"
            />
            <Content
              link={`https://www.raspberrypi.org › hello-world`}
              icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEX////i4uKxsbBAQD84NjcwLy8mIySEhIO8vLyMjIuoqKjW1tUMCwgAAAAbHRsiOiIdIxvs7OweKR0iOCESFxA0dTc7jD8+lUJJuU9Ep0hItU03fDkUDBEQAA1hYWBCoUYYABRISEcsWC1Gr0sxajMpTioiMSGcnJwfJR4jHR0dHBsfWisLHRgAHRVycnIxHSCRGT+iIUYUHRmIID24Ik43HSIACwBIHifQI1bVI1i+IlDUI1jSI1dRHirJI1TNI1WsIUpkHjBvHzQAHRRAGyMFHRd4Hzd1HzZZHi1WVlWO/2icAAACIklEQVR4AVSMBZLEMAwEw6xwDGPfhfn//1umNoi6ZDwwLdtxPT+45UHouo4TxcaHOCFKszwj8szCJcrKKieij2LXDeNCgintOX+KQQrOVO6+hf+Eo1UtANZ17BpuRVv3b8GiAeM4zRKoFoxynsYRE61vISJ2FcC3VgyzaDd+r76EItHteO21G9uPq4ZrIQ8qjK8VjbgZvDuOjt3mQn0tuGJTOQIY9HHsM64s5Bo/+Do/z1Jf6qQO3VhhIPh6t1+LeqpaQrQb4wLY4LNpJvD/P5S9VF+kDJ0ZzVZAhPu3k5tDnoKIUgqljdG8kGVV5wEIP1ljXQums/RQrfM76mOOmzr4UO0Z34VCtD7WpweCL8L1BSIOWo8wIZduPjrMgAsU0mhMgNrIahKcfc8zSEqJ6K0rU9LOel8pjlkWn47MDqWPBEiB7rbH2RT8xWBxeiLiWRAt3jr9bPGNSRK0NkbfY7p3CtPievYhE4y4UOwgAIpAuWhcM8F7NrhrDkOpC7WunOtyBK788pLlaS0AQSVcg+vigFQTgjjaiHqygMGMyHmwMdpYcKRPyJt9Ab2nPGcfCa6hfLxJn174fZo2uhXbvUOAXRftS4p7/GU7F22LlfG+ndGQemDvD/aFLZ33QmFVoeKR4rFXG7OxWQ8KmmFoQA26YR/fvcLlZ6aSpH1wMil29bxQuYTVY3SdXep80jn+nrJf63rNtvfv3sK3Tant27scd34oaLLWauhkAAAAAElFTkSuQmCC"
              website="Raspberry Pi Foundation"
              title={`Hello, World!`}
              desc={`Each newsletter includes exciting computing education ideas and insights, some of our favourite Hello World articles, and news about the free education`}
            />
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
          <div className='flex-1'>
            <h1 className='text-neutral-300 text-3xl'>"Hello, World!" program</h1>
            <h3 className='text-neutral-400 text-md flex items-center gap-2'>
              Computer program
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 cursor-pointer">
                <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
            </h3>
            {/*  */}
            <div className='grid grid-cols-2 grid-rows-2 mt-4 w-full h-48 border border-neutral-700 rounded-lg'>
              <div className='border-r-4 row-span-full border-neutral-100 rounded-l-lg'>
                <img src="https://i.ytimg.com/vi/yePpTX5_tg0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBlU3TYD9rh65PKe5AjMFys23AFwQ" alt="Sample Image" className='object-cover w-full h-full rounded-l-lg' />
              </div>
              <div className='border-b-4 border-neutral-100 h-full w-full rounded-tr-lg'>
                <img src="https://miro.medium.com/v2/resize:fit:1000/1*aPfdrf5Y14OzFUXgEwB9TA.jpeg" alt="Sample Image" className='object-cover w-full h-full rounded-tr-lg' />
              </div>
              <div className='h-full w-full rounded-br-lg'>
                <img src="https://mathspp.com/blog/the-most-obscure-hello-world-program/thumbnail.webp" alt="Sample Image" className='object-cover w-full h-full rounded-br-lg' />
              </div>
            </div>
            {/*  */}
            <div className='mt-4'>
              <p className='text-sm leading-5 text-neutral-300'>A "Hello, World!" program is generally a simple computer program that emits to the screen a message similar to "Hello, World!". A small piece of code in most general-purpose programming languages, this program is used to illustrate a language's basic syntax. <span className='cursor-pointer text-blue-500 hover:underline'>Wikipedia</span></p>
            </div>
            {/*  */}
            <div className='flex items-center gap-2 mt-4 py-4 border-t border-neutral-600'>
              {['https://imgs.search.brave.com/m6XxME4ek8DGIUcEPCqjRoDjf2e54EwL9pQzyzogLYk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjQwNGZhZWY0/ZTQ1YWUzYzQ3MDUw/MmMzMGY3NTQ0ZjNj/NDUwMDk5ZTI3MWRk/NWYyNTM4N2UwOTE0/NTI3ZDQzNy9lbi53/aWtpcGVkaWEub3Jn/Lw', 'https://imgs.search.brave.com/8vIq-V97PH8S0N-pyaeHgq_gFHOA8hXjBunynHio-Uw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzdkMGIyYTky/OTJjN2RjNDEyNWYx/MGQxNjAzNmZlNDk4/ZTRmNDczNjk0ZTZl/N2IxZjI0NTVkMGE3/YTBiYjEzYi93d3cu/d2lraWRhdGEub3Jn/Lw', 'https://imgs.search.brave.com/ziBoeT-vbddluUgaXgpzpt8sMTFHk2J6QYwJzrtjhUs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmJiMDNmODRi/NDE5NGQxOTY4MGEz/Njc2YzM2NDMyNWQy/NjU4MTIxNmIyZTY4/MzUxMWZmMDdlYmIx/Mjk0OWUyYS9kaWMu/bmljb3ZpZGVvLmpw/Lw', 'https://imgs.search.brave.com/9MNMiyljxUutGLrMWTij9dnbJ8Y-o7tmn6QLS6l4L_w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzMzZTc3ZTJj/ZjRmODc4OGM5NzBm/MGNlMTQ4MWQyZDEw/OGI3MjVlMmNmYWUz/MGE5NDAxMjIzNjBk/MGJlOTgwNi9yb3Nl/dHRhY29kZS5vcmcv', 'https://imgs.search.brave.com/PNggrjlAaaATe0COVLB_BwSxvlNjWXtl6y7ZhPFXBRA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDlkNGNkNzcy/NGU3MmQzMzViNjky/ZjE3ODRmZDZjOWJl/Yjk3NDBmMWM2YmJh/NjdkMGU1NTA2YjUw/ZjNiYTYwYi9iYWJl/bG5ldC5vcmcv'].map((item, index) => (
                <a href='#' className='size-10 flex items-center justify-center hover:bg-neutral-700 border border-neutral-600 rounded-md transition duration-300 ease-in-out' key={index}>
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

export default Day22
