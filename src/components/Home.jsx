import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Home = () => {
const apiFunc = ()=>{
    axios.get("https://api.themoviedb.org/3/movie/550?api_key=21d0663bbc75c9da17c494c1a25cf466").then(res=> console.log(res))
}

/* useEffect(() => {
  apiFunc();
}, []) */

apiFunc();


  return (
    <div>
      home
    </div>
  )
}

export default Home
