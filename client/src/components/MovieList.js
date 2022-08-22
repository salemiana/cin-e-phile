import React from "react";
import AddFavourite from "./AddFavourites";
// import favouriteComponent from "./AddFavourite"

const MovieList = (props) => {
    const favouriteComponent = props.favouritesComponent;
    // console.log(props)
    return (
        <>
            {props.movies.length ?
                props.movies.map((movie) => (   
                    //original code
                    // <div key= {movie.imdbID} className="movie-card">
                    //     <img src={movie.Poster} alt='movie'></img>
                    //     <div
                    //     onClick={() => props.handleFavouritesClick()}
                    //     className="addFav"
                    //     >
                    //         <AddFavourite/>
                    //     </div>
                    // </div>
                    <div key= {movie.id} className="movie-card">
                         <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='movie'></img>
                         <div
                        onClick={() => props.handleFavouritesClick()}
                        className="addFav"
                        >
                            <AddFavourite/>
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
