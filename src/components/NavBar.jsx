import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg Nav_main ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MATMOUTCH_JI3AN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">Acceil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#top">Meilleurs Plats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutUs">À Propos de Nous</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#group">Équipements</a>
              </li>
            </ul>
            <form className="d-flex align-items-center" role="search">
              <div className='icons'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <button className="btn btn1 mx-4" style={{ color: "white" }} type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
