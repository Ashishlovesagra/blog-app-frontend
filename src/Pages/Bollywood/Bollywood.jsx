import React from 'react';
import Navbar from '../../Components/NormalNavbar/Navbar';
import BollyLeft from './bollyCompLeft/BollyLeft';
import Footer from '../../Components/Footer/Footer'
import BollywoodRight from './bollycompRight/BollywoodRight';
import './Bollywood.css'
function Bollywood() {
  return (
    <div>
      <Navbar/>
      <div className="bollymainBox">
        <div className="leftbox">
        <BollyLeft/>
        </div>
        <div className="rightbox">
          <BollywoodRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Bollywood
