 import React from 'react'
import Navbar from './components/Navbar'
import ProjectsCard from './components/ProjectsCard'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

 const projects = [
  {
    title : "Scientific Calculator",
    description : "A scientific calculator built with JavaScript.",
   link:"https://shahnazshahnz8.github.io/scientific-calculator/",
   github : "https://github.com/shahnazshahnz8/scientific-calculator"
  },
  
  {
    title : "Digital Clock",
    description : "A Digital Clock built with JavaScript.",
    link : "https://shahnazshahnz8.github.io/Digital-clock/",
    github : "https://github.com/shahnazshahnz8/Digital-clock"
  },
  {
    title : "Countdown Timer",
    description : "A Countdown Timer built with JavaScript.",
    link : "https://shahnazshahnz8.github.io/Countdown-Timer/",
    github : "https://github.com/shahnazshahnz8/Countdown-Timer"
  },
  {
    title :  "Counter",
    description : "A Counter built with JavaScript.",
    link : "https://shahnazshahnz8.github.io/Counter/",
    github : "https://github.com/shahnazshahnz8/Counter"
  },
  {
    title :  "Number guessing Game",
    description : "A Number guessing Game built with JavaScript.",
    link : "https://shahnazshahnz8.github.io/Num-gessinggame/",
    github : "https://github.com/shahnazshahnz8/Num-gessinggame"
  },
  {
    title : "To do project",
    description : "A To do project built with JavaScript.",
    link : "https://shahnazshahnz8.github.io/to-do-project/",
    github : "https://github.com/shahnazshahnz8/to-do-project"
  }]
 
 const App = () => {
   return (
     <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <section id="projects" className='bg-[#690d06] py-16 scroll-mt-24'>
        <div className='container mx-auto'>
          <h2 className='text-4xl font-bold font-[Poppins] mb-10 text-center text-white'> My Projects</h2>
        <div className='flex flex-wrap gap-7 justify-center'>
          { projects.map((item)=>
       <ProjectsCard key = {item.title} title = {item.title} description = {item.description} link = {item.link} github={item.github}/>
        )}
        </div>
          
        </div>
        
       </section>
       <Contact/>
       <Footer/>
     </div>
   )
 }

 export default App
 