import React from 'react'
import { fmUILogo } from '../assets'
import { Button, InputField, Select } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import { motion } from 'framer-motion'

const Day03 = () => {
  useLenisScroll();

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
          <span className='rounded-full py-2 px-3.5 me-2.5 bg-green-600 font-bold text-lg'>{num}</span>
          {title}
        </h1>
        <p className="leading-relaxed text-neutral-400">
          {desc}
        </p>
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
      <div className="bg-neutral-800">
        <main className='bg-landing-hero bg-cover bg-center bg-no-repeat'>
          <nav className='flex items-center justify-between h-[15vh] px-24'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <ul className='text-neutral-300 flex gap-9'>
              <li>
                <a href="#">Demos</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className='flex gap-3'>
              <Button
                styles={'text-neutral-200 bg-transarent hover:bg-neutral-700 border-none focus:ring-neutral-200/60'}
                label={'Login'}
              />
              <Button
                styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                label={'Sign up'}
              />
            </div>
          </nav>
          <section className='h-[85vh] flex flex-col gap-9 justify-center items-center lg:px-24 px-12'>
            <span className='text-green-500 text-xs uppercase'>Find job in your town</span>
            <div className='text-center space-y-2'>
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
              title='Lorem Ipsum'
              desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.'
              svg='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
            />
            <FeatureCard
              title='Lorem Ipsum'
              desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.'
              svg='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
            />
            <FeatureCard
              styles='lg:col-span-1 col-span-2'
              title='Lorem Ipsum'
              desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.'
              svg='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
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
      </div>
    </motion.div>
  )
}

export default Day03
