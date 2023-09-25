import React from 'react';
import { FaCloud } from 'react-icons/fa';


const services = [
    {
        title: 'APPS',
        description: "We're not just developers. Our Software Architects each have more than two decades of experience designing and developing enterprise applications and managing customer projects and accounts.",
        icon: <FaCloud size={60} />,
    },
    {
        title: 'CLOUD',
        description: "Don't pay for what you don't need. Let Cloud Code Systems design your elastically scalable cloud-based solution. When you need to be sure your custom application is a highly available, high-performance solution that delights your customers, trust Cloud Code Systems to get you there!",
        icon: <FaCloud size={60} />,
    },
    {
        title: 'DATA',
        description: "Your company runs on data, and your ability to store, access, report on, and effectively analyze your data is top priority. Cloud Code Systems is your one-stop shop for reliable, high-performance database and data visualization solutions.",
        icon: <FaCloud size={60} />,
    },
    {
        title: 'HOSTING',
        description: "Why hassle with building your own infrastructure or managing your own production environment? Cloud Code Systems can provision and manage your hosting environment with DevOps pipelines to make sure your ever-changing technical solutions can be deployed and managed with ease.",
        icon: <FaCloud size={60} />,
    },
];

const ServiceCard = ({ title, description, icon }) => (
    <div className="bg-white shadow-lg rounded-lg border border-blue-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
        <span className="rounded-full p-4 mb-4 border border-blue-500">
            <span className=''>
                {icon}
            </span>
        </span>
        <h3 className="text-xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 p-4 md:p-10">{description}</p>
    </div>
);

const WhatWeDo = () => (
    <div className="py-10 mb-5">
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-10">What We Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </div>
);

export default WhatWeDo;