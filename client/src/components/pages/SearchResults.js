import React, { useState, useEffect } from "react";
import SearchList from '../SearchList/SearchList';


const SearchResults =() => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
        <h1> in search </h1>
        <SearchList searchValue={searchValue} setSearchValue={setSearchValue} />
        </>
    ) ;
};

export default SearchResults;