import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NormalNavbar/Navbar';
import FoodLeft from './foodCompLeft/FoodLeft';
import FoodRight from './foodcompRight/FoodRight';

function Food() {
  return (
    <div>
      <Navbar/>
      <div className="bollymainBox">
        <div className="leftbox">
          <FoodLeft/>
        </div>
        <div className="rightbox">
          <FoodRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Food
