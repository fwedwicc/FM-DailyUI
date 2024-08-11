import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';
import { fmAvatar, qcuLogo, profileBackground, postThumbnail01, postThumbnail02, postThumbnail03 } from '../assets/day06';
import { Button } from '../components';
import { motion, AnimatePresence } from 'framer-motion';

const Day06 = () => {
  useLenisScroll();
  useScrollToTop();

  const [activeTab, setActiveTab] = useState('posts');
  const [isOpen, setIsOpen] = useState(false);

  const PostCardData = [
    {
      "week": "2w",
      "media": postThumbnail01,
      "title": "Is Create React App Really Dead?",
      "page": 9,
      "desc": "Dive into the debate surrounding the future of Create React App. This article explores the reasons behind the rise and potential fall of CRA, and whether it's still a viable choice for modern web development.",
      "likes": 715,
      "comments": 41,
      "reposts": 104,
    },
    {
      "week": "3w",
      "media": postThumbnail02,
      "title": "Figma to Tailwind in one click?",
      "page": 21,
      "desc": "Discover the latest tools that bridge the gap between design and code. Learn how Figma plugins can streamline your workflow by converting designs directly to Tailwind CSS, saving you time and effort.",
      "likes": 646,
      "comments": 28,
      "reposts": 166,
    },
    {
      "week": "1mo",
      "media": postThumbnail03,
      "title": "15 VSCode Keyboard Shortcuts to Speed Up Your Code",
      "page": 17,
      "desc": "Boost your productivity with these essential VSCode keyboard shortcuts. This guide covers 15 shortcuts that can drastically reduce coding time, making your development process smoother and more efficient.",
      "likes": "1,566",
      "comments": 34,
      "reposts": 34,
    }
  ]

  const CommentCardData = [
    {
      "week": "1mo",
      "desc": "Great insights on the future of React development! The points raised about Create React App really got me thinking about alternative tools."
    },
    {
      "week": "1mo",
      "desc": "I've been waiting for something like this! The ability to go from Figma to Tailwind in one click is a game-changer. Can't wait to try this out in my next project."
    },
    {
      "week": "1mo",
      "desc": "These VSCode shortcuts are lifesavers. I didn't even know some of these existed, and now I can't imagine coding without them!"
    },
  ];


  const PeopleAlsoViewedData = [
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true",
      "name": "John Reyes",
      "bio": "Computer Science major at Quezon City University. Aspiring Software Engineer.",
    },
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-4.jpg?raw=true",
      "name": "Maria Santos",
      "bio": "Information Technology student at Quezon City University. Passionate about UI/UX Design.",
    },
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-5.jpg?raw=true",
      "name": "Michael Cruz",
      "bio": "Engineering student at Quezon City University. Enthusiastic about robotics and AI.",
    },
    {
      "img": "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true",
      "name": "Angelica Flores",
      "bio": "Multimedia Arts student at Quezon City University. Focused on graphic design and animation.",
    }
  ];

  const PagesCardData = [
    {
      "img": "https://media.licdn.com/dms/image/C560BAQFmuLSyL1nlPA/company-logo_100_100/0/1678231359044/github_logo?e=1729728000&v=beta&t=tPw2-W4_XiZ_ghwqL8O4qSC8OnwTbFA7YHD8Wbsu6Uo",
      "title": "GitHub",
      "desc": "Software Development",
      "followers": "4,229,291",
    },
    {
      "img": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1729728000&v=beta&t=fH3-IirmB0Zv8z-7EVn4f7r25rn2SeFnYr22vDRIBNQ",
      "title": "Microsoft",
      "desc": "Software Development",
      "followers": "23,051,408",
    },
    {
      "img": "https://media.licdn.com/dms/image/D4E0BAQGDdPiPwHLOBg/company-logo_100_100/0/1703827515439?e=1729728000&v=beta&t=nNT3L4W_DaAjlLt3qA49R7-aMKNZaBAs7Kk0zmyrylI",
      "title": "AWS Training & Certification",
      "desc": "IT Services and IT Consulting",
      "followers": "1,181,077,077",
    },
    {
      "img": "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1631311446380?e=1729728000&v=beta&t=sC9yWs3HfyRabF0wz7-pHlGVLCNB6zs6EV6E6UXSMS8",
      "title": "Google",
      "desc": "Software Development",
      "followers": "33,609,006",
    },
  ]

  const EducationData = [
    {
      "img": "https://media.licdn.com/dms/image/D560BAQGgWoG-MY2X0g/company-logo_100_100/0/1704727987180/qcu_logo?e=1729728000&v=beta&t=u4hhEH5WyjH7MEj_6ZdJmaILDuq-3p6BPTVKKdZteKE",
      "school": "Quezon City University",
      "program": "Bachelor of Science - BS, Information Technology",
      "year": "2022 - 2026",
      "skills": "Software Systems Engineering, Project Management and +3 skills",
    },
    {
      "img": "https://media.licdn.com/dms/image/C560BAQEbhr3bpmnUlQ/company-logo_100_100/0/1642674964290/bestlink_college_of_the_philippines_logo?e=1729728000&v=beta&t=XAFJMUvw-RzZIiGdKgt0OAOHobBkrYEE0Op_wXZs3Fo",
      "school": "Bestlink College of the Philippines",
      "program": "Senior High School, Information and Communication Technology",
      "year": "2019 - 2021",
      "skills": "Self Learning, Learning Management and +2 skills",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 relative">
        <div className='lg:h-60 md:h-52 h-44 w-full absolute -z-0'>
          <img
            src={profileBackground}
            alt="Background Image"
            className='object-cover h-full w-full'
            style={{ aspectRatio: '16/9' }}
          />
        </div>
        <div className="relative h-auto lg:px-32 md:px-24 px-8 lg:py-20 py-8 z-10 space-y-8">
          <div className='flex justify-between items-center lg:pt-16 md:pt-20 pt-12'>
            <div>
              <div className="relative inline-block">
                <img className="size-48 p-1.5 rounded-full ring-4 ring-green-500" src={fmAvatar} alt="Frederick Moreno - Avatar Profile" />
                <div className="absolute bottom-0 right-[-5rem] flex items-center space-x-2 bg-neutral-700 border border-neutral-600/70 py-1 px-2 rounded-full">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="text-xs text-neutral-200 whitespace-nowrap">Available for work</span>
                </div>
              </div>
            </div>
            <div className='flex gap-3 relative pt-20'>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden flex items-center p-2 rounded-md focus:bg-neutral-700 hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              {/* Mobile Dropdown Menu */}
              {isOpen && (
                <div className='absolute top-full right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
                  <div className='flex flex-col gap-2 p-4'>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                      label={'Message'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>
                    </Button>
                    <Button
                      styles={'flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                      label={'Connect'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              )}
              <Button
                styles={'hidden md:flex flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                label={'Message'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </Button>
              <Button
                styles={'hidden md:flex flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Connect'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className='flex lg:justify-between lg:items-center items-start flex-col lg:flex-row justify-start gap-7'>
            <div className='space-y-5'>
              <span className='flex items-center gap-3'>
                <h1 className="text-3xl font-medium text-neutral-200 sm:text-4xl md:text-5xl text-nowrap">
                  Frederick Moreno
                </h1>
                <span className='font-thin text-lg text-neutral-400'>(He/Him)</span>
                <span className='inline-flex gap-2 items-center font-medium text-sm text-neutral-300 px-3 py-1 border border-green-700 bg-green-900/40 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  Verified
                </span>
              </span>
              <div className='space-y-1'>
                <span className="block leading-relaxed text-neutral-300">
                  Front-end Developer | UI/UX Designer | BSIT Student
                </span>
                <span className="block leading-relaxed text-neutral-300">
                  National Capital Region, Philippines
                  <span className='mx-3 text-neutral-400'>•</span>
                  <a href="#" className='text-blue-500 text-sm font-semibold text-nowrap'>
                    Contact info
                  </a>
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className="flex -space-x-2">
                  <img className="size-9 border-2 border-neutral-300 rounded-full" src="https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true" alt="Sample Avatar Profile" />
                  <img className="size-9 border-2 border-neutral-300 rounded-full" src="https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true" />
                  <img className="size-9 border-2 border-neutral-300 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
                  <span className="flex items-center justify-center size-9 text-xs font-medium text-white bg-neutral-700 border-2 border-neutral-300 rounded-full">+99</span>
                </div>
                <a href="#" className='text-neutral-300 text-sm text-nowrap'>
                  179+ Connections
                </a>
              </div>
            </div>
            <div className='space-y-4 flex flex-col lg:items-end md:items-start items-start'>
              <div className="text-neutral-300 font-semibold text-lg inline-flex items-center gap-3">
                <img src={qcuLogo} alt="QCU Logo" className='w-12 h-auto' />
                Quezon City University
              </div>
              <div className='border border-neutral-600/40 bg-neutral-700/40 p-4 rounded-md'>
                <h2 className="leading-relaxed text-neutral-300 font-semibold">
                  Open to work
                </h2>
                <p className="leading-relaxed text-neutral-300">
                  Web Developer, React Developer, Front-end Developer and UI/UX Designer roles
                </p>
                <a href="#" className='text-blue-500 text-sm font-semibold text-nowrap'>
                  Show details
                </a>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1'>
            <div className='lg:col-span-2 col-span-1 self-start'>
              <div className='border-t lg:border-r border-neutral-700/60 py-10 lg:pr-10 space-y-3'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  About
                </h1>
                <p className="leading-relaxed text-neutral-400 pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla id! Doloremque eum a libero quidem sapiente quia! Quas quisquam, delectus consectetur blanditiis ex quis aut accusamus amet quia nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum voluptatem neque dignissimos quae voluptas quisquam perspiciatis repellendus. Commodi quia maxime a beatae tempora iusto, quidem eius.
                </p>
                <div className='py-5 px-7 flex justify-between items-center border-neutral-600/40 bg-neutral-700/40 rounded-md'>
                  <div className='space-y-3'>
                    <h1 className="text-lg text-neutral-300 lg:text-xl inline-flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                      </svg>
                      Top skills
                    </h1>
                    <p className="leading-relaxed text-neutral-300">
                      Web Development • Front-End Development • Responsive Web Design • User Interface Design • User Experience Design
                    </p>
                  </div>
                  <a href="#" className='border border-green-500 hover:bg-green-500/20 transition duration-300 ease-in-out p-2.5 rounded-full text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className='border-t lg:border-r border-neutral-700/60 py-10 lg:pr-10 space-y-3'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  Activity
                </h1>
                <span className="leading-relaxed text-neutral-400 text-sm pb-4">
                  1,083 followers
                </span>
                <div>
                  <div className='space-x-2 flex'>
                    <div className='inline-flex p-1.5 border border-neutral-700/80 gap-2 rounded-[0.4rem]'>
                      <motion.button
                        className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'posts' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                          }`}
                        onClick={() => setActiveTab('posts')}
                        whileTap={{ scale: 0.95 }}
                      >

                        Posts
                      </motion.button>
                      <motion.button
                        className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'comments' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                          }`}
                        onClick={() => setActiveTab('comments')}
                        whileTap={{ scale: 0.95 }}
                      >

                        Comments
                      </motion.button>
                    </div>
                  </div>
                  <div>
                    <AnimatePresence mode="wait">
                      {activeTab === 'posts' ? (
                        <motion.div
                          key="payment"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='pt-6'
                        >
                          {PostCardData.map((post, index) => {
                            return (
                              <div className='space-y-4 border-b border-neutral-700/60 py-7' key={index}>
                                <span className="leading-relaxed text-neutral-400 text-sm">
                                  <span className='text-neutral-200'>Frederick Moreno</span> reposted this • {post.week}
                                </span>
                                <div className='flex gap-6'>
                                  <div className='w-56 h-36 relative'>
                                    <img src={post.media} alt="Post Thumbnail" className='absolute object-cover h-full w-full rounded-md' />
                                  </div>
                                  <div className='flex flex-col items-start space-y-2.5 w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                      <p className="leading-relaxed text-neutral-200 text-lg lg:text-xl">
                                        {post.title}
                                      </p>
                                      <a href="#" className='text-blue-500 text-sm font-semibold text-nowrap'>
                                        Show more
                                      </a>
                                    </div>
                                    <div>
                                      <p className="leading-relaxed text-neutral-300 text-sm">
                                        {post.desc}
                                      </p>
                                      <span className="leading-relaxed text-neutral-400 text-sm">
                                        {post.page} Pages
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                  <div className='inline-flex gap-3 items-center'>
                                    <div className="flex -space-x-1">
                                      <span className="flex items-center justify-center size-7 text-xs font-medium bg-blue-600 rounded-full text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                          <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                        </svg>
                                      </span>
                                      <span className="flex items-center justify-center size-7 text-xs font-medium bg-yellow-600 rounded-full text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                                          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
                                        </svg>
                                      </span>
                                      <span className="flex items-center justify-center size-7 text-xs font-medium bg-red-600 rounded-full text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                        </svg>
                                      </span>
                                    </div>
                                    <span className="leading-relaxed text-neutral-400 text-sm">
                                      {post.likes}
                                    </span>
                                  </div>
                                  <div className='space-x-4'>
                                    <a href="#" className='text-blue-500 hover:underline text-sm font-semibold text-nowrap'>
                                      {post.comments} comments
                                    </a>
                                    <a href="#" className='text-blue-500 hover:underline text-sm font-semibold text-nowrap'>
                                      {post.reposts} reposts
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                          <Button
                            styles={'mt-7 w-full text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                            label={'Show more'}
                          >
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="comments"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='pt-6'
                        >
                          {CommentCardData.map((comment, index) => {
                            return (
                              <div className='space-y-3 border-b border-neutral-700/60 py-7 w-full' key={index}>
                                <span className="leading-relaxed text-neutral-400 text-sm">
                                  <span className='text-neutral-200'>Frederick Moreno</span> reposted this • {comment.week}
                                </span>
                                <div className='flex justify-between items-center'>
                                  <p className="leading-relaxed text-neutral-300">
                                    {comment.desc}
                                  </p>
                                  <a href="#" className='text-blue-500 text-sm font-semibold text-nowrap'>
                                    Show more
                                  </a>
                                </div>
                              </div>
                            )
                          })}
                          <Button
                            styles={'mt-7 w-full text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                            label={'Show more'}
                          >
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className='border-t lg:border-b lg:border-r border-neutral-700/60 pt-10 lg:pr-10 space-y-3'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  Education
                </h1>
                <div className='divide-y divide-neutral-700/50'>
                  {EducationData.map((educ, index) => {
                    return (
                      <div className='flex items-start pl-6 py-8' key={index}>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-7'>
                            <img className="size-16 border-2 border-neutral-600 rounded-full" src={educ.img} alt="Sample Profile" />
                            <div className='flex flex-col items-start gap-5'>
                              <div className='space-y-1'>
                                <a href='#' className="leading-relaxed text-neutral-200 hover:text-green-500 transition duration-300 ease-in-out text-lg lg:text-xl">
                                  {educ.school}
                                </a>
                                <span className="leading-relaxed font-thin text-sm text-neutral-300 line-clamp-1">
                                  {educ.program}
                                </span>
                                <span className="leading-relaxed font-thin text-sm text-neutral-400 line-clamp-1">
                                  {educ.year}
                                </span>
                              </div>
                              <span className="text-neutral-300 inline-flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-500">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                </svg>
                                {educ.skills}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-span-1 self-start'>
              <div className='border-t border-neutral-700/60 lg:pl-8 py-8 space-y-4'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  People also viewed
                </h1>
                <div className='space-y-2'>
                  {PeopleAlsoViewedData.map((card, index) => {
                    return (
                      <div className='flex justify-between items-center pl-6 p-4 hover:bg-neutral-700/40 transition duration-300 ease-in-out rounded-md cursor-pointer' key={index}>
                        <div className='space-y-4'>
                          <div className='flex items-center gap-5'>
                            <img className="size-10 border-2 border-neutral-600 rounded-full" src={card.img} alt="Sample Avatar Profile" />
                            <div className='flex flex-col items-start'>
                              <span className="leading-relaxed text-neutral-300">
                                {card.name}
                              </span>
                              <span className="leading-relaxed font-thin text-sm text-neutral-400 line-clamp-1">
                                {card.bio}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          styles={'flex items-center px-2 text-neutral-200 bg-transparent hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                          </svg>
                        </Button>
                      </div>
                    )
                  })}
                </div>
                <Button
                  styles={'w-full text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                  label={'Show more'}
                >
                </Button>
              </div>
              <div className='border-t lg:border-b border-neutral-700/60 lg:pl-8 py-8 space-y-4'>
                <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                  You might like
                </h1>
                <span className="leading-relaxed text-neutral-400 text-sm">
                  Pages for you
                </span>
                <div className='space-y-2'>
                  {PagesCardData.map((pages, index) => {
                    return (
                      <div className='flex items-start pl-6 p-4 hover:bg-neutral-700/40 transition duration-300 ease-in-out rounded-md cursor-pointer' key={index}>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-5'>
                            <img className="size-10 border-2 border-neutral-600 rounded-full" src={pages.img} alt="Sample Profile" />
                            <div className='flex flex-col items-start gap-2'>
                              <div>
                                <span className="leading-relaxed text-neutral-300">
                                  {pages.title}
                                </span>
                                <span className="leading-relaxed font-thin text-sm text-neutral-300 line-clamp-1">
                                  {pages.desc}
                                </span>
                                <span className="leading-relaxed font-thin text-sm text-neutral-400 line-clamp-1">
                                  {pages.followers} followers
                                </span>
                              </div>
                              <Button
                                styles={'flex items-center gap-2.5 text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                                label={'Follow'}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <Button
                  styles={'w-full text-neutral-200 bg-transparent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                  label={'Show more'}
                >
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Day06;
