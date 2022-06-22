import React, {useState, useRef} from 'react'
import './rainToggle.css'
import {BsCloudRain} from 'react-icons/bs'
import {AiOutlineCloud} from 'react-icons/ai'

const RainToggle = () => {
  const [rainy, setRainy] = useState(true)
  const toggleCheckbox = useRef(); 
  const toggleRain = () => {
    document.body.children[0].classList.toggle("rain");
    setRainy(!rainy)
  }


  return (
    <div className='container rainToggle__container'>
      <input onClick={()=>toggleRain()} type="checkbox" id="toggle_checkbox" />
      <label ref={toggleCheckbox} for="toggle_checkbox">
        {
          rainy ? <BsCloudRain className='rain__icon'/> : <AiOutlineCloud className='cloud__icon'/>
        }
        
      </label>
    </div>
  )
}

export default RainToggle