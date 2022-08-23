import React from "react";

const IMG_API = ""https://api.themoviedb.org/3/trending/movie/week?api_key=21d0663bbc75c9da17c494c1a25cf466;
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  let navigate = useNavigate();
  // const setVoteClass = (vote) => {
  //   if (vote >= 8) {
  //     return "green";
  //   } else if (vote >= 6) {
  //     return "orange";
  //   } else {
  //     return "red";
  //   }
  // };

  return (
    <div
      className="movie"
      onClick={
        () =>
          currentUser
            ? navigate("details/" + id)
            : toastWarnNotify("Please log in to see details")
        // : alert("Please log in to see details")
      }
    >
      <img src={poster_path ? IMG_API + poster_path : defaultImage} alt="" />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span
            className={`tag ${
              vote_average >= 8 ? "green" : vote_average >= 6 ? "orange" : "red"
            }`}
          >
            {vote_average}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;