import React from 'react';
import Navbar from '../../Components/NormalNavbar/Navbar';
import './Hollywood.css';
import HollyLeft from './hollyCompLeft/HollyLeft';
import HollyRight from './holycompRight/HollyRight';
import Footer from './../../Components/Footer/Footer'


function Hollywood() {
  return (
    <div>
      <Navbar/>
      <div className="bollymainBox">
        <div className="leftbox">
          <HollyLeft/>
        </div>
        <div className="rightbox">
          <HollyRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Hollywood;
