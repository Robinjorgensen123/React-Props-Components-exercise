import React, { useState } from "react";
import DisplayMovies from "../Displaymovies/DisplayMovies";
import "../MovieSearch/SearchMovies.css"
import "../MovieCard/MovieCard"

const apiKey = "37fe945a"

const SearchMovies = () => {
  // State för att lagra filmerna som hämtas
  const [movieData, setMovieData] = useState([]);
  // State för att lagra sökterm
  const [searchTerm, setSearchTerm] = useState("");

  const [error, setError] = useState(null); 

  // Funktion för att hantera ändringar i sökfältet
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Uppdatera sökterm med inputvärdet
  };

  // Funktion för att hämta filmer från API
  const fetchMovies = () => {
    if (!searchTerm.trim()) return; // Gör inget om sökfältet är tomt

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.Search) {
          setMovieData(data.Search); // Sätt filmerna i state
          setError(null)
        } else {
          setMovieData([]); // Töm array om inga filmer hittas
          setError("No movies found")
          
        }
      })
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error fetching data:", error.message);
      })
  }
  return ( 
    <div>
      <input
        type="text"
        value={searchTerm} // Bind sökterm till inputfältet
        onChange={handleSearchChange} // Uppdatera sökterm när användaren skriver
        placeholder="Search for a movie"
      />
      <button onClick={fetchMovies}>Search</button> {/* Kör sökningen vid klick */}
    <DisplayMovies movieData={movieData}/>
    </div>
)

}



export default SearchMovies;
