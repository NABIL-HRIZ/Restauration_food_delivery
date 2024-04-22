
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import pers1 from '../assets/pers1.jpg'
import pers2 from '../assets/pers2.jpg'
import pers3 from '../assets/pers3.jpg'
import pers4 from '../assets/pers4.jpg'


const Testimonlial = () => {
  return (
    <div className='container-fluid  mt-5 textimonials'>
      <div className="container_main text-center">
        <h1 style={{ fontSize: '60px', fontWeight: '700' }}>Ce que disent<span style={{ color: '#4dff4d' }}>  nos clients</span></h1>
        <p style={{ fontSize: '20px' }}>Nous sommes fiéres !  </p>
      </div>
      <div className="container mt-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-md-3">
                <div className="col_img">
                  <img src={pers1} alt="" />
                </div>
              </div>

              <div className="col-md-8">
                <div className="col_text">
                  <h2>Noah Baker</h2>
                  <p>L'équipe était très professionnelle et réactive,Je recommande vivement cette entreprise </p>
                </div>
                <span className="badge text-bg-success badge" > <i className="fa-solid fa-location-dot"></i>Hay Hassani </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-3">
                <div className="col_img">
                  <img src={pers3} alt="" />
                </div>
              </div>

              <div className="col-md-8">
                <div className="col_text">
                  <h2>Isabella King</h2>
                  <p>L'équipe a fait plus que ce qui était nécessaire pour nous aider,L'équipe était très professionnelle et réactive </p>
                </div>
                <span className="badge text-bg-success badge" > <i className="fa-solid fa-location-dot"></i>Anfa Plus </span>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-3">
                <div className="col_img">
                  <img src={pers2} alt="" />
                </div>
              </div>

              <div className="col-md-8">
                <div className="col_text">
                  <h2>Ethan Harris</h2>
                  <p> Leur équipe de livraison est professionnelle et amicale, et le service client est exceptionnel</p>
                </div>
                <span className="badge text-bg-success badge" > <i className="fa-solid fa-location-dot"></i>Maarif</span>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-3">
                <div className="col_img">
                  <img src={pers4} alt="" />
                </div>
              </div>

              <div className="col-md-8">
                <div className="col_text">
                  <h2>Mia Lee</h2>
                  <p>Leurs plats sont toujours délicieux, frais et livrés à temps, ce qui rend mes soirées de semaine beaucoup plus faciles.  </p>
                </div>
                <span className="badge text-bg-success badge" > <i className="fa-solid fa-location-dot"></i>Zarktouni</span>

              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  )
}

export default Testimonlial
