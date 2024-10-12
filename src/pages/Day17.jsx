import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'

const Day17 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-neutral-800 min-h-screen flex items-center justify-center p-12 md:px-12 px-8 lg:py-12 py-8 overflow-x-hidden">
        {/* Modal */}
        <div className="border border-neutral-600/50 bg-neutral-700/20 rounded-xl max-w-7xl p-3 space-y-5 w-full">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum magnam id eveniet eius cupiditate quis, iste reiciendis dolores voluptas iusto deserunt beatae ad aspernatur, quibusdam itaque laborum facere officia.</p>
        </div>
      </section>
    </motion.div>
  )
}

export default Day17
