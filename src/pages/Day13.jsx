import React, { useState } from 'react'
import { TechCommrLogo } from '../assets/day13'
import { fmUILogo } from '../assets'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day13 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLenisScroll();
  useScrollToTop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const ContactBox = ({ avatar, name, time, message, sent, story, indicator, active }) => {
    return (
      <div className={`flex items-center gap-3 py-1.5 px-2 rounded-md ${active ? 'bg-neutral-700/20' : ''} hover:bg-neutral-700/20 transition duration-300 ease-in-out cursor-pointer`}>
        <img
          className={`w-10 h-10 border-2 ring-2 ${story ? 'ring-green-500' : 'ring-neutral-500'} border-neutral-700 rounded-full cursor-pointer`}
          src={avatar}
          alt="Bot Avatar"
        />
        <div className='flex-grow w-full max-w-[85%]'>
          <div className='flex items-center justify-between'>
            <h1 className="text-neutral-200 text-sm md:text-base">
              {name}
            </h1>
            <p className='leading-relaxed text-blue-400 text-xs'>
              {time}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <p className={`leading-relaxed ${sent ? 'text-neutral-400' : 'text-neutral-300'} text-sm truncate max-w-[85%]`}>
              {message}
            </p>
            {sent ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-green-500">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            ) : (
              <span className='text-white text-[11px] bg-red-500 rounded-full px-1.5 p-1 leading-none'>
                {indicator}
              </span>
            )}
          </div>
        </div>
      </div >
    )
  }

  const LianMessage = () => {
    return (
      <div className='flex justify-start items-start w-full'>
        <div className='flex items-end gap-3'>
          <img
            className="size-9 border border-neutral-700 rounded-full"
            src="https://avatars.githubusercontent.com/u/84505567?v=4"
            alt="Bot Avatar"
          />
          <div>
            <span className='leading-relaxed text-neutral-200 text-xs'>Lian T.</span>
            <div className='space-y-2'>
              {[
                "Yeah, minimal sounds good. We could use lightweight animations, so the site stays fast. Don’t forget to make it accessible, though.",
                "We should make sure animations can be turned off for users who don’t like too much motion."
              ].map((message, index) => (
                <div className={`relative rounded-r-2xl rounded-tl-2xl ${index === 1 ? 'rounded-tl-md' : ''} rounded-bl-md bg-neutral-700 px-3 py-2 w-full md:max-w-lg max-w-xs`} key={index}>
                  <p className='text-neutral-200'>{message}</p>
                  {index === 1 ? (
                    <div className='absolute -bottom-3 right-3 flex rounded-full py-1 px-2 border border-neutral-600/80 bg-neutral-700 cursor-pointer'>
                      {['💚', '👌', '🥰'].map((emoji) => (
                        <span>
                          {emoji}
                        </span>
                      ))}
                    </div>
                  ) : ('')}
                </div>
              ))}
            </div>
            <span className='leading-relaxed text-neutral-400 text-xs'>Today • 14:04</span>
          </div>
        </div>
      </div>
    )
  }

  const FredMessage = ({ message, time }) => {
    return (
      <div className='flex justify-end items-end w-full'>
        <div className='flex items-end gap-3'>
          <div className='flex flex-col justify-end items-end gap-1'>
            <div className='relative rounded-l-2xl rounded-tr-2xl rounded-br-md bg-neutral-900 px-3 py-2 w-full md:max-w-lg max-w-xs'>
              <p className='text-neutral-300'>{message}</p>
            </div>
            <span className='leading-relaxed text-neutral-400 text-xs text-end'>{time}</span>
          </div>
        </div>
      </div>
    )
  }

  const KielMessage = ({ message, time }) => {
    return (
      <div className='flex justify-start items-start w-full'>
        <div className='flex items-end gap-3'>
          <img
            className="size-9 border border-neutral-700 rounded-full"
            src="https://avatars.githubusercontent.com/u/98326799?v=4"
            alt="Bot Avatar"
          />
          <div>
            <span className='leading-relaxed text-neutral-200 text-xs'>Kiel Marice S.</span>
            <div className='space-y-2'>
              <div className="relative rounded-r-2xl rounded-tl-2xl rounded-bl-md bg-neutral-700 px-3 py-2 w-full md:max-w-lg max-w-xs">
                <p className='text-neutral-200'>{message}</p>
              </div>
            </div>
            <span className='leading-relaxed text-neutral-400 text-xs'>{time}</span>
          </div>
        </div>
      </div>
    )
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-[#202020]">
        <div className="flex lg:flex-row flex-col h-screen">
          {/* Nav buttons in mobile screens */}
          <div className='flex justify-between items-center lg:hidden p-4'>
            {/* Button for left bar */}
            <button
              className="lg:hidden py-2 size-9 flex justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
            {/* fmUI Logo */}
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            {/* Button for Right bar */}
            <button
              className="lg:hidden py-2 size-9 flex justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
          </div>
          {/* Left Container */}
          <aside
            className={`fixed overflow-auto custom-scrollbar pl-6 p-3 h-full bg-[#202020] w-96 space-y-2 transition-transform lg:pt-3 pt-16 transform z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:translate-x-0`}
          >
            {/* Avatar, name, and username */}
            <div className='flex gap-4 p-4'>
              <img
                className="size-12 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                src="https://avatars.githubusercontent.com/u/823537?v=4"
                alt="Bot Avatar"
              />
              <div>
                <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                  Frederick Moreno
                </h1>
                <p className="leading-relaxed text-neutral-300 text-sm">
                  @fwedwicc
                </p>
                <a href='' className='font-medium text-green-500 text-xs px-2 py-1 border border-green-700 bg-green-900/40 rounded-md inline-flex items-center gap-1 mt-1'>
                  Basic Plan
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2.5">
                    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Search and other buttons */}
            <div className='space-y-2'>
              {/* Title and other buttons */}
              <div className='flex justify-between items-center'>
                <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                  Messages
                </h1>
                <div className='flex gap-1.5'>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Search bar */}
              <div className='flex items-center gap-4 lg:max-w-md w-full'>
                <div className='w-full relative'>
                  <input
                    id="search"
                    type='text'
                    placeholder='Search people or message'
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
            </div>
            {/* Pinned Contact Boxes */}
            <div className='space-y-2 pt-3'>
              <p className='flex items-center gap-1 text-neutral-400 text-xs'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                Pinned
              </p>
              <ContactBox
                avatar="https://avatars.githubusercontent.com/u/92199408?v=4"
                story={false}
                name={'Joanah Marie Aldave'}
                time={'11:09'}
                message={'You: Hey! Are we still on for today?'}
                sent={true}
              />
            </div>
            {/* All Contact Boxes */}
            <div className='space-y-2'>
              <p className='flex items-center gap-1 text-neutral-400 text-xs'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                </svg>
                All messages
              </p>
              {[
                {
                  active: true,
                  avatar: TechCommrLogo,
                  story: true,
                  name: "Tech-Commr",
                  time: "14:12",
                  message: "Kiel: Sounds perfect! Let’s do it that way. Thanks, everyone! 🙌",
                  sent: true,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/92199409?v=4",
                  story: true,
                  name: "Alexandra Smith",
                  time: "13:32",
                  message: "Hey! Are we still on for today? Let me know if there's any change in the plan. I might be late by 10 minutes, but I’ll keep you posted.",
                  sent: false,
                  indicator: 4,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/92199412?v=4",
                  story: false,
                  name: "Michael Johnson",
                  time: "13:15",
                  message: "You: Sure, I'll be there at 5pm. Looking forward to catching up after such a long time. Let me know if you need anything before I arrive.",
                  sent: true,
                  indicator: 2,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/92199496?v=4",
                  story: false,
                  name: "Samantha Brown",
                  time: "12:45",
                  message: "Did you get the files I sent? I think we need to review the second section before the presentation. Let me know if you want me to make any edits.",
                  sent: false,
                  indicator: 6,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/92109408?v=4",
                  story: true,
                  name: "Daniel White",
                  time: "11:58",
                  message: "Let's grab lunch tomorrow! We can discuss the new project and brainstorm some ideas. I have a few concepts in mind that could be interesting to explore.",
                  sent: false,
                  indicator: 3,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/32199408?v=4",
                  story: false,
                  name: "Emily Davis",
                  time: "10:21",
                  message: "You: I'll review it and get back to you. It looks good so far, but I'll need a little more time to go through everything thoroughly.",
                  sent: true,
                  indicator: 4,
                },
              ].map((contact, index) => (
                <ContactBox
                  key={index}
                  active={contact.active}
                  avatar={contact.avatar}
                  story={contact.story}
                  name={contact.name}
                  time={contact.time}
                  message={contact.message}
                  sent={contact.sent}
                  indicator={contact.indicator}
                />
              ))}

            </div>
          </aside>
          <div className="flex-grow h-full text-wrap lg:pl-[24.6rem] p-3">
            <div className='relative h-full bg-neutral-800 rounded-t-2xl rounded-b-[1.7rem]'>
              {/* Top Container */}
              <div className='flex justify-between items-center border-b border-neutral-700/40 absolute top-0 bg-neutral-800/80 backdrop-blur-md rounded-t-2xl w-full p-4 z-20'>
                <div className='flex items-center gap-5'>
                  <img
                    className="size-10 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                    src={TechCommrLogo}
                    alt="Tech-Commr Logo"
                  />
                  <div>
                    <h1 className="leading-none font-normal text-neutral-200 text-md md:text-xl">
                      Tech-Commr
                    </h1>
                    <span className="flex items-center gap-3 leading-none text-neutral-300 text-sm">
                      3 members
                      <span>
                        <span className='inline-flex size-2 rounded-full bg-green-500 me-2'></span>
                        1 online
                      </span>
                    </span>
                  </div>
                </div>
                <div className='flex gap-1.5'>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Chat Contents */}
              <div className='py-24 h-full overflow-auto z-30 flex flex-col justify-end items-end px-6 gap-y-1'>
                <KielMessage
                  message={'So, I’ve been reviewing the mockups and thinking about the direction we should take for the site. We’ve got the content down, but the overall look and feel are still up in the air. 🤔 I’m torn between going for a clean, minimalistic design or adding some animations to make the user experience more dynamic. '}
                  time={'Yesterday • 06:58'}
                />
                <KielMessage
                  message={'Minimal or animations for the new site? 🤔'}
                  time={'Yesterday • 07:26'}
                />
                <FredMessage
                  message={'I’d say keep it minimal but add a few animations for interactions. That way, it stays clean but still feels modern.'}
                  time={'Yesterday • 07:28'}
                />
                <div className='w-full'>
                  <div class="py-3 flex items-center text-sm text-neutral-500 before:flex-1 before:border-t before:border-neutral-700 before:me-4 after:flex-1 after:border-t after:border-neutral-700 after:ms-4">Today at 14:04</div>
                </div>
                <LianMessage />
                <FredMessage
                  message={"Agreed! We can use 'prefers-reduced-motion' for that. I will sketch up a few wireframes and we’ll go from there. 📝"}
                  time={'Today • 14:08'}
                />
                <KielMessage
                  message={'Sounds perfect! Let’s do it that way. Thanks, everyone! 🙌'}
                  time={'Today • 14:12'}
                />
              </div>
              {/* Bottom Container */}
              <div className='absolute bottom-0 w-full p-3 z-20'>
                <div className='w-full relative'>
                  <input
                    id="search"
                    type='text'
                    placeholder='Type a message'
                    className={`z-20 w-full rounded-full bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 ps-10 pe-36 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
                    required={false}
                  />
                  {/* Left Button */}
                  <button className='absolute inset-y-0 start-0 ps-3 flex items-center text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </button>
                  {/* Right button groups */}
                  <div className="absolute inset-y-0 end-0 flex items-center gap-3 pe-3">
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </button>
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                      </svg>
                    </button>
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </button>
                    <button className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right bar */}
          <div className="lg:block hidden h-full text-wrap p-3 pr-6 w-full md:min-w-80 lg:min-w-96 md:max-w-80 lg:max-w-96 overflow-auto custom-scrollbar">
            {/*  */}
            <div className='flex justify-between items-center mt-3'>
              <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              <h1 className="leading-none font-normal text-neutral-200 text-md md:text-xl">
                Channel Details
              </h1>
              <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
              </button>
            </div>
            {/*  */}
            <div className='flex flex-col items-center gap-3 mt-5'>
              <img
                className="size-16 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                src={TechCommrLogo}
                alt="Tech-Commr Logo"
              />
              <div className='space-y-1'>
                <h1 className="text-center leading-none font-normal text-neutral-200 text-xl md:text-2xl">
                  Tech-Commr
                </h1>
                <span className="flex items-center gap-2 leading-none text-neutral-300 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  3 members
                  <span>
                    <span className='inline-flex size-2 rounded-full bg-green-500 me-2'></span>
                    1 online
                  </span>
                </span>
              </div>
            </div>
            {/*  */}
            <div className='flex gap-3 w-full mt-4'>
              {[
                {
                  label: "Audio", path: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                },
                {
                  label: "Video", path: "M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"
                },
                {
                  label: "Mute", path: "M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                },
                {
                  label: "Leave", path: "M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                }
              ].map((action, index) => (
                <button className={`px-4 py-3 flex gap-2 flex-col flex-grow justify-center items-center bg-neutral-700/40 hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 ${index === 3 ? 'hover:text-red-500' : 'hover:text-green-500'} z-50 transition duration-300 ease-in-out`} key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d={action.path} clipRule="evenodd" />
                  </svg>
                  <p className="text-neutral-300 text-xs">
                    {action.label}
                  </p>
                </button>
              ))}
            </div>
            {/*  */}
            <div className='flex flex-col w-full gap-2.5 mt-2.5'>
              {[
                {
                  label: "Media, files & links", path: "M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                },
                {
                  label: "Pinned messages", path: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                },
                {
                  label: "Channel settings", path: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                }
              ].map((action, index) => (
                <button className='group px-4 py-3 flex gap-2 flex-grow justify-between items-center bg-neutral-700/10 hover:bg-neutral-700/30 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out' key={index}>
                  <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-5 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-blue-500' : ''}`}>
                      <path fillRule="evenodd" d={action.path} clipRule="evenodd" />
                    </svg>
                    <p className="text-neutral-300 text-sm">
                      {action.label}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 group-hover:text-green-500">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </button>
              ))}
            </div>
            {/*  */}
            <div className='mt-4 border-t border-neutral-700/80 pt-2 space-y-3'>
              <div className='flex items-center justify-between'>
                <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                  All Members
                </h1>
                <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className='space-y-2'>
                <button className='w-full py-2.5 text-sm flex justify-center gap-2 items-center bg-neutral-700/30 rounded-md focus:ring-2 focus:ring-neutral-700 text-green-500 z-50 transition duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                  </svg>
                  Add member
                </button>
                <div className='space-y-2'>
                  {[
                    { name: "Lian T.", username: "@liant", avatar: "https://avatars.githubusercontent.com/u/84505567?v=4" },
                    { name: "Frederick M.", username: "@fredm", avatar: "https://avatars.githubusercontent.com/u/823537?v=4" },
                    { name: "Kiel Marice S.", username: "@kielmarices", avatar: "https://avatars.githubusercontent.com/u/98326799?v=4" }
                  ].map((member, index) => (
                    <a href='#' className='flex items-center gap-3 p-2 rounded-md hover:bg-neutral-700/20 transition duration-300 ease-in-out' key={index}>
                      <img
                        className="size-9 border border-neutral-700 rounded-full cursor-pointer"
                        src={member.avatar}
                        alt="Bot Avatar"
                      />
                      <div className='flex-grow w-full max-w-[85%]'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <h1 className="text-neutral-200 text-sm md:text-base">
                              {member.name}
                            </h1>
                            <p className="leading-none text-neutral-400 text-sm">
                              {member.username}
                            </p>
                          </div>
                          <p className='leading-relaxed text-blue-400 text-xs'>
                            Admin
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day13
