import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  const [movies, setmovies] = useState([]);
  const [favourites, setFavourites] = useState('');
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3dc3a227`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setmovies(responseJson.Search);

    }

  };

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
        <Navbar />
        <Header searchValue={searchValue} setSearchValue={setSearchValue} /> 
   
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="movie" />
        {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
      <div className='row'>
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
          />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='favourites' />
      </div>
      <div className='row'>
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




