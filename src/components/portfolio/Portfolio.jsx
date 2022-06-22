import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pixo - Website that reassembles an Image gallery made using ReactJS.',
    github: 'https://github.com/prateekv2003/pixo',
    demo: 'https://prateekv2003.github.io/pixo' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a website developed using react which converts any image to webp format.',
    github: 'https://github.com/prateekv2003/webpImgConverter',
    demo: 'https://prateekv2003.github.io/webpImgConverter' 
  },
  {
    id: 3,
    image: IMG3,
    title: 'Contact Manager - On this site you can Store, edit and delete contacts and also send emails and make calls to them directly.',
    github: 'https://github.com/prateekv2003/contactwebapp',
    demo: 'http://contactwebapp.herokuapp.com/' 
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pokedex: This site displays the pokemon card fetched from pokemon API dynamically.',
    github: 'https://github.com/prateekv2003/pokedex',
    demo: 'https://prateekv2003.github.io/pokedex' 
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14743882-Orion-UI-kit-Charts-templates-infographics-in-Figma' 
  },
  {
    id: 6,
    image: IMG6,
    title: ' Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma' 
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio