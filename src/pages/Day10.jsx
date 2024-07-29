import React from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
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
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-16 px-8 lg:py-20 py-8">
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-xl max-w-7xl p-8 space-y-5 w-full">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-5 col-span-1 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur veniam velit adipisci porro consequatur deserunt atque ea reiciendis amet iure repellat, quae soluta quam voluptates tempore rerum pariatur fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam commodi voluptas dicta quasi reiciendis animi tempore, corrupti, maiores, eaque ipsa esse ad fuga laboriosam? Ex porro doloremque reprehenderit? Suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laborum. Id voluptate perferendis nisi fuga laboriosam consectetur obcaecati minus, vero sunt! Dolorum magni unde harum placeat officia cum, quasi excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nulla non exercitationem dolore velit facere, expedita hic dolor ratione soluta facilis inventore excepturi ex consequuntur aut porro praesentium cum dolorum.
            </div>
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
