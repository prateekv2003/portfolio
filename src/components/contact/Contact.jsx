import React, { useRef } from 'react'
import "./contact.css"
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs  from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_q2kqizx', 'template_sxrb6zr', form.current, 'S_H9RZoQ3V3m9YaBB')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__cards__container">
          <article className="contact__card">
            <FiMail className='contact__card-icon'/>
            <h3>Email</h3>
            <h5>prateekv2003@gmail.com</h5>
            <a href="mailto:prateekv2003@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__card">
            <RiMessengerLine className='contact__card-icon'/>
            <h3>Messenger</h3>
            <h5>Prateek Vishwakarma</h5>
            <a href="https://m.me/prateek.vishwakarma.7773" target="_blank">Send a message</a>
          </article>
          <article className="contact__card">
            <BsWhatsapp className='contact__card-icon'/>
            <h3>WhatsApp</h3>
            <h5>+91 9967508702</h5>
            <a href="https://api.whatsapp.com/send?phone+9967508702" target="_blank">Send a message</a>
          </article>
        </div>

        {/* CONTACT FORM */}
        <div className="contact__form__container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="name" required placeholder='Your Name' className='contact__form-input'/>
            <input type="email" name="email" id="email" placeholder='Your Email' className='contact__form-input'/>
            <textarea name="message" id="message" rows="10" placeholder='Your Message' className='contact__form-input' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact