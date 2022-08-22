import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ActorList from "./components/ActorList/ActorList";
import MovieList from "./components/MovieList/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import AddFavorite from "./components/AddFavorite";
// import Removefavorites from './components/Removefavorites';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

/*********** For Fetching featured Data ***********/
import {searchMovies, getFeatured} from './utils/API';
/************************************************ */

/**************APOLLO Section ******************** */
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
/**************************************************** */

const App = () => {
  /*********For Featured********************/
  const [featured, setFeatured] = useState([true]);
  /*****************************************/
  const [actors, setActors] = useState([]);
  const [movies, setmovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [favorites, setfavorites] = useState("");
  const [searchValue, setSearchValue] = useState("");

  //changes the movies contents
  useEffect(() => {
    //when a search hasn't been entered yet
    async function fetchData(){
      if(featured){
        //get featured Movies
        try{
          const response = await getFeatured("movie");
          if(!response.ok)
            throw new Error('something went wrong!');

          const f_movie = await response.json();
          console.log(f_movie);
          setmovies(f_movie.results);
        }catch(err){
          console.log(err);
        }
        //get featured TV
        try{
          const response = await getFeatured("tv");
          if(!response.ok)
            throw new Error('something went wrong!');

          const f_tv = await response.json();
          console.log(f_tv);
          setShows(f_tv.results);
        }catch(err){
          console.log(err);
        }
        //get featured actors
        try{
          const response = await getFeatured("person");
          if(!response.ok)
            throw new Error('something went wrong!');

          const f_actor = await response.json();
          console.log(f_actor);
          setActors(f_actor.results);
        }catch(err){
          console.log(err);
        }
      }else{
        try{
          const response = await searchMovies(searchValue);
          if(!response.ok)
            throw new Error('something went wrong!');

          const searchResults = await response.json();
          console.log(searchResults);
          setmovies(searchResults.results);
          //to show search results and not featured list
        }catch(err){
          console.log(err);
        }
      }
    }
    fetchData();
  }, [featured, searchValue])

  // useEffect(() => {
  //   const moviefavorites = JSON.parse(
  //     localStorage.getItem('movie-app2-favorites')
  //   )|| []

  //   setfavorites(moviefavorites);
  // }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app2-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (Movie) => {
    const newFavoriteList = [...AddFavorite, Movie];
    setfavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const Removefavorites = (movie) => {
    const newFavoriteList = AddFavorite.filter(
      (Favorite) => Favorite.imdbID !== movie.imdbID
    );

    setfavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div id="header-bg">
          <Navbar />
          {/* Header with searchbar */}
          <Header searchValue={searchValue} setSearchValue={setSearchValue} featured = {featured } setFeatured = {setFeatured}/>
        </div>

        <div className='container-fluid' id="page_content">
          <div className=''>
            <MovieListHeading heading="Featured Movies" />
          </div>

          <div className="movie-app">
            <MovieList
              movies={movies}
              handlefavoritesClick={addFavoriteMovie}
              FavoriteComponent={AddFavorite}
            />
          </div>

          <div className=''>
            <MovieListHeading heading="Featured TV" />
          </div>

          <div className="movie-app">
            <MovieList
              movies={shows}
              handlefavoritesClick={addFavoriteMovie}
              FavoriteComponent={AddFavorite}
            />
          </div>

          <div className=''>
            <MovieListHeading heading="Featured Actors" />
          </div>

          <div className="movie-app">
            <ActorList
              actors={actors}
            />
          </div>
        </div>
        <Footer />
      </div>
    </ApolloProvider >
  );
};

export default App;


/*******OLD ***************/
{/* <div className='container-fluid' id="page_content">
  <div className=''>
    <MovieListHeading heading="movie" />
  </div>

  <div className="movie-app">
    <MovieList
      movies={movies}
      handlefavoritesClick={addFavoriteMovie}
      FavoriteComponent={AddFavorite}
    />
  </div>

  <div className=' d-flex align-items-center mt-4 mb-4'>
    <MovieListHeading heading='favorites' />
  </div>

  <div>
    <MovieList
      movies={favorites}
      handlefavoritesClick={addFavoriteMovie}
      FavoriteComponent={Removefavorites}
    />
  </div>
</div> */}