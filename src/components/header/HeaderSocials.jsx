import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/prateekv2003" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/prateekv2003" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/prateek.vishwakarma.7773/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials