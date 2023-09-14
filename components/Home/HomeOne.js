import React from 'react';

const HomeOne = () => {
    return (
        <div className="flex justify-around items-center">
            <div className="mr-8">
                <h3 className="text-2xl font-semibold text-gradient">
                    Transforming Industries with Cutting-Edge Technology<br /> Your Success Is Our Purpose
                </h3>
                <h1 className="text-6xl font-bold mt-4 text-gradient">
                    Welcome to RoleTech & Consulting
                </h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 mt-6 rounded-full">
                    Contact Us
                </button>
            </div>
            <div>
                <img src="/images/man_working.png" alt="Man Working" className="w-128 mt-5" />
            </div>
        </div>
    );
};

export default HomeOne;