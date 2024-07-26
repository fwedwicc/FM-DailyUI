import React from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day08 = () => {
  useLenisScroll();
  useScrollToTop();

  const LinkList = ({ title, names = [] }) => {
    return (
      <ul className='text-neutral-300 lg:text-base text-sm space-y-3'>
        <li className='mb-7'>
          <span className='text-neutral-400 font-thin'>{title}</span>
        </li>
        {names.map((name, index) => (
          <li key={index}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    )
  }

  const Link = ({ link, svg }) => {
    return (
      <li className='inline-flex'>
        <a href={link} className='p-1.5 rounded-md group hover:bg-neutral-800 transition duration-300 ease-in-out'>
          <svg className="size-6 group-hover:text-green-500 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d={svg} clip-rule="evenodd" />
          </svg>
        </a>
      </li>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 lg:h-screen h-auto flex flex-col justify-between">
        <div className='h-full bg-neutral-800 border'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto! Nobis, libero. Ratione, repellendus consequatur, vero, alias omnis in aperiam quam quis hic eaque ad et fugit doloremque mollitia vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatum dolorem aut et blanditiis sapiente, itaque cum, doloribus repudiandae minima, laborum illum ea quasi soluta iusto sequi eligendi quo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias vitae, mollitia minus consequuntur incidunt quaerat rerum amet sapiente ut dolores accusantium, veritatis neque repellat nisi. Impedit ex dolorum voluptate!
        </div>
        <footer className='border lg:px-24 px-12 py-8 bg-neutral-900 grid lg:grid-cols-7 grid-cols-1 lg:gap-24 gap-8'>
          <div className='lg:col-span-2 col-span-1 space-y-5'>
            <a className="inline-block" href="#">
              <span className="sr-only">Home</span>
              <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
            </a>
            <p className="leading-relaxed text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam quibusdam.
            </p>
            <ul className='flex gap-3 items-center text-neutral-200'>
              <Link
                link='#'
                svg='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z'
              />
              <Link
                link='#'
                svg='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
              />
              <Link
                link='#'
                svg='M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z'
              />
              <Link
                link='#'
                svg='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z'
              />
            </ul>
          </div>
          <div className='lg:col-span-5 col-span-1 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-12'>
            <LinkList
              title='Company'
              names={['About us', 'Contact us', 'Careers']}
            />
            <LinkList
              title='Product'
              names={['Features', 'Pricing', 'News']}
            />
            <LinkList
              title='Services'
              names={['Content Writing', 'SEO for Business', 'UI Design']}
            />
            <LinkList
              title='Legal'
              names={['Privacy Policy', 'Terms & Condition', 'Return Policy']}
            />
          </div>
        </footer>

      </section>
    </motion.div>
  )
}

export default Day08
