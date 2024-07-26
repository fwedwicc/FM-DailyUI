import React from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day01 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-24 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Illustration Photo"
              src="https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="inline-block" href="#">
                <span className="sr-only">Home</span>
                <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
              </a>
              <h1 className="mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
                Welcome to fmUI
              </h1>
              <p className="mt-4 leading-relaxed text-neutral-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <InputField
                    id="first-name"
                    label="First Name"
                    type="text"
                    placeholder="John"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputField
                    id="last-name"
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    required={true}
                  />
                </div>
                <div className="col-span-6">
                  <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="johndoe@email.com"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder=""
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputField
                    id="password-confirmation"
                    label="Password Confirmation"
                    type="password"
                    placeholder=""
                    required={true}
                  />
                </div>
                <div className="col-span-6">
                  <Checkbox
                    id="marketing"
                    label={'I want to receive emails about events, product updates and company announcements.'}
                  />
                </div>
                <div className="col-span-6">
                  <p className="text-sm text-neutral-300">
                    By creating an account, you agree to our
                    <a href="#" className="text-neutral-200 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-neutral-200 underline"> privacy policy</a>.
                  </p>
                </div>
                <div className="col-span-6 flex sm:items-center gap-4">
                  <Button
                    styles={'text-neutral-800 bg-neutral-200 hover:bg-neutral-300 border-neutral-50 focus:ring-neutral-200/60'}
                    label={'Create an account'}
                  />
                  <p className="mt-4 text-sm text-neutral-300 sm:mt-0">
                    Already have an account?
                    <a href="#" className="text-neutral-200 underline"> Log in</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  )
}

export default Day01
