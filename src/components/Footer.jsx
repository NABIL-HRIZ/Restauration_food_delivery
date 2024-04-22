import React from 'react'

const Footer = () => {
  return (
<div className='container-fluid footer'>
  <div className="row">
     <div className="col-sm-4 footer-infos">
           <h2>Matmoutch_Ji3an</h2>
           <p> Nous sommes là pour vous offrir un repas savoureux et pratique, sans compromis sur la qualité. Que ce soit pour une soirée décontractée à la maison, un déjeuner au bureau ou une occasion spéciale entre amis,</p>
        <div class="social-container">
          <ul class="social-icons">
           <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
           <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
           <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        </div>
    </div>
           <div className="col-sm-4 navLinks">
                <h1>Nos Liens </h1>
                <ul>
                <li><a href="#">Acceil</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Nos Equipe</a></li>
                <li><a href="#">A propos de nous </a></li>
                </ul>
             </div>

             <div className="col-sm-4 footer_contact">
                <h1>Contactez-Nous  </h1>
                <ul>
                 <li><i class="fa-solid fa-phone"></i>+212523431298</li>
                 <li><i class="fa-solid fa-envelope"></i>matmoutch_ji3an@email.com</li>
                 <li><i class="fa-solid fa-location-dot"></i>Casablnca,Maroc</li>
                </ul>
             </div>
         </div>  
         <div className='end_footer'>
           <p> Tous les droits réservés <i class="fa-regular fa-copyright"></i> </p> 
         </div> 
        </div>
      
 
  )
}

export default Footer
