import React from "react";

const AddFavorite = () => {
    return (
        //maybe show this as a hover?
        <>
        <div>
            <p>&hearts; Add to Fav</p>
        </div>
        </>
    );
};

export default AddFavorite;

// moved down since it was causing errors
/* <>
    <span className="mr-2">Add to Favorite</span>
    <svg
        width="16"
        height="16" 
        viewBox="0 0 16 16">
        class="bi bi-heart-fill"
        fill='red'
        xmlns="http://www.w3.org/2000/svg"  

        <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" 
            
        />
    </svg>
    <div className="addFav">add movie to favorites</div>
</> */

