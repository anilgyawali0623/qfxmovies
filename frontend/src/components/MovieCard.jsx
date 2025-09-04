import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/moviedetails/${movie.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-3">
          <h3 className="font-bold text-lg">{movie.title}</h3>
          <p className="text-sm text-gray-500">{movie.language}</p>
          <p className="text-sm text-gray-500">{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
