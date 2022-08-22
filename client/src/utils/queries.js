import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedMovies {
        title
        year
        imdbID
        type
        poster
      }
    }
  }
`;
