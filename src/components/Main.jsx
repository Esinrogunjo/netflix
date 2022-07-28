import axios from "axios";
import React, { useEffect, useState } from "react";
import requests, { getMovie } from "../Request";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import Sidebar from "./Sidebar";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState();

  const movie = movies[Math.floor(Math.random() * movies?.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then(({ data }) => setMovies(data.results));
  }, []);

  //     if(movie){
  //  const url = getMovie(movie.id)
  //      axios.get(url).then(({data})=>{
  //   setVideo(data)
  //   console.log(data)
  // })

  // }

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4 flex text-xl">
            <button className="border rounded-md bg-white text-black border-gray-300 py-2 px-5 flex items-center gap-x-2 ">
              <FaPlay />
              Play
            </button>
            <button className="border bg-[#5C5050] rounded-md text-white border-[#5C5050] py-2 px-5 ml-4 flex items-center gap-x-2">
              <img src="/info.svg" />
              More Info
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
