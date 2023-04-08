import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Bollywood from '../../Pages/Bollywood/Bollywood';
import Technology from '../../Pages/Technology/Technology';
import Hollywood from '../../Pages/Hollywood/Hollywood';
import Fitness from '../../Pages/Fitness/Fitness';
import Food from '../../Pages/Food/Food';
import PageNotFound from '../404 Page/PageNotFound';
import Article from '../../Pages/Article/Article';


function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Food" element={<Food />} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/article/:path" element={<Article/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rout;

