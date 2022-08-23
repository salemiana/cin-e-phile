import React, { useState, useEffect } from "react";
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
import Footer from "./components/Footer/Footer";
import AddFavorite from "./components/AddFavorite";
import Featured from "./components/Featured/Featured";
import SearchList from "./components/SearchList/SearchList";
 import RemoveFavorite from './components/RemoveFavorite';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";


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

  useEffect(() => {
    console.log(featured);
    if(featured){
      console.log("in featured");
      setList(<Featured></Featured>);
    }
    else{
      console.log("featured is false");
      setList(<SearchList searchValue ={searchValue} setSearchValue = {setSearchValue}/>);
    }
  }, [featured,searchValue])

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
        <div id="header-bg">
          <Navbar featured ={featured} setFeatured ={setFeatured}/>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} featured = {featured} setFeatured = {setFeatured}/>
        </div>
        {/* movie content */}
          {showList}
        <Footer />
      </div>
    </ApolloProvider >
  );
};

export default App;