import React from 'react';

const services = [
  {
    title: 'Cloud Migration',
    description: 'We help you migrate your applications and data to the cloud for improved scalability and efficiency.',
    icon: 'fas fa-cloud-upload-alt',
  },
  {
    title: 'Cloud Consulting',
    description: 'We provide expert guidance and support for leveraging cloud technologies.',
    icon: 'fas fa-cloud',
  },
  {
    title: 'Web Development',
    description: 'We build modern and responsive websites tailored to your needs.',
    icon: 'fas fa-laptop-code',
  },
  {
    title: 'Mobile App Development',
    description: 'We create native and cross-platform mobile applications for iOS and Android.',
    icon: 'fas fa-mobile-alt',
  },
  {
    title: 'UI/UX Design',
    description: 'We design intuitive and visually appealing user interfaces and experiences.',
    icon: 'fas fa-paint-brush',
  },
  {
    title: 'Data Analytics',
    description: 'We analyze and interpret data to help you make informed business decisions.',
    icon: 'fas fa-chart-line',
  },
  {
    title: 'IT Security',
    description: 'We offer comprehensive solutions to protect your digital assets and data.',
    icon: 'fas fa-shield-alt',
  },
  {
    title: 'Blockchain Development',
    description: 'We develop secure and decentralized blockchain applications.',
    icon: 'fas fa-cubes',
  },
];


const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
    <i className={`${icon} text-4xl text-blue-500 mb-4`} />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Services = () => (
  <div className="container mx-auto py-10">
    <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

export default Services;