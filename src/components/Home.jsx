import React from 'react'
import img from '../assets/food1.png'

const Home = () => {
  return (
    <div className='container-fluid home_main' id='home'>
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <h1>Saveurs à emporter : Explorez notre cuisine, livrée chez vous</h1>
            <p>Nous sommes là pour satisfaire toutes vos envies gustatives. Que vous recherchiez un repas confortable à la maison, une soirée entre amis ou une occasion spéciale, notre équipe dévouée s'efforce de vous offrir la meilleure qualité et le meilleur service.</p>
            <div className="home_btns ">
              <a href="#" class="button mx-5">Commencer</a>
              <a href="#" class="button">Voire Notre Menu</a>

            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-left" data-aos-duration="1500"
            data-aos-easing="ease-in-out">
            <img src={img} alt="FOOD 1" className='home_img' />
          </div>

        </div>
      </div>


    </div>
  )
}

export default Home
