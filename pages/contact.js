import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg resize-y"
                                id="message"
                                placeholder="Enter your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="5"
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>
                  <p className="text-lg text-gray-700 mb-6">
                        We'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out to us using the contact information below.
                  </p>
                  <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M21 12l-9-9-9 9"/>
                      </svg>
                      <p className="text-lg text-gray-700">123 Main Street, City, Country</p>
                  </div>
                  <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                      <p className="text-lg text-gray-700">contact@example.com</p>
                  </div>
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <p className="text-lg text-gray-700">+1 123-456-7890</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Contact;