import React from 'react'
import "./Grades.css"
import Social from '../Social/Social'
export default function Grades(props) {
  return ( 
    <>
    <div className='grades'>
      { props.mrgn?
      <div className='grds' style={{marginTop:'50px'}}>
        <div className="cnt">
            <h2>Grades</h2>
            <p>Other than personal syllabus an learning. The Academic coursework were there to enhnace my Knowledge.Those course-outcomes helped me a lot also connect 
                to my skills with my learning.
            </p>
        </div>
      <div className='Semester'>
    <div className="first" data-aos="zoom-out-right">
        <p>Semester 1: 7.40 Sgpa</p>
        <p>Semester 2: 8.35 Sgpa</p>
        <p>Semester 3: 7.00 Sgpa</p>
        <p>Semester 4: 7.52 Sgpa</p>
    </div>
    <div className="Second"data-aos="zoom-out-left">
        <p>Semester 5: 7.68 Sgpa</p>
        <p>Semester 6: 7.62 Sgpa</p>
        <p>Semester 7: ---- Sgpa</p>
        <p>Semester 8: ---- Sgpa</p>
    </div>
      </div>
      </div>:<div className='grds'>
        <div className="cnt">
            <h1>Grades</h1>
            <p>Other than personal syllabus an learning. The Academic coursework were there to enhnace my Knowledge.Those course-outcomes helped me a lot also connect 
                to my skills with my learning.
            </p>
        </div>
      <div className='Semester'>
    <div className="first" data-aos="zoom-out-right">
        <p>Semester 1: 7.40 Sgpa</p>
        <p>Semester 2: 8.35 Sgpa</p>
        <p>Semester 3: 7.00 Sgpa</p>
        <p>Semester 4: 7.52 Sgpa</p>
    </div>
    <div className="Second"data-aos="zoom-out-left">
        <p>Semester 5: 7.68 Sgpa</p>
        <p>Semester 6: 7.62 Sgpa</p>
        <p>Semester 7: ---- Sgpa</p>
        <p>Semester 8: ---- Sgpa</p>
    </div>
      </div>
      </div>
}
    </div>
    {props.mrgn?<Social/>:''}
    </>
  )
}
