import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faWhatsapp,
    
  } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='follow'>
      <div className="social-container">
      <a href="https://www.linkedin.com/in/aryan-prajapati-a3633820a/"
        className="linkdin social" data-aos="slide-right"  data-aos-offset="200">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/atul.aryan.779"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/atularyan65/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://wa.me/9956085682" className="whatsapp social">
 < FontAwesomeIcon icon={faWhatsapp}size="2x" />
</a>
<a href="https://github.com/aryan5682" className="github social">
 < FontAwesomeIcon icon={faGithub}size="2x" />
</a>
</div>
<a href="mailto:ap805203@gmail.com" className="Email social"data-aos="slide-left"  data-aos-offset="200">
 < FontAwesomeIcon icon={ faEnvelope}size="2x" />
</a>
    </div>
      <div className='links'>
        <div className='profile'>
        <h3>Profile</h3>
        <a href='https://leetcode.com/aryan5682/'>Leetcode</a>
        <a href='https://auth.geeksforgeeks.org/user/atularyan294/practice'>GeeksforGeeks</a>
        <a href=' https://www.codechef.com/users/aryancs17'>Codechef</a>
        <a href='https://codeforces.com/profile/aryan5682'>Codeforces</a>
       
        </div>
        <div className='Address'>
          <h3>Address</h3>
          <p>918 Jangalpur Kathiraon</p>
          <p>Varanasi Uttar Pradesh India 221207</p>
          <p>Mobile No. +919956085682</p>
        </div>
      </div>
      </div>
  )
}
