import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { m, motion } from 'framer-motion'

const Day19 = () => {
  useLenisScroll();
  useScrollToTop();

  const CreatorsData = [
    {
      link: "https://www.youtube.com/@TheCodingTrain",
      banner: "https://yt3.googleusercontent.com/DKu3blYCDVczjLvvr4sRNetij6DlCpkubLIcahtnxkInjThPUvSQh2mpmh0OY_W-9dVqiVf9pQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      profile: "https://yt3.googleusercontent.com/99wepc_FTSN0n_GbR-FlFANyxed7TsbE8WxKIDWftdxssZlYo1-gW1CRD7cPgOzThMM8m4W8=s160-c-k-c0x00ffffff-no-rj",
      name: "The Coding Train",
      username: "@TheCodingTrain",
      subscriber: "1.71M",
      videos: "1.2K",
    },
    {
      link: "https://www.youtube.com/@TraversyMedia",
      banner: "https://yt3.googleusercontent.com/FGxGbXEEUNf5GWcraGa-f4PLGdDGIgOf4C6LH0PKH3ug-W8PR0tXkUq8eKPAbz8kCFKhVck7tA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      profile: "https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj",
      name: "Traversy Media",
      username: "@TraversyMedia",
      subscriber: "2.29M",
      videos: 984,
    },
    {
      link: "https://www.youtube.com/@TechWithTim",
      banner: "https://yt3.googleusercontent.com/09_PNnIaqzx6swUSo17evZg99ST-lHD8Y-FL6ODH2zKY9uaje-E52_d7SHehOkxYg65Re0Pmag=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      profile: "https://yt3.googleusercontent.com/ytc/AIdro_k15oXl74WcnpdL-uVBv6IHBgAfXEEnpUiS-IoEyV1auyY=s160-c-k-c0x00ffffff-no-rj",
      name: "Tech With Tim",
      username: "@TechWithTim",
      subscriber: "1.6M",
      videos: "1K",
    },
    {
      link: "https://www.youtube.com/@KevinPowell",
      banner: "https://yt3.googleusercontent.com/HsOID_2Ri-jtwLjcRyT6c0CqH9hmSJgJDhmlcFPID77EtAZKZSwCjlWOLN9I4vEM1kmzrTszWw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      profile: "https://yt3.googleusercontent.com/ytc/AIdro_mQczyuvnXgEq8fApoOXpG2Yw_JKYqRA7kVOhNFuHLz9Vc=s160-c-k-c0x00ffffff-no-rj",
      name: "Kevin Powell",
      username: "@KevinPowell",
      subscriber: "946K",
      videos: 843,
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      subscriber: "",
      videos: "",
    },
  ]

  const ProfileCard = (props) => {
    return (
      <a href={props.link} className='group border border-neutral-700/40 p-3.5 rounded-xl hover:bg-neutral-700/50 transition duration-300 ease-in-out' target='_blank' rel='noopener noreferrer'>
        {/* Profile and Banner */}
        <div className='h-24 relative'>
          <img src={props.banner} alt={`${props.name} Banner`} className='absolute object-cover w-full h-full rounded-md' />
          <div className='size-24 rounded-full absolute left-5 top-11 border-4 border-white'>
            <img src={props.profile} alt={props.name} className='absolute object-cover w-full h-full rounded-full' />
          </div>
          <p className="flex items-center gap-1 absolute right-0 top-[6.4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out leading-relaxed text-neutral-300 text-xs">
            View on YouTube
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </p>
        </div>
        {/* Information */}
        <div className='mt-14 px-5'>
          <h1 className='text-neutral-200 group-hover:text-green-500 text-xl transition duration-300 ease-in-out'>{props.name}</h1>
          <p className="leading-relaxed text-neutral-400 text-sm">
            {props.username}
          </p>
          <div className='mt-3 flex items-center gap-4'>
            <p className="leading-relaxed text-neutral-300 text-sm">
              <span className='text-green-500'>{props.subscriber}</span> Subscribers
            </p>
            <p className="leading-relaxed text-neutral-300 text-sm">
              <span className='text-green-500'>{props.videos}</span> Videos
            </p>
          </div>
        </div>
      </a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        {/* Modal */}
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-[15px] max-w-[95rem] p-4 gap-4 w-full flex lg:flex-row flex-col">
          {/* Leaderboards */}
          <div className='lg:max-w-sm max-w-full rounded-lg w-full bg-neutral-500/10 p-6 space-y-4'>
            <h1 className='text-neutral-200 text-3xl'>Welcome to nowhere!</h1>
          </div>
          {/* Creator Profiles */}
          <div className='flex flex-col min-w-5xl w-full z-10 space-y-4 p-1'>
            <h1 className='text-neutral-200 text-3xl'>Top Tech Content Creators</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
              {CreatorsData.map((creator, index) => (
                <ProfileCard
                  key={index}
                  link={creator.link}
                  banner={creator.banner}
                  profile={creator.profile}
                  name={creator.name}
                  username={creator.username}
                  subscriber={creator.subscriber}
                  videos={creator.videos}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day19
