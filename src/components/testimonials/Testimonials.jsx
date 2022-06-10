import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: AVTR1,
      name: "Pratiksha Tiwari",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi explicabo veritatis tempore voluptatibus, fuga ex placeat soluta, dolorem iste id, quod quia. Rem mollitia maxime praesentium sequi aliquid facilis tempora!"
    },
    {
      id: 2,
      avatar: AVTR2,
      name: "Pratiksha Tiwari",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi explicabo veritatis tempore voluptatibus, fuga ex placeat soluta, dolorem iste id, quod quia. Rem mollitia maxime praesentium sequi aliquid facilis tempora!"
    },
    {
      id: 3,
      avatar: AVTR3,
      name: "Pratiksha Tiwari",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi explicabo veritatis tempore voluptatibus, fuga ex placeat soluta, dolorem iste id, quod quia. Rem mollitia maxime praesentium sequi aliquid facilis tempora!"
    },
    {
      id: 4,
      avatar: AVTR4,
      name: "Pratiksha Tiwari",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi explicabo veritatis tempore voluptatibus, fuga ex placeat soluta, dolorem iste id, quod quia. Rem mollitia maxime praesentium sequi aliquid facilis tempora!"
    },
  ]
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, avatar, name, review})=>{
            return(
              <SwiperSlide key={id} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials