import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FMLogo from '../assets/FM-logo.png';
import { GlowCapture, Glow } from '@codaworks/react-glow';

const Card = ({ day, title, desc, link, img }) => {
  const [isLoading, setIsLoading] = useState(true)
  const handleImageLoad = () => setIsLoading(false)

  return (
    <Link to={link}>
      <GlowCapture>
        <Glow>
          <div className='glow:text-glow/50 glow:bg-green-500/30 glow:border-green-500 p-6 rounded-xl flex flex-col gap-4 hover:bg-green-900 hover:bg-opacity-[1%] border border-transparent hover:border-green-500/10 transition duration-300 ease-in-out h-full'>
            <div className='flex justify-between items-center'>
              <h1 className='text-neutral-100 font-medium text-[1.3rem]'>{title}</h1>
              <h2 className='bg-green-700/10 border border-green-700/20 text-neutral-200 text-xs rounded-[5px] px-2 py-1.5'>Day {day}</h2>
            </div>
            <div className='w-full bg-neutral-800 rounded-md'>
              <img
                src={img}
                alt={title}
                className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                onLoad={handleImageLoad}
              />
            </div>
            <p
              className='text-xs text-neutral-200 line-clamp-3'
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>
        </Glow>
      </GlowCapture>
    </Link>
  );
};

export default Card;
