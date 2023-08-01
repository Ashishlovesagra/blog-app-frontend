import React, { useEffect, useState } from "react";
import "./HollyLeft.css";
import { Link } from "react-router-dom";

function HollyLeft() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blog-app-backend-beryl.vercel.app/hollywood")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="BollywoodComp">
      <h1 className="titleName">Hollywood</h1>
      <hr className="titleBr" />
      {data.map((movie) => (
        <div className="mainBox" key={movie.id}>
          <div className="main-imgbox">
            <Link to={`/article/${movie.id}`}>
              <img className="main-img" src={movie.image} alt={movie.name} />
            </Link>
          </div>
          <div className="main-content">
            <div className="main-content-name">{movie.name}</div>
            <div className="main-content-imdb">IMDB Rating : {movie.imdb}</div>
            <div className="main-content-info">{movie.content}</div>
            <div className="main-content-time">
              <span className="main-travelText">Release : </span>
              {movie.release}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HollyLeft;
