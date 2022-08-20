const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedMovies` array in User.js
const movieSchema = new Schema({
  title: 
    {
      type: String,
    },
  
  year: {
    type: String,
    required: true,
  },
  // saved movie id from imdbID
  imdbID: {
    type: String,
    required: true,
  },
  type: {
    type: String

  },
  poster: {
    type: String,
  },
  
});

module.exports = movieSchema;
