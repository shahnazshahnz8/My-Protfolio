  import React from 'react'
  import heroImage from '../assets/images/hero.avif'
 
  
  const Hero = () => {
    return (
      
        <section id="home" className='bg-[#b2c6ab] pb-20 md:pb-40 '>
          <div className='container mx-auto '>
           <div className='flex gap-20'>
             <div className='pt-20'>
              <h1 className='text-[40px] text-center pt-6 font-[poppins]  pb-2  text-[#690d06] font-bold'>Hi, I'm Shahnaz Akter</h1>
        <p className='text-justify px-5  text-xl 
           font-[Roboto]   text-[#690d06] font-bold w-[650px]'>I am learning MERN Stack Development and continuously improving my skills in HTML, CSS, JavaScript, React.js, Tailwind CSS, Git, and GitHub. I am currently focusing on building responsive and interactive web applications. I plan to learn Node.js, Express.js, MongoDB, REST APIs, authentication, and other full-stack technologies to become a professional MERN Stack Developer.</p>
          <a href="#projects">
          <button  className='text-white font-bold text-base  font-[Roboto]
           py-5 px-5 bg-[#690d06] rounded  mt-[5%] mb-10  text-center'>View My Project</button>
        </a>
             </div>
             <div className='pt-23 w-[500px] rotate-6'>
              <img src={heroImage} alt="hero" />
             </div>
       
           </div>
           
       
        
          </div>
        
       </section>
      
    )
  }
  
  export default Hero
  