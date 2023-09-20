import React from 'react';

const HomeTwo = () => {
    return (
        <div className="flex flex-col justify-center text-center mb-16 md:mb-32">
            <h1 className="text-3xl md:text-6xl font-bold">Our Solutions</h1>
            <p className="text-lg md:text-3xl mt-6">
                Supercharge your business through remote talent specialized in the following services:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-24 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <h3 className="text-2xl font-bold mt-4">Software Development</h3>
                    <p className="text-lg mt-2">We provide full-stack web developers, mobile app developers, and DevOps engineers.</p>
                </div>

                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-24 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>

                    <h3 className="text-2xl font-bold mt-4">Cloud Migration and Consulting</h3>
                    <p className="text-lg mt-2">Offer expertise in migrating existing systems and applications to the cloud, as well as providing guidance on cloud adoption strategies and best practices.</p>
                </div>

                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-24 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>

                    <h3 className="text-2xl font-bold mt-4">Cloud Backup and Disaster Recovery</h3>
                    <p className="text-lg mt-2"> Provide cloud-based backup and disaster recovery solutions, ensuring business continuity and data protection in the event of a system failure or natural disaster.</p>
                </div>

                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-24 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>

                    <h3 className="text-2xl font-bold mt-4">Serverless Computing</h3>
                    <p className="text-lg mt-2">Develop and deploy applications using serverless architectures, which allow businesses to focus on their core functions without worrying about infrastructure management.</p>
                </div>

            </div>
        </div>
    );
};

export default HomeTwo;