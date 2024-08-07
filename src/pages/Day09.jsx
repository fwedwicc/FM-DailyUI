import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import {
  mj01, queen01, beatles01, acdc01, metallica01, elton01, john01, scorpions01, beegees01, rollingStones01, dailyMix01, dailyMix02, dailyMix03, musicBox
} from '../assets/day09'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'

const Day09 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLenisScroll();
  useScrollToTop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLink = {
    firstLinks: [
      {
        "label": "Feed",
        "icon": "M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      {
        "label": "Playlists",
        "icon": "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      },
      {
        "label": "Stats",
        "icon": "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      }
    ],
    secondLinks: [
      {
        "label": "Favorites",
        "icon": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      },
      {
        "label": "History",
        "icon": "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      },
      {
        "label": "Podcasts",
        "icon": "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      }
    ],
    thirdLinks: [
      {
        "label": "Rock",
        "color": "orange"
      },
      {
        "label": "Pop",
        "color": "green"
      },
    ]
  };

  const soundIcons = [
    'M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z',
    'M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z',
    'M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z',
    'M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" /> <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z',
  ]

  const soundControls = [
    'M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3',
    'M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z',
    'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z',
    'M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z',
    'M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z',
  ]

  const songDatas = [
    {
      "img": mj01,
      "song": "Billie Jean",
      "artist": "Michael Jackson",
      "album": "Thriller",
      "duration": "4:54"
    },
    {
      "img": elton01,
      "song": "Goodbye Yellow Brick Road",
      "artist": "Elton John",
      "album": "GYBR",
      "duration": "3:12"
    },
    {
      "img": john01,
      "song": "Imagine",
      "artist": "John Lennon",
      "album": "Imagine",
      "duration": "3:07"
    },
    {
      "img": beegees01,
      "song": "How Deep is Your Love",
      "artist": "Bee Gees",
      "album": "Greatest",
      "duration": "4:05"
    },
    {
      "img": rollingStones01,
      "song": "Paint It, Black",
      "artist": "Rolling Stones",
      "album": "Aftermath",
      "duration": "3:22"
    }
  ]

  const playlistCard = [
    {
      "img": "https://scpr.brightspotcdn.com/dims4/default/0edc928/2147483647/strip/true/crop/640x583+0+0/resize/880x802!/quality/90/?url=http%3A%2F%2Fscpr-brightspot.s3.us-west-2.amazonaws.com%2Flegacy%2Fi%2Fd209ed114d5699684f140f7910a0a07d%2F5b2c36474488b300092713af-original.jpg",
      "artist": "Guns n' Roses",
    },
    {
      "img": metallica01,
      "artist": "Metallica",
    },
    {
      "img": "https://www.riffx.fr/wp-content/uploads/2019/01/Nirvana-In-Utero-a-20-ans--433x350.jpg",
      "artist": "Nirvana",
    }
  ]

  const dailyMixes = [
    dailyMix01,
    dailyMix02,
    dailyMix03,
  ]

  const ProfileWidget = ({ styles }) => {
    return (
      <div className={`${styles} items-center gap-8`}>
        <a href='#' className='font-medium text-green-500 text-sm px-2.5 py-1 border border-green-700 bg-green-900/40 rounded-md inline-flex items-center gap-1'>
          My account
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ms-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
        <div className='gap-4 flex items-center'>
          <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>
          </button>
          <img
            className="size-10 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/84505567?v=4"
            alt="Bot Avatar"
          />
        </div>
      </div>
    )
  }

  const MusicPlayer = ({ styles }) => {
    return (
      <div className={`${styles} w-full`}>
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center gap-4'>
            {soundControls.map((icon, index) => (
              <button className={`${index === 2 ? 'hover:text-neutral-200' : 'hover:bg-neutral-700/70 focus:ring-2 focus:ring-neutral-700'} size-9 flex justify-center items-center rounded-md text-neutral-400 z-50 transition duration-300 ease-in-out`} key={index}>
                {index === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-${index === 2 ? '14' : '5'} ${index === 1 ? 'transform scale-x-[-1]' : ''}`}>
                    <path fillRule="evenodd" d={icon} clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <div className='flex items-center gap-3 w-full max-w-xl'>
            <span className='text-neutral-400 text-xs'>1:55</span>
            <div className="w-full bg-neutral-700 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full" style={{ width: '35%' }}></div>
            </div>
            <span className='text-neutral-400 text-xs'>4:54</span>
          </div>
        </div>
      </div >
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-[#202020] flex">
        {/* Sidebar */}
        <aside
          className={`fixed overflow-auto h-screen bg-[#202020] w-64 space-y-4 transition-transform lg:pt-0 pt-11 transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >
          <a className="inline-block pl-8 pt-12" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <div className='space-y-5 p-3'>
            {/* First Links */}
            <ul className='space-y-1.5'>
              {navLink.firstLinks.map((link, index) => (
                <li
                  className={`${index == 0 ? 'text-green-500 font-bold bg-green-500/10' : 'text-neutral-200 hover:bg-neutral-700/50'} inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer`}
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
            {/* Second Links */}
            <ul className='space-y-1.5'>
              <li className='text-neutral-500 text-xs uppercase mb-2'>Your music</li>
              {navLink.secondLinks.map((link, index) => (
                <li
                  className={'text-neutral-200 hover:bg-neutral-700/50 inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer'}
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
            {/* Third Links */}
            <ul className='space-y-1.5'>
              <li className='text-neutral-500 text-xs uppercase mb-2'>Your playlist</li>
              {navLink.thirdLinks.map((link, index) => (
                <li
                  className={'text-neutral-200 hover:bg-neutral-700/50 inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer'}
                  key={index}
                >
                  <span className={`flex w-3 h-3 ms-2 bg-${link.color}-500 rounded-full`}></span>
                  <a href="#">{link.label}</a>
                </li>
              ))}
              <li className='pt-2'>
                <a href="#" className='flex items-center justify-center gap-1 text-green-500 text-sm font-medium'>
                  Create new playlist
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 ml-0 lg:ml-64 lg:p-4 p-6 lg:pl-0 lg:mb-[5rem] mb-[10rem] lg:bg-[#202020] bg-neutral-800">
          <div className='bg-neutral-800 lg:rounded-xl rounded-none lg:p-6 p-0'>
            {/* Sidebar Toggle Button for Medium Screens */}
            <button
              className="lg:hidden py-2 size-9 flex fixed justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
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
            <div className='flex justify-end'>
              {/* Profile widget for small screen*/}
              <ProfileWidget styles={'lg:hidden flex'} />
            </div>
            {/* Main Content */}
            <div className='lg:mt-0 mt-5 space-y-8'>
              {/* Header */}
              <div className='flex justify-between items-center'>
                {/* Search bar */}
                <div className='flex items-center gap-4 lg:max-w-md w-full max-w-xs'>
                  <div className='w-full relative'>
                    <input
                      id="search"
                      type='text'
                      placeholder='Search by artists, songs, or albums'
                      className={`w-full rounded-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
                      required={false}
                    />
                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                  </div>
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </button>
                </div>
                {/* Profile widget for large screen*/}
                <ProfileWidget styles={'hidden lg:flex'} />
              </div>
              {/* Main */}
              <div className='space-y-4'>
                {/* Upper part */}
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                  <a href='#' className='relative group col-span-1 max-h-[20rem]'>
                    <img src={queen01} alt="Queen band" className='object-cover w-full h-[20rem] rounded-lg' />
                    <div className='absolute top-4 left-4'>
                      <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                        Your Top Artist
                      </h1>
                    </div>
                    <div className='absolute bottom-4 px-4 flex justify-between items-end w-full'>
                      <div>
                        <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                          Queen
                        </h1>
                        <p className="leading-relaxed text-neutral-300 text-xs">
                          52.6M Monthly listeners
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500 ms-3 cursor-pointer">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div className='col-span-1 grid grid-cols-2 gap-4'>
                    <a href='#' className='relative group bg-gradient-to-t from-teal-400/50 via-emerald-500/70 to-green-600/50  rounded-lg flex items-center justify-center max-h-[20rem]'>
                      <div className='absolute top-4 left-4'>
                        <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                          Playlist of the day
                        </h1>
                        <p className="leading-relaxed text-neutral-300 text-xs">
                          The Beatles | Abbey Road
                        </p>
                      </div>
                      <div className='size-40 mt-24 mb-12'>
                        <img src={beatles01} alt="The Beatles - Abbey Road" className='object-cover rounded-lg shadow-2xl shadow-green-500/70' />
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 text-green-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href='#' className="relative group rounded-lg max-h-[20rem] flex flex-col h-full">
                      <div className="flex-grow h-full">
                        <img src={acdc01} alt="AC/DC - Highway to Hell" className="object-cover rounded-lg h-full w-full" />
                      </div>
                      <div className='absolute top-4 left-4'>
                        <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                          Top Chart Album
                        </h1>
                      </div>
                      <div className='absolute bottom-4 left-4'>
                        <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                          Highway to Hell
                        </h1>
                        <p className="leading-relaxed text-neutral-300 text-xs">
                          AC/DC | 2024
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 text-green-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Middle Part */}
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                  <div className='col-span-1'>
                    <div className='flex justify-between items-center py-3'>
                      <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                        Recently played
                      </h1>
                      <a href='#' className="leading-relaxed text-neutral-400 hover:text-green-500 transition duration-300 text-xs">
                        Show all
                      </a>
                    </div>
                    <div className='space-y-1'>
                      {songDatas.map((track, index) => (
                        <div className='flex items-center justify-between w-full hover:bg-neutral-700/40 p-2 transition duration-300 ease-in-out rounded-md cursor-pointer' key={index}>
                          <div className='flex items-center gap-3'>
                            <div className='lg:w-10 w-8 h-auto'>
                              <img src={track.img} alt="Album preview" className='object-cover rounded-md w-full h-full flex-shrink-0' />
                            </div>
                            <div>
                              <h1 className={`${index === 0 ? 'text-green-500' : 'text-neutral-200'} font-medium text-md`}>
                                {track.song}
                              </h1>
                              <p className="leading-relaxed text-neutral-400 text-xs">
                                {track.artist}
                              </p>
                            </div>
                          </div>
                          <div className='flex gap-12 items-center'>
                            <p className="leading-relaxed text-neutral-400 text-xs">
                              {track.album}
                            </p>
                            <p className="leading-relaxed text-neutral-400 text-xs">
                              {track.duration}
                            </p>
                            <div className='flex items-center gap-3'>
                              {index === 2 || index === 4 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-neutral-400 ms-3 cursor-pointer">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500 ms-3 cursor-pointer">
                                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                              )}
                              <button
                                className='flex items-center p-2 rounded-md focus:bg-neutral-700 hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none'
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-4 border-2 border-green-500/30 bg-gradient-to-bl from-lime-400/30 via-emerald-500/30 to-green-600/30 p-6 rounded-xl w-full grid grid-cols-2'>
                      <div className='space-y-5 flex flex-col justify-center items-start'>
                        <div className='space-y-1'>
                          <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                            Check the power of [untitled]
                          </h1>
                          <p className="leading-relaxed text-neutral-300">
                            Enjoy uninterrupted music streaming with our premium subscription.
                          </p>
                        </div>
                        <Button
                          styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                          label={'Upgrade'}
                        />
                      </div>
                      <div className='flex items-center justify-center'>
                        <img src={musicBox} alt="Music Illustration" className='w-52 h-auto' />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='flex justify-between items-center py-3'>
                      <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                        Jump back in
                      </h1>
                      <a href='#' className="leading-relaxed text-neutral-400 hover:text-green-500 transition duration-300 text-xs">
                        Show all
                      </a>
                    </div>
                    <div className='flex gap-3'>
                      {playlistCard.map((card, index) => (
                        <div className='relative w-full space-y-1 p-2 rounded-lg hover:bg-neutral-700/40 transition duration-300 ease-in-out group' key={index}>
                          <div className='h-[11rem]'>
                            <img src={card.img} alt="Band Preview" className='object-cover rounded-md w-full h-full' />
                          </div>
                          <p className="leading-relaxed font-medium text-neutral-300 text-md text-center group-hover:text-green-500 transition duration-300 ease-in-out">
                            {card.artist}
                          </p>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 text-green-500 absolute bottom-11 right-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <div className='mt-2'>
                      <div className='flex justify-between items-center py-3'>
                        <h1 className="font-normal text-neutral-200 text-md md:text-xl">
                          Daily Mixes
                        </h1>
                        <a href='#' className="leading-relaxed text-neutral-400 hover:text-green-500 transition duration-300 text-xs">
                          Show all
                        </a>
                      </div>
                      <div className='flex gap-3'>
                        {dailyMixes.map((card, index) => (
                          <a href='#' className='relative w-full space-y-1 p-2 rounded-lg hover:bg-neutral-700/40 transition duration-300 ease-in-out group' key={index}>
                            <div className='h-[13rem]'>
                              <img src={card} alt="Band Preview" className='object-cover rounded-md w-full h-full' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 text-green-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Sound Buttons Footer */}
        <footer className='bg-neutral-900 lg:pr-7 p-3 w-full bottom-0 fixed lg:z-50 z-40 lg:space-y-0 space-y-3'>
          <div className='flex justify-between items-center'>
            {/* Left Side */}
            <div className='flex items-center lg:gap-5 gap-3 w-full'>
              <div className='lg:w-14 w-12 h-auto'>
                <img src={mj01} alt="MJ Album" className='object-cover rounded-md w-full h-full' />
              </div>
              <div>
                <h1 className="font-medium text-neutral-200 text-md md:text-lg">
                  Billie Jean
                </h1>
                <p className="leading-relaxed text-neutral-400 text-sm">
                  Michael Jackson
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500 ms-3 cursor-pointer">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            {/* Center */}
            <MusicPlayer styles='lg:block hidden' />
            {/* Right Side */}
            <div className='flex items-center justify-end lg:gap-2 gap-1 w-full'>
              {soundIcons.map((icon, index) => (
                <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out' key={index}>
                  {index === 2 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-5'>
                      <path fillRule="evenodd" d={icon} clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
              <div className="w-full md:max-w-[7rem] max-w-[4rem] bg-neutral-700 rounded-full h-[4px]">
                <div className="bg-green-500 h-[4px] rounded-full" style={{ width: '45%' }}></div>
              </div>
              <button className='size-9 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5" />
                </svg>
              </button>
            </div>
          </div>
          {/* Center in small screens */}
          <MusicPlayer styles='block lg:hidden' />
        </footer>
      </section>
    </motion.div >
  );
};

export default Day09;
