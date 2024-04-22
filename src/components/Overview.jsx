import React from 'react'
import Burger from '../assets/Burger.png'
const Overview = () => {
    return (
        <div className='container-fluid' id='aboutUs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 overview_img">
                        <img src={Burger} style={{ marginLeft: "100px" }} alt="" />

                    </div>
                    <div className="col-lg-5">
                        <div className='overview-call'>
                            <h3>Overview</h3>
                            <h1>Vue d'ensemble de Notre Service de Livraison </h1>
                            <p>Découvrez la commodité et la délicatesse de notre service de livraison de restaurant, nous sommes déterminés à vous offrir une expérience culinaire exceptionnelle, même dans le confort de votre foyer. Notre équipe dévouée s'engage à préparer avec soin et à livrer vos plats préférés, </p>
                            <div className='notes mx-2'>
                                <div className="note1">
                                    <span>+10K </span>
                                    <p>clients satisfaits</p>
                                </div>
                                <div className="note1">
                                    <span>+500 </span>
                                    <p>Avis cinq étoiles  </p>
                                </div>
                                <div className="note1">
                                    <span>+50 </span>
                                    <p>Plats au menu</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview
