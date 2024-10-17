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
      days: 279,
      date: "Jan 30, 2024",
      exercises: 284,
      xp: 4640,
      badges: 43,
      streak: 3
    },
    {
      link: "https://www.codedex.io/@TheRealTami",
      banner: "https://www.codedex.io/images/css/banner-v2.png",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2FWmI6feDBcobCSjb7GOUtwOeuaNF3%2Fprofile.png?alt=media&token=980b6257-7593-4d7f-b1c3-57f0db6fb5c7",
      name: "Tami",
      username: "@TheRealTami",
      level: 12,
      days: 182,
      date: "March 31, 2024",
      exercises: 233,
      xp: 4125,
      badges: 37,
      streak: 3
    },
    {
      link: "https://www.codedex.io/@milan-gru",
      banner: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/profile-banner%2FVjmcIO9IN2V6EGj4gQqlSMVVPBF2%2FBlack%20White%20Minimalist%20Boho%20Grid%20Background%20Page%20Border%20A4%20(Landscape).png?alt=media&token=b51e7eab-bf75-4742-a311-acce99e25fca",
      profile: "https://avatars.githubusercontent.com/u/48260426?v=4",
      name: "Milan Grujičić",
      username: "@milan-gru",
      level: 11,
      days: 161,
      date: "March 30, 2024",
      exercises: 233,
      xp: 3725,
      badges: 35,
      streak: 65
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      level: null,
      days: null,
      date: "",
      exercises: null,
      xp: null,
      badges: null,
      streak: null
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      level: null,
      days: null,
      date: "",
      exercises: null,
      xp: null,
      badges: null,
      streak: null
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      level: null,
      days: null,
      date: "",
      exercises: null,
      xp: null,
      badges: null,
      streak: null
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      level: null,
      days: null,
      date: "",
      exercises: null,
      xp: null,
      badges: null,
      streak: null
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      level: null,
      days: null,
      date: "",
      exercises: null,
      xp: null,
      badges: null,
      streak: null
    },
    {
      link: "",
      banner: "",
      profile: "",
      name: "",
      username: "",
      level: null,
      days: null,
      date: "",
      exercises: null,
      xp: null,
      badges: null,
      streak: null
    },
  ]

  const ProfileCard = (props) => {
    return (
      <a href={props.link} className='relative group border bg-neutral-700/20 border-neutral-700/40 p-3.5 rounded-xl hover:bg-neutral-700/50 transition duration-300 ease-in-out' target='_blank' rel='noopener noreferrer'>
        {/* Profile and Banner */}
        <div className='h-24 relative'>
          <img src={props.banner} alt={`${props.name} Banner`} className='absolute object-cover w-full h-full rounded-md' />
          <div className='size-28 rounded-full absolute left-5 top-10 border-4 border-white'>
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
        <div className='mt-16 px-5'>
          <div>
            <h1 className='flex items-center gap-1.5 text-neutral-200 group-hover:text-green-500 text-xl transition duration-300 ease-in-out'>{props.name} <span className='leading-relaxed text-neutral-400 text-sm'>{props.username}</span></h1>
            <p className="flex items-center gap-1 text-neutral-200">
              <img src="https://www.codedex.io/images/rank_badges/level_3.png" alt="Rank Badge" className='w-5 h-auto' />
              Level {props.level}
            </p>
          </div>
          {/* Challenge Info */}
          <div className='flex justify-between items-center border border-neutral-700 py-3 px-4 mt-4 rounded-xl'>
            <div className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-10 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
              <div>
                <h1 className='text-neutral-200 text-xl'><span className='text-yellow-500'>{props.days}/30</span> days</h1>
                <p className="text-neutral-400">
                  Completed: <span className='text-neutral-300'>{props.date}</span>
                </p>
              </div>
            </div>
            <div className='size-8 flex items-center justify-center bg-green-600 rounded-full text-white font-bold'>{props.top}</div>
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
        <div className="max-w-[95rem] border gap-4 w-full">
          {/* Challengers Profiles */}
          <div className='flex flex-col min-w-5xl w-full z-10 space-y-4 p-1'>
            <h1 className='text-neutral-200 text-3xl'>Top 9 Challengers of Codedex's 30NitesOfCode</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
              {ChallengersData.map((creator, index) => (
                <ProfileCard
                  key={index}
                  top={index + 1}
                  link={creator.link}
                  banner={creator.banner}
                  profile={creator.profile}
                  name={creator.name}
                  username={creator.username}
                  petname={creator.petname}
                  level={creator.level}
                  days={creator.days}
                  date={creator.date}
                  exercises={creator.exercises}
                  xp={creator.xp}
                  badges={creator.badges}
                  streak={creator.streak}
                />
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className='mt-14 flex flex-col justify-center items-center w-full'>
            <a href="https://www.codedex.io/" className='text-green-500 underline' target='_blank' rel='noopener noreferrer'>View all at 30NitesOfCode</a>
            <img src="https://www.codedex.io/images/codedex-bot-logo-compressed.gif" alt="Codédex Logo" className='w-24 h-auto mt-10' />
            <h1 className='text-neutral-200 text-3xl'>Explore <a href="https://www.codedex.io/" className='hover:text-green-500 transition duration-300 ease-in-out' target='_blank' rel='noopener noreferrer'>Codédex!</a></h1>
            <p className="text-neutral-400 w-full max-w-lg text-xs text-center mt-3">
              Codédex offers an exciting way to learn coding through interactive challenges in Python, HTML, CSS, and JavaScript. Earn XP, unlock regions, and collect badges. Start your adventure today!
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day19
