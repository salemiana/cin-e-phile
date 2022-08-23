import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Movie from "./components/Movie/Movie"
import Footer from "./components/Footer/Footer";
import AddFavorite from "./components/AddFavorite";
import Featured from "./components/Featured/Featured";
import SearchList from "./components/SearchList/SearchList";
import RemoveFavorite from './components/RemoveFavorite';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Signup from "./components/Signup";
import Login from "./components/Login";
import MovieCard from "./components/MovieCard";

/**************APOLLO Section ******************** */
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

library.add(fab);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
/**************************************************** */

const App = () => {
  const [favorites, setfavorites] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [featured, setFeatured] = useState([true]);
  const [showList, setList] = useState(<featured></featured>)
  const [user, setLoginUser] = useState({});

  useEffect(() => {
    console.log(featured);
    if (featured) {
      console.log("in featured");
      setList(<Featured></Featured>);
    }
    else {
      console.log("featured is false");
      setList(<SearchList searchValue={searchValue} setSearchValue={setSearchValue} />);
    }
  }, [featured, searchValue])

  // useEffect(() => {
  //   const moviefavorites = JSON.parse(
  //     localStorage.getItem('movie-app2-favorites')
  //   )|| []

  //   setfavorites(moviefavorites);
  // }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app2-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (Movie) => {
    const newFavoriteList = [...AddFavorite, Movie];
    setfavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavorites = (movie) => {
    const newFavoriteList = AddFavorite.filter(
      (Favorite) => Favorite.imdbID !== movie.imdbID
    );

    setfavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Fragment>
            <Navbar featured={featured} setFeatured={setFeatured} />
            <Routes>
              {/* <Route exact path='/' element={<Home/>}/> */}

              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/movie' element={<Movie />} />

              <Header searchValue={searchValue} setSearchValue={setSearchValue} featured={featured} setFeatured={setFeatured} />
              {showList}
            </Routes>
          </Fragment>
        </Router>
      </div>
      <Footer />
    </ApolloProvider >
  );
};

export default App;