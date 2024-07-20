import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ day, title, desc, link, img }) => {
  return (
    <Link to={link}>
      <div className='p-6 rounded-xl w-full h-full flex flex-col gap-4 hover:bg-neutral-700/10 border border-transparent hover:border-neutral-600/20 transition duration-300 ease-in-out'>
        <div className='flex justify-between items-center'>
          <h1 className='text-neutral-100 font-bold text-[1.5rem]'>{title}</h1>
          <h2 className='bg-green-700/10 border border-green-700/20 text-neutral-200 text-sm rounded-md px-4 py-1.5'>Day {day}</h2>
        </div>
        <img src={img} alt={title} className='w-full h-auto object-contain rounded-md' />
        <p className='text-xs text-neutral-200'>{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
