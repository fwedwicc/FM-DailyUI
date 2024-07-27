import React, { useState } from 'react'
import { fmUILogo } from '../assets'
import { InputField, Checkbox, Button } from '../components'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop'
import { motion } from 'framer-motion'

const Day09 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLenisScroll();
  useScrollToTop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 flex">
        <aside
          className={`fixed h-screen bg-neutral-700 w-64 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >
          {/* Sidebar */}
        </aside>
        <main className="flex-1 ml-0 lg:ml-64 lg:mt-0 mt-[4.5rem] bg-neutral-800">
          {/* Sidebar Toggle Button for Medium Screens */}
          <button
            className="lg:hidden fixed top-4 left-4 p-2 bg-neutral-700 text-white rounded-md z-50"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
          {/* Main Content */}
          <h1>sss</h1>
        </main>
      </section>
    </motion.div>
  );
};

export default Day09;
