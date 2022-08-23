import React from "react";
import AddFavorite from "../AddFavorite";
import {getDetails, getCredits} from '../../utils/API';
// import FavoriteComponent from "./AddFavorite"

const MovieList = (props) => {

    const handleClick = (e) =>{
        //do a fetch to get movie details of movie clicked
        console.log("id is " +e.target.id);
        fetchDetails(e.target.id)
    }

    async function fetchDetails(id){
        try{
            //call api 'getDetails" 
            const response = await getDetails(id);
            if(!response.ok)
                throw new Error('something went wrong!');
            const movieDetails = await response.json();

            const results = await getCredits(id);
            if(!results.ok)
                throw new Error('something went wrong!');
            const creditList = await results.json();

            console.log(movieDetails);
            console.log(creditList);

        }catch(err){
            console.log(err);
        }
    }

    // const FavoriteComponent = props.favoritesComponent;
    const {movies} = props;
    const filter = movies.filter(movie => movie.poster_path!=null);
    return (
        <>
            {filter.length ?
                filter.map((movie) => (   
                    <div key= {movie.id} className="movie-card">
                         <img id={movie.id} onClick ={handleClick} src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='movie'></img>
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
