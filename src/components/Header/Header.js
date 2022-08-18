import React from 'react';
// import { useState } from 'react';
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

  return (
    <><div className="center">
          <h1 className='welcome'>WELCOME</h1>
      </div>
      <div className="search-container">
         <input className='i-search' type="text" value={props.value} onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder="Type to search..." />
         {/* <button className='btn-search' onClick={() => onSearch(value)}> Search </button> */}
       </div>
    </>
    )}
