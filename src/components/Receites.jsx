import React from 'react'
import rec_1 from '../assets/rec1.png'
import rec_2 from '../assets/rec2.png'
import rec_3 from '../assets/rec3.png'


const Receites = () => {
  return (
    <div className='container-fluid receites'>
        <div className="row gx-0 align-items-baseline">
            <div className='col-lg-10'>
                <h1 style={{fontSize:'60px',fontWeight:'700'}}>Plus <span style={{color:'#4dff4d'}}>Populaire</span></h1>
            </div>
            <div className='col-lg-2 text-end'>
            <button className='btn1 fs-6' style={{padding:"3px 8px",marginRight:"30px",fontSize:"18px",fontWeight:'bold'}}>Voir plus <i class="fa-solid fa-right-long ps-3"></i></button>
            </div>
            <div className="col-lg-4 receite-coll" >
                <div className='receite'>
            <img src={rec_1} alt="" className='img-fluid'/>
                <h4><del style={{marginRight:'10px',color:'red',fontSize:'20px'}}>200 DH </del>150 DH </h4>
                <p>Cuisine Turque</p>
                <div className="receite-cart py-3">
                    <div className="row">
                        <div className="col-5">
                            <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            </div>
                         </div>
                     <div className='col-7'>
                     <button className='border-0'>--Add to cart<i className="fa-solid fa-cart-shopping"></i></button>

                     </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 receite-coll">
                <div className='receite'>
                <img src={rec_2} alt="" className='img-fluid'/>
                <h4><del style={{marginRight:'10px',color:'red',fontSize:'20px'}}>150 DH </del>200 DH </h4>
                <p>agneau grillé 100% Naturel </p>
                <div className="receite-cart py-3">
                    <div className="row">
                        <div className="col-5">
                            <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            </div>
                         </div>
                     <div className='col-7'>
                        <button className='border-0'>--Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
                     </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="col-lg-4 receite-coll">
                <div className='receite'>
                <img src={rec_3} alt="" className='img-fluid'/>
                <h4><del style={{marginRight:'10px',color:'red',fontSize:'20px'}}>100 DH </del>80 DH </h4>
                <p>Salade Italic </p>
                <div className="receite-cart py-3">
                    <div className="row">
                        <div className="col-5">
                            <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            </div>
                         </div>
                     <div className='col-7 add-cart'>
                       
                         <button className='border-0'>--Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
                     </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
 
export default Receites
