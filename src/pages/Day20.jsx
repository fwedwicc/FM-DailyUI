import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { map01, map02 } from '../assets/day20'
import { motion } from 'framer-motion'

const Day20 = () => {
  useLenisScroll();
  useScrollToTop();

  const PhoneMockup = ({ children }) => {
    return (
      <>
        {/* Phone Mockup */}
        <div className='relative border-[0.5rem] h-[40rem] w-[21.5rem] rounded-[2rem] ring-2 ring-neutral-400 bg-neutral-700/40 border-neutral-900'>
          {/* Sound Buttons */}
          <div className='absolute top-20 -left-3 flex flex-col gap-3'>
            {[0, 1, 2].map((index) => (
              <div
                className={`rounded-full w-2 bg-neutral-900 border-neutral-400 border-l-2 ${index === 0 ? 'h-7' : 'h-10'}`} key={index}>
              </div>
            ))}
          </div>
          {/* Power Button */}
          <div className='absolute top-[9.2rem] border-neutral-400 border-r-2 -right-3 rounded-full h-16 w-2 bg-neutral-900'></div>
          {/* Camera */}
          <div className='absolute rounded-full h-[1.3rem] w-20 top-3 left-1/2 transform -translate-x-1/2 bg-neutral-900'></div>
          {/* Phone Header */}
          <div className={`absolute w-full flex justify-between items-center pt-2.5 px-3.5 text-white`}>
            <p className="leading-relaxed text-xs font-semibold">
              2:19
            </p>
            <div className='flex items-center gap-1.5'>
              {[
                'M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z',
                'M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z',
                'M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z'
              ].map((icon, index) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${index === 2 ? 'size-4' : 'size-3'}`} key={index}>
                  <path d={icon} />
                </svg>
              ))}
            </div>
          </div>
          {children}
        </div>
      </>
    );
  };

  const FirstContent = () => {
    return (
      <div className='mt-5 px-2'>
        <div className='flex items-center justify-between px-2'>
          <div className='flex items-center gap-2.5 py-1.5'>
            <div className='flex flex-col items-center justify-center h-10 py-1'>
              <div className='shrink-0 size-2 rounded-full bg-green-500'></div>
              <div className='w-[2px] h-full bg-green-500'></div>
              <div className='shrink-0 size-2 rounded-full bg-neutral-500'></div>
            </div>
            <div className='space-y-2'>
              <p className='text-neutral-300 text-xs w-full max-w-xs truncate'>Bagong Silang, Caloocan City</p>
              <p className='text-neutral-300 text-xs truncate'>Quezon City University</p>
            </div>
          </div>
          <button className='size-8 flex justify-center items-center text-neutral-300 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-full focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
          </button>
        </div>
        <div className='flex items-center gap-3 mt-2'>
          {[
            { label: 'All modes selected', icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' },
            { label: 'Leaving now', icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
          ].map((item, index) => (
            <button className='flex justify-center items-center gap-1.5 text-neutral-300 bg-neutral-600/50 hover:bg-neutral-200/20 rounded-md px-2 py-1 focus:ring-2 focus:ring-neutral-500 transition duration-300 ease-in-out text-xs' key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </div>
        {/*  */}
        <div className='mt-2 space-y-1.5'>
          <p className='text-neutral-300 text-xs truncate'>Suggested Journeys</p>
          {/* Card Component */}
          {[
            {
              textColor: 'text-green-500',
              bgColor: 'bg-green-500',
              price: '₱35.25',
              walk: '8 mins walk',
              timeline: (
                <div className='relative w-full h-1 bg-neutral-700 rounded-full'>
                  <div className='absolute flex items-center'>
                    <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                    <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                  </div>
                  <div className='absolute flex items-center left-12 h-1 rounded-full'>
                    <div className={`size-2 rounded-full bg-green-500`}></div>
                    <div className={`h-1 w-28 rounded-full bg-green-500`}></div>
                    <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                    <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                  </div>
                  <div className='absolute flex items-center left-52 h-1 rounded-full'>
                    <div className={`size-2 rounded-full bg-green-500`}></div>
                    <div className={`h-1 w-10 rounded-full bg-green-500`}></div>
                    <div className={`h-2.5 w-1 rounded-full bg-green-500`}></div>
                  </div>
                </div>
              ),
              onTime: '05:54 PM',
              duration: '1 hr 34 mins',
              offTime: '7:28 PM',
            },
            {
              textColor: 'text-indigo-500',
              bgColor: 'bg-indigo-500',
              price: '₱33.25',
              walk: '18 mins walk',
              timeline: (
                <div className='relative w-full h-1 bg-neutral-700 rounded-full'>
                  <div className='absolute flex items-center'>
                    {[...Array(14)].map((_, index) => (
                      <div className={`ms-[1.5px] size-1 rounded-full bg-indigo-500`}></div>
                    ))}
                  </div>
                  <div className='absolute flex items-center left-24 h-1 rounded-full'>
                    <div className={`size-2 rounded-full bg-indigo-500`}></div>
                    <div className={`h-1 w-20 rounded-full bg-indigo-500`}></div>
                  </div>
                  <div className='absolute flex items-center left-52 h-1 rounded-full'>
                    <div className={`size-2 rounded-full bg-indigo-500`}></div>
                    <div className={`h-1 w-12 rounded-full bg-indigo-500`}></div>
                    <div className={`h-2.5 w-1 rounded-full bg-indigo-500`}></div>
                  </div>
                </div>
              ),
              onTime: '05:54 PM',
              duration: '1 hr 36 mins',
              offTime: '7:30 PM',
            },
          ].map((item, index) => (
            <div className={`p-2 ${index === 1 ? 'rounded-b-[2.3rem]' : ''} bg-neutral-700/20 hover:bg-neutral-700/40 transition duration-300 ease-in-out rounded-md space-y-2 cursor-pointer`} key={index}>
              <div className='flex items-start justify-between'>
                <div className='flex items-center gap-1.5'>
                  {[
                    { name: 'Bus', color: item.bgColor, icon: 'M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01' },
                    { name: 'Train', color: item.bgColor, icon: 'M5 11H19M9 18L6 21M15 18L18 21M12 11V4M8 15H8.01M16 15H16.01M8.2 18H15.8C16.9201 18 17.4802 18 17.908 17.782C18.2843 17.5903 18.5903 17.2843 18.782 16.908C19 16.4802 19 15.9201 19 14.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V14.8C5 15.9201 5 16.4802 5.21799 16.908C5.40973 17.2843 5.71569 17.5903 6.09202 17.782C6.51984 18 7.07989 18 8.2 18Z' },
                  ].map((item, index) => (
                    <div className='flex flex-col items-center' key={index}>
                      <div className={`flex items-center justify-center p-1 rounded-full text-white ${item.color}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <p className='text-neutral-300 text-[10px]'>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-1 items-end text-xs leading-none'>
                  <span className={`${item.textColor}`}>{item.price}</span>
                  <span className='text-neutral-300 text-[10px]'>{item.walk}</span>
                </div>
              </div>
              {item.timeline}
              <div className='flex justify-between items-center text-neutral-300 text-[10px]'>
                {[item.onTime, item.duration, item.offTime].map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const SecondContent = () => {
    return (
      <div className='mt-5 px-2 space-y-1.5'>
        {/* Card Component */}
        {[
          {
            textColor: 'text-green-500',
            bgColor: 'bg-green-500',
            price: '₱35.25',
            walk: '8 mins walk',
            timeline: (
              <div className='relative w-full h-1 bg-neutral-700 rounded-full'>
                <div className='absolute flex items-center'>
                  <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                  <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                </div>
                <div className='absolute flex items-center left-12 h-1 rounded-full'>
                  <div className={`size-2 rounded-full bg-green-500`}></div>
                  <div className={`h-1 w-28 rounded-full bg-green-500`}></div>
                  <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                  <div className={`ms-[1.5px] size-1 rounded-full bg-green-500`}></div>
                </div>
                <div className='absolute flex items-center left-52 h-1 rounded-full'>
                  <div className={`size-2 rounded-full bg-green-500`}></div>
                  <div className={`h-1 w-10 rounded-full bg-green-500`}></div>
                  <div className={`h-2.5 w-1 rounded-full bg-green-500`}></div>
                </div>
              </div>
            ),
            onTime: '05:54 PM',
            duration: '1 hr 34 mins',
            offTime: '7:28 PM',
          },
        ].map((item, index) => (
          <div className='p-2 bg-neutral-700/20 rounded-md space-y-2' key={index}>
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-1.5'>
                {[
                  { name: 'Bus', color: item.bgColor, icon: 'M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01' },
                  { name: 'Train', color: item.bgColor, icon: 'M5 11H19M9 18L6 21M15 18L18 21M12 11V4M8 15H8.01M16 15H16.01M8.2 18H15.8C16.9201 18 17.4802 18 17.908 17.782C18.2843 17.5903 18.5903 17.2843 18.782 16.908C19 16.4802 19 15.9201 19 14.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V14.8C5 15.9201 5 16.4802 5.21799 16.908C5.40973 17.2843 5.71569 17.5903 6.09202 17.782C6.51984 18 7.07989 18 8.2 18Z' },
                ].map((item, index) => (
                  <div className='flex flex-col items-center' key={index}>
                    <div className={`flex items-center justify-center p-1 rounded-full text-white ${item.color}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <p className='text-neutral-300 text-[10px]'>{item.name}</p>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-1 items-end text-xs leading-none'>
                <span className={`${item.textColor}`}>{item.price}</span>
                <span className='text-neutral-300 text-[10px]'>{item.walk}</span>
              </div>
            </div>
            {item.timeline}
            <div className='flex justify-between items-center text-neutral-300 text-[10px]'>
              {[item.onTime, item.duration, item.offTime].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
        {/*  */}
        <p className='text-neutral-300 text-[10px] truncate text-center'>Tap on any card below to see more detail.</p>
        {/*  */}
        <div className='flex items-center rounded-md p-1.5 bg-neutral-700/20 hover:bg-neutral-700/40 transition duration-300 ease-in-out cursor-pointer'>
          <div className='w-12 h-10 flex items-center justify-center bg-green-500 text-white rounded-[5px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M13 6C14.1046 6 15 5.10457 15 4C15 2.89543 14.1046 2 13 2C11.8955 2 11 2.89543 11 4C11 5.10457 11.8955 6 13 6ZM11.0528 6.60557C11.3841 6.43992 11.7799 6.47097 12.0813 6.68627L13.0813 7.40056C13.3994 7.6278 13.5559 8.01959 13.482 8.40348L12.4332 13.847L16.8321 20.4453C17.1384 20.9048 17.0143 21.5257 16.5547 21.8321C16.0952 22.1384 15.4743 22.0142 15.168 21.5547L10.5416 14.6152L9.72611 13.3919C9.58336 13.1778 9.52866 12.9169 9.57338 12.6634L10.1699 9.28309L8.38464 10.1757L7.81282 13.0334C7.70445 13.575 7.17759 13.9261 6.63604 13.8178C6.09449 13.7094 5.74333 13.1825 5.85169 12.641L6.51947 9.30379C6.58001 9.00123 6.77684 8.74356 7.05282 8.60557L11.0528 6.60557ZM16.6838 12.9487L13.8093 11.9905L14.1909 10.0096L17.3163 11.0513C17.8402 11.226 18.1234 11.7923 17.9487 12.3162C17.7741 12.8402 17.2078 13.1234 16.6838 12.9487ZM6.12844 20.5097L9.39637 14.7001L9.70958 15.1699L10.641 16.5669L7.87159 21.4903C7.60083 21.9716 6.99111 22.1423 6.50976 21.8716C6.0284 21.6008 5.85768 20.9911 6.12844 20.5097Z" />
            </svg>
          </div>
          <div className='flex justify-between items-center w-full px-3'>
            <p className='text-neutral-300 text-[10px] w-full max-w-[9rem]'>Walk (251 m) towards <span className='font-semibold'>Langit Road</span></p>
            <p className='text-neutral-300 text-[10px] text-nowrap'>3 mins</p>
          </div>
        </div>
        {/*  */}
        <div className='flex rounded-b-[1.8rem] rounded-md p-1.5 bg-neutral-700/20 hover:bg-neutral-700/40 transition duration-300 ease-in-out cursor-pointer'>
          <div className='w-12 flex flex-grow rounded-bl-[0.6rem] justify-center pt-2 bg-green-500 text-white rounded-[5px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d='M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01' />
            </svg>
          </div>
          <div className='px-3 w-full'>
            <div className='grid grid-cols-3 items-end border-b border-neutral-700 pt-1 pb-1.5'>
              <p className='text-neutral-300 leading-none text-[11px] font-semibold text-nowrap'>Jeep</p>
              <p className='text-neutral-300 leading-none text-[10px] text-nowrap'>₱35.25</p>
              <p className='text-neutral-300 leading-none text-[10px] text-nowrap'>42 mins</p>
            </div>
            <div className='grid grid-cols-3 pt-3 gap-y-2.5'>
              <div className='col-span-1'>
                <div className='flex items-start gap-2.5'>
                  <div className='h-2.5 w-1 bg-blue-500 rounded-full'></div>
                  <p className='text-neutral-300 leading-none text-[11px] font-semibold'>Route</p>
                </div>
              </div>
              <div className='col-span-2'>
                <p className='text-neutral-300 leading-none text-[10px]'>T123: Novaliches-Shelterville via Camarin Road</p>
              </div>
              <div className='col-span-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex flex-col items-center justify-center h-12 py-[4px]'>
                    <div className='shrink-0 size-1.5 rounded-full bg-blue-500'></div>
                    <div className='w-[1.5px] h-full bg-blue-500'></div>
                    <div className='shrink-0 size-1.5 rounded-full bg-green-500'></div>
                  </div>
                  <div className='space-y-5'>
                    <p className='text-neutral-300 leading-none text-[10px]'>Get on</p>
                    <p className='text-neutral-300 leading-none text-[10px]'>Get off</p>
                  </div>
                </div>
              </div>
              <div className='col-span-2 space-y-3'>
                <p className='text-neutral-300 leading-none text-[10px]'>Lacson, Langit Road, Caloocan City</p>
                <p className='text-neutral-300 leading-none text-[10px]'>Shelterville Jeepney Terminal</p>
              </div>
            </div>
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
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 py-8">
        <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-12 lg:gap-20'>
          {/* 1st */}
          {[
            { map: map01, content: <FirstContent /> },
            { map: map02, content: <SecondContent /> },
          ].map((item, index) => (
            <PhoneMockup key={index}>
              <div className='h-full pt-12 overflow-hidden'>
                <div className='h-full relative'>
                  {/* Map */}
                  <div className='relative w-full h-72'>
                    <div className='absolute z-20 left-1.5 top-1.5 flex flex-col gap-1.5'>
                      {['M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12', 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15', 'M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'].map((item, index) => (
                        <button className='size-8 flex justify-center items-center text-green-500 bg-neutral-600 hover:bg-neutral-700 rounded-full focus:ring-2 focus:ring-neutral-500 z-50 transition duration-300 ease-in-out' key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item} />
                          </svg>
                        </button>
                      ))}
                    </div>
                    <img src={item.map} alt="Sample Map" className='border h-full w-full object-cover rounded-t-3xl' />
                  </div>
                  {/* Drawer */}
                  <div className='absolute bottom-0 border-t border-neutral-600 bg-neutral-800 w-full h-80 rounded-3xl'>
                    {/* Drawer indicator */}
                    <div className='absolute top-1.5 h-1 w-12 rounded-full bg-neutral-700 transform left-1/2 -translate-x-1/2 cursor-grab'></div>
                    {/* Content */}
                    {item.content}
                  </div>
                </div>
              </div>
            </PhoneMockup>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default Day20
