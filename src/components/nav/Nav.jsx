import React, {useState} from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {BiBook,BiMessageAdd} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={ activeNav === "#" ? 'active' : ''} onClick={()=>{setActiveNav("#")}}><AiOutlineHome/></a>
      <a href="#about" className={ activeNav === "#about" ? 'active' : ''} onClick={()=>{setActiveNav("#about")}}><BsPerson/></a>
      <a href="#experience" className={ activeNav === "#experience" ? 'active' : ''} onClick={()=>{setActiveNav("#experience")}}><BiBook/></a>
      <a href="#services" className={ activeNav === "#services" ? 'active' : ''} onClick={()=>{setActiveNav("#services")}}><RiServiceLine/></a>
      <a href="#contact" className={ activeNav === "#contact" ? 'active' : ''} onClick={()=>{setActiveNav("#contact")}}><BiMessageAdd/></a>
    </nav>
  )
}

export default Nav