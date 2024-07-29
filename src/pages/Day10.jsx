import React from 'react'
import { fmUILogo } from '../assets'
import { qrCode } from '../assets/day10'
import { InputField, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day10 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8">
        {/* Modal */}
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-xl max-w-7xl p-8 space-y-5 w-full">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-5">
            {/* Left Content */}
            <div className="lg:col-span-5 col-span-1 space-y-6">
              <div>
                <h1 className="font-medium text-neutral-200 text-lg md:text-xl">
                  Your document is published
                </h1>
                <p className="leading-relaxed text-neutral-400 text-sm">
                  Future change will be published automatically.
                </p>
              </div>
              <div>
                <div className='flex items-end justify-between gap-3 pb-3'>
                  <div className='w-full'>
                    <InputField
                      id="doc-link"
                      label="Document link"
                      type="text"
                      value="https://sharedocumentname.com/34afh231kg"
                    />
                  </div>
                  <Button
                    styles={'inline-flex items-center gap-2 py-[0.6rem] text-neutral-200 bg-transarent hover:bg-neutral-700 border-neutral-500 focus:ring-neutral-200/60'}
                    label={'Copy'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                  </Button>
                </div>
                <a href="#" className='flex items-center gap-1 text-green-500 text-sm font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add custom domain
                </a>
              </div>
              <div className='flex flex-col justify-center items-center gap-4'>
                <div className='text-center flex items-center w-full py-4'>
                  <hr className='h-px w-full border-neutral-600/70' />
                  <p className='text-neutral-300 text-xs text-nowrap px-3'>
                    Scan to open this document
                  </p>
                  <hr className='h-px w-full border-neutral-600/70' />
                </div>
                <img src={qrCode} alt="Sample QR Code" className='w-[25rem] h-auto' />
                <p className='text-neutral-300 text-center text-xs px-3 -mt-16'>
                  Scan this code with your phone to <br /> open your document in your browser.
                </p>
              </div>
            </div>
            {/* Right Content */}
            <div className='lg:col-span-7 col-span-1 border'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur veniam velit adipisci porro consequatur deserunt atque ea reiciendis amet iure repellat, quae soluta quam voluptates tempore rerum pariatur fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam commodi voluptas dicta quasi reiciendis animi tempore, corrupti, maiores, eaque ipsa esse ad fuga laboriosam? Ex porro doloremque reprehenderit? Suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laborum. Id voluptate perferendis nisi fuga laboriosam consectetur obcaecati minus, vero sunt! Dolorum magni unde harum placeat officia cum, quasi excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nulla non exercitationem dolore velit facere, expedita hic dolor ratione soluta facilis inventore excepturi ex consequuntur aut porro praesentium cum dolorum.
            </div>
          </div>
        </div>

      </section>
    </motion.div >
  )
}

export default Day10
