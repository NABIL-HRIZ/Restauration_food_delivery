import React from 'react'
import del1 from '../assets/del_1.jpg'
import del2 from '../assets/del_2.jpg'
import del3 from '../assets/del_3.jpg'
import del4 from '../assets/del_4.jpg'

const OurTeam = () => {
    return (
        <div className="container-fluid ourTeams" id='group'>
            <div className="container_main text-center">
                <h1 style={{ fontSize: '60px', fontWeight: '700' }}>Nos <span style={{ color: '#4dff4d' }}>Equipe</span>  </h1>
                <p style={{ fontSize: '20px' }}>Le travail est une forme d'engagement</p>
            </div>
            <div className='container-fluid ourTeams_infos'>
                <div className="team_card" data-aos="fade-down" data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <img src={del3} alt="" width={"250px"} height={"250px"} />
                    <div className="intro">
                        <h1>NABIL HARIZ </h1>
                        <p>Gérer les livraisons : Organiser la livraison des repas aux clients.</p>
                    </div>
                </div>
                <div className="team_card" data-aos="fade-down" data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <img src={del1} alt="" width={"250px"} height={"250px"} />

                    <div className="intro">
                        <h1>Benjamin </h1>
                        <p>Gérer les stocks : Assurer un approvisionnement adéquat des ingrédients  les repas </p>
                    </div>
                </div>
                <div className="team_card" data-aos="fade-down" data-aos-duration="1500"
                    data-aos-easing="ease-in-out">
                    <img src={del2} alt="" width={"250px"} height={"250px"} />

                    <div className="intro">
                        <h1>Daniel Rodriguez </h1>
                        <p>Gérer le service client : Répondre aux questions des clients.</p>
                    </div>
                </div>
                <div className="team_card" data-aos="fade-down" data-aos-duration="2000"
                    data-aos-easing="ease-in-out">
                    <img src={del3} alt="" width={"250px"} height={"250px"} />

                    <div className="intro">
                        <h1>Ethan Harris </h1>
                        <p>Gérer les commandes en ligne : Mettre en place un système de commande en ligne .</p>
                    </div>
                </div>
            </div>
            <div className="team_btn text-center mt-5">
                <button className='btn1' style={{ padding: "8px 15px", fontSize: '20px', fontWeight: 'bold', margin: '20px' }} >Join Us</button>
            </div>


        </div>

    )
}

export default OurTeam
