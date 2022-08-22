import React, { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import MovieListHeading from "../MovieListHeading";
import AddFavorite from "../AddFavorite";
import {searchMovies} from '../../utils/API';


const SearchList = ({searchValue, setSearchValue}) => {
    const [searchResults, getSearch] = useState([]);

  //changes the movies contents
  useEffect(() => {
    async function fetchData(){
        try{
          const response = await searchMovies(searchValue);
          if(!response.ok)
            throw new Error('something went wrong!');

          const searchResults = await response.json();
          console.log(searchResults);
          getSearch(searchResults.results);
        }catch(err){
          console.log(err);
        }
      }
    fetchData();
  }, [searchValue])

  return (
    <div id="searchList">
        <MovieListHeading heading="Search Results" />

      <div className="searchMovie">
        <MovieList
          movies={searchResults}
          // handlefavoritesClick={addFavoriteMovie}
          // FavoriteComponent={AddFavorite}
        />
      </div>
    </div>
  )
};

export default SearchList;