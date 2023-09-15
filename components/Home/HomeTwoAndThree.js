import Link from 'next/link';

const HomeTwoAndThree = () => {
    return (
        <div className="grid grid-cols-2 gap-2 h-screen items-center mb-32"
            style={{
                backgroundImage: 'url(/images/bg-2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                flex: '1',
            }}
        >
            <div className="mr-8 pl-40">
                <h3 className="text-6xl font-bold mt-4 text-gradient">
                    WE TURN YOUR IDEAS INTO TRENDY DESIGNS.
                </h3>
                <h1 className="text-2xl font-semibold text-gradient mt-6">
                    You only have a moment to capture the attention of your visiting audience, so make a good impression by having a winning formula that will help your clients find what they are looking for quickly and easily.
                </h1>
                <Link href="/services">
                    <button className="bg-blue-500 hover:bg-blue-600 text-3xl text-white font-semibold px-8 py-4 mt-56 rounded-full">
                        Discover More
                    </button>
                </Link>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-8 mt-10">
                    <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <h1 className="text-4xl font-bold text-purple-600 mb-4">STRATEGY</h1>
                        <p className="text-lg text-gray-700">
                            Develop a comprehensive business strategy that aligns with your goals and ensures long-term success. Our team of experts will analyze market trends, identify opportunities, and create a roadmap tailored to your unique needs.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <h1 className="text-4xl font-bold text-purple-600 mb-4">PLANNING</h1>
                        <p className="text-lg text-gray-700">
                            Plan and execute your projects with precision and efficiency. Our experienced planners will work closely with you to define project goals, establish timelines, allocate resources, and mitigate risks, ensuring successful project delivery.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <h1 className="text-4xl font-bold text-purple-600 mb-4">DEVELOPMENT</h1>
                        <p className="text-lg text-gray-700">
                            Transform your ideas into reality with our skilled development team. We leverage the latest technologies and industry best practices to build robust and scalable solutions that meet your specific requirements and drive business growth.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <h1 className="text-4xl font-bold text-purple-600 mb-4">QUICK LAUNCH</h1>
                        <p className="text-lg text-gray-700">
                            Accelerate your time-to-market with our quick launch services. Whether it's a new product or a feature enhancement, our agile approach allows us to rapidly develop and deploy solutions, helping you stay ahead of the competition.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeTwoAndThree;