const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    user(_id: ID!): User
    movie: [Movie]
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
    movieCount: Int
    savedMovies: [Movie]
  }
  type Movie {
    title: String
    year: [String]
    id: String
    type: String
    link: String
  }
  input movieInput {
    title: String
    year: [String]
    id: String
    type: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;