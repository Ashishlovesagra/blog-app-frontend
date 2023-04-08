import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NormalNavbar/Navbar';
import FitnessLeft from './fitnessCompLeft/FitnessLeft';
import FitnessRight from './fitnesscompRight/FitnessRight';

function Fitness() {
  return (
    <div>
      <Navbar/>
      <div className="bollymainBox">
        <div className="leftbox">
          <FitnessLeft/>
        </div>
        <div className="rightbox">
          <FitnessRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Fitness
