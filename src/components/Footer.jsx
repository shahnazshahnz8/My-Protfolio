  import React from 'react'
  
  const Footer = () => {
    return (
     <footer className='bg-[#0F172A] text-white py-10'>
         <div className="container mx-auto px-5">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-[Poppins]">
              Shahnaz Akter
            </h2>

            <p className="text-gray-400 font-[Roboto] mt-2">
              Frontend Developer | MERN Stack Learner
            </p>
          </div>


          {/* Navigation */}
          <div className="flex gap-6 font-[Roboto]">
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>

        </div>


        {/* Divider */}
        <div className='border border-gray-700 mt-8 mb-8'></div>
         <p className="text-center text-gray-500 text-sm font-[Roboto]">
            © 2026 Shahnaz Akter. All rights reserved.
          </p>

      </div>
     </footer>
    )
  }
  
  export default Footer
  