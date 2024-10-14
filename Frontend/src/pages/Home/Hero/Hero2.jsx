import React from 'react';
import banner2 from "../../../assets/home/banner-2.jpg"
const Hero2 = () => {
    return (
        <div className='min-h-screen  bg-cover' style={{ backgroundImage:  `url(${banner2})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
            <div>
      <div className="space-y-4">
        <p className="md:text-4xl text-2xl">Achieve Total Wellness with</p>
        <h1 className="md:text-5xl text-4xl font-bold">Our Yoga and Mindfulness <br />Experience </h1>
        <div className="md:w-1/2 text-gray-200">
          <p>Discover a transformative path to holistic well-being with our top-notch yoga and mindfulness platform. We offer expert guidance, personalized classes, and a supportive community to help you harmonize your mind and body, fostering <br />balance and inner peace</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 ">
            <button className="px-7 py-3 bg-[#85b13a] rounded-lg font-bold uppercase hover:bg-[#5f831f] hover:border-0">Join Today</button>
            <button className="px-7 py-3 border border-[#85b13a] rounded-lg font-bold uppercase hover:bg-[#85b13a] hover:bg-opacity-50 duration-300" >View Courses</button>
          </div>
      </div>
      </div>
            </div>
        </div>
    );
};

export default Hero2;