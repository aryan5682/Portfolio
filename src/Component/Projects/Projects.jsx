import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Projects.css'
import Social from '../Social/Social';
// import {  FaArrowRight } from 'react-icons/fa';
// import { AiOutlineArrowRight } from "react-icons/ai"
export default function Projects(props) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  }
  return (
    <>
      <div className='projectsection'>
        {props.mrgn ? <h2 style={{ letterSpacing: '0.3rem', marginTop: '50px' }}>Projects</h2> : <h2 style={{ letterSpacing: '0.3rem' }}>Projects</h2>}
        <div className='projects'>
          <div className='restaurent' data-aos="zoom-in-down">
            <h2>Restaurent-Website</h2>
            <div className='Tech'>
              <h3>Technology Used:</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <div className='link1'>
              <a href="https://github.com/aryan5682/Restaurent_website" className="github social">
                < FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://momms-kitchen.netlify.app/" className="video social">
                < FontAwesomeIcon icon={faLink} size="2x" />
              </a>
            </div>
            <hr />
            <div className='description'>
              <h3>Description</h3>
              <p>Successfully developed a Restaurant-website when I was learning HTML, CSS
                and JavaScript. It is fully Frontend Website with attractive UI. Contain Multiple Feature like
                food ordering, Review, Menu About us, special food,etc.<br />
                <b>HTML</b>:&nbsp;The primary focus of this project was to identify and resolve a
                specific challenge that demanded a creative and efficient approach. <br />
                <b>CSS</b>: &nbsp;To enhance the visual appeal and user experience,
                I skillfully utilized CSS to design an elegant and intuitive interface.<br />
                <b>JavaScript</b>:The true innovation of this project, however, lies in the implementation of JavaScript.
                With my in-depth understanding of this versatile scripting language,
                I developed interactive features and dynamic functionalities
                to address the issue comprehensively.</p>
            </div>
          </div>
          <div className='NewsApp' data-aos="zoom-in-down">
            <h2>NewsReader</h2>
            <div className='Tech'>
              <h3>Technology Used:</h3>
              <p>React Js</p>
              <p>Bootstrap</p>
            </div>
            <div className='link1'>
              <a href="https://github.com/aryan5682/Newsapp" className="github social">
                < FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="#Email" className="video social">
                < FontAwesomeIcon icon={faLink} size="2x" />
              </a>
            </div>
            <hr />
            <div className='description'>
              <h3>Description</h3>
              <p>NewsReaderApp provides users with real-time updates from various reliable news sources,
                ensuring that they never miss out on the latest headlines and stories.
                NewsReaderApp is fully responsive.
                consistent and optimized experience.To enable users to explore news beyond their customized preferences,
                I integrated a powerful Category feature. Users can easily find articles related
                to specific topics or events like bussiness related Technology related etc.<b>News Api</b> is used to fetch the content of News<br />
                <b>React Js & Bootstrap:</b>&nbsp;With the power of React.js and Bootstrap,
                I meticulously crafted an intuitive and user-friendly interface.
                The seamless navigation and
                carefully designed layout guarantee a smooth and satisfying user experience.</p>
            </div>
          </div>
          <div className='portfolio' data-aos="zoom-in-down">
            <h2>Portfolio</h2>
            <div className='Tech'>
              <h3>Technology Used:</h3>
              <p>ReactJs</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className='link1'>
              <a href="#Email" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
              <a href="#Email" className="video social">
                <FontAwesomeIcon icon={faLink} size="2x"/>
              </a>
            </div>
            <hr />
            <div className='description'>
              <h3>Description</h3>
              <p>Portfolio is my personal portfolio website developed in React js and HTML,CSS with fast
                animated UI and good responsiveness.It includes my skills,projects,and
                achievements in detail.To personalize the experience,
                I included an "About Me" section, where visitors can learn more about my background,
                skills, and passion for development. Additionally,
                I provided multiple ways for visitors to get in touch with me, making it easy
                for potential collaborators or employers to connect.<br/>
                <b>React.js:</b>&nbsp; The foundation of my portfolio is built on React.js,
                a powerful and flexible JavaScript library that enables the creation of dynamic,
                reusable components.</p>
            </div>
          </div>
          <div className='E-commerce'data-aos="zoom-in-down">
            <h2>Netflix-Clone</h2>
            <div className='Tech'>
              <h3>Technology Used:</h3>
              <p>MERN</p>
              <p>FireBase</p>
            </div>
            <div className='link1'>
              <a href="#Email" className="github social">
                < FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="#Email" className="video social">
                < FontAwesomeIcon icon={faLink} size="2x" />
              </a>
            </div>
            <hr />
            <div className='description' style={{  position: 'relative' }}>
              <h3>Description</h3>
              <div style={{position: 'relative', marginBottom: '10px'}}><p>Netflix Clone is replicating the functionality and features of the original Netflix
                platform, the clone project provides users with a wide range of options to choose
                from, including movies, TV shows, documentaries, and other video content.<br />
                <b>Firebase</b>:&nbsp;The Netflix Clone project incorporates secure user authentication,
                enabling users to create accounts, log in with ease.<br />
                <b>MongoDB & TMDB API</b>:&nbsp;Leveraging MongoDB's flexible database capabilities,
                and the TMDB API is platform offers a
                vast media library with a wide array of movies, TV shows, and other video content.<br /></p>
                {isShowMore && (
                  <p ><b>React.js</b>:&nbsp; The project's front-end is built using React.js, delivering a smooth and dynamic user interface that allows users to browse content seamlessly.<br />
                    <b>Node Js & Express Js</b>:&nbsp;Utilizing Node.js and Express.js, I implemented a robust backend capable of handling media s
                    treaming, providing a high-quality and uninterrupted viewing experience.</p>)}
                {/* <div style={{position:'absolute',marginLeft:'25rem',marginBottom:'10rem'}}> */}
                <button onClick={toggleReadMoreLess} style={{ position: 'absolute', right: '5px', backgroundColor: 'rgba(0,0,0,0.7)',color:'white', border: 'none', bottom:'0px', textAlign: 'center', padding: '3px', borderRadius: '5px' }}>
                  {isShowMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.mrgn ? <Social /> : ''}
    </>
  )
}
