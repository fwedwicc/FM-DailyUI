import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { fmUILogo } from '../assets'
import { LivingRoom, TheIdolAlbum } from '../assets/day21'
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
                      <h3 className='text-green-500 text-2xl font-semibold'>23 <span className='text-sm'>°C</span></h3>
                      <p className='text-neutral-400 leading-none'>Sunny Cloudy</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='grid lg:grid-cols-2 grid-cols-1 mt-6 gap-x-3 gap-y-6'>
                    {[
                      {
                        icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
                        value: "5",
                        label: "UV Index"
                      },
                      {
                        icon: "M19 13.8C19 17.7764 15.866 21 12 21C8.13401 21 5 17.7764 5 13.8C5 12.8452 5.18069 11.9338 5.50883 11.1C6.54726 8.46135 12 3 12 3C12 3 17.4527 8.46135 18.4912 11.1C18.8193 11.9338 19 12.8452 19 13.8Z",
                        value: "70%",
                        label: "Humidity"
                      },
                      {
                        icon: "M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                        value: "19 km/h",
                        label: "Wind Speed"
                      },
                      {
                        icon: "M10.5 21L12 18M14.5 21L16 18M6.5 21L8 18M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z",
                        value: "60%",
                        label: "Rain Changes"
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
                      <h3 className='text-green-500 text-2xl font-semibold'>23 <span className='text-sm'>/kWh</span></h3>
                      <p className='text-neutral-400 leading-none'>Today's Consumption</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='grid lg:grid-cols-2 grid-cols-1 mt-6 gap-x-3 gap-y-6'>
                    {[
                      {
                        icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
                        value: "4",
                        label: "Devices"
                      },
                      {
                        icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
                        value: "Normal",
                        label: "Operating Mode"
                      },
                      {
                        icon: "M12 3V9M12 3L9.5 5.5M12 3L14.5 5.5M5.82333 9.00037C6.2383 9.36683 6.5 9.90285 6.5 10.5C6.5 11.6046 5.60457 12.5 4.5 12.5C3.90285 12.5 3.36683 12.2383 3.00037 11.8233M5.82333 9.00037C5.94144 9 6.06676 9 6.2 9H8M5.82333 9.00037C4.94852 9.00308 4.46895 9.02593 4.09202 9.21799C3.71569 9.40973 3.40973 9.71569 3.21799 10.092C3.02593 10.469 3.00308 10.9485 3.00037 11.8233M3.00037 11.8233C3 11.9414 3 12.0668 3 12.2V17.8C3 17.9332 3 18.0586 3.00037 18.1767M3.00037 18.1767C3.36683 17.7617 3.90285 17.5 4.5 17.5C5.60457 17.5 6.5 18.3954 6.5 19.5C6.5 20.0971 6.2383 20.6332 5.82333 20.9996M3.00037 18.1767C3.00308 19.0515 3.02593 19.5311 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.46895 20.9741 4.94852 20.9969 5.82333 20.9996M5.82333 20.9996C5.94144 21 6.06676 21 6.2 21H17.8C17.9332 21 18.0586 21 18.1767 20.9996M21 18.1771C20.6335 17.7619 20.0973 17.5 19.5 17.5C18.3954 17.5 17.5 18.3954 17.5 19.5C17.5 20.0971 17.7617 20.6332 18.1767 20.9996M21 18.1771C21.0004 18.0589 21 17.9334 21 17.8V12.2C21 12.0668 21 11.9414 20.9996 11.8233M21 18.1771C20.9973 19.0516 20.974 19.5311 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.5311 20.9741 19.0515 20.9969 18.1767 20.9996M20.9996 11.8233C20.6332 12.2383 20.0971 12.5 19.5 12.5C18.3954 12.5 17.5 11.6046 17.5 10.5C17.5 9.90285 17.7617 9.36683 18.1767 9.00037M20.9996 11.8233C20.9969 10.9485 20.9741 10.469 20.782 10.092C20.5903 9.71569 20.2843 9.40973 19.908 9.21799C19.5311 9.02593 19.0515 9.00308 18.1767 9.00037M18.1767 9.00037C18.0586 9 17.9332 9 17.8 9H16M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z",
                        value: "₱ 120.50",
                        label: "Estimated Cost"
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.1299 3V5M15.1299 5V9.98468M15.1299 5L14.1299 4M15.1299 5L16.1299 4M15.1299 9.98468V10.0153M15.1299 9.98468L13.5 9.04366M15.1299 9.98468L15.1564 10M15.1299 10.0153V15M15.1299 10.0153L15.1564 10M15.1299 10.0153L13.5 10.9562M15.1299 15V17M15.1299 15L14.1299 16M15.1299 15L16.1299 16M15.1564 10L19.3998 12.4499M15.1564 10L19.3997 7.55001M19.3998 12.4499L21.2186 13.5M19.3998 12.4499L19.9121 14.3624M19.3998 12.4499L21.3119 11.9376M21.2183 6.5L19.3997 7.55001M19.3997 7.55001L19.9121 5.63757M19.3997 7.55001L21.3123 8.06241M7 15.9998C6.44772 15.9998 6 16.4475 6 16.9998C6 17.5521 6.44772 17.9998 7 17.9998C7.55228 17.9998 8 17.5521 8 16.9998C8 16.4475 7.55228 15.9998 7 15.9998ZM7 15.9998L7.00707 14M7 16.9998L7.00707 17.0069M11 16.9998C11 19.209 9.20914 20.9998 7 20.9998C4.79086 20.9998 3 19.209 3 16.9998C3 15.9854 3.37764 15.0591 4 14.354L4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6V14.354C10.6224 15.0591 11 15.9854 11 16.9998Z" />
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
                    {['M12 3V21M9.99995 4L12 6L14 4M9.99995 20L12 18L14 20M4.23218 7.5L19.8206 16.5M4.11133 9.50885L6.57017 8.85L5.91133 6.39115M18.141 17.6089L17.4821 15.15L19.941 14.4912M19.8205 7.5L4.232 16.5M18.1413 6.39115L17.4825 8.85L19.9413 9.50885M4.11166 14.4911L6.57051 15.15L5.91166 17.6088', 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'].map((item, index) => (
                      <button className={`inline-flex items-center justify-center hover:bg-neutral-600/40 transition duration-300 ease-in-out p-2.5 rounded-full text-neutral-300 ${index === 0 ? 'bg-neutral-600/40' : 'bg-none'}`} key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item} />
                        </svg>
                      </button>
                    ))}
                  </div>
                  {/*  */}
                  <div className='grid grid-cols-2 gap-3'>
                    {[
                      { value: "56%", label: "Humidity", rangeValue: 40 },
                      { value: "19 °C", label: "Temperature", rangeValue: 20 },
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
                      <h3 className='text-neutral-200 text-lg'>23 °C</h3>
                      <p className='text-neutral-400 text-xs leading-none'>Temperature</p>
                    </div>
                    <div>
                      <h3 className='text-neutral-200 text-lg'>19 °C</h3>
                      <p className='text-neutral-400 text-xs leading-none'>Humidity</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  {[
                    { icon: 'M10 12.9999V11.9999C10 10.8954 10.8954 9.99994 12 9.99994C13.1046 9.99994 14 10.8954 14 11.9999V12.9999M3 14.5999V12.1301C3 10.9814 3 10.407 3.14805 9.87807C3.2792 9.40953 3.49473 8.96886 3.78405 8.57768C4.11067 8.13608 4.56404 7.78346 5.47078 7.07822L8.07078 5.056C9.47608 3.96298 10.1787 3.41648 10.9546 3.2064C11.6392 3.02104 12.3608 3.02104 13.0454 3.2064C13.8213 3.41648 14.5239 3.96299 15.9292 5.056L18.5292 7.07822C19.436 7.78346 19.8893 8.13608 20.2159 8.57768C20.5053 8.96886 20.7208 9.40953 20.8519 9.87807C21 10.407 21 10.9814 21 12.1301V14.5999C21 16.8401 21 17.9603 20.564 18.8159C20.1805 19.5685 19.5686 20.1805 18.816 20.564C17.9603 20.9999 16.8402 20.9999 14.6 20.9999H9.4C7.15979 20.9999 6.03969 20.9999 5.18404 20.564C4.43139 20.1805 3.81947 19.5685 3.43597 18.8159C3 17.9603 3 16.8401 3 14.5999ZM10.5 15.9999H13.5C13.9659 15.9999 14.1989 15.9999 14.3827 15.9238C14.6277 15.8223 14.8224 15.6276 14.9239 15.3826C15 15.1988 15 14.9659 15 14.4999C15 14.034 15 13.801 14.9239 13.6173C14.8224 13.3722 14.6277 13.1776 14.3827 13.0761C14.1989 12.9999 13.9659 12.9999 13.5 12.9999H10.5C10.0341 12.9999 9.80109 12.9999 9.61732 13.0761C9.37229 13.1776 9.17761 13.3722 9.07612 13.6173C9 13.801 9 14.034 9 14.4999C9 14.9659 9 15.1988 9.07612 15.3826C9.17761 15.6276 9.37229 15.8223 9.61732 15.9238C9.80109 15.9999 10.0341 15.9999 10.5 15.9999Z', brand: 'Garden Gate', type: 'Automated Door' },
                    { icon: 'M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z', brand: 'NetGear', type: 'WiFi Router' },
                    { icon: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18', brand: 'Philips Hue', type: 'Smart Light' },
                    { icon: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z', brand: 'LG OLED', type: 'Smart Television' },
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
                            <path strokeLinecap="round" strokeLinejoin="round" d='M12 7H12.01M12.5 7C12.5 7.27614 12.2761 7.5 12 7.5C11.7239 7.5 11.5 7.27614 11.5 7C11.5 6.72386 11.7239 6.5 12 6.5C12.2761 6.5 12.5 6.72386 12.5 7ZM15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14ZM8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z' />
                          </svg>
                        </div>
                        <div>
                          <h3 className='text-neutral-200 text-lg'>JBL Flip 5</h3>
                          <p className='text-neutral-400 leading-none'>Portable Speaker</p>
                        </div>
                      </div>
                      <Toggle />
                    </div>
                    {/* Music Player */}
                    <div className='flex gap-3'>
                      <div className='relative size-[4.5rem] border border-neutral-700 rounded-md'>
                        <img src={TheIdolAlbum} alt="The Idol Album" className='object-cover w-full h-full rounded-md' />
                      </div>
                      <div className='flex-grow flex flex-col justify-between'>
                        <div>
                          <p className='text-neutral-400'>The Weeknd, JENNIE & Rose Depp</p>
                          <p className='text-neutral-200 text-lg leading-none'>One Of The Girls</p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <p className='text-neutral-400 text-xs'>2:06</p>
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
                          <p className='text-neutral-400 text-xs'>-1:58</p>
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
                      {
                        icon: 'M15.1299 3V5M15.1299 5V9.98468M15.1299 5L14.1299 4M15.1299 5L16.1299 4M15.1299 9.98468V10.0153M15.1299 9.98468L13.5 9.04366M15.1299 9.98468L15.1564 10M15.1299 10.0153V15M15.1299 10.0153L15.1564 10M15.1299 10.0153L13.5 10.9562M15.1299 15V17M15.1299 15L14.1299 16M15.1299 15L16.1299 16M15.1564 10L19.3998 12.4499M15.1564 10L19.3997 7.55001M19.3998 12.4499L21.2186 13.5M19.3998 12.4499L19.9121 14.3624M19.3998 12.4499L21.3119 11.9376M21.2183 6.5L19.3997 7.55001M19.3997 7.55001L19.9121 5.63757M19.3997 7.55001L21.3123 8.06241M7 15.9998C6.44772 15.9998 6 16.4475 6 16.9998C6 17.5521 6.44772 17.9998 7 17.9998C7.55228 17.9998 8 17.5521 8 16.9998C8 16.4475 7.55228 15.9998 7 15.9998ZM7 15.9998L7.00707 14M7 16.9998L7.00707 17.0069M11 16.9998C11 19.209 9.20914 20.9998 7 20.9998C4.79086 20.9998 3 19.209 3 16.9998C3 15.9854 3.37764 15.0591 4 14.354L4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6V14.354C10.6224 15.0591 11 15.9854 11 16.9998Z',
                        brand: 'Xiaomi Airclean',
                        type: 'Air Purifier',
                        kwh: 1.2
                      },
                      {
                        icon: 'M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z',
                        brand: 'NetGear',
                        type: 'WiFi Router',
                        kwh: 0.05
                      },
                      {
                        icon: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
                        brand: 'Philips Hue',
                        type: 'Smart Light',
                        kwh: 0.01
                      },
                      {
                        icon: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z',
                        brand: 'LG OLED',
                        type: 'Smart Television',
                        kwh: 0.15
                      }
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
                            <h3 className='text-neutral-200 text-end'>{item.kwh}</h3>
                            <p className='text-neutral-400 text-end text-xs leading-none'>kWh</p>
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
