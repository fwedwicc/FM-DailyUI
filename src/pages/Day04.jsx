import React, { useState } from 'react';
import { fmUILogo } from '../assets'
import useLenisScroll from '../hooks/useLenisScroll'
import { InputField, Tooltip, Select, Button } from '../components'
import { motion, AnimatePresence } from 'framer-motion';

const Day04 = () => {
  useLenisScroll();
  const [activeTab, setActiveTab] = useState('payment');

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
        <div className="relative w-full max-w-[7rem]">
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit, <br className='lg:block hidden' /> Eligendi nam dolorum aliquam quibusdam.
                </p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-7 grid-cols-1 gap-4'>
            <div className='lg:col-span-2 col-span-1 bg-neutral-700/20 border border-neutral-700/50 p-4 rounded-md space-y-5'>
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
                      <div className='grid grid-cols-2'>
                        <div className='col-span-1'>

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
                              <span className='w-3 h-3 flex rounded-full bg-blue-500'></span>
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
                      className='p-6'
                    >
                      <h1>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum impedit nostrum, fuga asperiores dolore eaque corrupti debitis at rerum autem, molestias adipisci nulla dolores voluptatibus, vitae necessitatibus vel expedita!</h1>
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
