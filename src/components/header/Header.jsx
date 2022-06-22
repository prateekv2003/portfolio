import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='my-name'>Prateek Vishwakarma</h1>
        <Typical
          steps={[
            'Full Stack Web Developer',1500,
            'Front End Specialist',1500,
            'Competitive Programmer',1500,
            'MERN Stack Dev',1500,
            'React Dev',1500,
            'Software Engineer',1500,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Profile !" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header