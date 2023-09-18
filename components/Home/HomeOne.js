import Link from 'next/link';

const HomeOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div
        className="lg:mr-8 lg:py-40 lg:pl-40"
        style={{
          backgroundImage: 'url(/images/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flex: '1',
        }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gradient">
          Transforming Industries with Cutting-Edge Technology
          <br /> Your Success Is Our Purpose
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gradient">
          Welcome to RoleTech & Consulting
        </h1>
        <Link href="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-xl md:text-3xl text-white font-semibold px-8 py-4 mt-8 md:mt-20 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
      <div
        className="md:hidden"
        style={{
          backgroundImage: 'url(/images/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="/images/man_working.png"
          alt="Man Working"
          className="w-64 mt-5"
        />
      </div>
      <div
        className="hidden md:block"
        style={{
          backgroundImage: 'url(/images/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="/images/man_working.png"
          alt="Man Working"
          className="w-128 mt-5"
        />
      </div>
    </div>
  );
};

export default HomeOne;