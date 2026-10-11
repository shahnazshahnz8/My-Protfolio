import React from 'react'

const ProjectsCard = ({title, description, link, github}) => {
  return (
    
     <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 w-[400px] '>
      <h3 className='text-2xl font-bold font-[Poppins] mb-3 text-center'>{title}</h3> 
     <p className='text-base font-[Roboto] text-gray-600 leading-7'>{description}</p>
      <div className='flex gap-5 mt-3'>
        <a href={link} target='_blank' rel = "noopener noreferrer" className='bg-cyan-500 text-white px-5 py-2 rounded-lg font-[Roboto] font-semibold hover:bg-cyan-600 transition'>Live Demo</a>
      <a href={github} target='_blank' rel = "noopener noreferrer" className='border border-cyan-500 text-cyan-500 px-5 py-2 rounded-lg font-[Roboto] font-semibold hover:bg-cyan-500 hover:text-white transition'>Github</a>
     
     
      </div>
     
     </div>
    
      
     
     
    
  )
}

export default ProjectsCard
