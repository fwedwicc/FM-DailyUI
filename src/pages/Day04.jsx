import React, { useState } from 'react';
import { fmUILogo } from '../assets'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { InputField, Tooltip, Select, Button, Toggle } from '../components'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend
} from 'chart.js';
ChartJS.register(ArcElement, ChartTooltip, Legend);
import { motion, AnimatePresence } from 'framer-motion';

const Day04 = () => {
  useLenisScroll();
  useScrollToTop();

  const [activeTab, setActiveTab] = useState('amortization');

  const GroupedInput = ({ id, label, children, type, styles, placeholder, required, value1, value2 }) => {
    return (
      <>
        <div className='flex items-center justify-between'>
          <label htmlFor={id} className="block text-sm font-medium text-neutral-300 mb-1.5">
            {label}
          </label>
          {children}
        </div>
        <div className='grid grid-cols-8'>
          <div className='col-span-5'>
            <input
              id={id}
              type={type}
              className={`${styles} block rounded-l-md w-full bg-neutral-700/20 border border-neutral-600/60 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm py-2.5 px-3 text-neutral-200 placeholder:text-neutral-400/70`}
              placeholder={placeholder}
              required={required}
              value={value1}
            />
          </div>
          <div className='col-span-3'>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                <span className='text-neutral-400 font-bold'>%</span>
              </div>
              <input
                id={id}
                type={type}
                className={`w-full rounded-r-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
                placeholder={placeholder}
                required={required}
                value={value2}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  const PercentInput = ({ id, value }) => {
    return (
      <div className='flex gap-3 items-center'>
        <span className='text-neutral-300'>+</span>
        <div className="relative w-full max-w-[8rem]">
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
            <span className='text-neutral-400 font-bold'>%</span>
          </div>
          <input
            id={id}
            type='text'
            className={`w-full rounded-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70`}
            required='false'
            value={value}
          />
        </div>
      </div>
    )
  }

  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ['#22c55e', '#6366f1', '#f97316'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const tableData = [
    { year: '2024', principal: '$2,059.73', interest: '$7,066.24', balance: '$337,940.27' },
    { year: '2025', principal: '$7,181.35', interest: '$23,846.94', balance: '$332,818.65' },
    { year: '2026', principal: '$12,565.00', interest: '$40,365.61', balance: '$327,435.00' },
    { year: '2027', principal: '$18,224.09', interest: '$56,608.84', balance: '$321,775.91' },
    { year: '2028', principal: '$24,172.72', interest: '$72,562.54', balance: '$315,827.28' },
    { year: '2029', principal: '$30,425.68', interest: '$88,211.90', balance: '$309,574.32' },
    { year: '2030', principal: '$36,998.56', interest: '$103,541.34', balance: '$303,001.44' },
    { year: '2031', principal: '$43,907.72', interest: '$118,534.51', balance: '$296,092.28' },
    { year: '2032', principal: '$51,170.36', interest: '$133,174.18', balance: '$288,829.64' },
    { year: '2033', principal: '$58,804.58', interest: '$147,442.29', balance: '$281,195.42' },
    { year: '2034', principal: '$66,829.37', interest: '$161,319.82', balance: '$273,170.63' },
    { year: '2035', principal: '$75,264.73', interest: '$174,786.78', balance: '$264,735.27' },
    { year: '2036', principal: '$84,131.66', interest: '$187,822.17', balance: '$255,868.34' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="lg:min-h-screen lg:px-32 md:px-20 px-8 lg:py-20 py-8">
          <div className='mb-12'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <div className='space-y-4'>
              <h1 className="mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                Mortgage Calculator
              </h1>
              <div>
                <p className="leading-relaxed text-neutral-300">
                  Calculate your monthly mortgage payments with ease, <br className='lg:block hidden' /> and get detailed insights on your loan.
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-7 grid-cols-1 gap-4'>
            <div className='lg:col-span-2 col-span-1 bg-neutral-700/20 border border-neutral-700/50 p-4 rounded-md space-y-5 self-start'>
              <div>
                <InputField
                  id="home-price"
                  label="Home Price"
                  type="text"
                  value='$425,000'
                  required={false}
                />
              </div>
              <div>
                <GroupedInput
                  id="home-price"
                  label="Home Price"
                  type="text"
                  value1='$425,000'
                  value2='20'
                  required={false}
                >
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content='Down payment: Portion of the sale price of a home that is not financed. Your down payment amount can affect the interest rate you get, as lenders typically offer lower rates for borrowers who make larger down payments.'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </GroupedInput>
              </div>
              <div>
                <Select
                  id="loan-term"
                  label="Loan term"
                  options={[
                    { value: '30y', label: '30 years' },
                    { value: '20y', label: '20 years' },
                    { value: '15y', label: '15 years' },
                    { value: '10y', label: '10 years' },
                    { value: '5y', label: '5 years' }
                  ]}
                  required={false}
                >
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content='Loan term: The amount of time or number of years that you will have to repay a loan. Longer term mortages can make your monthly payment amount smaller than shorter term loans by stretching out your payments over more years.'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </Select>
              </div>
              <div>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 end-0 mt-6 flex items-center pe-3">
                    <span className='text-neutral-400 font-bold'>%</span>
                  </div>
                  <InputField
                    styles='w-full rounded-md bg-neutral-700/20 border border-neutral-600/60 py-2.5 px-3 pe-10 text-sm transition duration-300 ease-in-out focus:ring-neutral-400 focus:border-neutral-400 focus:ring-1 text-neutral-200 placeholder:text-neutral-400/70'
                    id="interest-rate"
                    label="Interest Rate"
                    type="text"
                    value='5'
                    required={false}
                  >
                    <Tooltip
                      styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                      content="Interest rate: Amount you'll pay each year to borrow the money for your loan, expressed as a percentage."
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                      </svg>
                    </Tooltip>
                  </InputField>
                </div>
              </div>
              <div>
                <InputField
                  id="zip-code"
                  label="ZIP code"
                  type="text"
                  value='3022'
                  required={false}
                />
              </div>
              <div className='text-center flex items-center w-full py-4'>
                <hr className='h-px w-full border-neutral-600/70' />
                <p className='text-neutral-300 text-xs text-nowrap px-3'>
                  Taxes, insurance, HOA fees
                </p>
                <hr className='h-px w-full border-neutral-600/70' />
              </div>
              <div>
                <Select
                  id="credit-score"
                  label="Credit score"
                  options={[
                    { value: '740+', label: '740+' },
                    { value: '720-739', label: '720 - 739' },
                    { value: '700-719', label: '700 - 719' },
                    { value: '680-699', label: '680 - 699' },
                    { value: '660-679', label: '660 - 679' }
                  ]}
                  required={false}
                >
                </Select>
              </div>
              <div>
                <InputField
                  id="ptpm"
                  label="Property tax per month"
                  type="text"
                  value='$280'
                  required={false}
                >
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content="Property tax: Any tax on real estate or certain other forms of property."
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </InputField>
              </div>
              <div>
                <InputField
                  id="ptphipm"
                  label="Property tax per Homeowner's insurance per month"
                  type="text"
                  value='$66'
                  required={false}
                >
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content="Homeowners insurance: Financial protection that you purchase from an insurance provider. It helps pay for losses if a covered disaster or other damaging event affects your home."
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </InputField>
              </div>
              <div>
                <InputField
                  id="pmi"
                  label="PMI per month"
                  type="text"
                  value='$0'
                  required={false}
                >
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content="Private mortgage insurance (PMI): Insurance policy that compensates lenders for losses from a mortgage loan default."
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </InputField>
              </div>
              <div>
                <InputField
                  id="hoa"
                  label="HOA fees per month"
                  type="text"
                  value='$0'
                  required={false}
                >
                  <Tooltip
                    styles='lg:-translate-x-1/2 -translate-x-[95%] left-1/2 w-72'
                    content="Homeowner's association (HOA) fee: Monthly or quarterly fee assessed by the HOA to pay for the services that it provides."
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Tooltip>
                </InputField>
              </div>
              <div className='pt-4'>
                <Button
                  styles={'w-full text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                  label={'Update'}
                />
              </div>
            </div>
            <div className='lg:col-span-5 col-span-1'>
              <div className='space-x-2 flex'>
                <div className='inline-flex p-1.5 border border-neutral-700/80 gap-2 rounded-[0.4rem]'>
                  <motion.button
                    className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'payment' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                      }`}
                    onClick={() => setActiveTab('payment')}
                    whileTap={{ scale: 0.95 }}
                  >

                    Payment breakdown
                  </motion.button>
                  <motion.button
                    className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'amortization' ? 'text-neutral-800 bg-neutral-200 font-semibold' : 'text-neutral-300 bg-transparent hover:bg-neutral-700/40 transition duration-300 ease-in-out'
                      }`}
                    onClick={() => setActiveTab('amortization')}
                    whileTap={{ scale: 0.95 }}
                  >

                    Amortization
                  </motion.button>
                </div>
              </div>
              <div className="mt-3">
                <AnimatePresence mode="wait">
                  {activeTab === 'payment' ? (
                    <motion.div
                      key="payment"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='p-6 space-y-6'
                    >
                      <div className='flex justify-between items-start'>
                        <div className='space-y-2'>
                          <h1 className="text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                            Monthly payment breakdown
                          </h1>
                          <p className="leading-relaxed text-neutral-300">
                            Based on national average rates
                          </p>
                        </div>
                        <a href="#" className='flex items-center gap-1 text-green-500 text-xs text-nowrap'>
                          Advertiser disclosure
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </a>
                      </div>
                      <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className='col-span-1 flex justify-center items-start py-12'>
                          <div className="relative lg:w-52 lg:h-52 md:h-44 md:w-44 h-40 w-40">
                            <Doughnut data={data} options={options} />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <span className="text-3xl font-bold text-neutral-200">$2,171</span>
                                <span className="block text-sm text-neutral-400">/mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-1'>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-indigo-500'></span>
                              Principal & interest
                            </span>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              $1,825.19
                            </span>
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-green-500'></span>
                              Property tax
                            </span>
                            <PercentInput
                              id='property-tax'
                              value='$280'
                            />
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-orange-500'></span>
                              Homeowner's insurance
                            </span>
                            <PercentInput
                              id='homeowner-insurance'
                              value='$66'
                            />
                          </div>
                          <div className='text-center flex items-center w-full pt-8'>
                            <hr className='h-px w-full border-neutral-600/70' />
                            <p className='text-neutral-300 text-xs text-nowrap px-3'>
                              Additional filters
                            </p>
                            <hr className='h-px w-full border-neutral-600/70' />
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-indigo-500'></span>
                              PMI
                            </span>
                            <PercentInput
                              id='pmi'
                              value='$0'
                            />
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-green-500'></span>
                              HOA fees
                            </span>
                            <PercentInput
                              id='hoa-fees'
                              value='$0'
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="amortization"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='p-6 space-y-12'
                    >
                      <div className='space-y-4'>
                        <h1 className="text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                          Amortization for mortgage loan
                        </h1>
                        <p className="leading-relaxed text-neutral-300">
                          Amortization is paying off debt over time in equal installments. As the term of your mortgage loan progresses, a larger share of your payment goes toward paying down the principal until the loan is paid in full at the end of your term.
                        </p>
                      </div>
                      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-7'>
                        <div className='flex flex-col gap-2'>
                          <span className="leading-relaxed text-neutral-400 text-sm">
                            Loan amount
                          </span>
                          <span className='inline-flex text-green-500'>
                            $
                            <h1 className="text-2xl font-medium ms-1 text-neutral-300 sm:text-xl md:text-3xl">
                              340,000
                            </h1>
                          </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <span className="leading-relaxed text-neutral-400 text-sm">
                            Total interest paid
                          </span>
                          <span className='inline-flex text-green-500'>
                            $
                            <h1 className="text-2xl font-medium ms-1 text-neutral-300 sm:text-xl md:text-3xl">
                              317,070
                            </h1>
                          </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <span className="leading-relaxed text-neutral-400 text-sm">
                            Total cost of loan
                          </span>
                          <span className='inline-flex text-green-500'>
                            $
                            <h1 className="text-2xl font-medium ms-1 text-neutral-300 sm:text-xl md:text-3xl">
                              657,070
                            </h1>
                          </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <span className="leading-relaxed text-neutral-400 text-sm">
                            Payoff date
                          </span>
                          <h1 className="text-2xl font-medium text-neutral-300 sm:text-xl md:text-3xl">
                            Jul 2054
                          </h1>
                        </div>
                      </div>
                      <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='col-span-1'>
                          <div className='flex justify-end pb-3 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300">
                              As of March 2036
                            </span>
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-indigo-500'></span>
                              Principal paid
                            </span>
                            <PercentInput
                              id='principal-paid'
                              value='$47,494'
                            />
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-green-500'></span>
                              Interest paid
                            </span>
                            <PercentInput
                              id='interest-paid'
                              value='$213,495'
                            />
                          </div>
                          <div className='flex justify-between items-center py-6 border-b border-neutral-600/40'>
                            <span className="leading-relaxed text-neutral-300 inline-flex gap-3 items-center">
                              <span className='w-3 h-3 flex rounded-full bg-orange-500'></span>
                              Loan balance
                            </span>
                            <PercentInput
                              id='loan-balance'
                              value='$260,357'
                            />
                          </div>
                        </div>
                        <div className='col-span-1'>
                          <div className='bg-neutral-700/20 border border-neutral-700/50 p-4 rounded-md space-y-5 grid grid-cols-5'>
                            <div className="col-span-5 mb-3">
                              <strong className="block leading-relaxed text-neutral-300">
                                Optional: Make extra payments
                              </strong>
                              <span className="leading-relaxed text-neutral-400 text-sm">
                                By adding extra payments, you can pay off your loan and save on interest.
                              </span>
                            </div>
                            <div className='col-span-5'>
                              <InputField
                                styles='placeholder:text-neutral-300'
                                id="loan-start-date"
                                label="Loan start date"
                                type="date"
                                required={false}
                              />
                            </div>
                            <div className='col-span-5'>
                              <InputField
                                id="amtmp"
                                label="Additional amount to monthly payment"
                                type="text"
                                value='$0'
                                required={false}
                              />
                            </div>
                            <div className='col-span-5'>
                              <InputField
                                id="ayp"
                                label="Additional yearly payment"
                                type="text"
                                value='$0'
                                required={false}
                              />
                            </div>
                            <div className='col-span-3'>
                              <InputField
                                id="otapo"
                                label="One-time payment"
                                type="text"
                                value='$0'
                                required={false}
                              />
                            </div>
                            <div className='col-span-2 ms-3'>
                              <InputField
                                id="otapo-date"
                                label="Date"
                                type="date"
                                required={false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='space-y-4'>
                        <h1 className="text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                          Amortization schedule breakdown
                        </h1>
                        <p className="leading-relaxed text-neutral-300">
                          This table lists how much principal and interest are paid in each scheduled mortgage payment.
                        </p>
                      </div>
                      <div className='space-y-3'>
                        <div className='flex justify-between'>
                          <div className='flex'>
                            <div>
                              <InputField
                                id="first-payment"
                                label="First payment"
                                type="text"
                                value='Jul 2024'
                                required={false}
                              />
                            </div>
                            <div className='ms-4'>
                              <p className="leading-relaxed text-sm text-neutral-300 ms-10">
                                Last payment
                              </p>
                              <h1 className="text-2xl font-medium text-neutral-300 sm:text-xl md:text-3xl inline-flex gap-3 items-center mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                Jul 2054
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className='flex justify-end'>
                          <Toggle>
                            <span className="ms-3 text-sm font-medium text-neutral-300">
                              Expand all years
                            </span>
                          </Toggle>
                        </div>
                        <div className="overflow-x-auto rounded-lg border border-neutral-700/60">
                          <table className="min-w-full divide-y divide-neutral-700">
                            <thead className="bg-neutral-900/40">
                              <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                                  Year
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                                  Principal
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                                  Interest
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider">
                                  Remaining Balance
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-neutral-700/10 divide-y divide-neutral-700/60">
                              {tableData.map((row, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-100">{row.year}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-300">{row.principal}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-300">{row.interest}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-300">{row.balance}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className='py-5 flex items-center gap-8'>
                          <a href="#" className='flex items-center gap-2.5 text-green-500 text-xs text-nowrap'>
                            Export as CSV
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                          </a>
                          <a href="#" className='flex items-center gap-2.5 text-green-500 text-xs text-nowrap'>
                            Printer-friendly version
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Day04
