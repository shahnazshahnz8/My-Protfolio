 import React,{useState} from 'react'
 import logoImage from '../assets/images/logo.png'
 
 const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
   
   return (
     <nav className='py-5 bg-[#b2c6ab] sticky top-0 z-50 '>
       <div className='max-w-container mx-auto '>
         <div  className='flex flex-wrap justify-around items-center md:flex-row md:justify-center items-center '>
          <div className='flex w-[40%] gap-3 ml-3'>
           <img className='w-[60px] h-[60px]' src={logoImage} alt="logo" />
           <h2 className='mt-4 text-[#690d06] text-xl md:text-[24px] lg:text-[28px] font-[Roboto] font-semibold'>Shahnaz Akter</h2>
           
          </div>
         
        <ul className=' hidden md:flex justify-center items-center gap-8 text-lg font-[MuseoModerno] text-[#690d06] font-bold'>
          <li ><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li ><a href="#skills">Skills</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li > <a href="#contact">Contact</a></li>
       </ul>
      
        <button className='md:hidden text-3xl text-[#690d06] '
         onClick={() => setIsOpen (!isOpen)}>&#9776;</button>
        {isOpen && (
            <ul className='md:hidden flex flex-col items-center mt-4  gap-4 font-[MuseoModerno] text-[#690d06] font-bold text-xl w-full'>
          <li ><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li ><a href="#skills">Skills</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li > <a href="#contact">Contact</a></li>
       </ul>
        )}
       
        </div>
       
       
       
       
       </div>
     </nav>

   )
 }
 
 export default Navbar
