import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NormalNavbar/Navbar';
import TechLeft from './TechCompLeft/TechLeft';
import TechRight from './TechcompRight/TechRight';

function Technology() {
  return (
    <div>
      <Navbar/>
      <div className="bollymainBox">
        <div className="leftbox">
          <TechLeft/>
        </div>
        <div className="rightbox">
          <TechRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Technology
