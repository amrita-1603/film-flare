import React, {useState} from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies, watchList, onWatchListToggle}) {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All");
    const [rating, setRating] = useState("All");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const matchGenre = (movie,genre) => {
        return genre === "All" || movie.genre.toLowerCase() === genre.toLowerCase();
    }
    const matchSearchTerm = (movie) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const matchRating = (movie, rating) => {
        switch(rating) {
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 5 && movie.rating < 8;
            case "Bad":
                return movie.rating < 5;
            default:
                return true; // "All" case
        }
    }

    const filteredMovies = movies.filter(movie =>{
        return matchGenre(movie, genre) && matchRating(movie,rating) && matchSearchTerm(movie);
    })
    console.log('movies type:', typeof movies, 'value:', movies);
    return (
        <div>
            <input type="text" placeholder="Search for a movie..." className="search-input" 
                value={searchTerm} onChange={handleSearch}
            />

            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option>All</option>
                        <option>Action</option>
                        <option>Fantasy</option>  
                        <option>Drama</option>  
                        <option>Horror</option>  
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>  
                        <option>Bad</option> 
                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {filteredMovies.map(movie=>(
                    <MovieCard movie={movie} key={movie.id} isWatchListed={watchList.includes(movie.id)} onWatchListToggle={onWatchListToggle}></MovieCard>
                ))}
            </div>
        </div>
        );
}