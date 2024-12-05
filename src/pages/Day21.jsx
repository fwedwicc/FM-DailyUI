import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { fmUILogo } from '../assets'
import { LivingRoom } from '../assets/day21'
import { Button, Toggle } from '../components';
import { motion } from 'framer-motion'
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Day21 = () => {
  useLenisScroll();
  useScrollToTop();

  const [NavDropdownOpen, setNavDropdownOpen] = useState(false);
  // Toggle dropdowns logic
  const toggleNavDropdown = () => {
    setNavDropdownOpen(!NavDropdownOpen);
  };

  const Utils = {
    months: ({ count }) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].slice(0, count),
    numbers: ({ count, min, max }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
    CHART_COLORS: {
      red: 'rgba(255, 99, 132, 1)',
      green: 'rgba(34, 197, 94, 1)',
      darkGreen: 'rgba(22, 101, 52, 1)',
      yellow: 'rgba(22, 101, 52, 1)',
      blue: 'rgba(96, 165, 250, 1)'
    },
    transparentize: (color, opacity) => color.replace('1)', `${opacity})`)
  };

  // Line Chart Component
  const inputs = {
    min: 0,
    max: 170,
    count: 12,
    decimals: 2,
    continuity: 1
  };

  const generateLabels = () => {
    return Utils.months({ count: inputs.count });
  };

  const generateData = () => {
    return Utils.numbers(inputs);
  };

  const LineChart = () => {
    const data = {
      labels: generateLabels(),
      datasets: [
        {
          label: 'Dataset 1',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.green,   // Line color
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.2),
          fill: 'start',
          tension: 0.3,
        },
        {
          label: 'Dataset 2',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.darkGreen,   // Line color
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.darkGreen, 0.1),
          fill: 'start',
          tension: 0.3,
        },
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        filler: {
          propagate: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        }
      },
      scales: {
        y: {
          ticks: {
            color: 'rgba(173, 172, 172, 0.2)',
          },
          grid: {
            color: 'rgba(173, 172, 172, 0.1)',
            borderColor: 'rgba(255, 69, 0, 0.8)',
          },
        },
        x: {
          ticks: {
            color: 'rgba(173, 172, 172, 0.4)',
          },
          grid: {
            color: 'rgba(173, 172, 172, 0.1)',
            borderColor: 'rgba(255, 69, 0, 0.8)',
          },
        },
      },
      interaction: {
        intersect: false,
      },
    };

    return <Line data={data} options={options} />;
  };

  // Input
  const [value, setValue] = useState(50)

  const Navigations = () => {
    return (
      <>
        {[
          'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
          'm21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25',
          'M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z',
          'M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3',
          'M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495',
        ].map((item, index) => (
          <button className={`size-12 rounded-full transition duration-300 ease-in-out text-neutral-400 flex items-center justify-center ${index === 0 ? 'bg-green-500 text-white' : 'bg-neutral-700 hover:bg-neutral-600/70'}`} key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={item} />
            </svg>
          </button>
        ))}
      </>
    )
  }

  const CustomTab = () => {
    const label = [
      'Living room',
      'Bed room',
      'Garage',
      'Back yard',
    ]

    return (
      <nav className='flex flex-wrap gap-3'>
        {label.map((tab, index) => {
          const isActive = tab === 'Living room';
          return (
            <button
              className={`py-2 px-4 transition duration-300 ease-in-out rounded-md focus:ring-2 focus:ring-neutral-700 ${isActive ? 'bg-neutral-700 text-neutral-200' : 'hover:bg-neutral-700/70 text-neutral-400'
                }`}
              key={index}
            >
              {tab}
            </button>
          );
        })}
        <Button
          styles={'hidden md:flex flex items-center gap-2.5 text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
          label={'Add new'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
        </Button>
      </nav>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="bg-neutral-800">
        {/* WEB: Sidebar */}
        <aside className='lg:block hidden fixed h-full w-24 p-3'>
          <div className='flex flex-col items-center justify-between p-1.5 w-full h-full border border-neutral-700 bg-neutral-700/30 rounded-xl'>
            <div className='space-y-2'>
              <a className="size-12 flex items-center justify-center rounded-full mb-5" href="#">
                <span className="sr-only">Home</span>
                <img src={fmUILogo} alt="fmUI Logo" className='w-10 h-auto' />
              </a>
              {/* WEB: Navigation Buttons */}
              <Navigations />
            </div>
            <button className='size-12 rounded-full bg-red-300/10 hover:bg-red-400/10 transition duration-300 ease-in-out text-red-500 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
            </button>
          </div>
        </aside>
        <section className='lg:ml-[6.5rem]'>
          <div className='lg:pl-0 p-6 space-y-5'>
            {/* Header */}
            <header className='flex justify-between items-start'>
              <div className='relative lg:hidden block'>
                <button
                  className='flex items-center p-2 rounded-md hover:bg-neutral-700 justify-center text-neutral-300 transition duration-300 ease-in-out focus:outline-none' onClick={toggleNavDropdown}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6h15m-15 6h15m-15 6h15" />
                  </svg>
                </button>
                {/*  */}
                <div
                  className={`absolute left-0 w-[4rem] transform transition-all duration-300 ease-in-out ${NavDropdownOpen ? 'mt-3 opacity-100' : '-mt-1 opacity-0 pointer-events-none'
                    }`}
                >
                  <div className='flex flex-col items-center justify-between rounded-xl py-4 px-3 gap-2 bg-neutral-800 border border-neutral-700/70'>
                    {/* Logo */}
                    <a className="size-12 flex items-center justify-center rounded-full mb-2" href="#">
                      <span className="sr-only">Home</span>
                      <img src={fmUILogo} alt="fmUI Logo" className='w-8 h-auto' />
                    </a>
                    {/* MOB: Navigation Buttons */}
                    <Navigations />
                    <button className='size-12 rounded-full bg-red-300/10 hover:bg-red-400/10 transition duration-300 ease-in-out text-red-500 flex items-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* WEB: Tab Components */}
              <div className='lg:block hidden'>
                <CustomTab />
              </div>
              {/* Buttosn and User */}
              <div className='flex items-center gap-3'>
                {[
                  "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0",
                  ['M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z', 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'],
                  "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                ].map((button, index) => (
                  <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out' key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      {Array.isArray(button) ? (
                        button.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)
                      ) : (
                        <path fillRule="evenodd" clipRule="evenodd" d={button} />
                      )}
                    </svg>
                  </button>
                ))}
                <img
                  className="size-8 border-2 ring-2 ring-green-500 border-neutral-700 rounded-full cursor-pointer"
                  src="https://avatars.githubusercontent.com/u/823537?v=4"
                  alt="Bot Avatar"
                />
              </div>
            </header>
            {/* Main Content */}
            <div className='space-y-3'>
              <div className='block lg:hidden'>
                <CustomTab />
              </div>
              <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
                {/* First Container */}
                <div className='border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <div className='flex items-center gap-3'>
                    <div className='inline-flex items-center justify-center p-3 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-neutral-200 text-2xl font-semibold'>23 C</h3>
                      <p className='text-neutral-400 leading-none'>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='grid lg:grid-cols-2 grid-cols-1 mt-6 gap-x-3 gap-y-6'>
                    {[
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      },
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      },
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      },
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      }
                    ].map((item, index) => (
                      <div className='flex items-center gap-3' key={index}>
                        <div className='inline-flex items-center justify-center p-2 border border-neutral-600/50 rounded-full text-neutral-400 bg-neutral-600/30'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <h3 className='text-neutral-200'>{item.value}</h3>
                          <p className='text-neutral-400 leading-none text-sm'>{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='border border-neutral-700 bg-neutral-700/30 rounded-xl p-3'>
                  <div className='flex items-center gap-3'>
                    <div className='inline-flex items-center justify-center p-3 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-neutral-200 text-2xl font-semibold'>23 C</h3>
                      <p className='text-neutral-400 leading-none'>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='grid lg:grid-cols-2 grid-cols-1 mt-6 gap-x-3 gap-y-6'>
                    {[
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      },
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      },
                      {
                        icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
                        value: "23C",
                        label: "Lorem ipsum dolor"
                      }
                    ].map((item, index) => (
                      <div className='flex items-center gap-3' key={index}>
                        <div className='inline-flex items-center justify-center p-2 border border-neutral-600/50 rounded-full text-neutral-400 bg-neutral-600/30'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <h3 className='text-neutral-200'>{item.value}</h3>
                          <p className='text-neutral-400 leading-none text-sm'>{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-span-2 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3 space-y-3'>
                  {/*  */}
                  <div className='flex items-center justify-between pr-5'>
                    <div className='flex items-center gap-3'>
                      <div className='inline-flex items-center justify-center p-3 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-neutral-200 text-lg font-semibold'>Xiaomi Airclean</h3>
                        <p className='text-neutral-400 leading-none'>Air Purifier</p>
                      </div>
                    </div>
                    <Toggle />
                  </div>
                  {/*  */}
                  <div className='flex items-center gap-2'>
                    {['M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z'].map((item, index) => (
                      <button className={`inline-flex items-center justify-center hover:bg-neutral-600/40 transition duration-300 ease-in-out p-3 rounded-full text-neutral-300 ${index === 0 ? 'bg-neutral-600/40' : 'bg-none'}`} key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item} />
                        </svg>
                      </button>
                    ))}
                  </div>
                  {/*  */}
                  <div className='grid grid-cols-2 gap-3'>
                    {[
                      { value: "24C", label: "Temperature", rangeValue: 40 },
                      { value: "24C", label: "Temperature", rangeValue: 20 },
                    ].map((item, index) => (
                      <div className='p-4 rounded-xl bg-neutral-700/40' key={index}>
                        <div className='flex items-center justify-between'>
                          <h3 className='text-neutral-200 font-medium'>{item.value}</h3>
                          <p className='text-neutral-400 text-sm'>{item.label}</p>
                        </div>
                        <input
                          id="range-input"
                          type="range"
                          min="0"
                          max="100"
                          value={item.rangeValue}
                          onChange={(e) => setValue(e.target.item.rangeValue)}
                          className="w-full h-1.5 rounded-lg appearance-none focus:outline-none range-thumb-green"
                          style={{
                            background: `linear-gradient(to right, #22c55e ${item.rangeValue}%, #737373 ${item.rangeValue}%)`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                <div className='relative border border-neutral-700 bg-neutral-700/30 rounded-xl lg:max-h-[20rem] max-h-[30rem] h-full cursor-pointer group'>
                  <img src={LivingRoom} alt="Living Room Cam" className='object-cover w-full h-full rounded-xl' />
                  {/* Play Hover */}
                  <div className='group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out z-40 absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 rounded-full bg-green-500 text-white p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* Gradient Filter Effect */}
                  <div className='top-0 absolute w-full h-full bg-gradient-to-r from-neutral-950 to-neutral-50/5 rounded-xl'></div>
                  {/* Live label & Date */}
                  <div className='absolute top-4 left-4 z-20 space-y-1.5'>
                    <div className='flex items-center gap-2 text-neutral-200'>
                      <span className='inline-block size-2 rounded-full bg-red-500'></span>
                      Live • Living Room
                    </div>
                    <h4 className='text-neutral-300 text-xs leading-none'>February 19, 2023 | 4:43 PM</h4>
                  </div>
                  {/*  */}
                  <div className='absolute bottom-4 left-4 flex items-end gap-6'>
                    <div>
                      <h3 className='text-neutral-200 text-lg'>23C</h3>
                      <p className='text-neutral-400 text-xs leading-none'>Temperature</p>
                    </div>
                    <div>
                      <h3 className='text-neutral-200 text-lg'>23C</h3>
                      <p className='text-neutral-400 text-xs leading-none'>Temperature</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  {[
                    { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                    { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                    { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                    { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                  ].map((item, index) => (
                    <div className='border border-neutral-700 bg-neutral-700/30 rounded-xl p-3' key={index}>
                      <div className='flex items-center justify-between pr-3'>
                        <div className='flex items-center gap-3'>
                          <div className='inline-flex items-center justify-center p-2 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                          <div>
                            <h3 className='text-neutral-200 text-lg'>{item.brand}</h3>
                            <p className='text-neutral-400 leading-none'>{item.type}</p>
                          </div>
                        </div>
                        <Toggle />
                      </div>
                    </div>
                  ))}
                  <div className='col-span-full border border-neutral-700 bg-neutral-700/30 rounded-xl p-3 space-y-4'>
                    <div className='flex items-center justify-between pr-3'>
                      <div className='flex items-center gap-3'>
                        <div className='inline-flex items-center justify-center p-2 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d='M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z' />
                          </svg>
                        </div>
                        <div>
                          <h3 className='text-neutral-200 text-lg'>asdfas</h3>
                          <p className='text-neutral-400 leading-none'>asdfasdf</p>
                        </div>
                      </div>
                      <Toggle />
                    </div>
                    {/* Music Player */}
                    <div className='flex gap-3'>
                      <div className='relative size-[4.5rem] border rounded-md'>
                        <img src="https://placehold.co/30x30" alt="" className='object-cover w-full h-full' />
                      </div>
                      <div className='flex-grow flex flex-col justify-between'>
                        <div>
                          <p className='text-neutral-400'>asdfas</p>
                          <p className='text-neutral-200 text-lg leading-none'>asdfasdf</p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <p className='text-neutral-400 text-xs'>2:13</p>
                          <input
                            id="range-input"
                            type="range"
                            min="0"
                            max="100"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full h-1 rounded-lg appearance-none focus:outline-none range-thumb-green"
                            style={{
                              background: `linear-gradient(to right, #22c55e ${value}%, #737373 ${value}%)`,
                            }}
                          />
                          <p className='text-neutral-400 text-xs'>3:33</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='space-y-3'>
                  <div>
                    <h3 className='text-neutral-200 text-lg'>Device Power Consumption</h3>
                    <p className='text-neutral-400 text-xs leading-none'>As of 2024</p>
                  </div>
                  <div className='border border-neutral-700 bg-neutral-700/30 rounded-xl p-3 h-64'>
                    <div className='h-full'>
                      <LineChart />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-3 self-start'>
                  <div>
                    <h3 className='text-neutral-200 text-lg'>Power Consumption Summary</h3>
                    <p className='text-neutral-400 text-xs leading-none'>As of 2024</p>
                  </div>
                  <div className='grid grid-cols-3 gap-3'>
                    {[
                      { value: '23kWh', label: 'Today' },
                      { value: '523kWh', label: 'This month' },
                      { value: '41923kWh', label: 'This year' },
                    ].map((item, index) => (
                      <div className='flex gap-3 border border-neutral-700 bg-neutral-700/30 rounded-xl p-3' key={index}>
                        <div className='flex items-center justify-center p-3 border border-green-800 rounded-full text-green-500 bg-green-700/30'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                          </svg>
                        </div>
                        <div className='space-y-2'>
                          <p className='text-neutral-200 text-lg leading-none'>{item.value}</p>
                          <p className='text-neutral-400 leading-none'>{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='grid grid-cols-2 gap-3 mt-4'>
                    {[
                      { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                      { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                      { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                      { icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', brand: 'Xiaomi Airclean', type: 'Air Purifier' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className='flex items-center justify-between pr-3'>
                          <div className='flex items-center gap-3'>
                            <div className='inline-flex items-center justify-center p-2 border border-neutral-600/50 text-neutral-400 bg-neutral-600/30 rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                              </svg>
                            </div>
                            <div>
                              <h3 className='text-neutral-200'>{item.brand}</h3>
                              <p className='text-neutral-400 text-xs leading-none'>{item.type}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className='text-neutral-200 text-end'>{item.brand}</h3>
                            <p className='text-neutral-400 text-end text-xs leading-none'>{item.type}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

export default Day21
