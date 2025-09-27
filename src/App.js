
import './App.css';
import './styles.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  useEffect(()=>{
        fetch("movies.json").
        then(response=>response.json()).
        then(data=>setMovies(data || []));
    },[])

  const handleWatchListToggle = (movieId) => {
    // Toggle watchlist status for the movie  
    setWatchList(prevList => 
      prevList.includes(movieId) ? prevList.filter(id => id !== movieId) :
        [...prevList, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchList={watchList} onWatchListToggle={handleWatchListToggle}/>} />
            <Route path="/watchlist" element={<WatchList movies={movies} watchList={watchList} onWatchListToggle={handleWatchListToggle}/>} />
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
