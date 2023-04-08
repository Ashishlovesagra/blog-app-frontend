import React from 'react';
import './Style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <div className="navbar-heading">
        <div className="navbar-heading-the">The</div>
        <div className="navbar-heading-main">Siren</div>
    </div>
    <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} >
          <div className='hambur'></div>
          <div className='hambur'></div>
          <div className='hambur'></div>
          </i>
    </div>
    <div className='navbar-link'>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
      </li>
      <li className='nav-item'>
        <Link to="/Bollywood" className='nav-links' onClick={closeMobileMenu}>Bollywoods</Link>
      </li>
      <li className='nav-item'>
        <Link to="/Technology" className='nav-links' onClick={closeMobileMenu}>Technology</Link>
      </li>
      <li className='nav-item'>
        <Link to="/Hollywood" className='nav-links' onClick={closeMobileMenu}>Hollywood</Link>
      </li>
      <li className='nav-item'>
        <Link to="/Fitness" className='nav-links' onClick={closeMobileMenu}>Fitness</Link>
      </li>
      <li className='nav-item'>
        <Link to="/Food" className='nav-links' onClick={closeMobileMenu}>Food</Link>
      </li>
      </ul>
    </div>
    <hr className='navbar-hr' />
    </>
  )
}

export default Navbar;
