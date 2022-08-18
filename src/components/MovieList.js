import React from "react";
import AddFavourite from "./AddFavourites";
// import favouriteComponent from ./AddFavourite

const MovieList = (props) => {
    //  const favouriteComponent = props.favouritesComponent;
     console.log  (props)
    return (
        <>
            { props.movies.length ?
            props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => props.handleFavouritesClick()}
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        <AddFavourite />
                    </div>
                </div>
            )) : 
                <div className="image-container d-flex justify-content-start m-3">
                 
                    <div                  
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        No movies to show ...
                    </div>
                </div>
            }
        </>

    );
};

export default MovieList;
