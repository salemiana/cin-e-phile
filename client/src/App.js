import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import AddFavourite from './components/AddFavourites';
//import RemoveFavourites from './components/RemoveFavourites';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

library.add(fab);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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

  const RemoveFavourites = (movie) => {
    const newFavouriteList = AddFavourite.filter(
      (favourite) => favourite.imdbID !== movie.imdbID

    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

  };


  return (
    <ApolloProvider client={client}>
    <div className='App'>
        <Navbar />
        <Header searchValue={searchValue} setSearchValue={setSearchValue} /> 
   
    <div className='container-fluid movie-app'>
      <div className='d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="movie" />
      </div>
      <div>
        <MovieList 
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
          />
      </div>
      <div className=' d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='favourites' />
      </div>
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
          </ApolloProvider>
  );
};

export default App;




