import React from 'react';
import { useState} from "react";
import './Header.css'


export default function Header(props) {
 const [keyWord, setKeyword] = useState('');

  const handleSubmit = (event) => {
   event.preventDefault();
   console.log("I was clicked");

   props.setFeatured(false);
   props.setSearchValue(keyWord)
  }

  return (
    <><div className="center">
          <h1 className='welcome'>WELCOME</h1>
      </div>
      <div className="search-container">
         <form className = "searchBar" onSubmit ={handleSubmit}>
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
