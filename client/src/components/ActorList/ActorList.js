import React, {useEffect } from "react";

const ActorList = (props) => {
    const {actors} = props;
    const filter = actors.filter(actor => actor.profile_path!=null);
    
    return (
        <>
        {filter.length ?
            filter.map((actor) => (   
                <div key= {actor.id} className="actor-card">
                    <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt='actor'></img>
                </div>
            )) : 
            <div className="">
                <div className="">
                    No actors to show ...
                </div>
            </div>
        }
        </>
    );
};

export default ActorList;