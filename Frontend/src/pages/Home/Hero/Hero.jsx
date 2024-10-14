import React from 'react';
import bgImg from '../../../assets/home/banner-1.jpg';
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
            <div>
          <div className="space-y-4">
            <p className="md:text-4xl text-2xl">Empower Your Wellness Journey</p>
            <h1 className="md:text-5xl text-4xl font-bold">Experience the Best in <br />
              Yoga and Mindfulness with Us</h1>
            <div className="md:w-1/2">
              <p>Explore our advanced yoga and mindfulness platform with dynamic online classes and personalized wellness plans. Connect with experts and a supportive community for holistic health from home.</p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button className="px-7 py-3 bg-[#85b13a] rounded-lg font-bold uppercase hover:bg-[#5f831f] hover:bg-opacity-80 transition duration-300">Join Today</button>
              <button className="px-7 py-3 border border-[#85b13a] rounded-lg font-bold uppercase hover:bg-[#85b13a] hover:bg-opacity-50 duration-300" >View Courses</button>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
};

export default Hero;