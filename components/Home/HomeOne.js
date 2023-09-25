import React from 'react';
import Link from 'next/link';

const HomeOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 md:mb-32">
      <div
        className="mr-4 md:mr-8 py-20 md:py-40 pl-4 md:pl-40 bg-cover bg-center flex-1"
        style={{
          backgroundImage: 'url(/images/bg-1.png)',
        }}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gradient leading-tight">
          Transforming Industries with Cutting-Edge Technology
          <br className="hidden md:inline" /> Your Success Is Our Purpose
        </h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 text-gradient leading-tight">
          Welcome to RoleTech & Consulting
        </h1>
        <Link href={'/contact'}>
          <button className="bg-blue-500 hover:bg-blue-600 text-lg md:text-3xl lg:text-4xl text-white font-semibold px-4 md:px-8 py-2 md:py-4 mt-8 md:mt-20 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="/images/cloud.png"
          alt="cloud"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HomeOne;