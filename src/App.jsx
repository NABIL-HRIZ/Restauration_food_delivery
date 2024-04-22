import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Home from "./components/Home";
import Delivery from "./components/Delivery";
import Overview from "./components/Overview";
import Receites from "./components/Receites";
import Top from "./components/Top";
import OurTeam from "./components/OurTeam";
import Testimonlial from "./components/Testimonlial";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




const App=()=>{
  return(
    <div>
      <NavBar />
      <Home />
      <Delivery />
      <Overview />
      <Receites />
      <Top />
      <OurTeam />
      <Testimonlial />
      <Footer />
    </div>
  )
}
export default App;

