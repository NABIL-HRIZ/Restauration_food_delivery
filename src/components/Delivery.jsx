import React from 'react'
import delevery1 from '../assets/Delivery1.jpg'
import delevery2 from '../assets/Delivery2.webp'
import delevery3 from '../assets/Delivery3.png'

const Delivery = () => {
  return (
    <div className='container-fluid'>
        <div className="container text-center" style={{marginTop:"40px"}}>
            <h2 style={{fontSize:"60px"}}>Comment ça marche</h2>
            <p style={{fontSize:"20px"}}>Commandez en 3 étapes sans aucun frais supplémentaire</p>
            <div className="row text-center" >
                <div className="col-lg-4" data-aos="flip-right"data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <div className="delivery-coll">
                   <img src={delevery1} style={{width:"80px"}} alt="" />
                   <h3 >Localisez-vous</h3>
                   <p>Choisissez votre ville et votre quartie</p>
                    </div>

                </div>

                <div className="col-lg-4" data-aos="flip-left"data-aos-duration="2000"
    data-aos-easing="ease-in-out">
                    <div className="delivery-coll">
                    <img src={delevery2} style={{width:"80px"}} alt="" />
                   <h3>Choisisez votre plat</h3>
                   <p>Sélectionnez le plat qui vous convient</p>
                    </div>

                </div>

                <div className="col-lg-4" data-aos="flip-right" data-aos-duration="3000"
    data-aos-easing="ease-in-out">
                    <div className="delivery-coll">
                    <img src={delevery3} style={{width:"80px"}} alt="" />
                   <h3>Passez votre commande</h3>
                   <p>Commandez votre repas en ligne</p>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Delivery
