import React from 'react'
import './skill.css'
import { FaBootstrap, FaCode, FaCss3, FaDatabase, FaGit, FaGithub, FaHtml5,  FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import Social from '../Social/Social'
import C from './C.png'
import C2 from './C++.png'
export default function skill(props) {
  return (
    <>
    <div className='skill'>
        {props.mrgn?<h2 style={{marginTop:'50px'}}>My Skills</h2>:<h2>My Skills</h2>}
        <div className='My'>
      <div className='program'>
        <h3>Programming language</h3>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'2rem', marginTop:'10px',marginLeft:'40px'}}>
        <div>
        <img src={C} alt='' style={{width:'40px'}}/>
       
        <p>C</p>
        </div>
        <div>
        <img src={C2} alt='' style={{width:'40px'}}/>
        <p>C++</p>
        </div>
        <div>
        <FaJs size='30px' color='yellow' /> 
        <p>JavaScript</p>
        </div>
        </div>
      </div>
      <hr/>
      <div className='web' style={{marginTop:'50px'}}>
        <h3>Web Technology</h3>
        <div className='webt'>
            <div>
        <FaHtml5 size='30px' color='red' />
        <p>HTML</p>
        </div>
        <div>
        <FaCss3 size='30px'color='blue' />
        <p>CSS</p>
        </div>
        <div>
        <FaJs size='30px' color='yellow'/>
        <p>JavaScript</p>
        </div>
        <div>
        <FaBootstrap size='30px' color='purple'/>
        <p>Bootstrap</p>
        </div>
        <div>
        <FaReact size='30px'color='blue' />
        <p>React Js</p>
        </div>
        <div>
        <FaNodeJs size='30px' color='green' />
        <p>Express Js</p>
        </div>
        <div>
        <FaNodeJs size='30px' color='green'/>
        <p>Node Js</p>
        </div>
        </div>
      </div>
      <hr/>
      <div className='Database' style={{marginTop:'50px'}}>
        <h3>Database</h3>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center' ,flexDirection:'column',marginTop:'10px'}}>
            <FaDatabase size='30px' color='green' data-aos="zoom-in"/>
        <p>MongoDB</p>
        </div>
      </div>
      <hr/>
      <div className='tool'style={{display:'flex',justifyContent:'center',alignItems:'center' ,flexDirection:'column',flexWrap:'wrap',marginTop:'50px'}}>
        <h3>Tools</h3>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'2rem', marginTop:'10px'}}>
        <div >
        <FaCode size='30px'color='blue'/>
        <p>Vscode</p>
        </div>
        <div>
        <FaGit size='30px' color='red'/>
        <p>Git</p>
        </div>
        <div>
        <FaGithub size='30px'color='black' />
        <p>Github</p>
        </div>
      </div>
      </div>
    </div>
    </div>
    {props.mrgn?<Social/>:''}
    </>
  )
}
