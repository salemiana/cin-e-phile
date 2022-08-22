const Featured = () => {
  const [featured, setFeatured] = useState([true]);
  const [movies, setmovies] = useState([]);
  const [shows, setShows] = useState([]);

  //changes the movies contents
  useEffect(() => {
    //when a search hasn't been entered yet
    async function fetchData(){
        try{
            const response = await getFeatured("movie");
            if(!response.ok)
            throw new Error('something went wrong!');

            const f_movie = await response.json();
            console.log(f_movie);
            setmovies(f_movie.results);
        }catch(err){
            console.log(err);
        }
        try{
            const response = await getFeatured("tv");
            if(!response.ok)
            throw new Error('something went wrong!');

            const f_tv = await response.json();
            console.log(f_tv);
            setShows(f_tv.results);
        }catch(err){
            console.log(err);
        }
    }
    fetchData();
  },)

  
}