import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [videoKey, setVideoKey] = useState();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  //const API_KEY = "21d0663bbc75c9da17c494c1a25cf466";
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage = "https://intranet.birmingham.ac.uk/as/libraryservices/library/libraries-and-opening-hours/our-collections/av-material-films-documentaries-and-music.aspx";
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div className="container py-5">
      <h1 className="text-center">{movieDetails?.title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                movieDetails?.poster_path
                  ? baseImageUrl + movieDetails?.poster_path
                  : defaultImage
              } />
          </div>
        </div>
      </div>
    </div>
  )
};

