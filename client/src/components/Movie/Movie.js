import React, { useState, useEffect } from "react";
import Sorting from '../Sorting/Sorting';
import MovieList from '../MovieList/MovieList';
import {getFeatured} from '../../utils/API';

// import "./App.css";

const Movie =() => {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState([false]);

  useEffect(() => {
    //when a search hasn't been entered yet
    async function fetchData(){
        //get featured Movies
        try{
          const response = await getFeatured("movie");
          if(!response.ok)
            throw new Error('something went wrong!');

          const f_movie = await response.json();
          console.log(f_movie);
          setMovies(f_movie.results);
        }catch(err){
          console.log(err);
        }
      }
    fetchData();
  }, [])

    return (
      <>
      <Sorting />
      <div className="searchMovie">
        <MovieList movies={movies}/>
      </div>
      </>
        );
}
export default Movie;