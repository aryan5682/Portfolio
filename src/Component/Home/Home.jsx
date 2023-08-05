import React from 'react'
import Achievement from '../Achievements/Achievement';
import Footer from '../Footer/Footer';
import Grades from '../Grades/Grades';
import Projects from '../Projects/Projects';
import About from '../About Me/About';
import Skill from '../Skills/Skill';
import "./Home.css"
import Boy from './boy.png'
export default function Home() {
  return (
    <>
    <div className='Home'>
 
    <div className='neon'>
    <h2>
        Hii! I am Aryan Prajapati
    </h2>
    <h1>A coder & Frontend developer</h1>
    </div>
    <div>
      <img src={Boy} alt="" style={{width:'170px'}} data-aos="zoom-out-left"/>
    </div>
    </div>
    <About/>
     <Projects/>
     <Achievement/>
     <Skill/>
     <Grades/>
     <Footer/>
    </>
    
  )
}
