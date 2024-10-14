import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ item }) => {
  //console.log("from card",item);
  
  const { _id, name, image, availableSeats, price, totalEnrolled } = item;

  return (
    <div className="shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4 dark:bg-gray-950 relative group hover:-translate-y-2 duration-300">
      {/* Image Container */}
      <div className="relative group">
        {/* Image */}
        <img src={image} alt="" className="w-full h-auto object-cover" />

        {/* Overlay for the color mask effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-[#475b2480] group-hover:to-[#acf33180] transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2 dark:text-white'>{name}</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-2'>Available Seats: {availableSeats}</p>
        <p className='text-gray-600 mb-2 dark:text-gray-400'>Price: {price}</p>
        <p className='text-gray-600 mb-2 dark:text-gray-400'>Total Students: {totalEnrolled}</p>

        <Link to={`${_id}`} className='text-center mt-2'>
          <button className='px-2 w-full py-1 bg-secondary text-white font-bold mt-2 rounded-xl hover:bg-[#4f7114] duration-300'>
            Select
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
