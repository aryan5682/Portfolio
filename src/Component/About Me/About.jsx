import React, { useState } from 'react'
import Imge from "./Aryan.jpeg"
import "./About.css"
import Social from '../Social/Social';
export default function About(props) {
  const [clr,setClr]=useState();
  const [Backcolor,setBackColor]=useState();
  const handleHoverOn=()=>{
       setBackColor('rgb(184, 130, 65)') ;
       setClr('white');
  }
  const handleHoverOf=()=>{
        setBackColor();
        setClr()
  }
  return (
    <>
    <div className='cont'>
      {props.mrgn?<h2 style={{marginTop:'50px'}}>About Me</h2>:<h2>About Me</h2>}
    <div className='about' >
        <div className='me'  onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOf}  style={{backgroundColor:Backcolor}}>
         <img src={Imge} alt="Img" data-aos="zoom-in"/>
         <p>Hello my Name is Aryan Prajapati. I am from Varanasi.
          Currently I am Persuing B.Tech(2020-2024) in Computer Science & Engineering from Bundelkhand Institute 
          of Engineering & Technology Jhansi.I am deeply passionate in Learning new Technolgy.
          I have sharpened my skills in Data structure & Algorithm since 2+year. I practiced DSA problems mainly on GFG & leetCode.
          Currently I am sharpening my skills in Web Development.
         </p>
        </div>
        <div className='Info' onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOf}  style={{backgroundColor:Backcolor}}>
            <div>
             <p >Name </p>
             <p >Email</p>
             <p >DOB</p>
             <p >High School</p>
             <p >Intermediate</p>
             <p >Graduation</p>
             </div>
             <div>
                <p >:Aryan Prajapati</p>
                <p >:ap805203@gmail.com</p>
                <p >:29/08/2001</p>
                <p>:2015-2016</p>
                <p >:2017-2018</p>
                <p>:B.Tech Computer Science & Engineering (2020-2024)</p>
             </div>
        </div>
        
    </div>
    <div className='resume'>
     <a href="https://drive.google.com/file/d/1iEYLEx2lureg8uW_zEp3evddGOHnaXZS/view?usp=drive_link" className="btn">Download Resume</a>
     </div>
     </div>
     {props.mrgn?<Social/>:''}
     </>
  )
}
