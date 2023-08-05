import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faWhatsapp,
    
  } from "@fortawesome/free-brands-svg-icons";
  import  "./Social.css";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
export default function Social() {
  return (
    <div className='follow'>
      <div className="social-container"data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h3>Contact Me </h3>
      <a href="https://www.linkedin.com/in/aryan-prajapati-a3633820a/"
      target="_blank" className="linkdin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://www.facebook.com/atul.aryan.779"
       target="_blank"  className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/atularyan65/"
       target="_blank"  className="instagram social">
        <FontAwesomeIcon icon={faInstagram}  size="2x" />
      </a>
      <a href="https://wa.me/9956085682" target="_blank" className="whatsapp social">
 < FontAwesomeIcon icon={faWhatsapp}size="2x" />
</a>
<a href="https://github.com/aryan5682" className="github social">
 < FontAwesomeIcon icon={faGithub}size="2x" />
</a>
<a href="mailto:ap805203gmail.com" className="Email social">
 < FontAwesomeIcon icon={ faEnvelope}size="2x" />
</a>
</div>
    </div>
  )
}
