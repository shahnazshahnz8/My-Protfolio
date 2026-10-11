  import React from 'react'
  
  const SkillCard = ({title,leftSkills, rightSkill }) => {
    return (
      
       <div className='border p-5 rounded-lg w-lg bg-cyan-500 '>
        
         <p className='text-center text-2xl'>{title}</p>
         <div className='flex justify-around mt-3'>
         <div>
            {leftSkills.map((skill)=>
              <p key={skill} className='text-xl mb-2'> ✭ {skill}</p>
            )}
       
        
        </div>
        
        
        <div>
            {rightSkill.map((skill)=>
            <p key={skill} className='text-xl mb-2'> ✭ {skill}</p> 
            )}
         
        </div>
         </div>
        
        
        
       </div> 
      
    )
  }
  
  export default SkillCard
  