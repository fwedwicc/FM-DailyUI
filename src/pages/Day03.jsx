import React from 'react'
import { useState } from 'react';
import { fmUILogo } from '../assets'
import { logo01, logo02, logo03, logo04 } from '../assets/day03';
import { Button, InputField, Select } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'

const Day03 = () => {
  useLenisScroll();
  const [isOpen, setIsOpen] = useState(false);

  const FeatureCard = ({ desc, title, svg, styles }) => {
    return (
      <div className={`space-y-4 ${styles}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
          <path strokeLinecap="round" strokeLinejoin="round" d={svg} />
        </svg>
        <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
          {title}
        </h1>
        <p className="leading-relaxed text-neutral-400">
          {desc}
        </p>
      </div>
    )
  }

  const CategoryCard = ({ title, totalJobs }) => {
    return (
      <div className='group flex justify-between items-center lg:p-8 md:p-6 p-4 rounded-lg bg-neutral-800 border border-neutral-700/40 hover:bg-green-800 hover:border-green-600/40 cursor-pointer transition duration-300 ease-in-out'>
        <div className='space-y-3'>
          <h1 className="text-lg font-medium text-neutral-300 lg:text-xl">
            {title}
          </h1>
          <p className="leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition duration-300 ease-in-out">
            {totalJobs} Jobs
          </p>
        </div>
        <button className='rounded-full lg:p-3 p-2 bg-green-700 opacity-0 group-hover:opacity-100 transition duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-6 size-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    )
  }

  const Steps = ({ num, title, desc }) => {
    return (
      <div className='space-y-3'>
        <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
          <span className='rounded-full py-2 px-3.5 me-4 bg-green-600 font-bold text-lg'>{num}</span>
          {title}
        </h1>
        <p className="leading-relaxed text-neutral-400">
          {desc}
        </p>
      </div>
    )
  }

  const FeaturedJob = ({ styles, status, jobTitle, location, logo }) => {
    return (
      <div className='border border-neutral-700/50 hover:bg-neutral-600/20 transition duration-300 ease-in-out rounded-md lg:p-6 p-4 cursor-pointer flex flex-col justify-between space-y-3'>
        <div className='space-y-3'>
          <span className={`${styles} text-xs uppercase`}>{status}</span>
          <div>
            <h1 className="text-lg font-medium text-neutral-300 lg:text-xl">
              {jobTitle}
            </h1>
            <p className="leading-relaxed text-neutral-400 text-xs">
              {location}
            </p>
          </div>
        </div>
        <img src={logo} alt="Logoipsum" className='w-[8rem] lg:w-[10rem] h-auto' />
      </div>
    )
  }

  const NewsCard = ({ img, category, title }) => {
    return (
      <div className='space-y-4 border border-neutral-700/60 hover:bg-neutral-700/60 cursor-pointer transition duration-300 ease-in-out rounded-lg lg:p-4 p-2.5'>
        <img src={img} alt='Illsutration Photo' className='w-full h-auto object-contain rounded-md flex-grow' />
        <div className='lg:px-6 px-3'>
          <p className="leading-relaxed text-neutral-400">
            {category}
          </p>
          <h1 className="text-base font-medium text-neutral-300 lg:text-lg">
            {title}
          </h1>
        </div>
      </div>
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-neutral-800">
        <main className='bg-landing-hero bg-cover bg-center bg-no-repeat'>
          <nav className='relative flex items-center justify-between h-[15vh] lg:px-24 px-12'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            {/* Desktop Navigation */}
            <ul className='hidden md:flex text-neutral-300 gap-9'>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Job Search</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Support</a></li>
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
              <div className='absolute top-full right-12 -mt-8 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg md:hidden'>
                <ul className='text-neutral-300 text-center'>
                  <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out rounded-t-lg'>Careers</a></li>
                  <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>Job Search</a></li>
                  <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>News</a></li>
                  <li><a href="#" className='block px-4 py-2 hover:bg-neutral-700 transition duration-300 ease-in-out'>Support</a></li>
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
          <section className='h-[85vh] flex flex-col gap-12 justify-center items-center lg:px-24 px-12'>
            <span className='text-green-500 text-xs uppercase'>Find job in your town</span>
            <div className='text-center space-y-4'>
              <h1 className="text-3xl font-bold text-neutral-200 sm:text-4xl md:text-5xl">
                Find a dream job that <br className='lg:hidden block' /> changes life.
              </h1>
              <p className="leading-relaxed text-neutral-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, <br className='lg:block hidden' />
                quibusdam aperiam voluptatum lor sit amet con.
              </p>
            </div>
            <div className='text-center'>
              <div className='flex border border-neutral-700 bg-neutral-900 rounded-[0.8rem] p-2 w-full max-w-xl mb-2.5'>
                <InputField
                  styles={'me-2'}
                  id="job"
                  type="text"
                  placeholder="Job title or keyword"
                  required={false}
                />
                <Select
                  styles={'me-2'}
                  id="city"
                  options={[
                    { value: '', label: 'City' },
                    { value: 'AU', label: 'Australia' },
                    { value: 'CA', label: 'Canada' },
                    { value: 'CN', label: 'China' },
                    { value: 'FR', label: 'France' },
                    { value: 'DE', label: 'Germany' },
                    { value: 'IN', label: 'India' },
                    { value: 'JP', label: 'Japan' },
                    { value: 'PH', label: 'Philippines' },
                    { value: 'GB', label: 'United Kingdom' },
                    { value: 'US', label: 'United States' },
                  ]}
                  required={true}
                />
                <Button
                  styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                  label={'Search'}
                />
              </div>
              <span className='text-neutral-300 text-xs'>Try Product Designer, Software Engineer, etc.</span>
            </div>
          </section>
        </main>
        <section className='flex justify-center items-center lg:px-24 px-12 pt-6 pb-20'>
          <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-16 gap-8'>
            <FeatureCard
              title='Search for Your Dream Job'
              desc='Begin your journey by exploring our extensive job listings, tailored to match your skills and career aspirations. Our user-friendly search feature allows you to filter and find the perfect job effortlessly.'
              svg='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
            <FeatureCard
              title='Apply Seamlessly'
              desc='Our streamlined application process ensures you can apply to multiple jobs with ease. Simply upload your resume, fill in your details, and submit your application.'
              svg='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
            />
            <FeatureCard
              styles='lg:col-span-1 col-span-2'
              title='Receive Interview Calls'
              desc='Once your application catches the eye of employers, you will be invited for interviews. Our platform not only helps you find jobs but also provides resources and tips to prepare for interviews.'
              svg='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46'
            />
          </div>
        </section>
        <section className='flex bg-neutral-900/40 justify-center items-center lg:px-24 px-12 py-16'>
          <div className='flex flex-col gap-6 w-full'>
            <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
              Jobs by category
            </h1>
            <div className='flex justify-between items-end lg:gap-0 gap-12'>
              <p className="leading-relaxed text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className='lg:block hidden' /> Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
              <a href="#" className='flex items-center gap-1 text-green-500 font-semibold'>
                Explore all catergories
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4'>
              <CategoryCard
                title='Design'
                totalJobs='47'
              />
              <CategoryCard
                title='Marketing'
                totalJobs='51'
              />
              <CategoryCard
                title='Engineering'
                totalJobs='89'
              />
              <CategoryCard
                title='Management'
                totalJobs='16'
              />
              <CategoryCard
                title='Finance'
                totalJobs='23'
              />
              <CategoryCard
                title='Customer Support'
                totalJobs='34'
              />
            </div>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center lg:px-24 px-12 py-16 gap-16'>
          <div className='text-center space-y-3'>
            <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
              Find jobs with 3 easy steps
            </h1>
            <p className="leading-relaxed text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className='lg:block hidden' /> Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
            <div className='h-[30rem] w-auto'>
              <div className='h-full w-full p-3 bg-neutral-700/10 rounded-lg border border-neutral-700'>
                <img
                  src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Illustration Photo"
                  className='h-full w-full object-cover rounded-[calc(0.375rem-3px)]'
                />
              </div>
            </div>
            <div className='gap-12 flex flex-col justify-center h-full'>
              <Steps
                num='1'
                title='Search for a job'
                desc='Begin your journey by browsing through a curated list of job opportunities tailored to your skills and interests.'
              />
              <Steps
                num='2'
                title='Apply with our website'
                desc='Submit your application effortlessly through our streamlined process. Upload your resume, cover letter, and other relevant documents with just a few clicks.'
              />
              <Steps
                num='3'
                title='Get interview call'
                desc="Once your application is reviewed, you'll receive notifications for interview opportunities directly through our platform."
              />
            </div>
          </div>
        </section>
        <section className='flex bg-neutral-900/40 justify-center items-center lg:px-24 px-12 py-16'>
          <div className='flex flex-col gap-6 w-full'>
            <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
              Feature Jobs
            </h1>
            <div className='flex justify-between items-end lg:gap-0 gap-12'>
              <p className="leading-relaxed text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className='lg:block hidden' /> Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
              <a href="#" className='flex items-center gap-1 text-green-500 font-semibold'>
                Explore all jobs
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4'>
              <FeaturedJob
                styles='text-green-500'
                status='Full-time'
                jobTitle='Senior Software Engineer'
                location='New York, USA'
                logo={logo01}
              />
              <FeaturedJob
                styles='text-indigo-500'
                status='Remote'
                jobTitle='Product Designer'
                location='Lake Colby, UK'
                logo={logo02}
              />
              <FeaturedJob
                styles='text-green-500'
                status='Full-time'
                jobTitle='UX Designer'
                location='California, USA'
                logo={logo03}
              />
              <FeaturedJob
                styles='text-orange-500'
                status='Part-time'
                jobTitle='Full-Stack Web Developer'
                location='Katlynburgh, Sweden'
                logo={logo04}
              />
            </div>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center lg:px-24 px-12 py-16 gap-16'>
          <div className='text-center space-y-3'>
            <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
              News that helps
            </h1>
            <p className="leading-relaxed text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className='lg:block hidden' /> Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3'>
            <NewsCard
              img='https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              category='Career'
              title='How to win any job you want. Get started with 5 steps.'
            />
            <NewsCard
              img='https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              category='Lifestyle'
              title='10 ways to reduce your office work depression.'
            />
            <div className='lg:col-span-1 col-span-2'>
              <NewsCard
                img='https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                category='Career'
                title='Why should you work as a team even on small projects.'
              />
            </div>
          </div>
          <a href="#" className='flex items-center gap-1 text-green-500 font-semibold'>
            Explore all
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </section>
        <section className='flex bg-neutral-900/40 flex-col justify-center items-center lg:px-24 px-12 py-16 gap-16'>
          <div className='text-center space-y-6'>
            <div className='inline-flex rounded-full lg:p-3 p-2 bg-green-600 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className='space-y-3'>
              <h1 className="text-xl font-medium text-neutral-300 lg:text-2xl">
                Get our latest updates
              </h1>
              <p className="leading-relaxed text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className='lg:block hidden' /> Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
            <div className='flex border border-neutral-700 bg-neutral-900 rounded-[0.8rem] p-2 w-full max-w-xl'>
              <InputField
                styles={'me-2'}
                id="email"
                type="text"
                placeholder="john.doe@email.com"
                required={false}
              />
              <Button
                styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Subscribe'}
              />
            </div>
            <div>
              <span className='text-neutral-300 text-xs'>We'll never share your details with third parties. <br />
                View our<span className='text-green-500'> Privacy Policy</span> for more info.
              </span>
            </div>
          </div>
        </section>
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
              <Link
                link='#'
                svg='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z'
              />
              <Link
                link='#'
                svg='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
              />
              <Link
                link='#'
                svg='M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z'
              />
              <Link
                link='#'
                svg='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z'

              />
            </ul>
          </div>
          <div className='lg:col-span-5 col-span-1 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-12'>
            <LinkList
              title='Company'
              names={['About us', 'Contact us', 'Careers', 'Press']}
            />
            <LinkList
              title='Product'
              names={['Features', 'Pricing', 'News', 'Help Desk', 'Support']}
            />
            <LinkList
              title='Services'
              names={['Digital Marketing', 'Content Writing', 'SEO for Business', 'UI Design']}
            />
            <LinkList
              title='Legal'
              names={['Privacy Policy', 'Terms & Condition', 'Return Policy']}
            />
          </div>
        </footer>
      </div>
    </motion.div>
  )
}

export default Day03
