  import React from 'react'
  
  const Contact = () => {
    return (
      
       <section id="contact" className="bg-[#b2c6ab] py-16 scroll-mt-24">

      <div className="container mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-[Poppins]">
            Contact
          </h2>

          <p className="text-gray-600 text-lg font-[Roboto] mt-3">
            Let's connect and work together
          </p>
        </div>


        {/* Contact Content */}
        <div className="flex justify-center gap-10">


          {/* Contact Information */}
         
           <div className='pt-20'>
            
            <h3 className="text-2xl font-bold font-[Poppins] mb-6">
              Contact Information
            </h3>

            <p className="text-gray-600 font-[Roboto] leading-7 mb-6 w-[450px] text-justify">
              Feel free to contact me if you have any questions,
              project ideas, or opportunities. I would love to hear from you.
            </p>


            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shahnazshahnz8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-5 hover:text-cyan-500 transition"
            >
              <span className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-2xl">
                ✉
              </span>

              <div>
                <p className="font-semibold font-[Roboto]">
                  Email
                </p>

                <p className="text-gray-600 text-sm font-[Roboto]">
                  shahnazshahnz8@gmail.com
                </p>
              </div>
            </a>


            {/* GitHub */}
            <a
              href="https://github.com/shahnazshahnz8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-cyan-500 transition"
            >
              <span className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-2xl">
                ◉
              </span>

              <div>
                <p className="font-semibold font-[Roboto]">
                  GitHub
                </p>

                <p className="text-gray-600 text-sm font-[Roboto]">
                  github.com/shahnazshahnz8
                </p>
              </div>
            </a>

         
           </div>


          {/* Contact Form */}
          <div className="bg-[#0b0f1a] rounded-2xl p-8 shadow-md w-full md:w-[570px]">

            <h3 className="text-2xl font-bold font-[Poppins] mb-6 text-white">
              Send Me a Message
            </h3>

            <form>

              {/* Name */}
              <div className="mb-5 ">
                <label
                  htmlFor="name"
                  className="block font-medium font-[Roboto] mb-2 text-white"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full bg-[#D3EBFE] p-3 rounded-lg outline-none font-[Roboto] focus:ring-2 focus:ring-cyan-400"
                />
              </div>


              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block font-medium font-[Roboto] mb-2 text-white"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-[#D3EBFE] p-3 rounded-lg outline-none font-[Roboto] focus:ring-2 focus:ring-cyan-400"
                />
              </div>


              {/* Message */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block font-medium font-[Roboto] mb-2 text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full bg-[#D3EBFE] p-3 rounded-lg outline-none font-[Roboto] resize-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-7 py-3 rounded-lg font-[Roboto] font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
      
    )
  }
  
  export default Contact
  