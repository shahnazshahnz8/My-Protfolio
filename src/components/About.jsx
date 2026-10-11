import React from 'react'

const About = () => {
  return (
    
      <section id="about" className='py-14 md:py-28 bg-[#690d06] '>
        <div className='container mx-auto'>
          <h2 className='text-3xl md:text-[36px] sm:text-4xl lg:text-[40px] text-white font-normal font-[Roboto]  px-4 pt-4 text-center'>About Me</h2>
        <p className='text-center text-white font-normal font-[Roboto] ml-85 pt-4 w-[800px] text-lg leading-7'>I am a web development learner with a passion for creating modern and responsive websites. I am currently learning MERN Stack Development and practicing HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy learning new technologies and building projects to improve my skills. My goal is to become a professional Full-Stack Developer.</p>
        <div className='flex gap-10 justify-center pt-8'>
          <div className='w-[400px] p-5 bg-white text-center rounded-lg'>
          <button className='text-[30px]'>🎓</button>
          <h2 className='text-[30px] font-semibold font-[poppins] '>Education</h2>
          <p className='text-[20px] font-semibold font-[Roboto] text-gray-600'>M.Sc. in Geography & Environment</p>
          <p className='text-[20px] font-semibold font-[Roboto] pb-3 text-gray-600'>Tejgaon College, National University</p>
        </div>
        <div className='w-[400px] p-5 bg-white text-center rounded-lg'>
          <button className='text-[30px]'>💻</button>
          <h2 className='text-[30px] font-semibold font-[poppins] '>Experience & Current Status</h2>
          <p className='text-[20px] font-semibold font-[Roboto]  text-gray-600'>MERN Stack Learner</p>
          <p className='text-[20px] font-semibold font-[Roboto] pb-3  text-gray-600'>Working toward becoming a Professional MERN Stack Developer</p>
        </div>
        </div>
        </div>
        
        
       </section>
    
  )
}

export default About
