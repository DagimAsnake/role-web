import React from 'react';

const HomeTwo = () => {
    return (
        <div className="flex flex-col justify-center text-center">
            <h1 className="text-6xl font-bold">Our Solutions</h1>
            <p className="text-3xl mt-6">
                Supercharge your business through remote talent specialized in the following services:
            </p>
            <div className="grid grid-cols-4 gap-4 mt-10">
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <h3 className="text-2xl font-bold mt-4">Software Development</h3>
                    <p className="text-lg mt-2">We provide full-stack web developers, mobile app developers, and DevOps engineers.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <h3 className="text-2xl font-bold mt-4">Event Support</h3>
                    <p className="text-lg mt-2">We provide Event Registration Builds, Cvent support, and Live Helpdesk Support for virtual events.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <h3 className="text-2xl font-bold mt-4">IT Helpdesk</h3>
                    <p className="text-lg mt-2">We provide 24/7 Tier 1IT support for your employees through phone, email, and live chat.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                    <h3 className="text-2xl font-bold mt-4">Representatives</h3>
                    <p className="text-lg mt-2">Support your business with friendly and professional sales, call center, & bespoke resources.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeTwo;