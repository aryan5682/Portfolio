
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faMultiply,} from '@fortawesome/free-solid-svg-icons'
import './Achievment.css'
import Social from '../Social/Social';
export default function Achievement(props) {
  return (
    <>
    <div className='Achievements'>
       
        <div className='Achmnt' >
        {props.mrgn?<h2 style={{marginTop:'50px'}}>Achievements</h2>:<h2>Achievements</h2>}
        <div className='Achieve'>
        <div className='Leetcode'  >
            <div className='imgcp'>
            <p><a href="https://leetcode.com/aryan5682/">
          <img src="https://leetcode.com/static/images/LeetCode_Sharing.png" alt="W3Schools.com" width="200" height="132" data-aos="flip-left" style={{boxShadow:'0 .5rem 1.5rem rgba(0,0,0,.3)'}}/>
       </a></p>
            </div>
            <div className='Rating'>
                <p>Problem Solved:&nbsp;600+</p>
                <p>Max Rating:&nbsp;1601</p>
                <p><FontAwesomeIcon icon={faCheck}size="1x" style={{color:"red"}}/>&nbsp;2 Monthly badges</p>
                <p><FontAwesomeIcon icon={faCheck}size="1x" style={{color:"red"}}/>100 days consistancy badge</p>
                <p>3&nbsp;<FontAwesomeIcon icon={faStar}size="1x" style={{color:"red"}}/></p>
            </div>
            
        </div>
        <hr/>
        <div className='gfg' style={{marginTop:"10px"}}>
            <div className='imgcp'>
            <p><a href="https://auth.geeksforgeeks.org/user/atularyan294/practice">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210318103632/gfg.png" alt="W3Schools.com" width="200" height="132" data-aos="flip-right" style={{boxShadow:'0 .5rem 1.5rem rgba(0,0,0,.3)'}}/>
       </a></p>
            </div>
            <div className='Rating'>
                <p> Problem Solved:&nbsp;390+</p>
                <p>Max Rating:&nbsp;<FontAwesomeIcon icon={faMultiply}size="1x" style={{color:"red"}} /></p>
                <p><FontAwesomeIcon icon={faCheck}size="1x" style={{color:"red"}}/>&nbsp;1100+ coding score</p>
                <p><FontAwesomeIcon icon={faStar}size="1x" style={{color:"red"}}/>&nbsp;<FontAwesomeIcon icon={faMultiply}size="1x"style={{color:"red"}} /></p>
            </div>
        </div>
        <hr/>
        <div className='cdfr' style={{marginTop:"10px"}}>
            <div className='imgcp'>
            <p><a href="https://codeforces.com/profile/aryan5682">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg" alt="W3Schools.com" width="200" height="132" data-aos="flip-left" style={{boxShadow:'0 .5rem 1.5rem rgba(0,0,0,.3)'}}/>
       </a></p>
            </div>
            <div className='Rating'>
                <p>Problem Solved:&nbsp;100+</p>
                <p>Max Rating:&nbsp;1062</p>
                <p> < FontAwesomeIcon icon={faStar}size="1x" style={{color:"red"}}/>&nbsp; <FontAwesomeIcon icon={faMultiply}size="1x" style={{color:"red"}}/></p>
            </div>
        </div>
        <hr/>
        <div className='cdcf'>
            <div className='imgcp'>
            <p><a href="https://www.codechef.com/users/aryancs17">
          <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb" alt="W3Schools.com" width="200" height="132" data-aos="flip-right" style={{marginTop:"10px",boxShadow:'0 .5rem 1.5rem rgba(0,0,0,.3)'}} />
       </a></p>
            </div>
            <div className='Rating'>
                <p>Problem Solved:&nbsp;150+</p>
                <p>Max Rating:&nbsp;1614</p>
                <p>Secured 536 Rank in starter 80</p>
                <p>3 &nbsp;<FontAwesomeIcon icon={faStar}size="1x" style={{color:"red"}}/></p>
            </div>
        </div>
        <hr/>
        <div className='CodeKaze'>
            <a href='https://drive.google.com/file/d/1qF5T5-1aXpEN2hE4-uAtwBhcpDblswMs/view?usp=drive_link' className='code' style={{fontSize:'1.3rem',color:'brown',textDecorationLine:'underline'}}>Codekaze'23</a>
            <p>Secured All India Rank 3812 in Round 2</p>
        </div>
        </div>
        </div>
    </div>
    {props.mrgn?<Social/>:''}
    </>
  )
}
