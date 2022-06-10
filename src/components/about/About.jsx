import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <a href="#experience"><FaAward className='about__icon'/></a>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                <a href="#clients"><FiUsers className='about__icon'/></a>
                <h5>Clients</h5>
                <small>800+ Worldwide</small>
              </article>
              <article className="about__card">
                <a href="#projects"><VscFolderLibrary className='about__icon'/></a>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit culpa esse debitis, excepturi necessitatibus illo fugit error, reprehenderit molestiae ipsum doloremque fuga quibusdam libero.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about