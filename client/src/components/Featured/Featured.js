import React, { useState, useEffect } from "react";
import ActorList from "../ActorList/ActorList";
import MovieList from "../MovieList/MovieList";
import MovieListHeading from "../MovieListHeading";
import AddFavorite from "../AddFavorite";
import {getFeatured} from '../../utils/API';


const Featured = () => {
   const [movies, setMovies] = useState([]);
   const [shows, setShows] = useState([]);
   const [actors, setActors] = useState([]);

  //  const saveToLocalStorage = (items) => {
  //   localStorage.setItem("movie-app2-favorites", JSON.stringify(items));
  //   };
  //   const addFavoriteMovie = (Movie) => {
  //   const newFavoriteList = [...AddFavorite, Movie];
  //   setFavorites(newFavoriteList);
  //   saveToLocalStorage(newFavoriteList);
  // };

  //changes the movies contents
  useEffect(() => {
    //when a search hasn't been entered yet
    async function fetchData(){
        //get featured Movies
        try{
          const response = await getFeatured("movie");
          if(!response.ok)
            throw new Error('something went wrong!');

          const f_movie = await response.json();
          setMovies(f_movie.results);
        }catch(err){
          console.log(err);
        }
        //get featured TV
        try{
          const response = await getFeatured("tv");
          if(!response.ok)
            throw new Error('something went wrong!');

          const f_tv = await response.json();
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
          setActors(f_actor.results);
        }catch(err){
          console.log(err);
        }
      }
    fetchData();
  }, [])

  return (
          <div className='container-fluid' id="page_content">
            <div className=''>
                <MovieListHeading heading="Featured Movies" />
            </div>

            <div className="movie-app">
                <MovieList
                movies={movies}
                // handlefavoritesClick={addFavoriteMovie}
                // FavoriteComponent={AddFavorite}
                />
            </div>

            <div className=''>
                <MovieListHeading heading="Featured TV" />
            </div>

            <div className="movie-app">
                <MovieList
                movies={shows}
                // handlefavoritesClick={addFavoriteMovie}
                // FavoriteComponent={AddFavorite}
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
  )
};

export default Featured;