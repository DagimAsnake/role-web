import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-10 v">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <p className="text-lg text-gray-700 mb-6">
            We are a technology company that specializes in cloud services. Our team of skilled professionals is passionate about leveraging cloud technologies to drive innovation and transform businesses. We offer a wide range of cloud services that can help you improve scalability, efficiency, and security.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to provide exceptional cloud services that solve complex challenges and unlock new opportunities for our clients. We believe in the power of collaboration and strive to build strong partnerships based on trust, transparency, and mutual growth.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With expertise in various cloud domains and a commitment to staying ahead of the curve, we offer a wide range of cloud services including cloud migration, cloud consulting, infrastructure as a service (IaaS), platform as a service (PaaS), software as a service (SaaS), backup as a service (BaaS), security as a service (SECaaS), disaster recovery as a service (DRaaS), desktop as a service (DaaS), and function as a service (FaaS). Our goal is to deliver tailored cloud solutions that meet the unique needs of each client and drive tangible business outcomes.
          </p>
          <p className="text-lg text-gray-700">
            We value innovation, quality, and continuous learning. Our team stays updated with the latest cloud technologies and industry trends to ensure that we can deliver state-of-the-art cloud solutions. We take pride in our ability to solve complex cloud problems and provide exceptional value to our clients.
          </p>
        </div>
        <div className="md:w-1/2 mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-52 h-52">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;