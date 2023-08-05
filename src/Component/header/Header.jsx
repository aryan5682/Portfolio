import React, { useRef, useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
function Header() {
  const navRef=useRef();
  const [mrgn,setMrgn]=useState(false);
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav");
    if(mrgn===false){
      setMrgn(true);
    }
    else{
      setMrgn(false);
    }
  }
  return (
  
    <div className='header'>
      <a href="https://drive.google.com/file/d/1iEYLEx2lureg8uW_zEp3evddGOHnaXZS/view?usp=drive_link" className="download social">
     < FontAwesomeIcon icon={faDownload}size="2x" /><span style={{fontSize:'1.2rem'}}>Resume</span>
     </a>
    <nav className="Nav" ref={navRef}>
            <Link className="a"to="/">Home</Link>
            <Link  className="a" to="/About Me">About Me</Link>
            <Link  className="a" to="/Project">Projects</Link>
            <Link  className="a" to="/Achievements">Achievements</Link>
            <Link  className="a" to='/Skills'>Skills</Link>
            <Link  className="a" to="/Grades">Grades</Link>
            <button className="nav-btn nav-close-btn"onClick={showNavbar}><FaTimes/></button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}><FaBars/></button>
       
    </div>
  )
}

export default Header