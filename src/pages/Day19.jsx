import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { ThirtyNitesOfCode } from '../assets/day19'
import { motion } from 'framer-motion'

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
      link: "https://www.codedex.io/@banhmipan",
      banner: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/profile-banner%2Fzjgog8oSQOPvfQks4yWUXZpMGvo1%2Fpenguin%20banner%20(4).png?alt=media&token=6e97671f-2c17-49bb-a212-3c5b7edc436c",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2Fzjgog8oSQOPvfQks4yWUXZpMGvo1%2Fprofile.jpg?alt=media&token=1768c59c-4cc6-44c8-9004-2d51e61a4171",
      name: "Brendon Tran",
      username: "@banhmipan",
      level: 12,
      days: 161,
      date: "May 03, 2024",
      exercises: 245,
      xp: 4175,
      badges: 36,
      streak: 7
    },
    {
      link: "https://www.codedex.io/@0xkonstantin",
      banner: "https://www.codedex.io/images/css/banner-v2.png",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2F2RpWZxCK9BN3hyl8xt4ahnMV1BD3%2Fprofile.png?alt=media&token=ac57eda0-d863-410f-8285-d72788147d9d",
      name: "Konstantin Levin",
      username: "@0xkonstantin",
      level: 11,
      days: 134,
      date: "July 06, 2024",
      exercises: 201,
      xp: 3615,
      badges: 28,
      streak: 135
    },
    {
      link: "https://www.codedex.io/@pokemika",
      banner: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/profile-banner%2FDgIBCGuFNzSh0A4fuDQ5CJ2rvRo1%2F8_bit_pixel_art_city_by_alextendo_dcs6lfa2.jpg?alt=media&token=6eb493c4-98cf-4602-b693-8520bbe07f7d",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2FDgIBCGuFNzSh0A4fuDQ5CJ2rvRo1%2Fprofile.jpg?alt=media&token=25b6ac25-cbbb-4e36-94b1-34c9d235e993",
      name: "Mika",
      username: "@pokemika",
      level: 11,
      days: 114,
      date: "July 26, 2024",
      exercises: 225,
      xp: 3563,
      badges: 33,
      streak: 115
    },
    {
      link: "https://www.codedex.io/@M3R14M",
      banner: "https://www.codedex.io/images/css/banner-v2.png",
      profile: "https://avatars.githubusercontent.com/u/86663811?v=4",
      name: "Mer",
      username: "@M3R14M",
      level: 13,
      days: 113,
      date: "July 27, 2024",
      exercises: 301,
      xp: 4795,
      badges: 51,
      streak: 144
    },
    {
      link: "https://www.codedex.io/@martijnkuik82",
      banner: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/profile-banner%2FspzbJgvyzKd6ugFfvEh81FNGefv1%2Fimg-e8B6fCrITL0Teacm23YIP.jpeg?alt=media&token=aa4170fb-9a55-4318-a84b-525c8f47e0c4",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2FspzbJgvyzKd6ugFfvEh81FNGefv1%2Fprofile.jpg?alt=media&token=77ddec89-53b8-43e8-ae86-54a2799407a9",
      name: "Martijn Kuik",
      username: "@martijnkuik82",
      level: 11,
      days: 68,
      date: "July 22, 2024",
      exercises: 221,
      xp: 3730,
      badges: 34,
      streak: 2
    },
    {
      link: "https://www.codedex.io/@Adrian7",
      banner: "https://www.codedex.io/images/css/banner-v2.png",
      profile: "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/avatars%2FQu1BRtPYz3NqfbdAx33CRiyXAq42%2Fprofile.jpg?alt=media&token=01224c62-9ff3-4a49-a9be-b8e21f552c60",
      name: "Adrian",
      username: "@Adrian7",
      level: 5,
      days: 60,
      date: "May 30, 2024",
      exercises: 60,
      xp: 845,
      badges: 9,
      streak: 0
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
        <div className='mt-[4.2rem] px-5 pb-3'>
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
            <div className={`size-8 flex items-center justify-center bg-green-600 rounded-full text-white font-bold`}>{props.top}</div>
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
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-20 py-8 overflow-x-hidden">
        {/* Main Container */}
        <div className="max-w-[95rem] gap-4 w-full">
          <div className='flex flex-col min-w-5xl w-full z-10 space-y-4 p-1'>
            {/* Header */}
            <div className='flex justify-center lg:items-start items-center lg:flex-row flex-col mb-8 md:gap-8 gap-4'>
              <img src={ThirtyNitesOfCode} alt="30NitesOfCode from Codédex" className='w-[40rem] h-auto rounded-xl' />
              <div className='space-y-6'>
                <div className='space-y-4'>
                  <div>
                    <p className='text-neutral-300 text-2xl font-bold'>Codédex's</p>
                    <h1 className='text-neutral-200 text-3xl md:text-5xl'>#30NitesOfCode</h1>
                  </div>
                  <p className='text-neutral-400 w-full max-w-xl'>#30NitesOfCode is a habit-building challenge for those who want to commit to 30 days of learning and building. You start by choosing an virtual pet and it will be your companion for the journey.</p>
                </div>
                <div className='mt-4 flex lg:justify-start justify-center items-center gap-12'>
                  {[
                    { icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z", label: "Members", data: 398 },
                    { icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z", label: "New Posts", data: 78 },
                    { icon: "M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z", label: "Upcoming Events", data: 3 },
                  ].map((stats, index) => (
                    <div key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-neutral-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d={stats.icon} />
                      </svg>
                      <div className='space-y-2.5'>
                        <p className="text-neutral-400">
                          {stats.label}
                        </p>
                        <p className={`${index === 0 ? 'text-blue-400' : index === 1 ? 'text-orange-400' : index === 2 ? 'text-green-400' : 'text-indigo-400'} font-semibold text-2xl md:text-4xl`}>{stats.data}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Challengers Profiles */}
            <div className='pb-2'>
              <h1 className='text-neutral-200 text-3xl'>Hall of Fame Leaderboard</h1>
              <p className='text-neutral-400'>Top 9 Challengers of Codédex's 30NitesOfCode</p>
            </div>
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
            <div>
              <p className='text-center text-neutral-400'>View all at</p>
              <a href="https://www.codedex.io/30-nites-of-code" className='text-green-500 underline' target='_blank' rel='noopener noreferrer'>30NitesOfCode</a>
              <img src="https://www.codedex.io/images/codedex-bot-logo-compressed.gif" alt="Codédex Logo" className='w-24 h-auto mt-10' />
            </div>
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
