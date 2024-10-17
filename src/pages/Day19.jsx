import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { m, motion } from 'framer-motion'

const Day19 = () => {
  useLenisScroll();
  useScrollToTop();

  const ChallengersData = [
    {
      link: "https://www.codedex.io/@Vulpes",
      banner: "https://www.codedex.io/images/css/banner-v2.png",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2FS244fdK50nNvDwLw2xaGOddFNvv1%2Fprofile.jpeg?alt=media&token=dec3a243-3d56-4f00-bc31-32beaab06a4d",
      name: "Ties van den Nieuwenhof",
      username: "@Vulpes",
      level: 13,
      exercises: 123,
      xp: 4640,
      badges: 5,
      streak: 1
    },
  ]

  const ProfileCard = (props) => {
    return (
      <a href={props.link} className='relative group border bg-neutral-700/20 border-neutral-700/40 p-3.5 rounded-xl hover:bg-neutral-700/50 transition duration-300 ease-in-out' target='_blank' rel='noopener noreferrer'>
        {/* Profile and Banner */}
        <div className='h-24 relative'>
          <img src={props.banner} alt={`${props.name} Banner`} className='absolute object-cover w-full h-full rounded-md' />
          <div className='size-24 rounded-full absolute left-5 top-11 border-4 border-white'>
            <img src={props.profile} alt={props.name} className='absolute object-cover w-full h-full rounded-full' />
          </div>
          <p className="flex items-center gap-1 absolute right-0 top-[6.4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out leading-relaxed text-neutral-300 text-xs">
            View on Codedex
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </p>
        </div>
        {/* Information */}
        <div className='mt-14 px-5'>
          <div>
            <h1 className='flex items-center gap-1.5 text-neutral-200 group-hover:text-green-500 text-xl transition duration-300 ease-in-out'>{props.name} <span className='leading-relaxed text-neutral-400 text-sm'>{props.username}</span></h1>
            <p className="flex items-center gap-1 text-neutral-200">
              <img src="https://www.codedex.io/images/rank_badges/level_3.png" alt="Rank Badge" className='w-5 h-auto' />
              Level {props.level}
            </p>
          </div>
          {/* Stats */}
          <div className='mt-4 flex items-center gap-8'>
            {[
              { label: "Exercises", data: props.exercises },
              { label: "Total XP", data: props.xp },
              { label: "Badges", data: props.badges },
              { label: "Streak", data: props.streak },
            ].map((stats, index) => (
              <div key={index}>
                <p className="text-neutral-400">
                  {stats.label}
                </p>
                <p className={`${index === 0 ? 'text-blue-400' : index === 1 ? 'text-orange-400' : index === 2 ? 'text-green-400' : 'text-indigo-400'} font-semibold text-xl`}>{stats.data}</p>
              </div>
            ))}
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
        {/* Main Container */}
        <div className="max-w-[95rem] border gap-4 w-full flex">
          {/* Challengers Profiles */}
          <div className='flex flex-col min-w-5xl w-full z-10 space-y-4 p-1'>
            <h1 className='text-neutral-200 text-3xl'>Top 10 Challengers of Codedex's 30NitesOfCode</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
              {ChallengersData.map((creator, index) => (
                <ProfileCard
                  key={index}
                  link={creator.link}
                  banner={creator.banner}
                  profile={creator.profile}
                  name={creator.name}
                  username={creator.username}
                  petname={creator.petname}
                  level={creator.level}
                  exercises={creator.exercises}
                  xp={creator.xp}
                  badges={creator.badges}
                  streak={creator.streak}
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
