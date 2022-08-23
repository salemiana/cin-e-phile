import React from 'react';
import Sorting from '../Sorting/Sorting';
import MovieList from '../MovieList';


// import "./App.css";


class Movie extends React.Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
      <Sorting />
      <MovieList />
      </>
        );
  }
}
export default Movie;