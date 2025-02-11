
import React from "react";
import "../Displaymovies/DisplayMovies.css"
import MovieCard from "../MovieCard/MovieCard"; "../MovieCard/MovieCard"


const DisplayMovies = ({movieData = []} ) => {
    if (!Array.isArray(movieData) || movieData.length === 0) {
        return <p>No movies found</p>
    }
return ( 
    <div className="movie-container">
    {movieData.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie}/>
    ))}
  </div>
);
};

export default DisplayMovies