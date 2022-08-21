import React from 'react';
import { useState} from "react";
import './Sorting.css';

const Sorting = () => {
    const [sortBy, setSort] = useState('titleAscend');
    const [actor, setActor] = useState('');
    const [genre, setGenre] = useState('action');
    const [streaming, setStreaming] = useState('netflix');
    const [rating, setRating] = useState('10');

    //handle to refresh the search results
    const handleSubmit = (e) =>{
        // prevent the page being refreshed
        e.preventDefault();
        //create an object with all the sorting information
        const submitSearch = {sortBy, actor, genre, streaming, rating};
        getInfo(submitSearch);
        // console.log(submitSearch);
    }

    //get the api call using the quieries passed
    const getInfo = (submitSearch) => {
        // get an api call
        // returning an array  with movie list
    }

    return (
        <div id = "searchMovieList">
            {/* when the button is clicked, run the funtion handleSubmit */}
            <form className = "sorting" onSubmit = {handleSubmit}>
                {/* Sort by */}
                <div className = "sortBox">
                    <label>Sort By</label>
                    <select 
                    className = ""
                    id="sortingBy"
                    value = {sortBy}
                    onChange = {(e) => setSort(e.target.value)}
                    >
                        <option value = "titleAscend">Title (A-Z) </option>
                        <option value = "titleDescend">Title (Z-A) </option>
                        <option value = "ratingAscend">Rating Ascending</option>
                        <option value = "ratingDescend">Rating Descending</option>
                    </select> 
                </div>
                {/* Filter by Genre */}
                <div className = "sortBox">
                    <label className = "">Genre:</label>
                    <select className = ""
                    id="genre"
                    value ={genre}
                    onChange = {(e) => setGenre(e.target.value)}
                    >
                        <option value = "action">Action</option>
                        <option value = "adventure">Adventure</option>
                        <option value = "animation">Animation</option>
                        <option value = "comedy">Comedy</option>
                        <option value = "crime">Crime</option>
                        <option value = "documentary">Documentary</option>
                        <option value = "drama">Drama</option>
                        <option value = "family">Family</option>
                        <option value = "history">History</option>
                        <option value = "horror">Horror</option>
                        <option value = "music">Music</option>
                        <option value = "mystery">Mystery</option>
                        <option value = "romance">Romance</option>
                        <option value = "scienceFic">Science Fiction</option>
                        <option value = "tvMovie">TV Movie</option>
                        <option value = "thriller">Thriller</option>
                        <option value = "war">War</option>
                        <option value = "western">Western</option>
                    </select>
                </div>
                {/* filter by Actor name */}
                <div className = "sortBox">
                    <label className = "">Actor</label>
                    <input 
                        type = "text" 
                        required
                        value = {actor}
                        placeholder = "Dwayne Johnson, ect ..."
                        onChange = {(e) => setActor(e.target.value.toLowerCase())}
                    />
                </div>
                {/* filter by streaming */}
                <div className = "sortBox">
                    <label>Streaming</label>
                    <select
                    className = ""
                    id="streaming"
                    value ={streaming}
                    onChange = {(e) => setStreaming(e.target.value)}
                    >
                        <option value = "netflix">Netflix</option>
                        <option value = "amazonPrime">Amazon Prime</option>
                        <option value = "appleTv">Apple Tv</option>
                        <option value = "disneyPlus">Disney Plus</option>
                        <option value = "hulu">Hulu</option>
                        <option value = "hbo">HBO Max</option>
                        <option value = "paramount">Paramount Plus</option>
                        <option value = "peacock">Peacock</option>
                        <option value = "crunchyRoll">CrunchyRoll</option>
                        <option value = "youTube">youTube</option>
                    </select>
                </div>
                {/* Filter by Ratings */}
                <div className = "sortBox">
                    <label>Ratings</label>
                    <select
                    className = ""
                    id="rating"
                    value ={rating}
                    onChange = {(e) => setRating(e.target.value)}
                    >
                        <option value = "10">10</option>
                        <option value = "9">9</option>
                        <option value = "8">8</option>
                        <option value = "7">7</option>
                        <option value = "6">6</option>
                        <option value = "5">5</option>
                        <option value = "4">4</option>
                        <option value = "3">3</option>
                        <option value = "2">2</option>
                        <option value = "1">1</option>
                    </select>
                </div>
                    <button id="updateSearch"> Update Search </button>
            </form>

            
        </div>
    )
}

export default Sorting;
