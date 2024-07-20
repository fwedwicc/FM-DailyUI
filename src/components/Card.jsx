import React from 'react';
import { Link } from 'react-router-dom';
import { GlowCapture, Glow } from '@codaworks/react-glow';

const Card = ({ day, title, desc, link, img }) => {
  return (
    <Link to={link}>
      <GlowCapture>
        <Glow>
          <div className='glow:text-glow/50 glow:bg-green-500/30 glow:border-green-500 p-6 rounded-xl flex flex-col gap-4 hover:bg-green-900 hover:bg-opacity-[1%] border border-transparent hover:border-green-500/10 transition duration-300 ease-in-out h-full'>
            <div className='flex justify-between items-center'>
              <h1 className='text-neutral-100 font-bold text-[1.5rem]'>{title}</h1>
              <h2 className='bg-green-700/10 border border-green-700/20 text-neutral-200 text-xs rounded-[5px] px-2 py-1.5'>Day {day}</h2>
            </div>
            <img src={img} alt={title} className='w-full h-auto object-contain rounded-md flex-grow' />
            <p className='text-xs text-neutral-200'>{desc}</p>
          </div>
        </Glow>
      </GlowCapture>
    </Link>
  );
};

export default Card;
