import React from "react";
import AddFavorite from "../AddFavorite";
// import FavoriteComponent from "./AddFavorite"

const MovieList = (props) => {
    // const FavoriteComponent = props.favoritesComponent;
    const {movies} = props;
    const filter = movies.filter(movie => movie.poster_path!=null);
    
    return (
        <>
            {filter.length ?
                filter.map((movie) => (   
                    <div key= {movie.id} className="movie-card" id={movie.id}>
                         <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='movie'></img>
                         <div className="addFav">
                            <AddFavorite/>
                        </div>
                    </div>
                )) : 
                <div className="">
                    <div className="">
                        No movies to show ...
                    </div>
                </div>
            }
        </>
    );
};

export default MovieList;
