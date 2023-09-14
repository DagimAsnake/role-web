import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-5">
          {children}
        </main>
        <Footer className="mt-auto" />
      </div>
    );
  };
  
  export default Layout;