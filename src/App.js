import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import AddFavourite from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sorting from './components/Sorting/Sorting';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const App = () => {
  const [movies, setmovies] = useState([]);
  const [favourites, setFavourites] = useState('');
  const [searchValue, setSearchValue] = useState('');

  //API call to get movie results from search
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3dc3a227`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setmovies(responseJson.Search);
    }

  };
  //get list of featured moves
  useEffect(() => {
      async function fetchData(){
        const featuredMovies = `
        https://api.themoviedb.org/3/trending/movie/week?api_key=21d0663bbc75c9da17c494c1a25cf466`

        let response = await fetch(featuredMovies);
        let data = await response.json();

        if(data){
          console.log(data.results);
          setmovies(data.results);
        }
      }
    // fetch(url)
    //   .then((response) => {
    //     console.log(response.json());
    //     response.json()
    //     })
    //     .then((data) => {
    //       console.log(data[0]);
    //       console.log(data[1]);
    //       console.log(data[2]);
    //       setmovies(data[1]);
    //     })
    fetchData();
  }, [])

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // useEffect(() => {
  //   const movieFavourites = JSON.parse(
  //     localStorage.getItem('movie-app2-favourites')
  //   )|| []

  //   setFavourites(movieFavourites);
  // }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-app2-favourites', JSON.stringify(items));

  };

  const addFavouriteMovie = (Movie) => {
    const newFavouriteList = [...AddFavourite, Movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const RemoveFavouritesMovie = (movie) => {
    const newFavouriteList = AddFavourite.filter(
      (favourite) => favourite.imdbID !== movie.imdbID

    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

  };


  return (
    <div className='App'>
      <div id="header-bg">
        <Navbar/>
        {/* Header with searchbar */}
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      {/* What I added for the movie page. Just uncomment it out to view. */}
      <Sorting></Sorting>

      
      {/* container for movielist */}
      <div className='container-fluid' id="page_content">
        {/* heading for movie list, don't think we need? */}
        <div className=''>
          <MovieListHeading heading="movie" />
        </div>

        {/* Display searched movie list */}
        <div className="movie-app">
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>

        {/* heading for favorites */}
        <div className=' d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='favourites' />
        </div>

        {/* Display Favorite Movies */}
        <div>
          <MovieList
            movies={favourites}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;




