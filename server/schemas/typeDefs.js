const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    user(_id: ID!): User
    movie: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(input: movieInput): User
    removeMovie(movieId: ID!): User
  }
  type User {
    _id: ID
    username: String
    email: String
    savedMovies: [Movie]
  }
  type Movie {
    title: String
    year: String
    imdbID: String
    type: String
    poster: String
  }
  input movieInput {
    title: String
    year: String
    imdbID: String
    type: String
    poster: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;