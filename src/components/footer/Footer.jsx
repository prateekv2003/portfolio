import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='footer__container'>
      {/* ALL SECTION'S LINKS */}
      <div className="footer__sections-link">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      {/* FOOTER SOCIAL LINKS */}
      <div className="footer__social-links">
        <a href="https://www.facebook.com/prateek.vishwakarma.7773" target={"_blanck"}><FaFacebookF/></a>
        <a href="https://www.instagram.com/prateek.vishwakarma.7773"  target={"_blanck"}><BsInstagram/></a>
        <a href="https://twitter.com/Prateek04864747"  target={"_blanck"}><BsTwitter/></a>
      </div>
      <small className="footer__copyright">&copy; Prateek Vishwakarma. All rights reserved.</small>
    </footer>
  )
}

export default Footer