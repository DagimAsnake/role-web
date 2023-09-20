import React from 'react';

const products = [
  {
    title: 'Cloud Migration',
    description: 'We help you migrate your applications and data to the cloud for improved scalability and efficiency.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Cloud Consulting',
    description: 'We provide expert guidance and support for leveraging cloud technologies.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Infrastructure as a Service (IaaS)',
    description: 'We offer cloud storage, cloud backup, cloud hosting, cloud computing, cloud networking, and cloud security services.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Platform as a Service (PaaS)',
    description: 'We provide cloud application development, cloud database management, cloud integration, cloud testing, and cloud deployment services.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Software as a Service (SaaS)',
    description: 'We offer cloud email, cloud office suites, cloud project management, cloud CRM, cloud HR management, and cloud accounting and finance services.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Backup as a Service (BaaS)',
    description: 'We provide cloud backup and recovery, cloud disaster recovery, and cloud archiving services.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Security as a Service (SECaaS)',
    description: 'We offer cloud antivirus, cloud firewall, cloud intrusion detection and prevention, cloud encryption, and cloud identity and access management services.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Disaster Recovery as a Service (DRaaS)',
    description: 'We provide cloud backup and recovery, cloud disaster recovery, and cloud replication services.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Desktop as a Service (DaaS)',
    description: 'We offer cloud virtual desktops and cloud application virtualization services.',
    image:'/images/bg-1.png',
  },
  {
    title: 'Function as a Service (FaaS)',
    description: 'We provide cloud functions and cloud serverless computing services.',
    image: '/images/bg-1.png',
  },
];

const ProductCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Products = () => (
  <div className="container mx-auto md:py-10">
    <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Our Cloud Services and Consulting</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

export default Products;