import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourite from "./components/AddFavourites";
import RemoveFavourites from './components/RemoveFavourites';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Movie from "./components/Movie/Movie"
import Footer from "./components/Footer/Footer";
import Sorting from './components/Sorting/Sorting';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Signup from "./components/Signup";
import Login from "./components/Login";
import MovieCard from "./components/MovieCard";



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
  const [favourites, setFavourites] = useState("");
  const [searchValue, setSearchValue] = useState("");
   const [user,setLoginUser] = useState({});

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
    async function fetchData() {
      const featuredMovies = `
        https://api.themoviedb.org/3/trending/movie/week?api_key=21d0663bbc75c9da17c494c1a25cf466`

      let response = await fetch(featuredMovies);
      let data = await response.json();

      if (data) {
        console.log(data.results);
        setmovies(data.results);
      }
    }
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
    localStorage.setItem("movie-app2-favourites", JSON.stringify(items));
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
      <div className="App">
        <div id="header-bg">
          {/* <Login />
          <Signup /> */}
          {/* <Navbar /> */}
           <div className="App">
   <Router>
      <Fragment>
        <Navbar/>
        <Routes>
       
            {/* <Route exact path='/' element={<Home/>}/> */}
          
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/movie' element={<Movie/>}/>
  
        </Routes>
      </Fragment>
    </Router>

    </div>
          {/* Header with searchbar */}
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        {/* What I added for the movie page. Just uncomment it out to view. */}
        {/* <Sorting></Sorting> */}

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
    </ApolloProvider >
  );
};

export default App;
