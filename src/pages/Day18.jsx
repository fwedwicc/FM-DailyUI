import React, { useState } from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { fmUILogo } from '../assets'
import { motion } from 'framer-motion'
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const tableData = [
  { service: 'Web Development', revenue: '₱700,000', inquiry: '150', feedback: '140' },
  { service: 'Programming', revenue: '₱500,000', inquiry: '120', feedback: '110' },
  { service: 'Graphic Design', revenue: '₱400,000', inquiry: '100', feedback: '95' },
  { service: 'Paperworks', revenue: '₱300,000', inquiry: '80', feedback: '75' },
  { service: 'Database Management', revenue: '₱100,000', inquiry: '50', feedback: '45' },
]

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

const DoughnutChart = () => {
  // Dummy data for the chart
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ['Programming', 'Paperworks', 'Database Management', 'Graphic Design', 'Web Development'],
    datasets: [
      {
        label: 'Service',
        data: [50, 30, 10, 40, 70],  // Example data (replace with your data)
        backgroundColor: [
          'rgba(99, 102, 241)',
          'rgba(250, 204, 21)',
          'rgba(244, 63, 94)',
          'rgba(59, 130, 246)',
          'rgba(34, 197, 94)',
        ],
        borderWidth: 0,
      },
    ],
  };

  // Configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <Doughnut data={data} options={options} />
  );
};



