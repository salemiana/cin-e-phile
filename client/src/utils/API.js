require('dotenv').config();
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const OMD_KEY = process.env.REACT_APP_OMD_KEY;
const optionsOMD = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': OMD_KEY,
    'X-RapidAPI-Host': `online-movie-database.p.rapidapi.com`
  }
};

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    console.log("Userdata is :" + userData);

    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then((data) => {
      console.log(data);
    })

  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save movie data for a logged in user
  export const saveMovie = (movieData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });
  };
  
  // remove saved movie data for a logged in user
  export const deleteMovie = (movieId, token) => {
    return fetch(`/api/users/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  //get featured movie list
  export const getFeatured = (type) => {
    return fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${TMDB_KEY}`);

  }

  //get movie details
  export const getDetails = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&language=en-US`)
  }

  //get credits
  export const getCredits = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_KEY}&language=en-US`)
  }
  
  // make a search to movies api??????????
  // http://www.omdbapi.com/?i=tt3896198&apikey=2dda8adb
  export const searchMovies = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/multi?api_key=21d0663bbc75c9da17c494c1a25cf466&language=en-US&query=${query}&page=1&include_adult=false`);
  };