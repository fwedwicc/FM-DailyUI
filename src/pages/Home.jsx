import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FMLogo } from '../assets'
import { motion } from 'framer-motion'
import useLenisScroll from '../hooks/useLenisScroll'
import { glowEllipse, fmUIMockup } from '../assets/home'
import { Card } from '../components'
import { Cards, titles } from '../data'
import useScrollRestoration from '../hooks/useScrollRestoration';

const Home = () => {
  useLenisScroll();
  useScrollRestoration();

  const currentChallengeIndex = titles.length - 1
  const currentChallengeNumber = currentChallengeIndex + 1

  const [searchParams, setSearchParams] = useSearchParams();
  const sectionRef = useRef(null);
  const cardsPerPage = 10;

  const [isPaginationTriggered, setIsPaginationTriggered] = useState(false);
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Cards.slice(indexOfFirstCard, indexOfLastCard);

  // Total number of pages
  const totalPages = Math.ceil(Cards.length / cardsPerPage);

  const firstChallenge = indexOfFirstCard + 1;
  const lastChallenge = Math.min(indexOfLastCard, Cards.length);

  // Scroll to the section only when triggered by pagination
  useEffect(() => {
    if (isPaginationTriggered && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setIsPaginationTriggered(false);
    }
  }, [currentPage, isPaginationTriggered]);

  const handlePageChange = (page) => {
    setIsPaginationTriggered(true);
    setSearchParams({ page });
  };

  const Hero = () => {
    return (
      <main className="relative lg:h-screen h-auto grid lg:grid-cols-2 grid-cols-1" id='home'>
        <img src={glowEllipse} alt="Glow Ellipse" className="absolute inset-0 z-0" draggable="false" />
        <div className="rounded-2xl p-[1px] bg-border-gradient z-10 md:mt-10 mt-7 md:ml-10 ml-7">
          <div className='relative rounded-2xl h-full md:p-16 p-7 bg-neutral-900' draggable="false">
            <img src={glowEllipse} alt="Glow Ellipse" className="absolute inset-0 z-0 rounded-tl-2xl" />
            {/* Hero Content */}
            <div className='relative flex items-start justify-start'>
              <img src={FMLogo} alt="FM Logo" className='w-6 h-auto' />
            </div>
            <div className="relative w-full h-full flex flex-col gap-10 justify-center">
              <div className='space-y-7 lg:pt-0 pt-10'>
                <span className='bg-green-900/50 text-green-400 rounded-full border border-green-400/40 lg:py-1.5 lg:px-2.5 py-1 px-1.5 inline-flex items-center text-nowrap gap-2 text-xs'>
                  Featuring Dark fmUI
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2 lg:size-3">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className='space-y-3.5'>
                  <h1 className="text-2xl font-bold text-green-50 sm:text-3xl md:text-4xl">
                    <a href="https://www.dailyui.co/" className='underline hover:text-green-500 transition duration-300 ease-in-out' target='_blank' rel='noopener noreferrer'>Daily UI</a> Challenges with <a href='https://fwedwicc.github.io/fmUI/' className='text-green-500'>fmUI</a>: <br /> 100 Days of Innovation
                  </h1>
                  <p className="text-sm leading-relaxed text-green-50/80">
                    Join me on a creative journey through 100 days of Daily UI challenges, each crafted with my custom design system, fmUI. Explore innovative and inspiring UI designs that will elevate your web development skills and ignite your imagination.
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <a href='https://dribbble.com/fwedwic' target='_blank' rel='noopener noreferrer' className='w-auto relative inline-flex lg:h-10 h-8 overflow-hidden rounded-md p-[1px] hover:shadow-lg hover:shadow-green-500/10 transition duration-300 ease-in-out'>
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cbffd1_0%,#39b259_50%,#cdffcb_100%)]" />
                  <span className=' bg-green-600 hover:bg-green-700 inline-flex h-full w-full cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-md bg-base px-3 lg:px-3.5 py-1 text-xs lg:text-sm font-semibold text-white backdrop-blur-3xl gap-3 ${styles}'>
                    Visit on Dribbble
                    <svg className="size-3 lg:size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a href="https://github.com/fwedwicc/FM-DailyUI" target='_blank' rel='noopener noreferrer' className='w-auto relative inline-flex lg:h-10 h-8 overflow-hidden rounded-md p-[1px] hover:shadow-lg hover:shadow-green-500/10 transition duration-300 ease-in-out'>
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cbffd1_0%,#39b259_50%,#cdffcb_100%)]" />
                  <span className=' bg-neutral-900 hover:bg-neutral-950 inline-flex h-full w-full cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-md bg-base px-3 lg:px-3.5 py-1 text-xs lg:text-sm font-medium text-neutral-100 backdrop-blur-3xl gap-3 ${styles}'>
                    Give it a star
                    <svg className="size-3 lg:size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
              <p className="text-xs leading-relaxed text-green-50/80">
                Originally designed and developed by <a href='https://fm-linktree.vercel.app' className='text-green-500' target='_blank' rel='noopener noreferrer'>Frederick Moreno</a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden lg:h-auto h-[30rem]">
          <img src={fmUIMockup} alt="fmUI Mockup" className="object-contain w-full h-full" draggable="false" />
        </div>
      </main>
    )
  }

  const Footer = () => {
    return (
      <footer className='py-8 px-16 flex md:flex-row gap-6 flex-col items-center justify-between'>
        <div className='flex md:flex-row flex-col items-center gap-5'>
          <a href="#home">
            <img src={FMLogo} alt="FM Logo" className='w-8 h-auto' />
          </a>
          <p className="inline-flex items-center text-xs leading-relaxed text-green-50/80">
            Crafted with
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 mx-[5px]">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            by
            <a href='https://fm-linktree.vercel.app' className='text-green-500 ms-[5px]' target='_blank' rel='noopener noreferrer'>Frederick Moreno</a>
          </p></div>
        <ul className='flex items-center md:gap-2 gap-1'>
          {[
            {
              link: "https://github.com/fwedwicc",
              icon: "M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
            },
            {
              link: "https://www.linkedin.com/in/frederick-moreno/",
              icon: ['M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z', 'M7.2 8.809H4V19.5h3.2V8.809Z'],
            },
            {
              link: "https://dribbble.com/fwedwic",
              icon: "M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
            },
            {
              link: "https://www.behance.net/fwedwicc",
              icon: "M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613a3.11 3.11 0 0 1-.974 1.114 4.315 4.315 0 0 1-1.399.64 6.287 6.287 0 0 1-1.609.206H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 0 0-.417-.428 1.683 1.683 0 0 0-.597-.215 3.609 3.609 0 0 0-.697-.061H4.71v2.875h2.742zm.151 5.239c.267 0 .521-.023.76-.077.241-.052.455-.136.637-.261.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H4.71v3.39h2.893zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.79h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.337a4.033 4.033 0 0 1-1.439-.958 4.37 4.37 0 0 1-.905-1.485 5.433 5.433 0 0 1-.32-1.899c0-.666.111-1.289.329-1.864a4.376 4.376 0 0 1 .934-1.493c.405-.42.885-.751 1.444-.994a4.634 4.634 0 0 1 1.858-.362c.754 0 1.413.146 1.979.44a3.967 3.967 0 0 1 1.39 1.182c.363.493.622 1.058.783 1.691.161.632.217 1.292.171 1.983h-6.431c.001.704.238 1.371.606 1.729zm2.812-4.681c-.291-.322-.783-.496-1.385-.496-.391 0-.714.065-.974.199a1.97 1.97 0 0 0-.62.491 1.772 1.772 0 0 0-.328.628 2.82 2.82 0 0 0-.111.587h3.982c-.058-.624-.272-1.085-.564-1.409zm-3.918-4.663h4.989v1.215h-4.989z"
            },
            {
              link: "https://www.tiktok.com/@fwedwicc",
              icon: ['M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z', 'M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z', 'M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z', 'M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z']
            },
          ].map((social, index) => (
            <li key={index}>
              <a href={social.link} className='inline-block p-2 group hover:bg-neutral-700/50 transition duration-300 ease-in-out rounded-md' target='_blank' rel='noopener noreferrer'>
                <svg className="size-5 text-neutral-300 group-hover:text-green-500 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  {Array.isArray(social.icon) ? social.icon.map((p, idx) => (
                    <path d={p} key={idx} />
                  )) : <path d={social.icon} />}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-neutral-900'
    >
      <Hero />
      <div className='md:py-12 px-12 flex justify-center items-center'>
        <div className='w-full max-w-2xl space-y-7'>
          <div className='flex items-center gap-5 justify-center'>
            <svg className="text-neutral-600 size-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
              <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
            </svg>
            <svg className="text-neutral-600 size-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
            </svg>
          </div>
          <p className="text-sm leading-relaxed text-center text-green-50/80">
            This section showcases my Daily UI challenge submissions, each meticulously crafted using React and Tailwind CSS. Every design and implementation is crafted by <span className='text-green-500'>Frederick Moreno</span>, reflecting my dedication to improving my skills in front-end development and UI/UX design.
          </p>
          <p className="text-sm leading-relaxed text-center text-green-50/80">
            <strong>Disclaimer:</strong> All works presented here are my original creations. Special thanks to <a href="https://www.dailyui.co/" target='_blank' rel='noopener noreferrer' className='underline'>Daily UI</a> for providing the prompts that inspired these designs. Additionally, some assets and resources used in these projects are credited to their <strong>respective creators</strong> found on the internet.
          </p>
        </div>
      </div>

      {/* Specific section for cards */}
      <div ref={sectionRef} className='flex flex-col md:pt-10 pt-14'>
        <div className='lg:px-16 md:px-12 px-6'>
          <p className='text-sm leading-relaxed text-green-50/80'>Frederick is currently working on:</p>
          <p className='leading-relaxed text-green-500'>Challenge #{currentChallengeNumber}</p>
        </div>
        {/* Card Grid */}
        <div
          className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:px-16 md:px-12 px-6 py-12'
          key={currentPage} // Key for smooth transition
        >
          {currentCards.map((card, index) => (
            <Card
              key={index}
              day={card.day}
              title={card.title}
              desc={card.desc}
              link={card.link}
              img={card.img}
            />
          ))}
        </div>

        <div className="flex flex-col items-center text-center mb-3">
          <p className='text-md text-neutral-300/90'>Page {currentPage}</p>
          <p className="md:text-sm text-xs font-medium text-neutral-400">
            Challenge {firstChallenge} to {lastChallenge}
          </p>
        </div>
        {/* Pagination Controls */}
        <div className='flex flex-wrap items-center justify-center gap-2 mt-6 px-6'>
          {/* Previous Button */}
          <button
            className={`md:px-4 px-3 py-2 rounded-md md:text-sm text-xs ${currentPage === 1
              ? 'bg-neutral-700/50 text-neutral-400 cursor-not-allowed opacity-40'
              : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-100 transition duration-300 ease-in-out'
              }`}
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`flex items-center justify-center md:size-9 size-8 md:text-sm text-xs rounded-md ${currentPage === index + 1
                ? 'bg-green-500 text-white'
                : 'bg-neutral-700/30 text-neutral-300 hover:bg-neutral-700/60'
                } transition-all duration-300`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className={`md:px-4 px-3 py-2 rounded-md md:text-sm text-xs ${currentPage === totalPages
              ? 'bg-neutral-700/50 text-neutral-400 cursor-not-allowed opacity-40'
              : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-100 transition duration-300 ease-in-out'
              }`}
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>


      <div className='md:py-12 py-7 px-12 flex justify-center items-center'>
        <div className='w-full max-w-lg space-y-7'>
          <p className="text-sm leading-relaxed text-center text-green-50/80">
            Your support means the world! If you find this helpful, please consider giving my <a href="https://github.com/fwedwicc/FM-DailyUI" className='underline text-green-500' target='_blank' rel='noopener noreferrer'>GitHub</a> repository a star. Feel free to explore those works on <a href="https://dribbble.com/fwedwic" className='underline text-green-500' target='_blank' rel='noopener noreferrer'>Dribbble</a>. <span className='inline-flex items-center gap-1'>
              Thank you so much for your appreciation!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg></span>
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default Home
