import React from 'react';
import { useState} from "react";
import './Header.css'


export default function Header(props) {
  // const [value, setValue] = useState("");

  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const onSearch = (searchTerm) => {
  //   setValue(searchTerm);
  //   // our api to fetch the search result
  //   console.log("search ", searchTerm);
  // };
 const [keyWord, setKeyword] = useState('');

  const handleSubmit = (event) => {
   event.preventDefault();
   props.setSearchValue(keyWord)
  }

  return (
    <><div className="center">
          <h1 className='welcome'>WELCOME</h1>
      </div>
      <div className="search-container">
         <form className = "searchBar" onSubmit ={handleSubmit}>
            {/* <input className='i-search' type="text" value={props.value} onChange={(event)=> props.setSearchValue(event.target.value)} */}
            <input 
               className='i-search' 
               type="text"
               value={keyWord}
               onChange = {(e) => setKeyword(e.target.value)}
               placeholder="Type to search..." />
            <button className='btn-search'> Search </button>
         </form>
       </div>
    </>
    )}