// Line Chart Component
const inputs = {
  min: -50,
  max: 100,
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

const HorizontalBarChart = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -50, max: 50 };

  const labels = Utils.months({ count: DATA_COUNT });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: 'rgba(244, 63, 94)',
      },
      {
        label: 'Dataset 3',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: 'rgba(251, 191, 36)',
      },
      {
        label: 'Dataset 3',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: 'rgba(96, 165, 250)',
      },
    ],
  };

  // Configuration options
  const options = {
    indexAxis: 'y', // Horizontal bars
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: 'rgba(173, 172, 172, 0.6)',
        },
        grid: {
          color: 'rgba(173, 172, 172, 0.1)',
          borderColor: 'rgba(255, 69, 0, 0.8)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(173, 172, 172, 0.6)',
        },
        grid: {
          color: 'rgba(173, 172, 172, 0.1)',
          borderColor: 'rgba(255, 69, 0, 0.8)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const Day18 = () => {
  useLenisScroll();
  useScrollToTop();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLink = {
    firstLinks: [
      {
        "label": "Feed",
        "icon": "M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      {
        "label": "Playlists",
        "icon": "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      },
      {
        "label": "Stats",
        "icon": "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      }
    ],
    secondLinks: [
      {
        "label": "Favorites",
        "icon": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      },
      {
        "label": "History",
        "icon": "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      },
      {
        "label": "Podcasts",
        "icon": "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      }
    ],
    thirdLinks: [
      {
        "label": "Rock",
        "color": "orange"
      },
      {
        "label": "Pop",
        "color": "green"
      },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-[#202020] flex">
        {/* Sidebar */}
        <aside
          className={`fixed overflow-auto h-screen bg-[#202020] w-64 space-y-4 transition-transform lg:pt-0 pt-11 transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >
          <a className="inline-block pl-8 pt-12" href="#">
            <span className="sr-only">Home</span>
            <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          </a>
          <div className='space-y-5 p-3'>
            {/* First Links */}
            <ul className='space-y-1.5'>
              {navLink.firstLinks.map((link, index) => (
                <li
                  className={`${index == 0 ? 'text-green-500 font-bold bg-green-500/10' : 'text-neutral-200 hover:bg-neutral-700/50'} inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer`}
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
            {/* Second Links */}
            <ul className='space-y-1.5'>
              <li className='text-neutral-500 text-xs uppercase mb-2'>Your music</li>
              {navLink.secondLinks.map((link, index) => (
                <li
                  className={'text-neutral-200 hover:bg-neutral-700/50 inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer'}
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
            {/* Third Links */}
            <ul className='space-y-1.5'>
              <li className='text-neutral-500 text-xs uppercase mb-2'>Your playlist</li>
              {navLink.thirdLinks.map((link, index) => (
                <li
                  className={'text-neutral-200 hover:bg-neutral-700/50 inline-flex items-center gap-3 w-full px-4 py-2.5 text-sm rounded-md transition duration-300 ease-in-out cursor-pointer'}
                  key={index}
                >
                  <span className={`flex w-3 h-3 ms-2 bg-${link.color}-500 rounded-full`}></span>
                  <a href="#">{link.label}</a>
                </li>
              ))}
              <li className='pt-2'>
                <a href="#" className='flex items-center justify-center gap-1 text-green-500 text-sm font-medium'>
                  Create new playlist
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 ml-0 lg:ml-64 lg:p-4 p-6 lg:pl-0 lg:bg-[#202020] bg-neutral-800 min-h-screen">
          <div className='bg-neutral-800 lg:rounded-xl rounded-none lg:p-6 p-0'>
            {/* Sidebar Toggle Button for Medium Screens */}
            <button
              className="lg:hidden py-2 size-9 flex fixed justify-center items-center bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
            <div className='grid grid-cols-3 gap-5'>
              {/* Transaction Activity */}
              <div className='col-span-2 h-80 w-full'>
                <div className='rounded-lg bg-neutral-700/20 w-full h-full py-4 px-5 space-y-3'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className="text-neutral-200 text-lg md:text-xl">
                        Transaction History
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        2023 - 2024
                      </p>
                    </div>
                    <button className='size-9 shrink-0 flex justify-center items-center hover:bg-neutral-700/70 rounded-md focus:ring-2 focus:ring-neutral-700 text-neutral-400 z-50 transition duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className='h-[77%]'>
                    <LineChart />
                  </div>
                </div>
              </div>
              {/* Donut */}
              <div className='col-span-1 h-80 w-full'>
                <div className='rounded-lg bg-neutral-700/20 w-full h-full px-5 py-4'>
                  <h3 className="text-neutral-200 text-md md:text-lg">
                    Most Availed Services
                  </h3>
                  <ul className='flex flex-wrap justify-center gap-x-4 mt-7'>
                    {[
                      { label: 'WD', color: "bg-green-500" },
                      { label: 'PR', color: "bg-indigo-500" },
                      { label: 'PW', color: "bg-yellow-500" },
                      { label: 'DBM', color: "bg-rose-500" },
                      { label: 'GD', color: "bg-blue-500" },
                    ].map((link, index) => (
                      <li
                        className={'text-neutral-400 inline-flex items-center gap-2 text-sm'}
                        key={index}
                      >
                        <span className={`flex w-2.5 h-2.5 ms-2 ${link.color} rounded-full`}></span>
                        <span>{link.label}</span>
                      </li>
                    ))}
                  </ul>
                  <div className='h-[63%] w-full justify-center items-center flex mt-4'>
                    <DoughnutChart />
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 mt-5 gap-5'>
              {/* Table */}
              <div className='col-span-1 h-auto w-full space-y-3'>
                <h3 className="text-neutral-200 text-lg md:text-xl">
                  Top Services
                </h3>
                <div className="overflow-x-auto rounded-lg border border-neutral-700/60">
                  <table className="min-w-full divide-y divide-neutral-700">
                    <thead className="bg-neutral-900/40">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                          Service
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                          Revenue
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                          Inquries
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                          Feedback
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-neutral-700/10 divide-y divide-neutral-700/60">
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-300">{row.service}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-400">{row.revenue}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-400">{row.inquiry}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-400">{row.feedback}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Contribution Breakdown */}
              <div className='col-span-1 h-80 w-full'>
                <div className='rounded-lg bg-neutral-700/20 w-full h-full py-4 px-5 space-y-1'>
                  <div>
                    <h3 className="text-neutral-200 text-md md:text-lg">
                      Contribution Breakdown
                    </h3>
                    <ul className='flex justify-center gap-6 mt-3'>
                      {[
                        { label: 'LT', color: "bg-yellow-500" },
                        { label: 'FM', color: "bg-blue-500" },
                        { label: 'KS', color: "bg-rose-500" },
                      ].map((link, index) => (
                        <li
                          className={'text-neutral-200 inline-flex items-center gap-2 text-sm'}
                          key={index}
                        >
                          <span className={`flex w-2.5 h-2.5 ms-2 ${link.color} rounded-full`}></span>
                          <span>{link.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='h-[76%]'>
                    <HorizontalBarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </motion.div>
  )
}

export default Day18
