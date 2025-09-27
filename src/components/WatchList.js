import {React} from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function WatchList({movies, watchList, onWatchListToggle}){
    return (<div>
        <h1 className="title">Your WatchList</h1>
        <div className="watchlist">
            {movies.filter(movie => watchList.includes(movie.id)).map(movie => (
                <MovieCard 
                    movie={movie} 
                    key={movie.id} 
                    isWatchListed={true} 
                    onWatchListToggle={onWatchListToggle}
                />
            ))}
        </div>
    </div>)
}