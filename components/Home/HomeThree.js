import React from 'react'

const HomeThree = () => {
    return (
        <div className="flex flex-col justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">Want to start a new project with us? Let’s Start!</h1>
            <p className="text-3xl mt-6 px-40">
                At our Tech & Consulting company, we create digital solutions for international corporations, small businesses and other organisations with an aim to open up new possibilities for expansion, process automatization, and continuous improvement. We are a team of experienced developers, creators, designers and project managers you can rely on.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                    <h3 className="text-6xl font-bold mt-4">Our Mission</h3>
                    <p className="text-xl mt-2">The mission of our company is usually to provide high-quality, innovative and cost-effective IT solutions that meet the needs and expectations of our clients and help them achieve their goals.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-6xl font-bold mt-4">Our Vision</h3>
                    <p className="text-xl mt-2">Our vision is to create an enduring partnership that will continuously key-in on focused improvement initiatives, and nurture a lasting culture of winning solutions and rewarding opportunities through technology solutions.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-200 rounded-lg p-8 py-36 mt-8 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                    </svg>
                    <h3 className="text-6xl font-bold mt-4">Our Objective</h3>
                    <p className="text-xl mt-2">Our objective in the company is to provide Transparent pricing, Guaranteed quality on the products, Full flexibility, Competitive advantages, and On time delivarables on the projects we made for our clients.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeThree