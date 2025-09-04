import React from "react";
import MovieCard from "../components/MovieCard";
import poster  from "../assets/poster.jpg"
const movies = [
  { id: 1, title: "Movie 1", language: "English", genre: "Action", poster },
  { id: 2, title: "Movie 2", language: "Hindi", genre: "Comedy", poster },
  { id: 3, title: "Movie 3", language: "Nepali", genre: "Drama", poster },
  { id: 4, title: "Movie 4", language: "English", genre: "Thriller", poster },
  { id: 5, title: "Movie 5", language: "Hindi", genre: "Horror", poster},
  { id: 6, title: "Movie 6", language: "English", genre: "Action", poster },
  // Add more movies here
];

function MoviesList() {
  return (
    <div className="p-6 mt-7">
      {/* Top heading */}
      <h2 className="text-2xl font-bold mb-5">Movies / Upcoming Movies</h2>

      {/* Movie grid */}
      <div className="grid grid-cols-5 gap-5 px-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
