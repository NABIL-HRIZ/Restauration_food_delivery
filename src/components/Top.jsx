import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../assets/top_1.jpg'
import img2 from '../assets/top_2.jpg'
import img3 from '../assets/top_3.jpg'
import img4 from '../assets/top_4.jpg'
import img5 from '../assets/top5.jpg'
import img6 from '../assets/top6.jpg'
import img7 from '../assets/top7.jpg'
import img8 from '../assets/top_8.jpg'

const Top = () => {
  return (
    <>
      <div className='container-fluid top_collections mt-5' id='top'>
        <div className="container_main text-center">
          <h1 className='h1' style={{ fontSize: '60px', fontWeight: '700' }}><span style={{ color: '#4dff4d' }}>Meilleures</span>  Collection</h1>
          <p style={{ fontSize: '20px' }}>Voici les Sélections Préférées</p>
        </div>
        <div className="container mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={img1} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" width={"300px"} height={"300px"} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>

  )
}

export default Top
