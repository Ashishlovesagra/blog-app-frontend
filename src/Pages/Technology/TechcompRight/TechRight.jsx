import React, { useEffect, useState } from "react";
import "./TechRight.css";
import { Link } from "react-router-dom";

function TechRight() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://blog-app-backend-beryl.vercel.app/technology"
      );
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const selectRandomMovie = () => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      setRandomMovie(randomMovie);
    };
    selectRandomMovie();
  }, [movies]);

  let currentNumber = 1;

  function generateNumber() {
    currentNumber++;
    if (currentNumber > 5) {
      currentNumber = 2;
    }
    return currentNumber;
  }
  return (
    <>
      <div>
        <div>
          <h1 className="posttitle">Top Post</h1>
        </div>
        <hr className="postHr" />
        {randomMovie && (
          <div className="topPost-mainbox">
            <div className="topPost-image">
              <Link to={`/article/${randomMovie.id}`}>
                <img
                  className="topPost-img"
                  src={randomMovie.image}
                  alt={randomMovie.name}
                />
              </Link>
              <div className="topPost-content">
                <div className="leftContent">
                  <h2 className="topPost-name">Name: {randomMovie.name}</h2>
                  <h4 className="topPost-release">
                    <span className="topPost-releaseSpan">Release Date: </span>
                    {randomMovie.release}
                  </h4>
                </div>
                <div className="rightContent">1</div>
              </div>
            </div>
          </div>
        )}
        <hr className="middleBoxHr" />
        {movies
          .filter((movie) => movie.id !== randomMovie?.id)
          .map((movie) => (
            <div className="bottom-mainBox">
              <div className="bottomBox" key={movie.id}>
                <div className="bottombox-image">
                  <Link to={`/article/${movie.id}`}>
                    <img
                      className="bottomBox-img"
                      src={movie.image}
                      alt={movie.name}
                    />
                  </Link>
                </div>
                <div className="bottombox-content">
                  <div className="bottomBox-name">{movie.name}</div>
                  <div className="bottomBox-release">
                    <span className="bottom-releaseDate">Release: </span>
                    {movie.release}
                  </div>
                </div>
                <div className="bottombox-number">
                  <span className="generateNo">{generateNumber()}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="bollyPageAdd">
        <div className="add">Advertistement</div>
      </div>
    </>
  );
}
export default TechRight;
