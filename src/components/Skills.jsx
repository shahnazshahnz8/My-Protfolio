 import React from 'react'
import SkillCard from './SkillCard'
 
 const Skills = () => {
  let leftSkills = ["Html", "CSS", "Figma", "Bootstrap"]
  let rightSkill = ["Tailwindcss", "git & github", "Javascript", "currently learning React"]
  let futureLeftSkills = ["Next.js","TypeScript","Node.js","Express.js"]
  let futureRightSkills = ["MongoDB","Mongoose","REST API",   "Authentication"
]
   return (
     
       <section id="skills" className='bg-[#0b0f1a] py-16 scroll-mt-24'>
        <div className='container mx-auto'>
            <h2 className='text-3xl md:text-[36px] sm:text-4xl lg:text-[40px] text-white font-normal font-[Roboto]  px-4 pt-4 text-center'>Skills</h2>
        <h3 className='text-cernter text-[36px] font-[Robot] font-normal pl-[40%] pb-4 text-white'>MERN stack Learner</h3>
        <div className='flex gap-5  font-bold mb-4 justify-center text-black'>
             <SkillCard title="I have learned" leftSkills={leftSkills} rightSkill={rightSkill}  />
             <SkillCard title="Future learned skills" leftSkills={futureLeftSkills} rightSkill={futureRightSkills}  />
        
        </div>
        </div>
        
      
       </section>
       
     
   )
 }
 
 export default Skills
 