import React from 'react'

const HomeFour = () => {
    return (
        <div className="flex flex-col justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">OUR VALUES</h1>
            <p className="text-3xl mt-6 px-40">
                At RoleTech & Consulting, our workflow inhibits transparency in its core. We deeply value the relation we form with our clients and believe that clear communication, in every stage of the development process, is key for a successful partnership. Hence making sure that the output of our work is aligned with the desired solution.
            </p>
            <div className="grid grid-cols-4 gap-4 mt-16">
                <div className="flex flex-col items-center">
                    <div className=' bg-gray-200 rounded-full p-8 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">ON TIME DELIVERY</h3>
                </div>
                <div className="flex flex-col items-center">
                    <div className=' bg-gray-200 rounded-full p-8 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">UNIQUE PRODUCT</h3>
                </div>
                <div className="flex flex-col items-center">
                    <div className=' bg-gray-200 rounded-full p-8 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">CREATIVE IDEAS</h3>
                </div>
                <div className="flex flex-col items-center">
                    <div className=' bg-gray-200 rounded-full p-8 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">TRANSPARENCY</h3>
                </div>
            </div>
        </div>
    )
}

export default HomeFour