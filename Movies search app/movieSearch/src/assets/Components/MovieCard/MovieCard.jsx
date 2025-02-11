// MovieCard.jsx
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.Title}</h2>
      <img className="poster" src={movie.Poster} alt={movie.Title} />
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
